const stockImage = (id, alt) => ({
  src: id.startsWith("http") ? id : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`,
  alt,
});

export const projects = [
  {
    slug: "portfolio",
    visibility: "listed",
    stage: "featured",
    priority: 70,
    category: "Portfolio system",
    label: "Portfolio",
    emphasisLabel: "Active",
    title: "This Portfolio",
    description:
      "A case study about evolving the forked 1.0 portfolio into a themed experiment, then folding that experiment back into a more useful 2.0 site.",
    cardImage: stockImage("photo-1497366754035-f200968a6e72", "A desk workspace with a laptop, notebook, and planning materials."),
    detailHref: "/projects/portfolio",
    repoHref: "https://github.com/michael-baker-content/michael-portfolio",
    tone: "gold",
    status: "Portfolio system",
    timeline: "2026",
    role: "Information architecture, creative direction, frontend engineering",
    collaborators: ["Michael Baker", "Codex"],
    tools: ["React", "Vite", "Tailwind", "Structured content"],
    evidence: ["1.0 lineage", "Theme exploration", "2.0 content model"],
    metrics: [
      { label: "Case studies", value: "10+" },
      { label: "Related apps", value: "3" },
      { label: "Content source", value: "Data-driven" },
    ],
    summary:
      "Portfolio Deluxe began as a React/Tailwind fork and became a working content product for presenting projects as evidence. The build tracks the shift from starter-site aesthetics to structured data, filters, admin editing, deployment, and a clearer candidate story.",
    problem:
      "The original template had a useful modern portfolio structure, but it still behaved like a template. The first personalized version proved that the site could carry a distinct visual voice, but it also made the main portfolio feel more like a theme experiment than a durable system for explaining work.",
    outcome:
      "The current site preserves the fork's familiar portfolio promise while adding a richer content model, a filterable case-study index, direct contact, a Taste page, a protected admin dashboard, and a deployment path that can support ongoing edits.",
    decisions: [
      "Preserve the 1.0 portfolio pattern so visitors can still recognize the source lineage: hero, navigation, work, capabilities, projects, and contact.",
      "Move the more theatrical visual experiment into the case-study story so the main site can feel expressive without becoming only a theme demo.",
      "Make project content data-driven so homepage cards, filters, detail pages, and admin edits all rely on the same model.",
      "Separate the homepage pitch from the case-study evidence: the homepage introduces the candidate, while detail pages explain the work.",
      "Use Vercel Blob for editable live content while keeping code defaults as a durable fallback for local development and recovery.",
    ],
    sections: [
      {
        title: "Starting Point",
        body:
          "The fork supplied a strong 1.0 baseline: a recognizable modern portfolio shape, Tailwind styling, responsive navigation, animated polish, project cards, and a contact path. That made it a useful starter, but the content still needed a stronger point of view and a more flexible structure.",
      },
      {
        title: "Theme Experiment",
        body:
          "The first redesign explored a brighter, more theatrical identity. It proved the site could carry a distinct voice, but it also clarified that the main site should not be only an aesthetic experiment. That work now functions as evidence of visual direction rather than the entire brand.",
      },
      {
        title: "Content System",
        body:
          "The 2.0 version is organized around structured content. Each project carries display controls, metadata, links, metrics, decisions, and narrative sections, so homepage cards, filters, project pages, and admin editing all share one model.",
      },
      {
        title: "Backend Editing",
        body:
          "The admin dashboard turns the portfolio into a small content-management workflow. Saved content can live in Vercel Blob, while the code still contains defaults and tests that keep the site safe when backend content is missing or incomplete.",
      },
    ],
    nextSteps: [
      "Add a visual timeline showing the original fork, the themed experiment, and the current 2.0 portfolio system.",
      "Publish a short implementation note on how the admin dashboard, default content, and live Blob content work together.",
      "Turn the fork-to-2.0 process into a reusable adaptation guide for people starting from the same source repo.",
    ],
  },
  {
    slug: "sketchlet",
    visibility: "listed",
    stage: "featured",
    priority: 10,
    category: "Creative tool",
    label: "Case study",
    emphasisLabel: "Active",
    title: "Sketchlet",
    description:
      "A daily drawing playground shaped by practical decisions about draft recovery, touch input, practice, and publication.",
    cardImage: stockImage("photo-1513475382585-d06e58bcb0e0", "Colored pencils arranged for a drawing session."),
    detailHref: "/projects/sketchlet",
    appHref: "https://sketchlet.app",
    repoHref: "https://github.com/michael-baker-content/sketchlet",
    tone: "coral",
    status: "Public site · active development",
    timeline: "October 2026–present",
    role: "Product direction, drawing-tool design, and implementation",
    collaborators: ["Michael Baker"],
    tools: ["HTML", "CSS", "JavaScript", "Canvas API", "Vercel", "Neon", "Clerk"],
    evidence: ["Draft recovery", "Touch input", "Practice canvas", "Explicit publication"],
    metrics: [],
    summary:
      "Sketchlet is a daily drawing playground built around one shared prompt and many possible interpretations. Inspired by the repeatable rhythm of Wordle, it gives people a reason to draw, a place to share their work, and something new to return to tomorrow. The work focuses on making that small creative ritual dependable: preserving an unfinished canvas, adapting tools to touch, and keeping practice, publication, and sharing distinct.",
    problem:
      "A daily drawing game needs expressive tools without asking visitors to learn a professional art application. The tools also need predictable behavior: a finger should not hide the mark, an interrupted session should not lose its work, and saving an image should not accidentally publish it.",
    outcome:
      "Sketchlet is a public drawing site with a daily prompt, canvas tools, a gallery, and a published drawing-tool guide with access to free draw. The implementation includes date-specific draft recovery and separate download, submission, and sharing actions. Optional sign-in is publicly advertised; full account recovery still needs production verification. Group experiences remain in development.",
    decisions: [
      "Keep each draft attached to its prompt date and distinguish a fresh visit, an unfinished drawing, and a completed submission.",
      "Offset finger input so the mark remains visible, while keeping mouse and pen input directly aligned.",
      "Give practice a separate persistent canvas and explain tool behavior in a dedicated drawing guide.",
      "Separate downloading an image from publishing a final entry, with confirmation before gallery submission.",
      "Allow guest participation and develop account continuity before expanding into group drawing experiences.",
    ],
    sections: [
      {
        title: "Returning to an unfinished drawing",
        body:
          "The daily rhythm creates three different entry states. In the implementation, a fresh day begins with instructions, an unfinished drawing resumes in the editor, and a completed day opens the submitted work. Drafts remain attached to their original prompt date, so yesterday’s unfinished canvas does not become today’s entry. Recovery and navigation are part of making a short daily visit dependable.",
      },
      {
        title: "Drawing with a finger",
        body:
          "A finger covers the mark in a way a mouse pointer does not. Sketchlet’s input handling offsets finger drawing 24 screen pixels upward and provides space below the canvas to reach its bottom edge. Mouse and pen remain directly aligned. Compact controls and full-screen drawing make room for the canvas, while drawing state and undo history survive layout changes. Real-device testing is the next step in evaluating these touch adaptations.",
      },
      {
        title: "A separate place to practice",
        body:
          "One final submission per day gives the game a boundary without ending experimentation. Free draw uses the same tools in a separate persistent canvas. The implementation lets a person start blank or continue from a flattened copy of a submitted drawing without changing the gallery original. A dedicated Info page explains practical tool behavior, including translucent marker strokes and why gaps in a boundary allow fill to escape.",
      },
      {
        title: "Making publication explicit",
        body:
          "Downloading a PNG keeps a local image. Saving to the gallery publishes the day’s final entry after confirmation. The sharing code supports a link back to the drawing or an artwork-focused image card with the creator, prompt, and date. Link previews use the Sketchlet logo; image cards omit ratings. A download fallback supports browsers that cannot copy images. These separate actions make the destination of a drawing explicit.",
      },
      {
        title: "Continuity before community",
        body:
          "Guests can participate without registering, but browser identity does not automatically reconnect their work on another device or domain. Account development includes reviewing guest drawings and resolving conflicts when two drawings belong to the same day. Sign-in is advertised publicly, while recovery and linking flows still require production verification. Group membership is still in development; shared drawing feeds and group administration are planned.",
      },
      {
        title: "Current limits",
        body:
          "The case study describes the public product and ongoing implementation work. Account recovery and linking still need end-to-end checks on the live site. Short visits, creative confidence, and repeat participation are design goals; their effect on users has not yet been measured.",
      },
    ],
    nextSteps: [
      "Test account recovery and guest-drawing linking end to end on the live site.",
      "Complete and verify group membership, then build group drawing views and dedicated admin oversight on that foundation.",
      "Check draft recovery and touch behavior on real devices, including bottom-edge access and returning from full-screen drawing.",
      "Observe new visitors using the guide and practice canvas, and record where tool behavior or publication choices cause confusion.",
      "Evaluate whether visitors understand the difference between downloading, submitting, and sharing a drawing.",
    ],
  },
  {
    slug: "bakerparks",
    visibility: "listed",
    stage: "featured",
    priority: 20,
    category: "Civic information",
    label: "Case study",
    emphasisLabel: "Active",
    title: "BakerParks",
    description: "An independent San Francisco parks guide that turns fragmented public data into searchable destinations, with source links, original photography, and paths to official services.",
    cardImage: { src: "https://yfhyoklpjmg7y4gg.public.blob.vercel-storage.com/media/bay-view-park-c9800e4b-853f-47a1-9e03-8e28ee6bf1be/fa4ad1990601/1280.webp", alt: "Bay View Park, San Francisco" },
    detailHref: "/projects/bakerparks",
    appHref: "https://bakerparks.vercel.app",
    repoHref: "https://github.com/michael-baker-content/sf-parks",
    tone: "blue",
    status: "Working prototype · active development",
    timeline: "2026",
    role: "Information architecture, accessibility-focused UX, local data modeling, photography",
    collaborators: [
      "Michael Baker"
    ],
    tools: [
      "Next.js",
      "MapLibre",
      "511 GTFS data",
      "SQLite",
      "Vercel Blob"
    ],
    evidence: [
      "Source-linked data",
      "Shareable filters",
      "Reviewed map corrections",
      "Original photography"
    ],
    metrics: [],
    summary: "BakerParks, called SF Parks Explorer in the application and repository, began after I read an article about frustration with the SF Parks website. It brings selected public records, park information, maps, and scheduled transit context into one discovery experience. The aim is to help residents and visitors understand their options while keeping policies, registration, permits, and reservations with the City of San Francisco.",
    problem: "Planning a park visit can mean piecing together property records, amenity listings, facility pages, maps, transit schedules, and separate reservation systems. Those sources serve different institutional purposes. The challenge is to translate them into useful choices without disguising uncertainty or creating a competing official service.",
    outcome: "The October 2026 implementation brings together 249 destinations, nine areas, and 41 neighborhoods, with search, shareable filters, optional maps, and scheduled transit context. A local-only editor supports ongoing corrections and content maintenance. The prototype still needs a deployment review and resident usability testing.",
    decisions: [
      "Keep discovery separate from official transactions, linking visitors to City services for registration, permits, and reservations.",
      "Separate imported source records, normalized data, and public destination pages so presentation decisions retain their provenance.",
      "Offer conventional search, shareable filters, and complete text results alongside an optional map.",
      "Record coordinate corrections with supporting evidence and reuse the reviewed location across maps, directions, and transit calculations.",
      "Give temporary notices and photographs an editorial workflow separate from generated destination data."
    ],
    sections: [
      {
        "title": "A useful boundary around public services",
        "body": "The project adds a discovery layer rather than replacing the City’s services. A destination page can bring together amenities, images, location, source links, and next steps, but reservations, program registration, permits, and policy remain with the relevant official service. Search and browsing use deterministic data and static generation without requiring generative-AI calls for each visitor query."
      },
      {
        "title": "From administrative records to destinations",
        "body": "Properties, facilities, functional areas, and assets are distinct source concepts. The project keeps a source registry and imported records separate from normalization and the presentation model that generates destination pages. That separation preserves source links and provides a place for reviewed corrections without silently rewriting imported material. Source freshness still depends on imports and editorial review."
      },
      {
        "title": "Browsing by the visit someone has in mind",
        "body": "Explore translates records into conventional search, activity entry points, amenities, area, neighborhood, ZIP code, minimum acreage, and amenity-count filters. Filter state is encoded in the URL so a search can be shared. Text results remain available when the map is closed. Resident testing will help establish whether the categories match how people plan a visit."
      },
      {
        "title": "Correcting plausible but wrong coordinates",
        "body": "A coordinate can be validly formatted yet put a park in water or on the wrong side of an island. The override workflow records a replacement coordinate, supporting map URL, reason, reviewer, and date. The reviewed location is reused for MapLibre markers, Google Maps directions and embeds, and transit proximity calculations. The correction workflow covers known exceptions; a full location audit remains open."
      },
      {
        "title": "Maintaining notices and original photography",
        "body": "Evergreen place data and temporary conditions need different maintenance workflows. A local-only editor supports expiring notices, image visibility and order, attribution, and reviewed coordinate overrides. My own park photography adds firsthand context; open-license images retain creator, source, and license information, and generic illustrations are distinguished from destination photographs. The editor runs locally and is unavailable to public visitors."
      },
      {
        "title": "Accessibility and transit context",
        "body": "The interface includes semantic structure, visible keyboard focus, reduced-motion support, and narrow-screen reflow checks. Manual screen-reader, keyboard, zoom, and device testing remain to be completed. Nearby Muni, BART, and Caltrain options use scheduled 511 data processed at build time, so visitors get planning context rather than live arrivals."
      }
    ],
    nextSteps: [
      "Check that the live deployment reflects the current implementation and excludes the local editing tools.",
      "Observe residents finding an activity, comparing destinations, planning transit, and following an official reservation link; use the findings to refine filters and terminology.",
      "Complete manual keyboard, screen-reader, zoom, and physical-device checks and document specific accessibility issues.",
      "Continue park visits and original photography, with dated reviews of source data, transit imports, imagery, and official links."
    ],
  },
  {
    slug: "mikeslist",
    visibility: "listed",
    stage: "background",
    priority: 50,
    category: "Local discovery",
    label: "Case study",
    emphasisLabel: "Background",
    title: "Mike's List",
    description:
      "A local event-discovery experiment that revealed how much steady editorial labor a useful events calendar requires.",
    cardImage: stockImage("photo-1501386761578-eac5c94b800a", "A live music crowd facing a brightly lit stage."),
    detailHref: "/projects/mikeslist",
    appHref: "https://mikeslist.xyz",
    repoHref: "https://github.com/michael-baker-content/mikeslist",
    tone: "spotlight",
    status: "Local discovery tool",
    timeline: "2026",
    role: "Product design, data modeling, prototype engineering",
    collaborators: ["Michael Baker", "Codex"],
    tools: ["JavaScript", "Local data stores", "Wikidata", "Google Places"],
    evidence: ["Freshness problem", "Artist review", "Source trails"],
    metrics: [
      { label: "Primary challenge", value: "Freshness" },
      { label: "Data types", value: "Artists, venues, events" },
      { label: "Status", value: "Background" },
    ],
    summary:
      "Mike's List began as a local show-discovery tool and quickly became a lesson in the operational reality of events calendars. There is value in the idea, but the product depends on a steady influx of fresh, verified information that I cannot currently provide at the pace the category demands.",
    problem:
      "Events content expires quickly. Last week's listings have little value, and each new week may introduce artists with very little overlap from the week before. The lower the profile of an event, the less likely algorithmically derived artist information is to be accurate.",
    outcome:
      "The project clarified the content-quality bar: local discovery needs human review, source tracking, and a lot of data entry. Mike's List remains a useful background study because it shows where automation helps and where editorial labor is still unavoidable.",
    decisions: [
      "Treat every show listing as time-sensitive content, not a durable evergreen record.",
      "Separate artists, venues, and events so reusable information can persist even when weekly event listings expire.",
      "Assume low-profile events need more human review because automated artist matching becomes less reliable as public data gets thinner.",
      "Make source trails and review states visible so the product does not pretend uncertain enrichment is finished editorial work.",
      "Move the project into the background until there is a sustainable way to provide the steady content operations it needs.",
    ],
    sections: [
      {
        title: "Freshness Problem",
        body:
          "The biggest lesson was how quickly event content loses value. There is very little calling for last week's listings, and a new week of shows may bring a mostly new set of artists to research.",
      },
      {
        title: "Artist Data",
        body:
          "Algorithmic artist enrichment is least reliable where the product most needs help: lower-profile events, partial names, aliases, and artists with limited public information. That creates a lot of manual review before the content reaches a reasonable quality bar.",
      },
      {
        title: "Content Operations",
        body:
          "A useful events calendar is not only a data model or interface. It is a publishing operation. Mike's List made clear that the product would need steady intake, cleanup, correction, and publishing work to stay useful.",
      },
      {
        title: "What Remains",
        body:
          "There is still something interesting here: automation can support local discovery, but the product has to respect the editorial labor needed to make fresh listings trustworthy.",
      },
    ],
    nextSteps: [
      "Keep Mike's List in the background while I focus on projects with a more sustainable maintenance rhythm.",
      "Preserve the lessons about source confidence, review queues, and the limits of automated enrichment.",
      "Revisit the idea only if there is a clearer content pipeline or narrower scope that can support fresh listings without constant manual upkeep.",
    ],
  },
  {
    slug: "making-tools",
    visibility: "listed",
    stage: "supporting",
    priority: 80,
    category: "Hobby tools",
    label: "Case study",
    emphasisLabel: "Active",
    title: "Making Tools",
    description:
      "A grouped case study about solving complex hobby problems with focused helper apps, from fantasy stats to RPG interfaces.",
    cardImage: stockImage("photo-1516321318423-f06f85e504b3", "A laptop workspace with notes and small tools arranged for a technical project."),
    detailHref: "/projects/making-tools",
    tone: "gold",
    status: "Toolmaking series",
    timeline: "2026",
    role: "Interface design, data modeling, statistics tooling, frontend prototyping",
    collaborators: ["Michael Baker"],
    tools: ["JavaScript", "React", "Python", "Flask", "Statistics", "Structured data", "APIs"],
    evidence: ["Fantasy league trackers", "RPG character sheets", "Movie trivia learning", "Daily blackjack"],
    metrics: [
      { label: "Domains", value: "4+" },
      { label: "Pattern", value: "Helper apps" },
      { label: "Core challenge", value: "Complexity" },
    ],
    summary:
      "Making Tools gathers hobby-driven helper apps into one portfolio story. Some of the most complex problems I have solved came from tools I made for my own interests: role-playing game character management, fantasy baseball and basketball league trackers, a learning tool for a movie trivia web game, and a daily blackjack app.",
    problem:
      "Personal hobbies can create surprisingly serious software problems. Fantasy leagues need statistics, rankings, standings, and custom rules. Tabletop role-playing characters carry a dense web of stats and actions. Trivia and card games need practice loops, feedback, and enough structure to help users improve.",
    outcome:
      "This grouped case study shows how I use small, personally motivated products to solve real interface, data, and logic problems. The projects may be playful, but the underlying challenges include statistical modeling, information architecture, and interaction design.",
    decisions: [
      "Group several hobby helper apps together so the portfolio emphasizes the repeatable pattern: find a complicated personal workflow and build a focused tool for it.",
      "Use Python when math-heavy problems call for it, especially fantasy sports tools that depend on player statistics and standings logic.",
      "Treat tabletop character management as an interface design problem, not only a data-entry problem.",
      "Keep each app narrow enough to serve the hobby context that sparked it, whether that is a league, a game night, or a daily practice loop.",
      "Use playful domains as serious product labs because they reveal real rules, edge cases, and user needs.",
    ],
    sections: [
      {
        title: "Fantasy Leagues",
        body:
          "The fantasy baseball and fantasy basketball tools were built for real-life leagues with custom needs. These apps pushed me toward more Python programming because sports data creates math-heavy problems: player statistics, rankings, standings, and the logic needed to make league state trustworthy.",
      },
      {
        title: "Character Sheets",
        body:
          "The role-playing game character sheet app involved some of the most interesting interface work. TTRPG characters have a lot of stats, and I wanted to navigate them nimbly without creating a cluttered mess. The challenge was making dense information feel available without overwhelming the player.",
      },
      {
        title: "Game Learning",
        body:
          "The movie trivia helper and daily blackjack app treat games as learning systems. They are not just databases or scoreboards; they are tools for practice, recall, pattern recognition, and improving through repeated short sessions.",
      },
      {
        title: "Shared Pattern",
        body:
          "The shared skill is not the hobby domain itself. It is the ability to understand a messy workflow, identify where software can reduce friction, and design an interface that makes complicated rules easier to use.",
      },
    ],
    nextSteps: [
      "Decide which helper apps deserve individual deep dives and which should remain examples inside the grouped Making Tools story.",
      "Add screenshots or short notes from the fantasy league trackers, RPG character sheet, movie trivia helper, and daily blackjack app.",
      "Create a visual matrix showing which projects emphasize statistics, interface density, learning loops, or game-state management.",
    ],
  },
  {
    slug: "greeting",
    visibility: "hidden",
    stage: "background",
    priority: 80,
    category: "Creative tool",
    label: "Case study",
    title: "Greeting Card App",
    description:
      "A separate card-making project for shaping personal messages into playful, shareable compositions.",
    detailHref: "/projects/greeting",
    appHref: "../Greeting/index.html",
    repoHref: "https://github.com/michael-baker-content/michaels-cards",
    tone: "coral",
    status: "Creative tool",
    timeline: "2026",
    role: "Creative direction, interaction design, prototype engineering",
    collaborators: ["Michael Baker"],
    tools: ["Frontend prototype", "Prompted composition", "Visual themes"],
    evidence: ["Message shaping", "Visual play", "Shareable output"],
    metrics: [
      { label: "Core format", value: "Cards" },
      { label: "Design focus", value: "Tone" },
      { label: "Output goal", value: "Shareable" },
    ],
    summary:
      "The Greeting app is a place to explore cards as small, emotional interfaces: compact, expressive, and designed around the moment someone wants to send.",
    problem:
      "Most generated messages either feel generic or overproduced. The interesting challenge is helping a person get to something specific without sanding off their voice.",
    outcome:
      "The app gives the portfolio a companion project for experimenting with tone, composition, and lightweight creative tools.",
    decisions: [
      "Keep the interaction closer to making than form-filling, so the user feels like they are shaping a message rather than completing intake.",
      "Use a small set of playful visual constraints instead of an endless theme picker.",
      "Let the card format carry personality while the tool stays simple enough to finish quickly.",
    ],
    sections: [
      {
        title: "Interaction Premise",
        body:
          "Greeting starts from the idea that a message tool should feel like making something, not completing a questionnaire. The interaction should help a person find a tone without flattening the personal detail that made them start.",
      },
      {
        title: "Creative Constraint",
        body:
          "The card format gives the project a useful constraint: compact composition, readable emotion, and a clear output. That boundary keeps the tool focused while still leaving room for visual play.",
      },
      {
        title: "Portfolio Value",
        body:
          "As a case study, Greeting shows how creative direction and interface design can work together in a small product experience where tone, format, and action all matter.",
      },
    ],
    nextSteps: [
      "Define a few strong occasion collections so the first version has obvious entry points.",
      "Add export and sharing flows that preserve the card's visual polish outside the app.",
      "Create a tighter visual system for type, color, and layout so cards feel related without becoming repetitive.",
    ],
  },
  {
    slug: "nba-roto-tracker",
    visibility: "listed",
    stage: "background",
    priority: 90,
    category: "Dashboard",
    label: "Case study",
    title: "Fantasy Basketball Dashboard",
    description:
      "A dashboard for turning a custom fantasy sports competition into clear standings, roster views, and live performance signals.",
    cardImage: stockImage("photo-1546519638-68e109498ffc", "Basketball players competing near the hoop on an indoor court."),
    detailHref: "/projects/nba-roto-tracker",
    repoHref: "https://github.com/michael-baker-content/nba-roto-tracker",
    tone: "blue",
    status: "Public app",
    timeline: "2026",
    role: "Dashboard design, backend modeling, frontend implementation",
    collaborators: ["Michael Baker"],
    tools: ["Python", "Flask", "SQLite", "PostgreSQL", "Railway", "nba-api"],
    evidence: ["Leaderboard design", "Roster pages", "Scoring model"],
    metrics: [
      { label: "Stack", value: "Flask" },
      { label: "Data layer", value: "SQLite/Postgres" },
      { label: "Pattern", value: "Live dashboard" },
    ],
    summary:
      "Fantasy Basketball Dashboard turns a custom fantasy sports format into a self-hosted web app with standings, roster pages, and live leaderboard signals. It translates rules, stats, participants, and season state into something a league can inspect without relying on spreadsheets or chat updates.",
    problem:
      "Custom fantasy competitions often live in spreadsheets or chat threads. That makes standings hard to inspect, difficult to share, and easy to misread when rosters, scoring categories, or rules change.",
    outcome:
      "The app creates a dedicated home for participant state, scoring logic, roster detail, and leaderboard review while keeping the deployment path practical through Flask, a database layer, and Railway.",
    decisions: [
      "Use Flask to keep the app small enough that the scoring model and request flow remain easy to inspect.",
      "Support SQLite locally and PostgreSQL in production so development stays light while deployment has a durable database.",
      "Separate leaderboard and roster views so users can inspect both the standings and the evidence behind them.",
      "Treat the app as an operational dashboard for a real league, not only as a coding exercise.",
      "Model competition rules explicitly so standings can be explained instead of merely displayed.",
    ],
    sections: [
      {
        title: "Dashboard Utility",
        body:
          "The project is valuable because it formalizes a custom competition workflow. Instead of asking users to trust a manually updated sheet, the app gives the group a shared place to inspect standings, roster state, and the evidence behind movement on the leaderboard.",
      },
      {
        title: "Data Shape",
        body:
          "The data model has to translate league concepts into durable records: teams, players, rosters, scoring categories, standings, and update timing. That relationship between rules and data is the heart of the product.",
      },
      {
        title: "Deployment Path",
        body:
          "Railway gives the project a realistic production target while preserving a simple local development loop. SQLite keeps early iteration low-friction, while PostgreSQL gives production a more durable home.",
      },
      {
        title: "Operational Clarity",
        body:
          "The win is not just that the app calculates standings. It makes a custom competition legible by putting backend modeling in service of a user-facing state problem.",
      },
    ],
    nextSteps: [
      "Add annotated screenshots of the leaderboard, roster pages, and scoring states.",
      "Document the scoring model in plain language so a league member can understand why standings move.",
      "Explain the local-to-production database path, including what changes between SQLite and PostgreSQL on Railway.",
    ],
  },
  {
    slug: "cine2helper",
    visibility: "listed",
    stage: "background",
    priority: 100,
    category: "Media database",
    label: "Case study",
    title: "Movie Database Project",
    description:
      "A focused movie lookup experience that turns a large entertainment database into fast, useful decision support.",
    cardImage: stockImage("photo-1489599849927-2ee91cede3ba", "Rows of red seats inside a movie theater."),
    detailHref: "/projects/cine2helper",
    repoHref: "https://github.com/michael-baker-content/cine2helper",
    tone: "coral",
    status: "Public tool",
    timeline: "2026",
    role: "Interaction design, React/Next.js implementation, API integration",
    collaborators: ["Michael Baker"],
    tools: ["TypeScript", "React", "Next.js", "TMDB API", "Vercel"],
    evidence: ["Movie lookup", "TMDB integration", "Decision support"],
    metrics: [
      { label: "Framework", value: "Next.js" },
      { label: "Data source", value: "TMDB" },
      { label: "Pattern", value: "Focused search" },
    ],
    summary:
      "Movie Database Project is a focused lookup tool built around a specific entertainment workflow. It uses TMDB data and a modern React/Next.js stack, but the product idea is narrower than a general movie database: help someone make faster, better decisions from just the metadata that matters in the moment.",
    problem:
      "Search tools are often too broad for high-context decisions. A user may need targeted recall support, quick scanning, and clear metadata rather than another sprawling entertainment encyclopedia.",
    outcome:
      "The app frames external movie data around the decisions a user needs to make in the moment, turning lookup into lightweight decision support.",
    decisions: [
      "Use TMDB as the metadata source so the project can focus on workflow design instead of data collection.",
      "Prioritize fast scanning and comparison over encyclopedic movie detail.",
      "Keep the scope tied to a specific decision workflow so the interface can stay opinionated.",
      "Use TypeScript to make API response shapes and UI expectations easier to reason about.",
      "Deploy on Vercel so the project can be shared quickly and iterated without infrastructure drag.",
    ],
    sections: [
      {
        title: "Focused Context",
        body:
          "The app works because it starts from the constraints of a specific task. The best interface is not the one with the most film data; it is the one that helps a user act quickly and confidently.",
      },
      {
        title: "Lookup Design",
        body:
          "Search results, metadata, and interaction timing are shaped around decision support instead of passive browsing. The goal is to reduce the distance between remembering a movie and knowing whether it is useful for the current choice.",
      },
      {
        title: "Technical Fit",
        body:
          "Next.js, TypeScript, TMDB, and Vercel make sense for a small public helper where typed API integration and deployability matter more than backend complexity.",
      },
      {
        title: "Focused Scope",
        body:
          "Movie Database Project shows restraint. It filters a large external database through a narrow product need instead of copying it wholesale into a generic interface.",
      },
    ],
    nextSteps: [
      "Add a short flow diagram showing the lookup path from search to useful decision.",
      "Name the exact user decisions the tool is meant to support, then tune the interface around those moments.",
      "Document TMDB API limits, missing-data states, and error handling so the app's reliability is easier to evaluate.",
    ],
  },
  {
    slug: "bakerversity",
    visibility: "listed",
    stage: "featured",
    priority: 40,
    category: "Learning platform",
    label: "Case study",
    emphasisLabel: "Featured",
    title: "Bakerversity",
    description: "An LMS prototype exploring responsive technical-course authoring, content management, and learner presentation.",
    cardImage: stockImage("https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1200", "People walking near a university building and graduation lawn."),
    detailHref: "/projects/bakerversity",
    appHref: "https://bakerversity.vercel.app",
    repoHref: "https://github.com/michael-baker-content/bakerversity",
    tone: "gold",
    status: "Learning platform",
    timeline: "2026",
    role: "Product direction, responsive interface design, course adaptation, content management, and authoring checks",
    collaborators: ["Michael Baker"],
    tools: [
      "TypeScript",
      "React",
      "Next.js",
      "Tiptap",
      "KaTeX",
      "Mafs",
      "Supabase",
      "Clerk"
    ],
    evidence: [
      "Technical lesson authoring",
      "Draft and publication workflows",
      "Course asset management"
    ],
    metrics: [
      { label: "Product type", value: "LMS" },
      { label: "Editor", value: "Tiptap" },
      { label: "Math", value: "KaTeX" },
    ],
    summary: "Bakerversity is my LMS prototype for technical courses. Much of its development focuses on the authoring and management interfaces, using a complete course as material for developing presentation and workflow.",
    problem: "Technical course content needs more than a text field. Authors need to organize lessons and assessments, combine varied explanation formats, and revise material without accidentally changing the published course.",
    outcome: "The platform supports course organization, rich lesson editing, reusable assets, draft publication, and assessments. All planned pages of the current course contain material, including quizzes and exams. Content adaptation continues; the complete learner journey and use by other people remain untested.",
    decisions: [
      "Use generated course material to concentrate on presentation and authoring workflow while adapting the content.",
      "Support varied technical explanations through structured editor components, including code, mathematics, directory trees, and callouts.",
      "Give responsive layout and light/dark presentation sustained attention in the administration interface where I work.",
      "Separate saved drafts from publication and provide revision history, lesson previews, and recovery downloads.",
      "Keep course-author permissions separate from platform administration and learner enrollment."
    ],
    sections: [
      {
        "title": "Professional Context",
        "body": "My background in online education gives me experience with course structure. I am an editor more than a writer, and a content manager more than an editor. Bakerversity lets me apply that experience to an authoring product."
      },
      {
        "title": "Presentation and Interaction",
        "body": "Technical content introduces varied layout and interaction needs. LaTeX is a particular challenge: formulas need to move gracefully between rendered notation, object selection, editable source, and a menu with multiple options. Responsive design and light/dark themes are ongoing interests in this work."
      },
      {
        "title": "Course Production",
        "body": "I worked with Gemini on the structure and focus of introductory localization-engineering material, then generated content from our outline. I am adapting that material as an instructor using the platform. Codex handles much of the implementation in collaboration with me; I direct product and editorial decisions and check the interfaces."
      },
      {
        "title": "Current State and Limits",
        "body": "Bakerversity is in active development alongside my other prototypes. The course is interactable, with quizzes, exams, and signed-in progress. At this stage, it demonstrates the platform’s capabilities. My checks have focused on content coherence and formatting during authoring; I have not yet completed a learner walkthrough or shown it to other people."
      }
    ],
    nextSteps: [
      "Continue interpreting, adapting, and reviewing the course material.",
      "Review the course from a learner’s perspective and gather feedback when it is ready to be shared.",
      "Use continued course production to guide further authoring and presentation improvements."
    ],
  },
  {
    "slug": "bakerlinks",
    "visibility": "listed",
    "stage": "supporting",
    "priority": 15,
    "category": "Publishing platform",
    "label": "Case study",
    "emphasisLabel": "Public site",
    "title": "BakerLinks",
    "description": "A personal publishing tool for sharing projects, links, and an introduction, with flexible styling, curated animated backgrounds, and Markdown About content.",
    "cardImage": stockImage("photo-1516321497487-e288fb19713f", "A laptop workspace used for publishing and managing online links."),
    "detailHref": "/projects/bakerlinks",
    "appHref": "https://bakerlinks.com",
    "repoHref": "https://github.com/michael-baker-content/bakerlinks",
    "tone": "spotlight",
    "status": "Public site · ongoing refinement",
    "timeline": "2026",
    "role": "Product direction, interface decisions, and iterative review",
    "collaborators": [
      "Michael Baker",
      "Codex — coding and implementation"
    ],
    "tools": [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind",
      "Vercel",
      "Supabase"
    ],
    "evidence": [
      "Profile and Style controls",
      "Curated animation",
      "Markdown About tab",
      "Link-click analytics"
    ],
    "metrics": [],
    "summary": "BakerLinks gives people a personal page for sharing projects, social links, and the story behind their work. It began as a basic link-in-bio assignment in self-guided learning material and became a working application I use to share my own projects. Its development has focused on customization, publishing, and the practical details that make an editor satisfying to use.",
    "problem": "A page for sharing creative, technical, professional, or personal projects needs room for individual expression. The challenge is to offer that flexibility through an interface that stays straightforward: organize links, introduce yourself, choose a visual style, and understand how those choices affect the page. My own frustrations with everyday applications inform this work. Finding friction and deciding how to resolve it is one of the parts of building software I enjoy most.",
    "outcome": "BakerLinks is a public application, and I am currently its only user. My page brings together my projects and an introduction to my work creating diverse web prototypes. The application includes profile and style controls, public pages, Markdown About content, and link-click analytics. I’m particularly pleased with the range of customization available through the Profile and Style panels. That is my assessment of the interface; broader usability and benefits for other people remain to be evaluated.",
    "decisions": [
      "Offer broad customization through focused Profile and Style panels.",
      "Treat the editor preview and public page as related views with different demands.",
      "Curate animated backgrounds while allowing personal static-image uploads.",
      "Add an optional Markdown About tab for context beyond links.",
      "Maintain click totals and dated events for different analytics views.",
      "Keep owner publishing controls separate from administrator verification."
    ],
    "sections": [
      {
        "title": "Customization through a simple interface",
        "body": "Profile and Style are my favorite parts of BakerLinks. Together, they offer control over identity, images, social links, layouts, fonts, and colors. My aim has been to make those options approachable and keep the actions needed to complete a task to a minimum. The satisfaction comes from bringing many choices into an interface that I find simple to use. I have not measured task completion or compared its usability with other tools."
      },
      {
        "title": "Preview and public page have different jobs",
        "body": "The preview makes customization more immediate and adds visual appeal to the editing experience. But a preview inside an editor and a standalone public page have different demands, and some of those demands conflict. I treat that tension as a design consideration in its own right. The preview helps someone assess styling within the editor; the public page needs to present their content as a complete destination. Developing both involves decisions about what each view should show and how closely they should correspond."
      },
      {
        "title": "Curated motion, personal static images",
        "body": "Animated backgrounds added the visual energy I felt was missing. The important decision was to provide a curated selection rather than allow people to upload their own animated backgrounds. Static images remain open to personal uploads. I gave Codex the requirements and let it choose the animated options, which satisfied what I wanted. The story here is the boundary around customization and the addition of motion, rather than an elaborate art-direction process."
      },
      {
        "title": "Room for the story behind the links",
        "body": "An optional About tab gives the page space for more than destinations. Someone can introduce themselves and explain the work their links point toward. Integrating Markdown was a highlight for me. It adds headings, emphasis, lists, and other text formatting while keeping the feature focused on writing. My own About page uses that space to discuss the prototypes I’m building and how my work is evolving."
      },
      {
        "title": "Analytics as a database challenge",
        "body": "Getting analytics working correctly was a satisfying database problem. A lifetime click total and a chart covering recent days need different kinds of records. The implementation maintains per-link totals alongside dated click events, updating both through one database operation. The owner dashboard uses those records to show totals, comparisons between links, and activity across selectable periods. These are tools for inspecting clicks, rather than evidence of audience growth or project success."
      },
      {
        "title": "Separate publishing from administration",
        "body": "Profile owners manage their content, appearance, and analytics. Administrator-only verification is a separate responsibility. Directory inclusion combines an owner’s choice to participate with administrator verification. Keeping those permissions distinct prevents an administrative capability from being presented as an ordinary profile-editing feature."
      }
    ],
    "nextSteps": [
      "Explore more advanced publishing features, including capabilities familiar from other platforms and ideas I haven’t encountered elsewhere, choosing additions for their usefulness in sharing projects.",
      "Continue using BakerLinks as my own publishing page while making further development more selective as I shift attention to other projects."
    ]
  },
  {
    slug: "saske",
    visibility: "listed",
    stage: "background",
    priority: 110,
    category: "Interactive tracker",
    label: "Case study",
    title: "RPG Character Tracker",
    description:
      "A dynamic character-tracking interface for dense role-playing systems, built around calculated values and play-facing clarity.",
    cardImage: stockImage("photo-1605870445919-838d190e8e1b", "Role-playing dice arranged on a tabletop."),
    detailHref: "/projects/saske",
    repoHref: "https://github.com/michael-baker-content/saske",
    tone: "blue",
    status: "Public tool",
    timeline: "2026",
    role: "Interactive tool design, rules modeling, JavaScript implementation",
    collaborators: ["Michael Baker"],
    tools: ["JavaScript", "Pathfinder 2E", "RPG systems"],
    evidence: ["Dynamic tracker", "Rules support", "Player workflow"],
    metrics: [
      { label: "Domain", value: "RPG tools" },
      { label: "System", value: "Rules-heavy" },
      { label: "Core object", value: "Tracker" },
    ],
    summary:
      "RPG Character Tracker is a character-management project for dense tabletop rules systems. It began from Pathfinder 2E, where character state contains many calculated, conditional, and frequently referenced values, and it explores how a dynamic interface can make that information easier to use during play.",
    problem:
      "Rules-heavy role-playing characters contain a lot of interdependent information. Static sheets can make it hard to see what changed, what is derived, what is conditional, and what the player actually needs during a session.",
    outcome:
      "The project creates a custom interface for character information that can respond to the rules system and the needs of the table, with dynamic behavior where static reference becomes friction.",
    decisions: [
      "Start with a specific rules system so the tool can be tested against real play needs instead of generic character-sheet theory.",
      "Prioritize dynamic behavior only where rules density creates real friction.",
      "Use lightweight JavaScript so the prototype stays easy to modify as the rules model changes.",
      "Treat table usability as the goal, not exhaustive rules coverage.",
      "Organize the interface around player action rather than sourcebook structure.",
    ],
    sections: [
      {
        title: "Rules Density",
        body:
          "The design problem comes from rules density. Pathfinder-style characters include derived values, modifiers, proficiency changes, resources, and context-specific decisions. The app is strongest where dynamic handling removes repeated lookup or manual recalculation.",
      },
      {
        title: "Player Workflow",
        body:
          "A good character sheet supports action at the table. That means the interface should help a player find what they need quickly, understand what changed, and avoid breaking the rhythm of play.",
      },
      {
        title: "System Scope",
        body:
          "Because role-playing systems vary widely, choosing one rules-heavy system gives the app a strong constraint. It makes the project easier to evaluate because the tool can be judged against real play needs instead of abstract flexibility.",
      },
      {
        title: "Usable State",
        body:
          "RPG Character Tracker shows how interface design can clarify a dense knowledge system. The same pattern applies beyond games: make complex state visible, actionable, and easier to trust.",
      },
    ],
    nextSteps: [
      "Add screenshots of the tracker in common play-facing states.",
      "Document the calculated fields that save the most time or prevent the most lookup friction.",
      "Clarify which values are automated, which remain manual, and which rules are intentionally out of scope.",
    ],
  },
  {
    slug: "notion-clean",
    visibility: "listed",
    stage: "background",
    priority: 120,
    category: "Workflow utility",
    label: "Case study",
    title: "Notion Archive Cleaner",
    description:
      "A utility for stripping Notion's auto-appended UUIDs from exported zip archives.",
    cardImage: stockImage("photo-1450101499163-c8848c66ca85", "Paper files and folders arranged for archival organization."),
    detailHref: "/projects/notion-clean",
    repoHref: "https://github.com/michael-baker-content/notion-clean",
    tone: "coral",
    status: "Public utility",
    timeline: "2026",
    role: "Workflow automation, scripting, file-cleanup utility design",
    collaborators: ["Michael Baker"],
    tools: ["JavaScript", "Python", "HTML", "Notion exports", "Scripts"],
    evidence: ["Zip cleanup", "Filename normalization", "Export workflow"],
    metrics: [
      { label: "Input", value: "Notion zip" },
      { label: "Output", value: "Clean names" },
      { label: "Mode", value: "Utility" },
    ],
    summary:
      "Notion Archive Cleaner is a small workflow utility built around one sharp annoyance: exported Notion files often include auto-appended UUIDs that make archives harder to read, publish, and maintain. The project turns a repetitive cleanup chore into a safer, repeatable process.",
    problem:
      "Notion exports are useful, but their generated filenames can be noisy. Manual cleanup is tedious and error-prone, especially when an archive contains many pages, nested folders, links, and assets.",
    outcome:
      "The utility gives the cleanup job a repeatable path, turning a messy export archive into a more human-readable file structure while keeping the scope narrow enough to remain understandable.",
    decisions: [
      "Keep the tool focused on one recurring export-cleanup workflow instead of expanding into a general file manager.",
      "Support repeatable scripting patterns so the cleanup can be run safely across multiple archives.",
      "Treat filename clarity as the main product value: the output should be easier to scan, share, and maintain.",
      "Avoid turning a small utility into an oversized content-management project.",
      "Preserve the archive structure while removing the UUID noise that makes exported files harder to read.",
    ],
    sections: [
      {
        title: "Workflow Fit",
        body:
          "The strongest product story is the before-and-after workflow: exported files with UUID noise versus a cleaned archive that is easier to inspect, move, publish, and keep.",
      },
      {
        title: "Utility Scope",
        body:
          "This project is valuable because it stays small. It solves a specific file hygiene problem rather than trying to replace Notion or redesign export semantics.",
      },
      {
        title: "Automation Value",
        body:
          "A lightweight cleanup tool can save repeated manual effort and reduce mistakes in a publishing or archiving process. The product value is not flash; it is relief from a recurring friction point.",
      },
      {
        title: "Careful Utility",
        body:
          "Notion Archive Cleaner shows that small utilities still require product judgment. File operations need clarity, caution, and respect for the user's material.",
      },
    ],
    nextSteps: [
      "Add a before-and-after export example that shows exactly what changes in filenames and folders.",
      "Document supported archive shapes, collision handling, and edge cases.",
      "Clarify when the browser UI, JavaScript script, or Python script is the best fit.",
    ],
  },
  {
    slug: "github-repo-journal",
    visibility: "listed",
    stage: "background",
    priority: 130,
    category: "Technical writing",
    label: "Case study",
    title: "GitHub Repo Journal",
    description:
      "A journal of independent projects: what I am building, the decisions behind it, and what I want to explore next.",
    cardImage: stockImage("photo-1499750310107-5fef28a66643", "A laptop and notebook set up for writing technical notes."),
    detailHref: "/projects/github-repo-journal",
    appHref: "https://michael-baker-content.github.io/",
    repoHref: "https://github.com/michael-baker-content/michael-baker-content.github.io",
    tone: "gold",
    status: "Public blog",
    timeline: "2026",
    role: "Writing, editorial direction, and publishing design",
    collaborators: ["Michael Baker"],
    tools: ["Astro", "MDX", "React", "KaTeX", "p5.js", "GitHub Pages"],
    evidence: ["Published field notes", "Project retrospectives", "Search and tags"],
    metrics: [
      { label: "Framework", value: "Astro" },
      { label: "Host", value: "GitHub Pages" },
      { label: "Content", value: "Field notes" },
    ],
    summary:
      "GitHub Repo Journal brings my writing experience into my independent projects. The site pairs project overviews with field notes about the work as it happens: returning to a dormant idea, refining an interface, or discovering what a dataset leaves out.",
    problem:
      "A repository holds the code, but understanding a project also takes context: what I wanted to explore, why I chose an approach, and what I learned. That explanation needs room beyond a README or portfolio card.",
    outcome:
      "The public site brings together project pages and a searchable, tagged journal. Published posts cover projects including BakerLinks, Baker Parks, Sketchlet, and this portfolio, connecting the finished overview with the decisions and unfinished questions behind it.",
    decisions: [
      "Use Astro and MDX to combine written explanations with embedded components.",
      "Support equations, interactive math figures, live sketches, and music-code embeds for different subjects.",
      "Connect project pages, related posts, and source repositories.",
      "Publish through GitHub Actions to GitHub Pages.",
      "Offer search, topic tags, and RSS as ways to find and follow the writing.",
    ],
    sections: [
      {
        title: "Writing about decisions",
        body:
          "The BakerLinks writing follows the project from a focused first version to a return to its profile editor. The November 7 field note explains the appeal of customization, the role of a preview, and the small obstacles that make managing a page frustrating. It also distinguishes my own use from evidence about how the tools work for other people.",
      },
      {
        title: "Finding the story in a build",
        body:
          "The posts approach each project through a specific question. Baker Parks asks what public data leaves out; Sketchlet considers what it takes to invite other people into a drawing experience. These angles give the writing a purpose beyond listing features.",
      },
      {
        title: "Connecting projects and posts",
        body:
          "Project pages give readers an overview, while field notes have room for a narrower decision or a return to earlier work. Repository links connect the writing to the code. Together, these formats let me explain both what a project does and how my thinking changes as I work on it.",
      },
      {
        title: "Supporting continued reading",
        body:
          "The journal offers search and topic tags so readers can follow an interest across projects. The Astro and MDX foundation also leaves room for code, equations, and interactive examples when they help explain a subject.",
      },
    ],
    nextSteps: [
      "Continue linking portfolio case studies with field notes about specific decisions and later revisions.",
      "Keep the writing specific about my contribution, AI collaboration, and what has or has not been tested.",
      "Choose examples that help readers understand the work: a screenshot, a focused code excerpt, or an interactive demonstration.",
    ],
  },
  {
    slug: "template",
    visibility: "hidden",
    stage: "template",
    priority: 999,
    category: "Template",
    label: "Template",
    title: "Template Case Study",
    description:
      "A reusable placeholder case study that shows the section pattern before final project content exists.",
    detailHref: "/projects/template",
    tone: "blue",
    status: "Draft template",
    timeline: "TBD",
    role: "Project role, collaborators, and contribution summary",
    collaborators: ["Lorem ipsum"],
    tools: ["Tool one", "Tool two", "Tool three"],
    evidence: ["Placeholder metric", "Process note", "Launch artifact"],
    metrics: [
      { label: "Metric", value: "Lorem" },
      { label: "Signal", value: "Ipsum" },
      { label: "Outcome", value: "Dolor" },
    ],
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    problem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus.",
    outcome:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum.",
    decisions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Maecenas faucibus mollis interdum.",
      "Nullam id dolor id nibh ultricies vehicula ut id elit.",
      "Aenean lacinia bibendum nulla sed consectetur.",
    ],
    sections: [
      {
        title: "Context",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper.",
      },
      {
        title: "Approach",
        body:
          "Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
      },
      {
        title: "Result",
        body:
          "Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
      },
    ],
    nextSteps: [
      "Replace placeholder copy with project-specific context.",
      "Add real screenshots, metrics, and source links.",
      "Turn decisions into evidence-backed design rationale.",
    ],
  },
];

export const listedProjects = projects
  .filter((project) => project.visibility !== "hidden")
  .sort((first, second) => first.priority - second.priority);

export const caseStudyCategories = [...new Set(listedProjects.map((project) => project.category))];

export function projectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
