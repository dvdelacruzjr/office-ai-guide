export type PromptTool = 'Claude' | 'Grok Bot' | 'ChatGPT' | 'Multi-Tool';
export type PromptDepartment =
  | 'Operations'
  | 'Sales & Client Comms'
  | 'Finance & Admin'
  | 'Leadership & Strategy'
  | 'HR & People'
  | 'Marketing';

export interface PromptItem {
  id: string;
  title: string;
  tool: PromptTool;
  department: PromptDepartment;
  summary: string;
  prompt: string;
}

export const prompts: PromptItem[] = [
  {
    id: 'claude-sop-from-notes',
    title: 'Turn messy process notes into a clean SOP',
    tool: 'Claude',
    department: 'Operations',
    summary: 'Convert rough bullets into a numbered SOP with owners and exceptions.',
    prompt: `You are an operations writer for a small business. Turn the rough notes below into a clear Standard Operating Procedure.

Requirements:
- Title, purpose, and when to use
- Roles/owners
- Numbered steps with decision points
- Common exceptions and escalation path
- Checklist at the end
- Plain business English; no jargon

Process notes:
[PASTE ROUGH NOTES]

Audience: [ROLE / TEAM]
Tone: practical and concise`,
  },
  {
    id: 'claude-vendor-contract-review',
    title: 'Vendor contract risk review',
    tool: 'Claude',
    department: 'Finance & Admin',
    summary: 'Flag renewal traps, liability, data terms, and negotiation points.',
    prompt: `Review this vendor agreement for a [COMPANY TYPE] with about [EMPLOYEE COUNT] employees.

Produce:
1) Executive summary (5 bullets)
2) High / medium / low risks with clause references
3) Missing protections we should request
4) Negotiation talking points for a business owner
5) Questions to ask the vendor before signing

Do not invent legal advice. Flag uncertainty clearly. Redact or ignore any personal data in the text.

Contract text:
[PASTE CONTRACT OR KEY CLAUSES]`,
  },
  {
    id: 'claude-client-email-rewrite',
    title: 'Rewrite a tense client email',
    tool: 'Claude',
    department: 'Sales & Client Comms',
    summary: 'Keep firm boundaries while sounding calm and professional.',
    prompt: `Rewrite the draft email below for a client relationship that is currently [RELATIONSHIP STATUS: good / strained / new].

Goals:
- Acknowledge the issue
- State what we can and cannot do
- Offer a clear next step and timeline
- Keep the tone calm, respectful, and firm

Constraints:
- Max 180 words
- No blame language
- Preserve factual commitments already made

Draft:
[PASTE DRAFT]

Facts that must stay accurate:
[LIST FACTS]`,
  },
  {
    id: 'claude-meeting-brief',
    title: 'Prep a leadership meeting brief',
    tool: 'Claude',
    department: 'Leadership & Strategy',
    summary: 'Compress updates into decisions, risks, and asks.',
    prompt: `Create a one-page leadership brief from the notes below for a [30/45/60]-minute meeting.

Structure:
- Context (3 bullets)
- Decisions needed today
- Options with tradeoffs
- Risks / blockers
- Recommended ask
- Parking lot

Notes:
[PASTE NOTES]
Decision owner: [NAME]
Desired outcome: [OUTCOME]`,
  },
  {
    id: 'grok-inbox-triage',
    title: 'Daily inbox triage plan',
    tool: 'Grok Bot',
    department: 'Operations',
    summary: 'Sort messages into act / defer / delegate / archive with draft replies.',
    prompt: `Act as my office operations assistant. Triage these emails for [ROLE] at [COMPANY].

For each email provide:
- Priority (P1/P2/P3)
- Bucket: Act today / Defer / Delegate / Archive
- 1-sentence reason
- Suggested next action
- If a reply is needed, draft a 4-sentence reply

Rules:
- Protect confidential details; summarize instead of quoting sensitive numbers when possible
- Prefer batching low-priority items

Emails:
[PASTE EMAIL SUMMARIES]`,
  },
  {
    id: 'grok-calendar-routine',
    title: 'Build a recurring calendar triage routine',
    tool: 'Grok Bot',
    department: 'Leadership & Strategy',
    summary: 'Design a weekly focus block and meeting hygiene checklist.',
    prompt: `Design a recurring calendar triage routine for a business owner who works [HOURS/WEEK] and has meetings mostly on [DAYS].

Deliver:
1) A weekly cadence (Mon–Fri) with time blocks
2) Meeting acceptance rules
3) Prep/follow-up checklist
4) What Grok Bot should remind me about each morning
5) What to decline or shorten by default

Constraints:
- Protect 2 deep-work blocks weekly
- Keep total meeting load under [HOURS] hours/week if possible
Current calendar pain points:
[DESCRIBE PAIN POINTS]`,
  },
  {
    id: 'grok-research-digest',
    title: 'Competitor / market research digest',
    tool: 'Grok Bot',
    department: 'Sales & Client Comms',
    summary: 'Turn scattered research into a shareable weekly digest.',
    prompt: `Create a weekly research digest for our [INDUSTRY] team.

Sources / notes:
[PASTE LINKS, NOTES, OR BULLETS]

Output format:
- Top 5 takeaways for sales and ops
- What changed vs last week (assume unknown if not provided)
- Opportunities to test
- Risks to watch
- Suggested internal Slack update (120 words)

Audience: office team adopting AI, not engineers.`,
  },
  {
    id: 'grok-ops-standup',
    title: 'Ops standup synthesizer',
    tool: 'Grok Bot',
    department: 'Operations',
    summary: 'Turn scattered team updates into blockers and owners.',
    prompt: `Synthesize these operational updates into a 10-minute standup agenda.

Updates:
[PASTE UPDATES]

Produce:
- Wins (max 3)
- Blockers with owners
- Decisions needed
- Today's priorities by person
- Follow-ups with due dates

Keep it scannable for a busy office team.`,
  },
  {
    id: 'chatgpt-meeting-actions',
    title: 'Meeting notes → action plan',
    tool: 'ChatGPT',
    department: 'Operations',
    summary: 'Convert transcript-style notes into owners, due dates, and risks.',
    prompt: `Convert the meeting notes below into a structured action plan.

Meeting: [TITLE]
Date: [DATE]
Attendees: [NAMES]

Output:
1) Decisions made
2) Action items table: Task | Owner | Due date | Dependency | Status
3) Open questions
4) Risks / assumptions
5) Email summary to send to attendees (120 words)

Notes:
[PASTE NOTES]

If owner or due date is missing, mark as TBD and propose a sensible default.`,
  },
  {
    id: 'chatgpt-client-proposal',
    title: 'Draft a client proposal outline',
    tool: 'ChatGPT',
    department: 'Sales & Client Comms',
    summary: 'Build a proposal skeleton with scope, timeline, and pricing narrative.',
    prompt: `Draft a client proposal outline for:
Client: [CLIENT NAME]
Service: [SERVICE]
Budget range: [BUDGET]
Timeline: [TIMELINE]
Success metric: [METRIC]

Include sections:
- Problem & stakes
- Proposed approach
- Deliverables
- Timeline milestones
- Investment options (Good / Better / Best)
- Assumptions & exclusions
- Next step CTA

Tone: confident, clear, non-hype. Keep total draft under 700 words.`,
  },
  {
    id: 'chatgpt-spreadsheet-formulas',
    title: 'Spreadsheet formula builder',
    tool: 'ChatGPT',
    department: 'Finance & Admin',
    summary: 'Explain formulas for pipeline, cashflow, or staffing sheets.',
    prompt: `I use [Google Sheets / Excel]. Help me build formulas for this workbook goal:

Goal: [DESCRIBE GOAL]
Columns: [LIST COLUMNS AND SAMPLE VALUES]
I need:
- Exact formulas
- Where to place them
- Edge cases (blanks, errors, duplicates)
- A plain-English explanation for non-finance staff
- A short QA checklist

Do not invent data. Ask clarifying questions only if blocked.`,
  },
  {
    id: 'chatgpt-policy-draft',
    title: 'Internal AI use policy starter',
    tool: 'ChatGPT',
    department: 'Leadership & Strategy',
    summary: 'Draft a one-page staff policy for safe AI use at work.',
    prompt: `Draft a one-page internal AI acceptable-use policy for [COMPANY NAME], a [INDUSTRY] business with [EMPLOYEE COUNT] staff.

Cover:
- Allowed tools (Claude, Grok Bot, ChatGPT) and preferred plans
- Data that must never be pasted into consumer tools
- Review requirements before sending AI-assisted client work
- Attribution / disclosure expectations
- Escalation path for incidents
- 8-bullet staff checklist

Tone: practical, non-legalistic, shareable in Slack or a handbook.
Company specifics:
[ADD ANY RULES YOU ALREADY HAVE]`,
  },
  {
    id: 'claude-pdf-decision-brief',
    title: 'Long PDF to decision brief',
    tool: 'Claude',
    department: 'Leadership & Strategy',
    summary: 'Summarize a long report around one decision, with page references.',
    prompt: `Read the report below and write a one-page decision brief.

Decision I need to make: [DECISION]
Reader: [ROLE]

Include: 5 key points with section or page references, exact numbers quoted from the text, vague or unsupported claims, questions to ask the author, and what the document does not cover.
Do not add outside facts. Say so if something is unclear.

Report:
[PASTE TEXT OR ATTACH PDF]`,
  },
  {
    id: 'claude-onboarding-pack',
    title: 'New-hire onboarding pack',
    tool: 'Claude',
    department: 'HR & People',
    summary: 'Welcome email, first-week checklist, and 30-60-90 plan from your notes.',
    prompt: `Create onboarding materials for a [ROLE TITLE] joining the [TEAM] team, reporting to [MANAGER FIRST NAME].

Tools they will use: [TOOL LIST]
How we work: [PASTE NOTES]

Produce: a welcome email under 200 words, a day-by-day first-week checklist, a 30-60-90 day plan with measurable outcomes, and questions for the manager's week-one conversation.
Use only the information above and mark assumptions with [CONFIRM].`,
  },
  {
    id: 'claude-policy-plain-english',
    title: 'Rewrite a policy in plain English',
    tool: 'Claude',
    department: 'HR & People',
    summary: 'Make an internal policy readable without changing its meaning.',
    prompt: `Rewrite the policy below in plain English for [AUDIENCE]. Keep the meaning identical.

Output:
1. The rewritten policy at an 8th-grade reading level
2. A list of any sentences where the original was ambiguous
3. Five Q&As staff are likely to ask

Do not add new rules. Flag anything that may need review by HR or legal counsel.

Policy:
[PASTE POLICY]`,
  },
  {
    id: 'claude-faq-from-tickets',
    title: 'Build an FAQ from common questions',
    tool: 'Claude',
    department: 'Sales & Client Comms',
    summary: 'Turn a list of recurring customer questions into a clean FAQ.',
    prompt: `Below is a list of questions our customers ask often (anonymized). Group them into themes and write an FAQ page.

For each answer use only these facts: [PASTE POLICIES AND FACTS]
Tone: [TONE]
Mark any question where you lack the facts as [NEEDS ANSWER].

Questions:
[PASTE QUESTIONS]`,
  },
  {
    id: 'grok-meeting-prep',
    title: 'Pre-meeting brief',
    tool: 'Grok Bot',
    department: 'Sales & Client Comms',
    summary: 'One-screen prep for your next client call, with sources.',
    prompt: `Prepare a pre-meeting brief for my next call with [CLIENT OR PROSPECT].

Use the calendar invite, my recent threads with this contact, and public information about [COMPANY] from recent months (cite sources).

Include: purpose, attendees and roles, where we left off, open items and risks, two questions to ask. Keep it under 250 words. Say so if you cannot find something. Do not send anything.`,
  },
  {
    id: 'grok-sales-followup-drafts',
    title: 'Weekly follow-up drafts',
    tool: 'Grok Bot',
    department: 'Sales & Client Comms',
    summary: 'Find quotes with no reply and draft follow-ups for your review.',
    prompt: `Review my sent email from the last [NUMBER] days. Find threads where I sent a quote or proposal and got no reply in [NUMBER] business days.

For each: contact and company, date and subject, a follow-up draft in my voice under 90 words that adds something useful, and a suggested next step.
Drafts only. Never send. Skip existing clients and anyone who asked me to pause.`,
  },
  {
    id: 'grok-weekly-ops-digest',
    title: 'Friday wrap-up digest',
    tool: 'Grok Bot',
    department: 'Operations',
    summary: 'Summarize the week\'s open loops from your inbox and calendar.',
    prompt: `Every Friday at [TIME], review my calendar and email from this week and send me a digest with:
- Commitments I made and their due dates
- Threads waiting on me
- Threads waiting on others
- Meetings that need follow-up
- Three priorities for next week

Keep it to one screen. Do not reply to or send anything on my behalf.`,
  },
  {
    id: 'grok-competitor-watch',
    title: 'Monthly competitor watch',
    tool: 'Grok Bot',
    department: 'Leadership & Strategy',
    summary: 'A sourced monthly scan of public competitor news.',
    prompt: `Once a month, scan public news and websites for these competitors: [COMPETITOR LIST].

Report: new products or pricing changes announced publicly, leadership or partnership news, and anything that affects [OUR MARKET].
Cite a source link for every item. Separate confirmed facts from rumor. Keep it under 300 words.`,
  },
  {
    id: 'chatgpt-customer-reply',
    title: 'Customer email reply draft',
    tool: 'ChatGPT',
    department: 'Sales & Client Comms',
    summary: 'Draft a short, policy-accurate reply with an escalation flag.',
    prompt: `You draft replies for [COMPANY NAME], a [TYPE OF BUSINESS].
Tone: [TONE NOTES]
Policies (use only these): [PASTE POLICIES]

Customer email (names and account numbers removed):
[PASTE EMAIL]

Write a reply under 150 words that answers directly, acknowledges their situation once, and gives a clear next step. Add ESCALATE with a reason if a manager should handle it.`,
  },
  {
    id: 'chatgpt-sheet-cleanup',
    title: 'Spreadsheet cleanup plan',
    tool: 'ChatGPT',
    department: 'Operations',
    summary: 'Diagnose messy columns and get formulas to fix them.',
    prompt: `I use [EXCEL / GOOGLE SHEETS]. Here is a sample of fake rows.
Columns: [COLUMN NAMES]
Sample:
[PASTE SAMPLE]

List the data quality problems, give a formula or menu method for each with a one-sentence explanation, show how to flag duplicates for review instead of deleting, and give a verification checklist.`,
  },
  {
    id: 'chatgpt-social-calendar',
    title: 'Four-week social calendar',
    tool: 'ChatGPT',
    department: 'Marketing',
    summary: 'Calendar plus first-week drafts from your real topics.',
    prompt: `Create a 4-week social calendar for [COMPANY], a [BUSINESS TYPE] serving [AUDIENCE].
Voice: [VOICE]
Platforms: [PLATFORMS]
Posts per week: [NUMBER]
Topics and facts to use (do not invent stories, statistics, or testimonials): [TOPICS]

Output a table (week, day, platform, topic, format, goal) and full drafts for week one with a hook and call to action.`,
  },
  {
    id: 'chatgpt-job-description',
    title: 'Job description draft',
    tool: 'ChatGPT',
    department: 'HR & People',
    summary: 'Draft a clear, inclusive job posting from role facts.',
    prompt: `Write a job description for a [ROLE TITLE] at [COMPANY], a [BUSINESS TYPE].

Responsibilities: [LIST]
Must-have skills: [LIST]
Nice-to-have: [LIST]
Work arrangement: [ONSITE / HYBRID / REMOTE]
Pay range and benefits (only if I provide them): [DETAILS]

Use plain, inclusive language, avoid unnecessary requirements, and keep it under 400 words. Mark missing details as [CONFIRM].`,
  },
  {
    id: 'multi-ai-policy',
    title: 'Team AI usage policy draft',
    tool: 'Multi-Tool',
    department: 'Leadership & Strategy',
    summary: 'One-page acceptable-use policy with data tiers.',
    prompt: `Draft a one-page AI acceptable-use policy for [COMPANY], a [INDUSTRY] business with [EMPLOYEE COUNT] staff.

Approved tools and plans: [LIST]
Data tiers (never enter / approved tools only / fine anywhere): [PASTE TIERS]
Known obligations: [CONTRACTS OR INDUSTRY RULES]

Include purpose, data rules, human review before external use, how to report mistakes, and who to ask. Under 500 words, plain language. List your assumptions and open questions.`,
  },
  {
    id: 'multi-tool-chooser',
    title: 'Which AI tool for this task',
    tool: 'Multi-Tool',
    department: 'Operations',
    summary: 'Think through task type, data sensitivity, and review needs.',
    prompt: `Help me decide which AI tool to use for this task: [TASK IN ONE SENTENCE].

Tools available to us: [LIST]
Data involved: [DATA DESCRIPTION, NO REAL DETAILS]

Classify the task, tell me what to check about data rules before starting, suggest what to test side by side with sample content, and propose a human review step. Do not claim product features you are unsure about; tell me what to verify.`,
  },
  {
    id: 'multi-paid-ai-workspace',
    title: 'Pick a paid AI workspace to pilot',
    tool: 'Multi-Tool',
    department: 'Leadership & Strategy',
    summary: 'Score Copilot, ChatGPT Business, and Claude Team against one real task.',
    prompt: `We are choosing a paid AI workspace for a [INDUSTRY] office of [EMPLOYEE COUNT] people.
The work files live in [MICROSOFT 365 / GOOGLE / MOSTLY LOCAL FILES / MIXED].
The task we will pilot: [ONE TASK].
Tools we are allowed to try: [LIST].

Do not recommend a product by brand. Ask what we should verify on each vendor’s current pricing and admin page, list the data we should not upload during a pilot, and give a 5-item scorecard we can fill in after we run the same sample task in each tool.`,
  },
  {
    id: 'multi-ai-seat-budget',
    title: 'Draft an AI seat budget',
    tool: 'Multi-Tool',
    department: 'Finance & Admin',
    summary: 'Turn published seat prices into a first-year cost with a usage caveat.',
    prompt: `Build a first-year seat budget worksheet for [COMPANY].

Plans we are comparing (use only prices I paste; do not look up or invent prices): [PASTE PRICES AND BILLING PERIOD]
People who need a seat in month one: [ROLES AND COUNT]
People who can wait: [ROLES]
Usage charges the vendor bills on top of the seat: [PASTE WHAT THE PRICING PAGE SAYS, OR "UNKNOWN"]

Output a table: plan, seats, billing period, seat cost, unknown usage, total we can defend. List questions to confirm on the vendor’s pricing page. Do not invent a discount.`,
  },
  {
    id: 'multi-meeting-notes-rule',
    title: 'Write a meeting note-taker rule',
    tool: 'Multi-Tool',
    department: 'Operations',
    summary: 'When a recap or a meeting bot is allowed, and when it is not.',
    prompt: `Draft a one-page meeting-notes rule for [COMPANY].

Meetings we have: [TEAMS ONLY / TEAMS + ZOOM / MOSTLY IN PERSON].
Tool we are allowed to pilot: [TEAMS RECAP / FIREFLIES / OTTER / NONE YET].
Meetings that are out of scope: [HR / LEGAL / CLIENT NAMES].

Include: when the note-taker may join, what the host says at the start, where the notes are stored, who reviews action items before they are assigned, and how someone opts out. Under 350 words. Mark anything you are unsure about with [CONFIRM].`,
  },
  {
    id: 'multi-recap-to-actions',
    title: 'Turn a recap into an action list',
    tool: 'Multi-Tool',
    department: 'Operations',
    summary: 'Extract decisions and TBD owners without inventing either.',
    prompt: `Turn these meeting notes into an action list.

Meeting: [TITLE]
Date: [DATE]

Output:
- Decisions, only if the notes state them
- Table: task, suggested owner, due date or TBD, dependency
- Points the notes do not support

If a name or date is missing, write TBD. Do not invent decisions.

Notes:
[PASTE REDACTED NOTES]`,
  },
  {
    id: 'multi-bot-disclosure',
    title: 'Say a note-taker is in the meeting',
    tool: 'Multi-Tool',
    department: 'Sales & Client Comms',
    summary: 'A short script the host can read when a bot or recap is on.',
    prompt: `Write a 40-word script a meeting host can read at the start.

Tool recording or transcribing: [TOOL NAME]
Where notes will be stored: [PLACE]
Who can ask to pause it: [ROLE]

Plain language. No joke. Do not claim the recording is deleted unless I said that it is.`,
  },
  {
    id: 'multi-automation-volume',
    title: 'Estimate an automation’s task or credit use',
    tool: 'Multi-Tool',
    department: 'Operations',
    summary: 'Count steps in a Zapier or Make scenario, including an AI draft.',
    prompt: `We want to automate this office process:
Trigger: [WHAT STARTS IT]
Steps today, done by hand: [LIST]
Volume: about [NUMBER] times per month
Apps involved: [LIST]
Where a human must still approve: [STEP]

Tell me how many Zapier tasks and how many Make credits a single run might use if one of the steps is an AI draft. State what you are assuming. List the steps that should not run unattended. Do not invent prices.`,
  },
  {
    id: 'multi-automation-failure-test',
    title: 'Test an AI automation before it emails anyone',
    tool: 'Multi-Tool',
    department: 'Operations',
    summary: 'Find duplicate sends and invented facts in a draft-only flow.',
    prompt: `Review this automation design for a small office. Do not write code.

Trigger: [TRIGGER]
Step: AI writes a draft from the incoming record
Step: save the draft in [WHERE A PERSON REVIEWS IT]
Human: sends or files the result

List ways this can send the wrong text, duplicate a reply, or leak sample data into a real mailbox. Suggest a test checklist of 5 checks using fake rows only.`,
  },
  {
    id: 'multi-ai-admin-checklist',
    title: 'AI admin settings to verify',
    tool: 'Multi-Tool',
    department: 'Leadership & Strategy',
    summary: 'A checklist that says VERIFY when a setting is not certain.',
    prompt: `We are writing an admin checklist for these approved AI plans: [LIST PLANS].

For each plan, list only the settings an admin should verify: who can invite users, whether model training is off by default, whether staff feedback can send chats to the vendor, and where extra usage is billed. If you are not sure a setting exists, write VERIFY IN ADMIN rather than describing it.`,
  },
  {
    id: 'multi-staff-data-rule',
    title: 'Half-page staff data rule',
    tool: 'Multi-Tool',
    department: 'Leadership & Strategy',
    summary: 'A short rule for what can go into an approved AI tool.',
    prompt: `Turn this into a half-page staff rule.

Approved tools: [LIST]
Never enter: [LIST]
Needs a named reviewer before it is sent outside the company: [LIST]
Who to tell if someone pastes the wrong file: [ROLE]

Plain language, under 200 words. Do not add legal citations.`,
  },
];

export function highlightPlaceholders(text: string): string {
  return text.replace(/\[([^\]]+)\]/g, '<span class="fill-blank">[$1]</span>');
}
