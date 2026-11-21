---
title: Turn rough process notes into a team SOP with Claude
summary: Capture how work actually gets done, then use Claude to produce a clear, owner-ready standard operating procedure your office can follow.
tool: Claude
department: Operations
difficulty: Beginner
timeToComplete: 25–35 min
publishedDate: 2026-10-12
featured: true
---

## Why this matters

Most small businesses run on tribal knowledge: “ask Maria,” Slack threads, and half-finished Google Docs. Claude is especially strong at turning messy notes into structured documents with a calm, precise tone—ideal for SOPs that people will actually read.

## What you’ll need

- Rough notes from a process owner (bullets, voice memo transcript, or screenshots of an old checklist)
- Claude (Team/Enterprise preferred for internal processes)
- 20 minutes with the person who actually does the work

## Step-by-step

### 1. Capture the real process (not the ideal one)

Ask the owner:

- When does this process start?
- What systems do you touch?
- Where do things usually break?
- Who approves exceptions?

Paste those notes into a working doc. Do **not** sanitize yet—Claude needs the mess.

### 2. Paste this prompt into Claude

Copy the prompt below, fill the brackets, and send it with your notes.

```
You are an operations writer for a small business. Turn the rough notes below into a clear Standard Operating Procedure.

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
Tone: practical and concise
```

### 3. Stress-test the draft with the owner

Ask Claude a follow-up:

```
Challenge this SOP. List ambiguous steps, missing decision criteria, and places where a new hire would get stuck. Then revise the SOP to fix those gaps.
```

Have the process owner mark anything that is still wrong in the real world.

### 4. Publish for the team

Move the final SOP into your handbook / Notion / Drive. Add:

- Owner name
- Last reviewed date
- Link to related templates

## Example scenario

Illustrative scenario: a founder records a voice note on how client onboarding works. Claude turns the transcript into a short SOP with a kickoff checklist, and the person who does the work corrects what's wrong.

## Team Safety & Privacy Note

- Prefer **Claude Team/Enterprise** for internal process docs.
- Redact client names, account numbers, salaries, and credentials before pasting notes into a consumer chat.
- Do not paste full CRM exports. Summarize with fake placeholders when testing prompts.
- Treat the SOP as internal; review before sharing with contractors.
