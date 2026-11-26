// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Turns blockquotes that start with **Tip:** or **Watch out:** into styled callouts.
function rehypeCallouts() {
  const text = (n) => (n.type === 'text' ? n.value : (n.children || []).map(text).join(''));
  const walk = (node) => {
    (node.children || []).forEach(walk);
    if (node.type === 'element' && node.tagName === 'blockquote') {
      const p = (node.children || []).find((c) => c.type === 'element' && c.tagName === 'p');
      const label = p ? text(p).trim().toLowerCase() : '';
      const kind = label.startsWith('tip') ? 'tip' : label.startsWith('watch out') ? 'warn' : null;
      if (kind) {
        node.properties = { ...(node.properties || {}), className: ['callout', `callout-${kind}`] };
      }
    }
  };
  return (tree) => walk(tree);
}

// https://astro.build/config
export default defineConfig({
  site: 'https://officeaiguide.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  markdown: { rehypePlugins: [rehypeCallouts] },
  vite: {
    plugins: [tailwindcss()],
  },
});
