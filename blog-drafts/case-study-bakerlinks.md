---
title: "Building BakerLinks"
description: "From a basic link-in-bio assignment to a personal publishing tool with flexible styling, Markdown About content, and link-click analytics."
pubDate: 2026-06-02
updatedDate: 2026-11-07
tags:
  - nextjs
  - supabase
  - publishing
  - product
---

BakerLinks began as a basic link-in-bio assignment in self-guided learning material. It has become a public application for bringing projects, social links, and an introduction together at one address. I’m currently its only user, and my page points to the diverse web prototypes I’ve been creating.

Development is a collaboration between Codex and me. I provide direction, make interface and product decisions, and review the results; Codex handles the heavy lifting in code. The interesting story is what we added and the choices behind those additions.

## Making customization approachable

Profile and Style are my favorite parts of BakerLinks. They bring together identity, images, social links, layouts, fonts, and colors. I’m pleased with how much customization the interface offers and how few actions I feel I need to accomplish different tasks. That is my own assessment, not a measured usability result.

I use many applications and frequently encounter friction. Identifying those points and deciding how to resolve them is one of the satisfying parts of building my own tools.

## Preview and public page

The preview adds immediacy and visual appeal to editing. It also presents a different design problem from the standalone public page. The editor needs to help someone assess their choices within a constrained space; the public page needs to present their content as a complete destination. Some of those demands conflict, so the relationship between the two views needs deliberate decisions.

Animated backgrounds added the visual energy I felt was missing. The key boundary was curation: people can upload their own static images, while animated backgrounds come from a provided selection. I let Codex choose the animated options, and those options satisfied my requirements.

## Giving links some context

Adding an optional About tab was another highlight. Links show where to go; About content gives someone space to introduce themselves and explain the work behind those destinations.

Markdown support adds headings, emphasis, lists, and other text formatting. The reviewed implementation keeps this focused on text, with links and images excluded from About content. My own About page discusses the prototypes I’m building and how my work is evolving.

## Getting analytics working

Analytics was a fun database challenge. Lifetime click totals and recent activity charts need different records. The implementation maintains per-link totals alongside dated click events, updating both through one database operation. The dashboard uses them to show totals, comparisons between links, and activity across selectable periods.

These are profile-owner tools. Administrator verification is separate, and directory inclusion combines that verification with the owner’s choice to participate. Click records describe activity; they do not establish wider adoption or benefits for other people.

## What comes next

I’m interested in adding advanced publishing features, including capabilities familiar from other platforms and ideas I haven’t encountered elsewhere. Usefulness for people sharing creative, technical, professional, or personal projects is the direction.

I will probably shift attention to other projects soon, making further development more selective. BakerLinks already has a practical place in my own work as the page where I share what I’m building.

[Visit BakerLinks](https://bakerlinks.com) or [see my page](https://bakerlinks.com/michael). If you have a project to share or a publishing problem to explore, [get in touch through my portfolio](https://michaelbaker.vercel.app/#contact).
