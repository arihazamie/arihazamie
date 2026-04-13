const fs = require('fs');
const d = fs.readdirSync('src/components/ui');
const paks = new Set();
d.forEach(f => {
  if (!f.endsWith('.tsx')) return;
  const c = fs.readFileSync('src/components/ui/' + f, 'utf8');
  const ms = c.matchAll(/from\s+['"]([a-zA-Z0-9@-][^'"]*)['"]/g);
  for (const m of ms) {
    if (!m[1].startsWith('@/') && !m[1].startsWith('.')) {
      paks.add(m[1]);
    }
  }
});
console.log(Array.from(paks));
