import { hexToRgb, relativeLuminance } from './contrast.mjs';

export function mapSemanticRoles(colors, isDark) {
  const hexColors = colors.filter(c => c.hex);
  if (hexColors.length === 0) return {};

  const withLum = hexColors.map(c => {
    const rgb = hexToRgb(c.hex);
    return { ...c, luminance: rgb ? relativeLuminance(rgb) : 0 };
  });

  const semantic = {};
  const used = new Set();

  // Surface: first background-role color
  const surfaceCandidate = pickFirst(withLum, used,
    c => /background|paper|base|void|canvas|cream|off-white|white|parchment|stone.*white/i.test(nameRole(c)),
    c => !/text|heading|body|accent|cta|link|border|shadow|ghost/i.test(c.name)
  );
  if (surfaceCandidate) {
    semantic.surface = surfaceCandidate.hex;
    used.add(surfaceCandidate.hex);
  }

  // Surface-variant: second background-role color
  const surfaceVariant = pickFirst(withLum, used,
    c => /card|secondary.*surface|aged|elevated|panel|dark\s*surface|raised/i.test(nameRole(c)),
    c => !/text|accent|cta|link|border|heading|primary/i.test(c.name)
  );
  if (surfaceVariant) {
    semantic['surface-variant'] = surfaceVariant.hex;
    used.add(surfaceVariant.hex);
  }

  // On-surface: primary text color (for text ON the surface)
  const textPrimary = pickFirst(withLum, used,
    c => /\btext\s+primary|heading\s+text|\bink\s+black\b|ghost\s+white\b/i.test(c.name) ||
         /^text\s*primary$/i.test(c.name.trim()),
    c => !/background|surface|card|paper|border|shadow|accent|cta|blob|glass/i.test(c.name)
  );
  if (textPrimary) {
    semantic['on-surface'] = textPrimary.hex;
    used.add(textPrimary.hex);
  } else {
    // Fallback: most contrasting color against surface
    if (semantic.surface) {
      const surfaceLum = relativeLuminance(hexToRgb(semantic.surface));
      const sorted = [...withLum]
        .filter(c => !used.has(c.hex))
        .sort((a, b) => Math.abs(b.luminance - surfaceLum) - Math.abs(a.luminance - surfaceLum));
      if (sorted.length > 0) {
        semantic['on-surface'] = sorted[0].hex;
        used.add(sorted[0].hex);
      }
    }
  }

  // Primary: main accent/CTA/interactive color — NOT a background or text color
  const primaryCandidate = pickFirst(withLum, used,
    c => {
      const n = c.name.toLowerCase();
      const r = (c.role || '').toLowerCase();
      // Direct matches: "Primary Purple", "Primary Accent", "Brand Color"
      if (/^primary\b/i.test(c.name) && !/text|background|surface/i.test(c.name)) return true;
      // Role-based: "CTA buttons", "accent", "active states", "links", "interactive"
      if (/\bcta\b|active\s+state|links.*highlight|\binteractive\b|brand.*color/i.test(r)) return true;
      // Name-based: "Accent" as standalone (not "Accent Text" etc.)
      if (/^(?:brand|accent)\b/i.test(c.name) && !/text|background|surface/i.test(c.name)) return true;
      return false;
    },
    c => !/background|surface|paper|text|muted|subtle|ghost|border|divider|blob|glass/i.test(c.name)
  );
  if (primaryCandidate) {
    semantic.primary = primaryCandidate.hex;
    used.add(primaryCandidate.hex);
  } else {
    // Fallback: find the most saturated non-bg, non-text color
    const candidates = withLum.filter(c => !used.has(c.hex));
    const withSat = candidates.map(c => {
      const rgb = hexToRgb(c.hex);
      if (!rgb) return { ...c, saturation: 0 };
      const max = Math.max(...rgb) / 255;
      const min = Math.min(...rgb) / 255;
      const saturation = max === 0 ? 0 : (max - min) / max;
      return { ...c, saturation };
    }).sort((a, b) => b.saturation - a.saturation);

    if (withSat.length > 0 && withSat[0].saturation > 0.2) {
      semantic.primary = withSat[0].hex;
      used.add(withSat[0].hex);
    }
  }

  // On-primary: text color on primary surface
  if (semantic.primary) {
    const rgb = hexToRgb(semantic.primary);
    if (rgb) {
      const lum = relativeLuminance(rgb);
      semantic['on-primary'] = lum > 0.179 ? '#111111' : '#FFFFFF';
    }
  }

  // Accent: secondary interactive color
  const accentCandidate = pickFirst(withLum, used,
    c => /alternative.*accent|secondary.*accent|cyan|highlight|celadon/i.test(nameRole(c)),
    c => !/background|surface|text|muted|ghost|border|subtle|paper|shadow|primary/i.test(c.name)
  );
  if (accentCandidate) {
    semantic.accent = accentCandidate.hex;
    used.add(accentCandidate.hex);
  }

  // Error — must explicitly mention error/danger/alert semantics
  const errorCandidate = pickFirst(withLum, used,
    c => /error|danger|alert\b|alarm/i.test(nameRole(c))
  );
  if (errorCandidate) {
    semantic.error = errorCandidate.hex;
    used.add(errorCandidate.hex);
  }

  // Success
  const successCandidate = pickFirst(withLum, used,
    c => /success/i.test(nameRole(c))
  );
  if (successCandidate) {
    semantic.success = successCandidate.hex;
    used.add(successCandidate.hex);
  }

  // Warning
  const warningCandidate = pickFirst(withLum, used,
    c => /warning/i.test(nameRole(c))
  );
  if (warningCandidate) {
    semantic.warning = warningCandidate.hex;
    used.add(warningCandidate.hex);
  }

  return semantic;
}

function nameRole(c) {
  return (c.name || '') + ' ' + (c.role || '');
}

function pickFirst(colors, usedSet, ...predicates) {
  const candidates = colors.filter(c => c.hex && !usedSet.has(c.hex));
  for (const c of candidates) {
    if (predicates.every(p => p(c))) return c;
  }
  return null;
}
