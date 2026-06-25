export function generateYamlFrontMatter({ name, semanticColors, allColors, typography, spacing, rounded, components }) {
  const lines = ['---'];
  lines.push('version: alpha');
  lines.push(`name: "${name}"`);

  // Colors — semantic roles first, then all named colors
  lines.push('colors:');
  if (semanticColors) {
    for (const [role, hex] of Object.entries(semanticColors)) {
      lines.push(`  ${role}: "${hex}"`);
    }
  }
  // All named colors as additional tokens
  const semanticHexes = new Set(Object.values(semanticColors || {}));
  const extraColors = (allColors || []).filter(c => c.hex && !semanticHexes.has(c.hex));
  for (const c of extraColors) {
    const tokenName = slugifyToken(c.name);
    lines.push(`  ${tokenName}: "${c.hex}"`);
  }

  // Typography
  if (typography && (typography.families.length > 0 || typography.scale.length > 0)) {
    lines.push('typography:');
    const familyMap = {};
    for (const f of typography.families) {
      familyMap[f.role.toLowerCase()] = f.family;
    }

    const scaleEntries = typography.scale.length > 0 ? typography.scale : [];
    for (const entry of scaleEntries) {
      const key = slugifyToken(entry.role);
      lines.push(`  ${key}:`);
      // Determine font family from role
      const isDisplay = /display|hero|system|tournament|chapter/i.test(entry.role);
      const isMono = /code|terminal|mono/i.test(entry.role);
      const family = isMono ? (familyMap.monospace || familyMap.code || familyMap.terminal)
        : isDisplay ? (familyMap.display || familyMap.primary)
        : (familyMap.body || familyMap.primary);
      if (family) lines.push(`    fontFamily: "${family}"`);
      lines.push(`    fontSize: ${entry.fontSize}`);
      lines.push(`    fontWeight: ${entry.fontWeight}`);
    }

    // If no scale entries but we have families, list them
    if (scaleEntries.length === 0) {
      for (const f of typography.families) {
        const key = slugifyToken(f.role);
        lines.push(`  ${key}:`);
        lines.push(`    fontFamily: "${f.family}"`);
      }
    }
  }

  // Rounded
  if (rounded && Object.keys(rounded).length > 0) {
    lines.push('rounded:');
    for (const [key, val] of Object.entries(rounded)) {
      lines.push(`  ${key}: ${val}`);
    }
  }

  // Spacing
  if (spacing && Object.keys(spacing).length > 0) {
    lines.push('spacing:');
    for (const [key, val] of Object.entries(spacing)) {
      lines.push(`  ${key}: ${val}`);
    }
  }

  // Components with token references
  if (components && Object.keys(components).length > 0) {
    lines.push('components:');
    const colorLookup = buildColorLookup(semanticColors, allColors);

    for (const [compName, props] of Object.entries(components)) {
      lines.push(`  ${compName}:`);
      for (const [prop, val] of Object.entries(props)) {
        const mappedProp = mapPropName(prop);
        const mappedVal = replaceWithTokenRef(val, colorLookup);
        lines.push(`    ${mappedProp}: ${mappedVal}`);
      }
    }
  }

  lines.push('---');
  return lines.join('\n');
}

function slugifyToken(name) {
  return name
    .replace(/[^\w\s-/]/g, '')
    .trim()
    .toLowerCase()
    .replace(/[\s/]+/g, '-')
    .replace(/-+/g, '-');
}

function mapPropName(prop) {
  const map = {
    'background': 'backgroundColor',
    'color': 'textColor',
    'border-radius': 'rounded',
    'padding': 'padding',
    'border': 'border',
    'box-shadow': 'shadow',
    'font': 'typography',
    'hover': 'hover',
    'focus': 'focus',
    'active': 'active',
    'backdrop-filter': 'backdropFilter',
    'clip-path': 'clipPath',
    'height': 'height',
    'width': 'width',
  };
  return map[prop] || prop;
}

function buildColorLookup(semanticColors, allColors) {
  const lookup = {};
  // Semantic colors get priority for token references
  if (semanticColors) {
    for (const [role, hex] of Object.entries(semanticColors)) {
      lookup[hex.toUpperCase()] = `{colors.${role}}`;
    }
  }
  // Named colors as fallback
  if (allColors) {
    for (const c of allColors) {
      if (c.hex) {
        const key = c.hex.toUpperCase();
        if (!lookup[key]) {
          lookup[key] = `{colors.${slugifyToken(c.name)}}`;
        }
      }
    }
  }
  return lookup;
}

function replaceWithTokenRef(value, colorLookup) {
  if (!value) return '""';
  // Try to replace HEX values with token references
  let result = value;
  const hexPattern = /#[0-9A-Fa-f]{6}/g;
  const matches = value.match(hexPattern);
  if (matches) {
    for (const hex of matches) {
      const ref = colorLookup[hex.toUpperCase()];
      if (ref) {
        result = result.replace(hex, ref);
      }
    }
  }
  return `"${result}"`;
}
