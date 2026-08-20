# Trail — Master Feature & Concept List

Pure reference list, current as of the latest widget review. Organized for wireframing use — resolved items you can build from directly, open items flagged so they don't get accidentally locked in without a decision.

---

## Mechanism decisions (locked)
- Boundary detection: AI-inferred, with manual override
- Capture style: event-triggered, not continuous passive recording
- Restore UI: widget (confidence/size-tiered), not spatial/graph/pure conversational
- Architecture: federated tagging — file watcher + browser extension + quick-capture pop-up, all feeding one data model
- Calendar: read-only — both an overlay lens and manual day-by-day browsing
- Quick-capture: partially conversational — silent by default, escalates only for genuine ambiguity
- Sharing: individual-first, but shareable context threads confirmed as core
- Build target: staged demo (partially functional, widget + extension work independently)

---

## Core features (v1)
1. Local file-watching
2. Browser tab capture (extension)
3. Screenshot/link capture, tied to active mode
4. Quick-capture side pop-up — write/paste anytime, from widget or extension
5. Slash-command vocabulary: `/reg` (structured entry), `/mode [name]` (attach directly), `/later` (flag for resurfacing)
6. AI-inferred mode ("Trail") grouping with confidence score
7. "Why grouped" explanation — **Contextualise / View context**
8. One-click restore — **Revive workspace**
9. Manual mode override: start / end / rename / merge / split
10. Sensitivity-aware auto-exclusion (banking, passwords, private messages never captured)
11. Filing history — every capture's destination visible, permanently browsable/traceable
12. Widget with confidence/size-tier visual grammar
13. Calendar manual day-by-day browsing
14. Nudge-based relevance feedback loop (user corrections deprioritize things over time)
15. Shareable context thread (sender selects/shares → recipient views → downloads or saves into own instance)
16. Continuity signal — "has been active X days running" (resolved: informational, not gamified)
17. Persistent capture indicator (trust signal — the circle icon; role assigned, visual treatment still generic)
18. Two widget states: transient continuity card + persistent "where you left off" card
19. Item-level access inside the widget (individual files/tabs listed and tappable, not just an aggregate restore)
20. Status microcopy on every capture (e.g. "auto-logged today") — visibility without asking anything

## Strong candidates (named, not yet core)
- Mode decay/fading for dormant Trails over time
- Tree-structured search + proactive resurfacing ("here's what you referenced last time")

## Deferred (v2, named on purpose)
- Semantic (non-keyword) search across modes
- Auto-proposed mode boundaries ("wrap up this Trail?")
- Cross-device continuity
- Spatial-desktop or associative-graph alternate restore views

## Cut (decided against, don't reintroduce by accident)
- Calendar write access
- Continuous passive screen/audio recording

---

## Interaction flows (specified)

**Quick-capture:**
Capture → lightweight visual acknowledgment (no question) → confident? file silently + show destination inline : ask shortest possible question (one-tap) → resolved? done : allowed to escalate (not capped, but not default) → always logged to filing history

**Restore:**
Open widget → see mode by confidence/size tier → tap → see explanation + contents → Revive workspace → files/tabs open

**Share** *(partially specified — open items below)*:
Sender selects mode → shares → recipient views (read-only preview) → downloads or saves into own Trail instance

---

## Copy/naming decided so far
- Project name: **Trail** (singular Trail = one mode; plural context = the product itself)
- Persistent widget header: *"Where You left off…"*
- Persistent widget subtext: *"Trail since [date] · auto-logged today"*
- Continuity signal copy: *"has been active [X] days running"*
- Primary restore CTA: **Revive workspace**
- Explanation CTA: **Contextualise** (persistent widget) / **View context** (transient widget)
- Example Trail naming convention: *"Client A — Proposal"*

## Visual grammar — established fragments
- Primary action = solid/filled button; secondary action = muted/gray text-style button
- Which action is primary changes by widget state (Revive = primary when persistent; View context = primary when transient) — deliberate, not inconsistent
- Week-strip: filled colored circle = active day; unfilled = not yet — **broken/gap-day treatment still undecided**
- Item chips (files/tabs) shown with type icon + label
- Color direction: mint/green as primary accent (from latest mockup — not yet confirmed against a full mood board)
- Solid vs. faded/cropped item = **meaning still undecided** (confidence? overflow? recency?)

---

## Still open — resolve before or during wireframing
- Overflow behavior for a mode with more than 2 items (crop / scroll / "+N more")
- Circle avatar's actual visual differentiation (role assigned — capture indicator — but still a blank placeholder)
- Broken-streak / gap-day visual treatment (does a missed day look different from a not-yet day)
- Widget switching logic between the two states — transient-then-settles / cycling / conditional-on-milestone — asked twice, not yet answered
- Sender-side sharing flow: what's shown/configured before sending, does sensitivity-exclusion get reviewed
- Recipient-side sharing flow: what happens to their existing modes when they save a shared Trail in
- Manual override flows (merge/split) — not yet designed as actual UI, only listed as a capability
- Sensitivity auto-exclusion UX — how a user knows something was excluded vs. it silently never appearing
- Mobile scope — real design or explicit "desktop-only, future work"
- Widget/pop-up UI framework — extend existing tray-app framework, or new build

---

## Design principles (for reference while structuring)
1. Silence is the default; speaking is earned
2. Stay quiet by default, but never leave something unresolved — and never leave a filing decision invisible
3. Capture should never require a defined context to exist first
4. Restore the state, not just the files
5. Capture should be visible, not covert