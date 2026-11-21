import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../config/site';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const guides = (await getCollection('guides')).sort(
    (a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf(),
  );

  return rss({
    title: siteConfig.name,
    description: siteConfig.description,
    site: context.site ?? siteConfig.url,
    items: guides.map((guide) => ({
      title: guide.data.title,
      description: guide.data.summary,
      pubDate: guide.data.publishedDate,
      link: `/guides/${guide.id}/`,
      categories: [guide.data.tool, guide.data.department],
    })),
    customData: `<language>en-us</language>`,
  });
}
