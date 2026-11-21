---
title: Turn a long PDF report into a one-page decision brief with Claude
summary: Upload or paste a long report, ask Claude for a structured brief with open questions, and verify the key points against the source before anyone acts on it.
tool: Claude
department: Leadership & Strategy
difficulty: Beginner
timeToComplete: 15–25 min
publishedDate: 2026-11-02
featured: true
---

## Why this matters

Owners and managers regularly get 40-page proposals, industry reports, audit write-ups, or board packets and need to decide something by Friday. Claude is well suited to reading long documents closely, but a summary is only useful if it is shaped around a decision and checked against the source.

## What you’ll need

- The PDF (or the relevant text pasted in), cleared for use with your plan. Check your team’s data rules first.
- The decision you actually have to make, in one sentence
- Five minutes to spot-check the output against the original

## Step-by-step

### 1. Write down the decision first

“Summarize this” gives you a generic summary. “Decide whether we renew, renegotiate, or switch” gives you a useful one. Write the decision and who will read the brief.

### 2. Upload the file and send a structured request

If your Claude plan supports file uploads, attach the PDF. If not, paste the sections that matter. Very long documents may not fit in one go; work section by section if Claude tells you it is truncating.

```
Read the attached report and produce a one-page decision brief.

Decision I need to make: [DECISION]
Reader: [ROLE]

Include:
1. The 5 points most relevant to the decision, each with the page or section where it appears
2. Numbers or commitments stated in the document (quote them exactly)
3. Claims that look unsupported or vague
4. Questions I should ask the author or vendor
5. What the document does NOT cover that I would expect it to

Do not add outside facts. If something is unclear, say so instead of guessing.
```

### 3. Ask for the source of every claim

Follow up with: “For each of the five points, give me the exact sentence from the document.” This makes verification fast.

### 4. Spot-check and finish

Open the PDF and confirm the page references and any numbers. Fix anything wrong, then share the brief with the original document linked.

> **Tip:** For recurring reports (monthly financials, quarterly vendor reviews), save your prompt and reuse it so briefs look the same every time.

> **Watch out:** AI summaries can miss a footnote or misread a table. Never act on a number you have not checked in the source.

## Tips

- Ask for a “skeptical reader” pass to surface weak arguments.
- For scanned PDFs, confirm the text was actually read; image-only pages may not be.
- Ask for the brief in the format your team uses (bullets, memo, email).

## Common pitfalls

- Asking for a summary with no decision attached
- Skipping verification of page references and figures
- Uploading documents that contain personal or confidential data your plan is not approved for

## Team Safety & Privacy Note

- Confirm which plan and settings your company has approved before uploading client or financial documents.
- Remove personal data and credentials from documents where you can.
- Treat the brief as a draft; the original document remains the source of truth.
