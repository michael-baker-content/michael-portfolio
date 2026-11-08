# Current content release

Prepared November 7, 2026. This checklist covers the current local changes; it is not a deployment record.

## Release scope

- Revised project narratives, roles, status, and next steps.
- Twelve local screenshot assets used across eleven listed case studies, with captions, capture dates, and source-page links.
- Screenshot-aware project cards and a screenshot section on detail pages.
- Related project links, screenshot sanitization, and fallback behavior that prevents older saved stock images from replacing repository screenshots.
- Removal of the retired Mike's List application destination, including from legacy saved content.
- Editorial groundwork in `docs/portfolio-improvement-plan.md`.

## Checks

- [x] Automated suite passes: 19 tests on November 7, 2026.
- [x] Production build passes on November 7, 2026.
- [x] All local image references resolve: twelve assets, 859,445 bytes total. Screenshot records contain alternative text, captions, source links, and capture dates; project slugs are unique.
- [x] `git diff --check` passes.
- [ ] Visually confirm each screenshot matches its caption and source page.
- [ ] Review homepage cards and all screenshot-bearing detail pages at desktop and phone widths; check image readability, navigation, and keyboard focus.
- [ ] Compare saved production content with repository defaults before treating the new copy as published.
- [ ] Review the final diff and ensure only intended source, documentation, tests, and image assets are included.
- [ ] Commit and push the reviewed changes.
- [ ] After deployment, verify home, Experience, the case-study index, and the four opening project pages, including a reload on a direct project route.

## Saved-content check

Production loads content from `/api/content`, and saved fields generally override repository defaults. The new screenshot fallback does not replace all saved narrative copy.

The read-only comparison attempt on November 7 failed because this environment could not resolve `michaelbaker.vercel.app`. Production content parity remains unverified.

When reachable, export the saved content with the dashboard's Download JSON action or `npm run content:pull`. Preserve that export before making any dashboard updates. Compare the effective saved content with `src/data/projects.js` and `src/data/profile.js`, especially narrative text, priority, stage, roles, and links. Keep the revised screenshot assets in the deployment even if saved copy will be reconciled separately.

Do not reset the whole saved document just to publish revised project copy: it may contain intentional edits absent from repository defaults. Reconcile the differences explicitly, then verify the deployed pages after their saved content has loaded.

## Suggested commit message

`Refresh portfolio case studies with product screenshots and editorial roadmap`
