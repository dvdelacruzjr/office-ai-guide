---
title: A secure AI office stack for a small team
summary: A practical stack for using AI at work — a password manager, business access, admin settings on the AI plans, and written data rules — with 1Password and NordLayer as examples, not requirements.
tool: Multi-Tool
department: Leadership & Strategy
difficulty: Intermediate
timeToComplete: 40–50 min
publishedDate: 2026-11-25
featured: false
---

## Why this matters

The chat tool is the visible part. The rest of the stack decides whether a former employee still has the login, whether a personal VPN is the only thing between a laptop and the office, and whether last year’s shared folder is now searchable by an assistant. This guide is a setup order for a small office. It uses 1Password and NordLayer as examples of a business password manager and a business access product. Other products in those categories exist. Nothing here says you must buy these two.

Prices are from the vendors’ pages as of November 2026. Check current pricing.

## What you’ll need

- The list of AI tools people already use
- Whoever can act as admin for Microsoft 365, Google, or both
- An hour where you will not “just try” a new chatbot in the middle of the setup

## Step-by-step

### 1. Put the logins in a password manager the company owns

People reuse the ChatGPT password, store recovery codes in a note on the desktop, or share a login in a chat. A business password manager is the ordinary fix.

[1Password’s business pricing page](https://1password.com/pricing/business) is the source for these USD figures, billed yearly:

- Teams Starter Pack: $24.95 per month ($299.40 per year), including 10 members. Up to 10 more seats can be added. The FAQ lists additional seats at $4.99 per seat per month on annual billing. The plan card also shows $2.49 per user, which is the 10-member pack divided across those members, not a separate unlimited per-user plan.
- Business: $8.99 per user per month billed annually, or $107.88 per user per year. The FAQ states that yearly total directly.

Business is the plan that lists SSO and user provisioning with identity providers including Microsoft Entra ID, Google Workspace, and Okta, plus Watchtower alerts and custom groups. Both plans list AES-256 encryption and SOC 2 Type II. Business includes a 14-day trial on that page. Guest accounts are listed as 5 on the Starter Pack and 20 on Business.

Use it for AI-tool logins, admin accounts, and recovery codes. Do not paste a password into Claude or ChatGPT to “check if it is strong.”

### 2. Treat remote access as a business control

A consumer VPN app on a personal phone is not the same product as a business access service with an admin console. [NordLayer’s pricing page](https://nordlayer.com/pricing/) lists three plans, each with a 5-user minimum, plus a custom plan from 50 users. The prices shown there, per user per month, with a “save” badge for annual billing:

- Lite: $8, shared gateways in 40+ countries, threat blocking, and malware protection included
- Core: $11, and a server with a dedicated IP at an extra $40 per month is required
- Premium: $14, also requiring the dedicated-IP server. The page adds network segmentation, device posture, site-to-site connectivity, and a cloud firewall on top of Core

NordLayer’s FAQ on that page says Lite includes always-on VPN, multi-factor authentication, single sign-on, and activity monitoring, and that Core is the tier that adds virtual private gateways. A second page, [network and browser pricing](https://nordlayer.com/network-and-browser-pricing/), lists higher figures ($9, $13, and $16) for a combined browser product. Read the page that matches the product you are buying. Prices are USD and tax is extra. There is a 14-day money-back guarantee on the pricing page.

If you already have equivalent access control through Microsoft Entra or another identity provider, do not buy a second product just because this guide named one. Write down what you have, then fill the gap.

### 3. Set the AI admin switches you can actually point to

Do this in the admin console, not from a memory of a blog post.

**Microsoft 365 Copilot.** [Microsoft Learn](https://learn.microsoft.com/en-us/copilot/plan/microsoft-365-copilot-privacy) says prompts, responses, and data accessed through Microsoft Graph are not used to train foundation models, and that Copilot only surfaces organizational data the user can already view. Turn on Copilot only after you know which SharePoint sites are shared with “everyone.” Usage-based features are controlled in the Microsoft 365 admin center’s cost management. The Copilot pricing FAQ names Cowork, Code, Autopilot, and the Work IQ APIs as usage-based.

**ChatGPT Business.** OpenAI’s [Business overview](https://help.openai.com/en/articles/8792828-chatgpt-business-overview) says OpenAI will not train on workspace data, and that owners get admin controls, centralized billing, and spend controls. Confirm in workspace settings that you are on Business, not a pile of personal Plus accounts.

**Claude Team.** The [pricing page](https://claude.com/pricing) lists model training as none by default for Team. The [privacy center](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training) says feedback submitted with thumbs up or down can be used for training, and that a Team owner can disable that feedback control. SSO is listed on Team. Domain capture, SCIM, and audit logs are listed on Enterprise in that same comparison. Verify the toggle you care about in the current admin UI.

```
We are writing an admin checklist for these approved AI plans: [LIST PLANS].

For each plan, list only the settings an admin should verify: who can invite users, whether model training is off by default, whether staff feedback can send chats to the vendor, and where extra usage is billed. If you are not sure a setting exists, write VERIFY IN ADMIN rather than describing it.
```

### 4. Write the data rules on one page

Use three buckets, and link them from the [team AI policy guide](/guides/team-ai-usage-policy/):

- Never enter: passwords, payment card numbers, health information, and anything a contract says you cannot upload
- Only in an approved business plan: customer documents, financials, internal strategy
- Fine for a pilot with sample content: public text, generic drafting, fake rows

```
Turn this into a half-page staff rule.

Approved tools: [LIST]
Never enter: [LIST]
Needs a named reviewer before it is sent outside the company: [LIST]
Who to tell if someone pastes the wrong file: [ROLE]

Plain language, under 200 words. Do not add legal citations.
```

### 5. Recover the accounts you forgot

Export a list of AI tools from expense receipts and from a five-minute staff question: “What have you logged into for work?” Move those logins into the company password manager. Remove people who have left. Turn on MFA at the identity provider rather than only inside one chatbot.

> **Tip:** The password manager, the identity provider, and the AI admin role should not all be the same single person with no backup.

> **Watch out:** Buying Copilot or Claude Team does not close an over-shared file library. The assistant will use what the user can already open.

## Example scenario

Example, not a customer story: a 15-person office puts AI logins into 1Password Business, confirms their Microsoft 365 sharing before assigning Copilot seats, and writes a half-page data rule. They look at NordLayer only for the laptops that are not already covered by the identity provider’s access rules. The names are examples of categories. A different password manager or access product can fill the same role.

## Team Safety & Privacy Note

- This guide is not a security audit and not legal advice. Regulated industries have extra duties that a blog post cannot settle.
- Do not upload a real password export, a customer list, or a payroll file to an AI tool to “help write the policy.”
- Vendor prices and feature matrices change. The links above are the check, not a standing quote.
- Revisit admin settings when you add a seat, a connector, or a new note-taker. Connectors pull in more data than the chat box shows.
