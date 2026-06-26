import { readFileSync } from 'fs';

export function parseDesignMd(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const type = filePath.includes('/masters/') ? 'master' : 'style';
  const name = extractName(content);
  const isDark = detectDarkTheme(content);

  return {
    type,
    name,
    isDark,
    colors: parseColors(content),
    typography: parseTypography(content),
    spacing: parseSpacing(content),
    rounded: parseRounded(content),
    components: parseComponents(content),
    originalContent: content,
  };
}

function extractName(content) {
  const m = content.match(/^#\s*Design System:\s*(.+)$/m);
  if (m) return m[1].trim();
  const m2 = content.match(/^#\s*(.+?)(?:\s*Method)?$/m);
  return m2 ? m2[1].trim() : 'Unknown';
}

function detectDarkTheme(content) {
  const section2 = extractSection(content, '2');
  const colorText = section2 || content;

  // Find the first background-role color's HEX
  const bgPatterns = [
    /(?:Primary|Page|Main|Deepest|Deep)\s*(?:page\s*)?background[^`]*`(#[0-9A-Fa-f]{6})`/i,
    /background[^`]*`(#[0-9A-Fa-f]{6})`/i,
    /Background\s*:?\s*(#[0-9A-Fa-f]{6})/,
  ];
  for (const pat of bgPatterns) {
    const m = colorText.match(pat);
    if (m) {
      const hex = m[1].replace('#', '');
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return (r + g + b) / 3 < 100;
    }
  }
  return false;
}

export function parseColors(content) {
  const colors = [];
  const seen = new Set();

  // Pattern 1: - **Name** (`#XXXXXX`): Description
  const p1 = /- \*\*(.+?)\*\*\s*\(`(#[0-9A-Fa-f]{6})`\)\s*:?\s*(.*)/g;
  let m;
  while ((m = p1.exec(content)) !== null) {
    const key = m[2].toUpperCase();
    if (!seen.has(key + m[1])) {
      seen.add(key + m[1]);
      colors.push({ name: m[1].trim(), hex: m[2].toUpperCase(), role: m[3].trim() });
    }
  }

  // Pattern 1b: - **Name**: `#XXXXXX` (colon after name, no parens around hex)
  const p1b = /- \*\*(.+?)\*\*\s*:\s*`(#[0-9A-Fa-f]{6})`\s*(.*)/g;
  while ((m = p1b.exec(content)) !== null) {
    const key = m[2].toUpperCase() + m[1];
    if (!seen.has(key)) {
      seen.add(key);
      colors.push({ name: m[1].trim(), hex: m[2].toUpperCase(), role: m[3].trim() });
    }
  }

  // Pattern 1c: - **Name**: description (#XXXXXX) — hex in parens but not backticks
  const p1c = /- \*\*(.+?)\*\*\s*:\s*([^(#]*?)\(#([0-9A-Fa-f]{6})\b[^)]*\)/g;
  while ((m = p1c.exec(content)) !== null) {
    const hex = '#' + m[3].toUpperCase();
    const key = hex + m[1];
    if (!seen.has(key)) {
      seen.add(key);
      colors.push({ name: m[1].trim(), hex, role: m[2].trim() });
    }
  }

  // Pattern 2: - **Name** (`rgba(...)`): Description — store as-is
  const p2 = /- \*\*(.+?)\*\*\s*\(`(rgba\([^)]+\))`\)\s*:?\s*(.*)/g;
  while ((m = p2.exec(content)) !== null) {
    colors.push({ name: m[1].trim(), hex: null, rgba: m[2], role: m[3].trim() });
  }

  // Pattern 3: code block lines like "Background:   #XXXXXX  description"
  const codeBlocks = content.match(/```(?:text)?\n([\s\S]*?)```/g) || [];
  for (const block of codeBlocks) {
    const inner = block.replace(/```(?:text)?\n?/g, '').replace(/```/g, '');
    const lines = inner.split('\n');
    for (const line of lines) {
      const cm = line.match(/^([A-Za-z][A-Za-z0-9 /\-_()]+?):\s+(#[0-9A-Fa-f]{6})\b\s*(.*)/);
      if (cm) {
        const key = cm[2].toUpperCase() + cm[1].trim();
        if (!seen.has(key)) {
          seen.add(key);
          colors.push({ name: cm[1].trim(), hex: cm[2].toUpperCase(), role: cm[3].trim() });
        }
      }
    }
  }

  // Deduplicate by hex value, keeping the first (Section 2) entry
  const deduped = [];
  const hexSeen = new Set();
  for (const c of colors) {
    const key = (c.hex || c.rgba || '').toUpperCase();
    if (!hexSeen.has(key)) {
      hexSeen.add(key);
      deduped.push(c);
    }
  }
  return deduped;
}

export function parseTypography(content) {
  const typo = { families: [], scale: [] };
  const familyKeys = new Set();

  // 从字体说明段落提取字体族，避免把表格里的字号误判成字体 token。
  const famRegex = /^\s*-\s*\*\*(.+?)\*\*\s*:?\s*`([^`]+)`/gmi;
  let m;
  while ((m = famRegex.exec(content)) !== null) {
    const role = m[1].trim();
    addFamily(typo, familyKeys, role, m[2]);
  }

  // 读取 Section 3 中的 Markdown 表格，并按表头识别 Role/Family/Size/Weight。
  const section3 = extractSection(content, '3');
  if (section3) {
    let pendingHeader = null;
    let activeHeader = null;

    for (const line of section3.split('\n')) {
      if (!/^\s*\|.*\|\s*$/.test(line)) continue;

      const cells = splitTableCells(line);
      if (cells.length < 2) continue;

      if (isSeparatorRow(cells)) {
        activeHeader = pendingHeader ? pendingHeader.map(normalizeHeaderName) : null;
        pendingHeader = null;
        continue;
      }

      if (!activeHeader) {
        pendingHeader = cells;
        continue;
      }

      const roleIndex = findHeaderIndex(activeHeader, ['role', 'token', 'level', 'name']);
      const familyIndex = findHeaderIndex(activeHeader, ['family', 'font', 'font family', 'fontfamily']);
      const sizeIndex = findHeaderIndex(activeHeader, ['size', 'font size', 'fontsize']);
      const weightIndex = findHeaderIndex(activeHeader, ['weight', 'font weight', 'fontweight']);

      if (roleIndex === -1 || sizeIndex === -1) continue;

      const role = cells[roleIndex];
      const fontSize = extractFontSize(cells[sizeIndex]);
      if (!role || !fontSize || /^role$/i.test(role)) continue;

      const fontFamily = familyIndex === -1 ? null : normalizeFontFamily(cells[familyIndex]);
      const fontWeight = weightIndex === -1 ? '400' : extractFontWeight(cells[weightIndex]);

      typo.scale.push({
        role,
        fontFamily,
        fontSize,
        fontWeight,
      });

      if (fontFamily) {
        addFamily(typo, familyKeys, role, fontFamily);
      }
    }
  }

  return typo;
}

function splitTableCells(line) {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map(c => c.trim());
}

function isSeparatorRow(cells) {
  return cells.every(c => /^:?-{3,}:?$/.test(c));
}

function normalizeHeaderName(value) {
  return value.toLowerCase().replace(/[`*_]/g, '').replace(/\s+/g, ' ').trim();
}

function findHeaderIndex(headers, candidates) {
  return headers.findIndex(header => candidates.some(candidate => header === candidate || header.includes(candidate)));
}

function extractFontSize(value) {
  const match = value.match(/(\d+)(?:\s*[–-]\s*\d+)?\s*px/i);
  return match ? `${match[1]}px` : null;
}

function extractFontWeight(value) {
  const match = value.match(/\b(\d{3})\b/);
  return match ? match[1] : '400';
}

function normalizeFontFamily(value) {
  if (!value) return null;
  const clean = value
    .replace(/`/g, '')
    .replace(/\s+or\s+.+$/i, '')
    .replace(/,?\s*fallback:.+$/i, '')
    .trim();
  const first = clean.split(/\s*\/\s*|\s*,\s*/)[0]?.trim();
  if (!first) return null;
  if (/^Cormorant$/i.test(first)) return 'Cormorant Garamond';
  return first;
}

function addFamily(typo, familyKeys, role, rawFamily) {
  const family = normalizeFontFamily(rawFamily);
  if (!family) return;
  const key = `${role.toLowerCase()}::${family.toLowerCase()}`;
  if (familyKeys.has(key)) return;
  familyKeys.add(key);
  typo.families.push({ role, family });
}

export function parseSpacing(content) {
  const spacing = {};
  const section5 = extractSection(content, '5');
  const text = section5 || content;

  const patterns = [
    [/base\s*unit\s*:?\s*(\d+)\s*px/i, 'base'],
    [/card\s*(?:internal\s*)?padding\s*:?\s*(\d+)\s*px/i, 'card-padding'],
    [/card\s*gap\s*[^:]*:?\s*(\d+)\s*(?:–|-|px)/i, 'card-gap'],
    [/section\s*padding\s*[^:]*:?\s*(\d+)\s*(?:–|-|px)/i, 'section-padding'],
    [/max\s*(?:content\s*)?width\s*[^:]*:?\s*(\d+)\s*px/i, 'max-width'],
    [/gutter\s*:?\s*(\d+)\s*px/i, 'gutter'],
    [/margin\s*(?:minimum)?\s*[^:]*:?\s*(\d+)\s*px/i, 'margin'],
  ];

  for (const [regex, key] of patterns) {
    const m = text.match(regex);
    if (m) spacing[key] = m[1] + 'px';
  }

  return spacing;
}

export function parseRounded(content) {
  const rounded = {};
  const radiusValues = new Set();

  // Find all border-radius values
  const radiusRegex = /border-radius\s*:?\s*(\d+)px/gi;
  let m;
  while ((m = radiusRegex.exec(content)) !== null) {
    radiusValues.add(parseInt(m[1]));
  }

  const sorted = [...radiusValues].sort((a, b) => a - b);
  if (sorted.length === 0) return { none: '0px' };

  if (sorted.length === 1) {
    if (sorted[0] === 0) return { none: '0px' };
    return { none: '0px', default: sorted[0] + 'px' };
  }

  const scaleNames = ['none', 'sm', 'md', 'lg', 'xl', 'full'];
  let idx = 0;
  for (const v of sorted) {
    if (idx < scaleNames.length) {
      rounded[scaleNames[idx]] = v + 'px';
      idx++;
    }
  }

  return rounded;
}

export function parseComponents(content) {
  const components = {};
  const section4 = extractSection(content, '4');
  if (!section4) return components;

  // Split by ### headings to find component blocks
  const parts = section4.split(/^### /m).filter(Boolean);
  for (const part of parts) {
    const nameMatch = part.match(/^(.+?)(?:\s*\(.*\))?\s*\n/);
    if (!nameMatch) continue;

    const rawName = nameMatch[1].trim();
    const componentName = slugify(rawName);

    // Find code blocks within this component section
    const codeMatch = part.match(/```[\s\S]*?\n([\s\S]*?)```/);
    if (!codeMatch) continue;

    const props = {};
    const lines = codeMatch[1].split('\n');
    for (const line of lines) {
      const propMatch = line.match(/^\s*([a-z][a-z-]*)\s*:\s*(.+)/i);
      if (propMatch) {
        const key = propMatch[1].trim().toLowerCase();
        const val = propMatch[2].trim();
        if (['background', 'color', 'padding', 'border', 'border-radius',
             'box-shadow', 'font', 'hover', 'focus', 'active', 'backdrop-filter',
             'clip-path', 'height', 'width'].includes(key)) {
          props[key] = val;
        }
      }
    }

    if (Object.keys(props).length > 0) {
      components[componentName] = props;
    }
  }

  return components;
}

function extractSection(content, sectionNum) {
  const regex = new RegExp(`## ${sectionNum}\\.\\s+[^\\n]+\\n([\\s\\S]*?)(?=## \\d+\\.|$)`);
  const m = content.match(regex);
  return m ? m[1] : null;
}

function slugify(name) {
  return name
    .replace(/[（(].*?[）)]/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}
