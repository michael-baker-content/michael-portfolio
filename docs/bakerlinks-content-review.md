# BakerLinks content review

Updated November 7, 2026. Local portfolio content update; no dashboard save or publication performed.

## Editorial decisions

- Replace the older competitive-opportunity framing with usefulness for people sharing creative, technical, professional, or personal projects.
- Center Profile and Style, preview/public-page tradeoffs, curated motion, Markdown About content, and analytics.
- Michael is currently the only user. Interface simplicity and fewer actions are his assessment, not measured usability results.
- Codex handles the heavy lifting in code; Michael provides direction, decisions, and review. Keep this attribution concise.
- Static-image uploads are owner customization; animated backgrounds are curated. Do not invent a detailed art-direction history.
- Separate owner publishing and analytics from administrator-only verification.
- Future features remain goals. Michael expects to shift attention to other projects soon.

## Placement and content model

Repository order is now Sketchlet (10), BakerLinks (15), BakerParks (20), Bakerversity (40). BakerLinks moves to second and BakerParks to third. In a subsequent requested selection change, Bakerversity replaces Making Tools in the first four; Making Tools moves to priority 80 and remains listed as supporting work. Bakerversity is featured. BakerLinks retains its supporting stage; priority controls order independently.

The live content endpoint returned content: null and source: default during discovery. Live card and case-study copy matched the previous repository copy. This response does not establish that no dashboard content has ever been saved. Saved fields can override defaults, so recheck the endpoint before any eventual publication. Do not change merge behavior to force this copy over dashboard edits.

## Evidence and limits

Reviewed the portfolio content model, rendering components, and owner dashboard; the local BakerLinks README and relevant customization, preview, About, analytics, and admin source; and the public portfolio and BakerLinks pages.

- Live profile: https://bakerlinks.com/michael — project links, About content, video-background attribution, and pause control were visible.
- Local BakerLinks source: C:/Users/Michael/Documents/Apps/BakerLinks, confirmed by Michael as the current checkout.
- Local preview source uses sample links and a schematic About view. Do not claim exact parity with the public profile.
- Selectable animated-background implementation was not found in that checkout, despite motion being visible live. Curation and upload boundaries come from Michael’s account; do not invent technical implementation details.
- Analytics SQL maintains link totals and dated events in one operation. The owner dashboard provides totals and 7/30/90-day activity. Source inspection does not establish production parity or measured impact.
- About source supports Markdown text formatting and sanitizes displayed HTML. Links and images are excluded from the reviewed About implementation.
- Tests were inspected during discovery but not run. The user prefers to run terminal commands.

## Screenshot plan

No new screenshots have been created or added. The existing stock card image is retained until a real capture is selected.

1. Style panel with its preview: primary candidate for the card image. Check the wide card crop before replacing the stock asset.
2. Profile panel with preview: show the range of owner controls, cropping account details as needed.
3. About editor paired with the published About tab: show actual Markdown and its rendered text.
4. Public profile: show Michael’s actual project collection and selected background.
5. Optional short recording: demonstrate animation and the pause control. A still cannot demonstrate motion.
6. Optional analytics capture: use actual data or its honest empty state; do not manufacture activity.

The current case-study model renders narrative sections as text only. Adding embedded screenshots requires a separately reviewed model/layout extension. Administrator verification screenshots are secondary and must be labeled as administrator-only.

## User-run checks

From the portfolio directory:

- npm test — check content normalization, sanitization, and API behavior.
- npm run build — check that the revised project data builds successfully.
- npm run dev — inspect the homepage, /projects/bakerlinks, and /case-studies at the printed local address, including a narrow viewport.

Ordinary local Vite previews use repository defaults unless content API loading has been enabled. No dashboard save, push, deployment, or publication is authorized by this local update.
