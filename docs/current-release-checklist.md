# Current portfolio release

Updated November 7, 2026. Local release preparation only; this is not a deployment record.

## Scope

- Updated project narratives, roles, screenshots, and card imagery; Sketchlet’s short description now emphasizes evolving timed prompts and drawing at one’s own pace. Supporting case-study context includes tool refinement, practice, recovery, and explicit publication.
- Thirteen listed case studies, twelve with screenshot records, referencing thirty local image assets. The latest pass adds eighteen captures of subpages, palettes, dialogs, course views, rosters, and other detailed interfaces. Mike’s List was excluded from that expansion.
- Making Tools uses a collage workspace; Daily Games uses cards/dice; Mike’s List uses an empty tiki lounge. Movie Database, Fantasy Sports, and Saske use detail/submenu screenshots as their feature images. Source credits are in project-images.md.
- Simplified project browsing: capability chips, search, Recommended/A–Z sorting, clear filters, result counts, empty results, and URL/history persistence. Editorial emphasis and timeline controls removed.
- Case-study gallery label changed to Project views. Existing content normalization, related links, and retired Mike’s List destination handling remain part of the broader local release; inspect the actual Git diff before staging.

## Verification of the latest changes

- [x] Thirty referenced local image assets resolve; current counts verified from project records.
- [x] Eighteen new captures visually reviewed in a contact sheet; descriptive captions and source links recorded.
- [x] Updated project modules imported successfully, with unrelated records preserved during targeted edits.
- [x] Filter logic directly checked for URL round trips, invalid values, combined search/capability, empty results, clearing state, and preserving input order.
- [x] Local browser checks covered capability + search, A–Z, reload, returning from a detail page with Back, empty results, and clearing filters. Desktop and phone controls visually reviewed; no horizontal overflow observed at the checked phone viewport.
- [x] Michael reports the full current test suite passed: npm test.
- [x] Michael reports the current production build passed: npm run build.
- [x] Michael reports git diff --check passed; supplied status/stat output and approved the additional file scope after review.
- [ ] Review final card crops and updated Sketchlet text in the local preview; verify representative galleries at desktop and phone widths.
- [x] Live /api/content inspected: content is null and source is default. No active saved content overrides the deployment; Michael confirms no dashboard edits need preservation.
- [ ] Review and stage only intended source, documentation, tests, and assets; commit and push after checks pass.
- [ ] After deployment, check direct routes, filter URL reloads, image loading, and effective content after dashboard data loads.

Earlier documentation recorded nineteen passing tests and a build on November 7 before subsequent changes. Those earlier results do not validate the latest tree. Michael subsequently reported successful current tests, build, and diff checks. The agent did not run those commands.

## Saved content

Production loads /api/content. Saved narrative fields, card images, and nonempty screenshot arrays can take precedence over defaults. The latest live response was {"content":null,"source":"default"}. The pull script therefore wrote no snapshot. No active saved override requires reconciliation for this release. The API also returns this fallback when storage is unavailable, so this is not proof that no stored document ever existed. Michael confirms nothing from dashboard editing needs preservation.

Michael runs npm run content:pull or exports Download JSON from the dashboard. Compare that snapshot with src/data/projects.js and src/data/profile.js. Preserve intentional edits and reconcile the affected fields; do not reset the whole document from repository defaults. Re-fetch before an authorized dashboard save. Keep snapshots and credentials out of the commit. Dashboard saves are separate from committing/deploying and have not been authorized here.

## Suggested commit message

Refresh project galleries and simplify portfolio browsing
