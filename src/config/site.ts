/**
 * Central brand & site configuration.
 * Rename the product, swap the domain, or rewire the newsletter form from this file alone.
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
    { label: 'Guides', href: '/guides' },
    { label: 'Prompt Library', href: '/prompts' },
    { label: 'Compare Tools', href: '/tools' },
  ],
  tools: [
    {
      id: 'claude',
      name: 'Claude',
      short: 'Claude',
      accent: 'claude',
      summary:
        'Best for careful reading, long documents, SOPs, and contracts where tone and accuracy matter.',
      href: '/guides?tool=Claude',
    },
    {
      id: 'grok-bot',
      name: 'Grok Bot',
      short: 'Grok Bot',
      accent: 'grok',
      summary:
        'Best for inbox triage, calendar routines, research digests, and agent-style recurring office workflows.',
      href: '/guides?tool=Grok+Bot',
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      short: 'ChatGPT',
      accent: 'chatgpt',
      summary:
        'Best for structured drafts, meeting action plans, proposals, and spreadsheet formula help.',
      href: '/guides?tool=ChatGPT',
    },
  ] as const,
  newsletter: {
    heading: 'Get one practical AI playbook each week',
    blurb:
      'Short, office-ready workflows for Claude, Grok Bot, and ChatGPT. No hype—just things your team can try Monday morning.',
    placeholder: 'you@company.com',
    buttonLabel: 'Join the list',
    successMessage: 'You’re on the list. Watch for a playbook next week.',
    // Wire this endpoint to Buttondown, ConvertKit, Resend, Mailchimp, etc.
    formAction: '#newsletter',
    formMethod: 'POST' as const,
  },
  social: {
    twitter: '',
    linkedin: '',
  },
} as const;

export type SiteToolId = (typeof siteConfig.tools)[number]['id'];
