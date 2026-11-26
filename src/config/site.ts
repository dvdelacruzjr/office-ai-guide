/**
 * Central brand & site configuration.
 * Rename the product or swap the domain from this file.
 */
export const siteConfig = {
  name: 'Office AI Guide',
  tagline: 'Practical AI playbooks for business owners and office teams',
  description:
    'Hype-free guides, step-by-step playbooks, and a copyable prompt library for Claude, Grok Bot, and ChatGPT—built for real office work.',
  url: 'https://officeaiguide.com',
  author: 'Office AI Guide Editorial',
  email: 'hello@officeaiguide.com',
  nav: [
    { label: 'Guides', href: '/guides/' },
    { label: 'Prompt Library', href: '/prompts/' },
    { label: 'Compare Tools', href: '/tools/' },
  ],
  legal: [
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'Privacy', href: '/privacy/' },
    { label: 'Terms', href: '/terms/' },
    { label: 'Affiliate disclosure', href: '/affiliate-disclosure/' },
  ],
  tools: [
    {
      id: 'claude',
      name: 'Claude',
      short: 'Claude',
      accent: 'claude',
      summary:
        'Best for careful reading, long documents, SOPs, and contracts where tone and accuracy matter.',
      href: '/guides/?tool=Claude',
    },
    {
      id: 'grok-bot',
      name: 'Grok Bot',
      short: 'Grok Bot',
      accent: 'grok',
      summary:
        'Best for inbox triage, calendar routines, research digests, and agent-style recurring office workflows.',
      href: '/guides/?tool=Grok+Bot',
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      short: 'ChatGPT',
      accent: 'chatgpt',
      summary:
        'Best for structured drafts, meeting action plans, proposals, and spreadsheet formula help.',
      href: '/guides/?tool=ChatGPT',
    },
  ] as const,
  newsletter: {
    heading: 'Newsletter coming soon',
    blurb:
      'Email updates are not open yet. New guides are published on the site, and you can follow them with the RSS feed.',
  },
  social: {
    twitter: '',
    linkedin: '',
  },
} as const;

export type SiteToolId = (typeof siteConfig.tools)[number]['id'];
