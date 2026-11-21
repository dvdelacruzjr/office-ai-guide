---
title: Build a new-hire onboarding pack with Claude
summary: Draft a welcome email, a first-week checklist, and a role-specific 30-60-90 plan from your own notes, then have a manager review them before they go out.
tool: Claude
department: HR & People
difficulty: Beginner
timeToComplete: 30–45 min
publishedDate: 2026-11-04
---

## Why this matters

Onboarding documents tend to live in someone’s head or in a stale folder. Claude can turn your rough notes into a consistent pack: a welcome note, a checklist, and a simple plan for the first 90 days. You keep the judgment; Claude does the formatting and first draft.

## What you’ll need

- Notes on how onboarding works today (even a messy list)
- The role title and team, but **not** the new hire’s personal details
- A manager who will review the final documents

## Step-by-step

### 1. Gather the facts Claude cannot know

List your real tools, who the new hire meets, where policies live, and what “good” looks like in month one. Anything you leave out, Claude will either skip or make up, so be explicit.

### 2. Generate the pack

```
You are helping an HR generalist at a small business create onboarding materials.

Role: [ROLE TITLE]
Team: [TEAM]
Manager: [MANAGER FIRST NAME]
Tools they will use: [TOOL LIST]
Key people to meet: [ROLES, NOT FULL PERSONAL DETAILS]
Notes on how we work: [PASTE NOTES]

Create:
1. A warm, concise welcome email (under 200 words)
2. A first-week checklist split by day
3. A 30-60-90 day plan with measurable outcomes
4. A short list of questions the manager should ask in week one

Use only the information above. Mark anything you had to assume with [CONFIRM].
```

### 3. Resolve every [CONFIRM] flag

Search the draft for items Claude marked as assumptions and fix them with real information.

### 4. Check for fairness and legal fit

Ask: “Review these documents for language that could be unclear, exclusionary, or inconsistent with a typical small-business employee handbook.” Then have your HR lead or counsel review anything that touches policy, pay, or benefits.

> **Tip:** Keep a single master onboarding template and ask Claude to adapt it per role, instead of generating a new pack from scratch each time.

> **Watch out:** Do not paste personal employee data, salary details, or background-check results. Use role titles and placeholders.

## Tips

- Ask for a version written for a remote employee if relevant.
- Ask Claude to turn the checklist into a table you can paste into your task tool.
- Reuse the same structure for internal transfers.

## Common pitfalls

- Publishing the draft without a manager read-through
- Letting Claude state policies you have not actually adopted
- Including identifying details about real employees in the prompt

## Team Safety & Privacy Note

- Use role-based placeholders instead of names, addresses, or compensation figures.
- Employment policy and legal requirements vary; have a qualified person review policy-related text.
- Never include credentials in onboarding documents; link to your password manager instructions instead.
