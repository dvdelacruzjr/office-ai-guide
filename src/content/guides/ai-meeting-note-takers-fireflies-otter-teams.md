---
title: "AI meeting note-takers: Fireflies vs Otter vs Microsoft Teams recap"
summary: How Fireflies, Otter, and Microsoft Teams intelligent recap differ on where the bot joins, what license you already have, and what the vendors publish about price.
tool: Multi-Tool
department: Operations
difficulty: Intermediate
timeToComplete: 30–40 min
publishedDate: 2026-11-25
featured: false
---

## Why this matters

Someone on the team has already asked to “just add an AI note-taker.” That can mean a guest bot in Zoom, Google Meet, and Teams, or it can mean a recap that Microsoft already builds when a Teams meeting is transcribed. Those are different products, different bills, and different places the recording lives.

Prices below are from vendor pages as of November 2026. Check current pricing before you buy. This guide does not rank a winner.

## What you’ll need

- The meeting apps you actually use (Teams only, or also Zoom and Google Meet)
- Whether you already pay for Teams Premium or Microsoft Copilot
- A rule for external clients: is a bot allowed in the room?

## Step-by-step

### 1. Check Teams before you add a vendor

[Microsoft Learn](https://learn.microsoft.com/en-us/microsoftteams/intelligent-recap-calls-meetings) says intelligent recap needs a Microsoft 365 subscription that includes Teams (or Teams licensed separately) plus either a Teams Premium license or a Microsoft Copilot license. Transcription has to be turned on. If recording is off, people still get a recap, but without the recording, speakers, topics, and chapters.

The same article lists what shows up on the Recap tab after a meeting: AI notes, recommended tasks, name and speaker markers, chapters, and, with the right license, audio recap and video recap. Audio recap requires a Microsoft Copilot license, not Teams Premium alone. Microsoft marks audio recap as a public preview and says a single audio recap can cover up to eight meetings, stored for 60 days in the user’s OneDrive. Video recap needs a recording and a transcript, and the meeting has to be at least 10 minutes. Video highlights are stored with the meeting recording in OneDrive or SharePoint.

The [Teams Premium](https://www.microsoft.com/en-us/microsoft-teams/premium) page lists the add-on at $10 per user per month, paid yearly, and says it requires a Teams license. Copilot licensing is separate. See the Copilot comparison guide for those prices.

Teams recap is for meetings and calls in your Teams tenant. It is not a bot you send into a customer’s Zoom.

### 2. If the meeting is not in your Teams tenant, compare a note-taker that joins the call

**Fireflies.** The [Fireflies plan article](https://guide.fireflies.ai/articles/3734844560-learn-about-the-fireflies-pricing-plans) lists Free at $0, Pro at $10 per user per month billed annually or $18 billed monthly, Business at $19 billed annually or $29 billed monthly, and Enterprise at $39 per user per month billed annually. The [Business plan article](https://guide.fireflies.ai/articles/2063312779-fireflies-business-tier-pricing-and-features) says that tier includes unlimited transcription and AI summaries, unlimited storage, recordings up to 3 hours, optional 720p video of the meeting screen, multi-language mode, conversation intelligence, user groups, unlimited channels, API access, and integrations it describes as 100+ apps. It also says the plan meets SOC 2 Type II, is certified to ISO/IEC 42001, and handles data in line with GDPR.

AI credits are extra for some features. Fireflies’ billing article says summaries, transcription, and recap emails are not charged in credits, while AskFred, AI Skills, and several other advanced actions are. The Business plan page also says its price excludes AI credit charges for AskFred, AI Skills, custom summaries, and Magic/Keyword Soundbites. Read both pages before you assume “unlimited summaries” covers every AI button in the product.

**Otter.** The [Otter pricing page](https://otter.ai/pricing) describes Basic, Pro, Business, and Enterprise. Basic includes 300 monthly transcription minutes and support for Zoom, Microsoft Teams, and Google Meet. Pro is labeled for individuals and small teams, lists 1,200 in-app recording minutes, and caps meetings at 90 minutes. Business lists unlimited meetings and in-app recordings, meetings up to 4 hours, and admin features including activity logs and usage analytics. Enterprise is custom pricing and lists SSO and SCIM, each marked with a minimum 100-user license, plus HIPAA as an add-on.

The same page shows more than one dollar figure for Pro ($16.99 and $8.49 with an asterisk) and for Business ($30, $24, and $19.99) because monthly, annual, and a first-time-subscriber offer are presented together. The footnote ties the asterisk to a shared pool across transcription types and an offer for first-time subscribers only. Select annual or monthly on the pricing page and read the figure that matches. Do not budget from a screenshot of a single number.

A workspace-size row on that page lists “up to 5 members,” “up to 5 members,” and “up to 25 members” across the plan columns. Confirm which column is Business before you assume a 25-person cap.

### 3. Decide where the recording is allowed to live

| | Teams intelligent recap | Fireflies or Otter |
| --- | --- | --- |
| Joins Zoom and Google Meet | No. It is a Teams feature | Yes. Both vendors list Zoom, Microsoft Teams, and Google Meet |
| License you may already have | Teams Premium or Microsoft Copilot, plus Teams | A separate per-user seat |
| Where Microsoft says the Teams recording lives | OneDrive or SharePoint for the meeting recording | The note-taker’s own cloud, under that vendor’s terms |
| Admin switch | Transcription and recording policies in the Teams admin center | Workspace admin on the Business or Enterprise tier |

> **Tip:** If every meeting that matters is already a Teams meeting inside your tenant, price Teams Premium or Copilot before you add a second note-taker for the same calls.

> **Watch out:** A bot that joins a client’s meeting is visible. Agree in advance when it is allowed, and do not enable it on HR, legal, or medical conversations by default.

### 4. Write the rule, then test one week

```
Draft a one-page meeting-notes rule for [COMPANY].

Meetings we have: [TEAMS ONLY / TEAMS + ZOOM / MOSTLY IN PERSON].
Tool we are allowed to pilot: [TEAMS RECAP / FIREFLIES / OTTER / NONE YET].
Meetings that are out of scope: [HR / LEGAL / CLIENT NAMES].

Include: when the note-taker may join, what the host says at the start, where the notes are stored, who reviews action items before they are assigned, and how someone opts out. Under 350 words. Mark anything you are unsure about with [CONFIRM].
```

Then run one internal meeting with sample content, not a customer call. Compare the notes to what people remember. Assign owners yourself.

### 5. Turn the notes into work

A transcript is not an action list. Pass the recap through a second prompt only after a person deletes anything that should not leave the meeting.

```
Turn these meeting notes into an action list.

Meeting: [TITLE]
Date: [DATE]

Output:
- Decisions, only if the notes state them
- Table: task, suggested owner, due date or TBD, dependency
- Points the notes do not support

If a name or date is missing, write TBD. Do not invent decisions.

Notes:
[PASTE REDACTED NOTES]
```

## Example scenario

Example, not a customer story: an office that meets in Teams three days a week and in a client’s Zoom on Thursdays uses Teams recap for internal meetings and allows a note-taker bot only on the Zoom calls where the client has agreed in the invite.

## Team Safety & Privacy Note

- Tell people a meeting is being transcribed. Microsoft, Fireflies, and Otter all store meeting content in order to show it back to you.
- Keep HR cases, medical details, and credentials out of the pilot.
- Review action items before they are assigned. Recommended tasks from a recap are suggestions.
- Read the vendor’s retention and admin pages before you connect a note-taker to a CRM. Fireflies describes CRM autofill as a review-then-update step, not a silent write.
