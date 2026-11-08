const stockImage = (id, alt) => ({
  src: id.startsWith("http") ? id : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`,
  alt,
});

export const projects = [
  {
    slug: "portfolio",
    visibility: "listed",
    stage: "featured",
    priority: 80,
    category: "Portfolio system",
    label: "Portfolio",
    emphasisLabel: "Active",
    title: "This Portfolio",
    description:
      "My active portfolio, bringing professional experience, independent projects, and the thinking behind the work into one place.",
    cardImage: {"src": "/assets/projects/portfolio.jpg", "alt": "The live portfolio homepage."},
    screenshots: [{"src":"/assets/projects/portfolio.jpg","alt":"The live portfolio homepage.","caption":"The live portfolio homepage.","href":"https://michaelbaker.vercel.app/","capturedOn":"2026-11-07"},{"src":"/assets/projects/portfolio-capability-filter.jpg","alt":"The project index with Interaction and interface design selected as the capability filter.","caption":"The project index with Interaction and interface design selected as the capability filter.","href":"https://michaelbaker.vercel.app/case-studies","capturedOn":"2026-11-07"}],
    detailHref: "/projects/portfolio",
    repoHref: "https://github.com/michael-baker-content/michael-portfolio",
    tone: "gold",
    status: "Public site · ongoing updates",
    timeline: "2026–present",
    role: "Writing, information architecture, and creative direction; implementation with Codex",
    collaborators: ["Michael Baker", "Codex"],
    tools: ["React", "Vite", "Tailwind", "Vercel", "Vercel Blob"],
    evidence: ["Project narratives", "Capability filters", "Content editing"],
    metrics: [],
    summary:
      "This is my active portfolio: a place to connect my professional background with the independent applications and tools I am developing. As those projects grow, the site needs to explain both what they do and the decisions behind them. It has developed its own visual identity, navigation, and publishing structure, with ongoing revisions to keep the work accurately represented.",
    problem:
      "My projects span creative tools, public information, publishing, learning, and data. A list of names and technologies does little to explain what connects them or where my contribution lies. The challenge is to give visitors a clear introduction, useful ways to explore, and enough detail to understand the work without making every page an exhaustive project history.",
    outcome:
      "The portfolio brings together professional experience, a searchable project index, and detailed case studies. Readers can explore by capability, subject, or current status. A shared content model supports project cards and detail pages, while an owner editing dashboard supports ongoing copy updates. The site continues to evolve alongside the projects it presents.",
    decisions: [
      "Give professional experience and independent projects their own space, connected by the skills and interests that run through both.",
      "Use concise project introductions with fuller accounts of context, decisions, and next steps on the detail pages.",
      "Offer capability filters so readers can find related strengths across projects with different subjects and technologies.",
      "Keep editorial order separate from project activity, giving the most relevant work prominence without implying that every active project belongs at the top.",
      "Use a shared content model and an editing dashboard to maintain the growing collection of case studies.",
    ],
    sections: [
      {
        title: "Connecting experience and independent work",
        body:
          "The site needs to explain how my background in content, publishing, and education relates to what I am building now. The Experience page provides professional context, while the projects show those interests taking shape in working applications. I direct the presentation and write and revise the narratives, working with Codex on implementation.",
      },
      {
        title: "Giving readers ways into the work",
        body:
          "Someone interested in interface design may find relevant work in a drawing tool, a link-sharing platform, or a parks explorer. Capability filters make those connections available alongside categories and search. Curated order introduces the work I most want to highlight; activity labels describe where each project stands. This portfolio remains active without needing a prominent place in its own project list.",
      },
      {
        title: "Keeping the stories current",
        body:
          "Several projects have developed substantially since their earlier writeups. Maintaining the portfolio means revisiting the central story, my contribution, current features, and remaining questions. Shared project records keep summaries, links, decisions, and narrative sections together so the same material can support cards, filtering, and detail pages. The editing dashboard provides another way to revise that content, with token-authorized saving to Vercel Blob and repository defaults available when saved content cannot be loaded.",
      },
      {
        title: "A visual identity of its own",
        body:
          "The portfolio began from an open-source React and Tailwind starter, credited in the repository. Its design and structure have since changed substantially. The current direction uses expressive typography, a consistent page hierarchy, and reusable project layouts to give varied work a coherent setting. The starter is part of the site's history; the ongoing design decisions follow the needs of my own portfolio.",
      },
    ],
    nextSteps: [
      "Continue revising older case studies as projects develop, with clearer accounts of my contribution and current priorities.",
      "Replace remaining stock imagery with project screenshots and examples that support the writing.",
      "Review how easily visitors can find relevant work and move between professional experience, project summaries, and detailed case studies.",
    ],
  },
  {
    "slug": "sketchlet",
    "visibility": "listed",
    "stage": "featured",
    "priority": 10,
    "category": "Creative tool",
    "label": "Case study",
    "emphasisLabel": "Active",
    "title": "Sketchlet",
    "description": "A daily drawing playground with evolving timed prompts and an untimed mode for drawing at your own pace.",
    "cardImage": {
      "src": "/assets/projects/sketchlet.jpg",
      "alt": "Sketchlet’s current homepage introduces three timed drawing rounds."
    },
    "screenshots": [
      {
        "src": "/assets/projects/sketchlet.jpg",
        "alt": "Sketchlet’s current homepage introduces three timed drawing rounds.",
        "caption": "Sketchlet’s current homepage introduces three timed drawing rounds.",
        "href": "https://sketchlet.app/",
        "capturedOn": "2026-11-07"
      },
      {
        "src": "/assets/projects/sketchlet-color-menu.jpg",
        "alt": "Free draw with the foreground palette open beside the canvas.",
        "caption": "Free draw with the foreground palette open beside the canvas.",
        "href": "https://sketchlet.app/free-draw",
        "capturedOn": "2026-11-07"
      },
      {
        "src": "/assets/projects/sketchlet-phone-palette.jpg",
        "alt": "The foreground palette at a 390-pixel phone viewport; the colors open in a separate dialog.",
        "caption": "The foreground palette at a 390-pixel phone viewport; the colors open in a separate dialog.",
        "href": "https://sketchlet.app/free-draw",
        "capturedOn": "2026-11-07"
      },
      {
        "src": "/assets/projects/sketchlet-trio-sharing.jpg",
        "alt": "Michael Baker’s published trio expanded with drawing-link and image-sharing actions.",
        "caption": "Michael Baker’s published trio expanded with drawing-link and image-sharing actions.",
        "href": "https://sketchlet.app/timed-gallery",
        "capturedOn": "2026-11-07"
      }
    ],
    "detailHref": "/projects/sketchlet",
    "appHref": "https://sketchlet.app",
    "repoHref": "https://github.com/michael-baker-content/sketchlet",
    "tone": "coral",
    "status": "Public site · active development",
    "timeline": "October 2026–present",
    "role": "Product direction and interaction refinement; implementation with Codex",
    "collaborators": [
      "Michael Baker",
      "Codex"
    ],
    "tools": [
      "HTML",
      "CSS",
      "JavaScript",
      "Canvas API",
      "Vercel",
      "Neon",
      "Clerk"
    ],
    "evidence": [
      "Expanding timed prompts",
      "Simpler drawing controls",
      "Separate practice canvas"
    ],
    "metrics": [],
    "summary": "I’m developing Sketchlet to find what makes a small daily drawing game fun. Timed mode reveals a more complex prompt across three rounds, giving people a choice: build on their drawing or start over. Alongside that experiment, I’m simplifying the controls and refining how the tools feel on the canvas. I direct and evaluate the experience with Codex handling much of the code.",
    "problem": "A timer gives a drawing session a clear boundary, but it also asks newcomers to learn the tools under pressure. I want people to spend their time responding to an idea rather than searching menus or working around a brush.",
    "outcome": "Sketchlet offers three three-minute rounds, an untimed daily prompt, and a separate free-draw canvas. The tools are in their best state so far in my own use, but I’m still exploring what would make the game worth returning to. Repeat participation and the experience for new users remain untested. Unfinished daily drawings stay attached to their prompt date, and free draw saves separately on the device. Downloading an image and publishing a final gallery entry remain separate actions.",
    "decisions": [
      "Reveal the prompt in stages so each round can invite a new idea or a change of direction.",
      "Simplify color selection and put frequently used drawing controls within easier reach.",
      "Keep untimed drawing and free draw available alongside the timed game, with an explicit choice to publish."
    ],
    "sections": [
      {
        "title": "Keep the next prompt a surprise",
        "body": "Untimed drawings can take ten seconds or much longer. Timed mode gives everyone the same allowance while revealing a subject, an action, and another twist. I want to preserve that surprise. Each reveal can change the whole composition, so people can keep their canvas or start fresh. Giving later rounds more time is an idea I’m considering; the current game uses three minutes for every round."
      },
      {
        "title": "Make the tools easier to find and use",
        "body": "I simplified the color menus and rearranged the controls around the tools I use most. The brush behavior needs the same attention. Moving from three sizes to a slider exposed sizes where spray stopped working; at other points its particles looked more like pellets. Refining those details changes the drawing experience. Spray still does not build up continuously during a sustained press, and fill can struggle with complex boundaries. I also replaced a finger offset that was difficult for me to coordinate with a direct-contact guide, which I haven’t tried yet."
      },
      {
        "title": "A separate place to practice",
        "body": "I think newcomers should probably try untimed drawing first, even though I’m highlighting timed mode because it’s new. Free draw uses the same tools on a separate canvas that saves on the device. A person can start blank or continue from a flattened copy of a submitted drawing without changing the gallery original. The drawing guide explains the tools, but the right path from first visit to comfortable drawing is still something to explore."
      },
      {
        "title": "Returning to an unfinished drawing",
        "body": "The daily rhythm creates three different entry states. In the implementation, a fresh day begins with instructions, an unfinished drawing resumes in the editor, and a completed day opens the submitted work. Drafts remain attached to their original prompt date, so yesterday’s unfinished canvas does not become today’s entry. Recovery and navigation are part of making a short daily visit dependable."
      },
      {
        "title": "Making publication explicit",
        "body": "Downloading a PNG keeps a local image. Saving to the gallery publishes the day’s final entry after confirmation. The sharing code supports a link back to the drawing or an artwork-focused image card with the creator, prompt, and date. Link previews use the Sketchlet logo; image cards omit ratings. A download fallback supports browsers that cannot copy images. These separate actions make the destination of a drawing explicit."
      }
    ],
    "nextSteps": [
      "Refine the drawing experience as development resumes; specific tool priorities remain open.",
      "Try the new touch guide and test drawing with a trackpad.",
      "Explore onboarding and round lengths while preserving the surprise of each prompt reveal."
    ]
  },  {
    slug: "bakerparks",
    visibility: "listed",
    stage: "featured",
    priority: 20,
    category: "Civic information",
    label: "Case study",
    emphasisLabel: "Active",
    title: "Baker Parks",
    description: "An independent San Francisco parks guide that turns fragmented public data into searchable destinations, with source links, original photography, and paths to official services.",
    cardImage: {"src": "/assets/projects/baker-parks.jpg", "alt": "Park search and activity choices on the Baker Parks homepage."},
    screenshots: [{"src":"/assets/projects/baker-parks.jpg","alt":"Park search and activity choices on the Baker Parks homepage.","caption":"Park search and activity choices on the Baker Parks homepage.","href":"https://bakerparks.vercel.app/","capturedOn":"2026-11-07"},{"src":"/assets/projects/baker-parks-explore.jpg","alt":"Destination filters alongside a map of San Francisco parks.","caption":"Destination filters alongside a map of San Francisco parks.","href":"https://bakerparks.vercel.app/explore/?view=map","capturedOn":"2026-11-07"},{"src":"/assets/projects/baker-parks-destination.jpg","alt":"The 900 Innes destination page combines page navigation, location context, and original photography.","caption":"The 900 Innes destination page combines page navigation, location context, and original photography.","href":"https://bakerparks.vercel.app/parks/900-innes/","capturedOn":"2026-11-07"},{"src":"/assets/projects/baker-parks-transit.jpg","alt":"Destination-level transit information includes nearby stops, scheduled-data context, and official-service links.","caption":"Destination-level transit information includes nearby stops, scheduled-data context, and official-service links.","href":"https://bakerparks.vercel.app/parks/900-innes/#transit","capturedOn":"2026-11-07"}],
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
    summary: "Baker Parks, called SF Parks Explorer in the application and repository, began after I read an article about frustration with the SF Parks website. It brings selected public records, park information, maps, and scheduled transit context into one discovery experience. The aim is to help residents and visitors understand their options while keeping policies, registration, permits, and reservations with the City of San Francisco.",
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
    priority: 90,
    category: "Local discovery",
    label: "Case study",
    emphasisLabel: "Background",
    title: "Mike's List",
    description:
      "A local discovery experiment moving toward an information-rich map of venues hosting entertainment today, this week, or another selected period.",
    cardImage: {"src":"https://images.unsplash.com/photo-1783979719753-bf9b21f7a8e4?auto=format&fit=crop&w=1200&h=750&q=80","alt":"An empty tiki lounge with bamboo walls, warm lamps, and tropical-patterned seating."},
    detailHref: "/projects/mikeslist",
    repoHref: "https://github.com/michael-baker-content/mikeslist",
    tone: "spotlight",
    status: "Background · venue-focused revision planned",
    timeline: "2026",
    role: "Product design, data modeling, prototype engineering",
    collaborators: ["Michael Baker", "Codex"],
    tools: ["JavaScript", "Local data stores", "Wikidata", "Google Places"],
    evidence: ["Venue records", "Maintenance lessons", "Source trails"],
    metrics: [
      { label: "Primary challenge", value: "Freshness" },
      { label: "Next focus", value: "Venues" },
      { label: "Status", value: "Background" },
    ],
    summary:
      "Mike’s List began as a local show-discovery tool and became a lesson in the upkeep that event and artist information requires. Maintaining artist tracking is not practical for me. The next direction is to keep the venue list, remove artist tracking entirely, and build an information-rich map of places hosting entertainment today, this week, or another selected period. The focus shifts from researching artists to helping someone see where something is happening and learn about the venue.",
    problem:
      "Events content expires quickly. Last week's listings have little value, and each new week may introduce artists with very little overlap from the week before. The lower the profile of an event, the less likely algorithmically derived artist information is to be accurate.",
    outcome:
      "The current project demonstrated the value and cost of gathering local music information: useful discovery needs source tracking, correction, and human review. I have stopped updating the listings. A venue-map revision is planned, using the existing venue list and time filters to surface places with active entertainment events. Artist tracking has not yet been removed, and a manageable way to keep event timing current remains part of the work ahead.",
    decisions: [
      "Treat every show listing as time-sensitive content, not a durable evergreen record.",
      "Separate artists, venues, and events so reusable information can persist even when weekly event listings expire.",
      "Assume low-profile events need more human review because automated artist matching becomes less reliable as public data gets thinner.",
      "Make source trails and review states visible so the product does not pretend uncertain enrichment is finished editorial work.",
      "Keep the project in the background while planning a narrower venue-focused version that removes artist tracking.",
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
          "The venue list is the part I want to keep and expand into an information-rich map. Someone could choose today, this week, or another period and see which venues have entertainment events, then explore information about the places themselves. Artist profiles and enrichment would be removed from the scope. Time-sensitive event information still needs a reliable source and review process; narrowing the focus changes the maintenance problem rather than eliminating it.",
      },
    ],
    nextSteps: [
      "Use the existing venue list as the foundation for an information-rich map, removing artist tracking entirely.",
      "Explore time filters for venues with entertainment today, this week, or another selected period, alongside useful venue details.",
      "Identify a manageable source and review process for event dates, venue details, and official links before committing to ongoing coverage.",
    ],
  },
  {
    slug: "daily-games",
    visibility: "listed",
    stage: "supporting",
    priority: 60,
    category: "Daily games",
    label: "Case study",
    title: "Daily Games",
    description:
      "Sketchlet and Jacklet: two approaches to a daily game, from an open drawing prompt to a shared blackjack challenge.",
    cardImage: {"src":"https://images.unsplash.com/photo-1673892139721-e4f7cda4ba21?auto=format&fit=crop&w=1200&q=80","alt":"Playing cards and dice arranged together."},
    screenshots: [{"src":"/assets/projects/jacklet.jpg","alt":"A daily Jacklet hand, with score and strikes visible.","caption":"A daily Jacklet hand, with score and strikes visible.","href":"https://jacklet.vercel.app/","capturedOn":"2026-11-07"},{"src":"/assets/projects/sketchlet.jpg","alt":"Sketchlet’s daily invitation through drawing.","caption":"Sketchlet’s daily invitation through drawing.","href":"https://sketchlet.app/","capturedOn":"2026-11-07"},{"src":"/assets/projects/jacklet-rules.jpg","alt":"Jacklet’s rules explain strikes, scoring, jokers, and the shared daily reset.","caption":"Jacklet’s rules explain strikes, scoring, jokers, and the shared daily reset.","href":"https://jacklet.vercel.app/","capturedOn":"2026-11-07"},{"src":"/assets/projects/sketchlet-trio-sharing.jpg","alt":"Sketchlet’s expanded trio shows three responses to a progressively expanded daily prompt.","caption":"Sketchlet’s expanded trio shows three responses to a progressively expanded daily prompt.","href":"https://sketchlet.app/timed-gallery","capturedOn":"2026-11-07"}],
    detailHref: "/projects/daily-games",
    relatedLinks: [
      { label: "Play Sketchlet", href: "https://sketchlet.app" },
      { label: "Play Jacklet", href: "https://jacklet.vercel.app/" },
    ],
    tone: "coral",
    status: "Public games",
    timeline: "2026–present",
    role: "Game concepts, rules, and experience direction",
    collaborators: ["Michael Baker"],
    tools: ["JavaScript", "Canvas API", "Vercel"],
    evidence: ["Daily drawing prompt", "Daily blackjack deck", "Progress persistence"],
    metrics: [],
    summary:
      "Sketchlet and Jacklet explore two ways to give people a reason to play each day. Sketchlet starts with a shared drawing prompt and leaves the interpretation open. Jacklet turns blackjack into a daily score challenge with a shared deck and a limited run. Both use a daily boundary to give a small game a recognizable rhythm, with very different kinds of decisions inside it.",
    problem:
      "A daily game needs a clear invitation, understandable rules, and a satisfying stopping point. It also needs to respect interruptions and explain what changes tomorrow. The design challenge is to make that structure approachable while leaving enough room for expression or strategy to make the day's play interesting.",
    outcome:
      "The two public games offer contrasting daily experiences. Sketchlet combines drawing tools, a shared prompt, and a gallery. Jacklet offers one daily blackjack run, a score, and a one-to-five-star result. Its published rules specify the same deck each day, a midnight Eastern reset, and progress saved in the current browser. These are working game structures; repeat participation and their appeal to other players remain questions to explore.",
    decisions: [
      "Give each game a shared daily starting point: a drawing prompt in Sketchlet and a deck in Jacklet.",
      "Let Sketchlet emphasize interpretation and expression, while Jacklet emphasizes decisions within explicit scoring rules.",
      "Give a daily session a boundary: one final drawing submission in Sketchlet and one limited run in Jacklet.",
      "Preserve unfinished progress so an interruption does not have to end the day's play.",
      "Make the rules and reset behavior visible so players know what counts and when a new challenge begins.",
    ],
    sections: [
      {
        title: "Sketchlet: one prompt, many interpretations",
        body:
          "Sketchlet uses a common prompt to invite different responses. The drawing tools support the creative work, while a gallery gives the day's prompt a shared setting. A separate free-draw canvas leaves room to practice beyond the daily submission. Its individual case study covers the drawing tools, recovery, touch input, and publication decisions in more detail.",
      },
      {
        title: "Jacklet: one deck, a limited run",
        body:
          "Jacklet adapts blackjack into a points challenge without bets or splits. Three strikes end the run, and wins do not remove strikes. A win earns 100 points, each revealed card adds a point, and a loss costs 100. Players can spend points on jokers, with the price rising each purchase. That creates a decision about spending an existing score to try to extend the run.",
      },
      {
        title: "Making the daily boundary understandable",
        body:
          "Jacklet shows the day's date and a countdown to the next deck. Its rules explain the midnight Eastern reset, saved progress, and the action needed to maintain a streak. Sketchlet attaches unfinished drawings to their original prompt date. Each game needs to distinguish today's challenge from earlier work and explain what a player can return to.",
      },
      {
        title: "Two kinds of reward",
        body:
          "Sketchlet ends with an image a person has made and can share. Jacklet ends with a score and star result within a common daily challenge. The connection is the design of a small repeatable activity; the rewards differ because one game centers on expression and the other on card decisions. The next step is to see how other people understand and use those experiences.",
      },
    ],
    nextSteps: [
      "Add paired screenshots showing each game's starting state, play experience, and daily result.",
      "Observe new players learning the rules, returning after an interruption, and understanding the daily reset.",
      "Explore what makes people want to return, distinguishing personal enjoyment from evidence of repeat use by others.",
    ],
  },
  {
    slug: "making-tools",
    visibility: "listed",
    stage: "supporting",
    priority: 50,
    category: "Hobby tools",
    label: "Case study",
    emphasisLabel: "Active",
    title: "Making Tools",
    description:
      "A grouped case study about solving complex hobby problems with focused helper apps, from fantasy stats to RPG interfaces.",
    cardImage: {"src":"https://images.unsplash.com/photo-1781445561924-416a43d56adb?auto=format&fit=crop&w=1200&h=750&q=80","alt":"A colorful collage workspace with cut paper, scissors, and craft materials."},
    screenshots: [{"src":"/assets/projects/fantasy-baseball-roster.jpg","alt":"An owner roster turns a league’s total score into inspectable player statistics.","caption":"An owner roster turns a league’s total score into inspectable player statistics.","href":"https://michael-baker-content.github.io/fantasy-baseball/?owner=Baker","capturedOn":"2026-11-07"},{"src":"/assets/projects/saske-medicine.jpg","alt":"A character-specific Medicine panel brings a recurring tabletop workflow into one view.","caption":"A character-specific Medicine panel brings a recurring tabletop workflow into one view.","href":"https://michael-baker-content.github.io/saske/","capturedOn":"2026-11-07"},{"src":"/assets/projects/cine2helper-film-details.jpg","alt":"Film credits provide supporting detail within a focused game-helper lookup.","caption":"Film credits provide supporting detail within a focused game-helper lookup.","href":"https://cine2helper.vercel.app/","capturedOn":"2026-11-07"}],
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
      "Personal hobbies can create surprisingly serious software problems. Fantasy leagues need statistics, rankings, standings, and support for small rule adjustments. Tabletop role-playing characters carry a dense web of stats and actions. Trivia and card games need practice loops, feedback, and enough structure to help users improve.",
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
          "The fantasy basketball dashboard became the starting point for a baseball dashboard built for another real-life league. Together they pushed me toward more Python programming and closer attention to statistics, scoring, and update timing. The Fantasy Sports Dashboards case study covers that progression in detail; here, they illustrate how a personal hobby can lead to substantial data and interface work.",
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
    priority: 110,
    category: "Dashboard",
    label: "Case study",
    title: "Fantasy Sports Dashboards",
    description:
      "Fantasy league dashboards that grew from basketball into baseball, with a hosting journey from Railway through PythonAnywhere to GitHub Pages.",
    cardImage: {"src":"/assets/projects/fantasy-baseball-roster.jpg","alt":"Team Baker’s roster submenu with individual player statistics."},
    screenshots: [{"src":"/assets/projects/fantasy-baseball.jpg","alt":"The baseball dashboard’s saved 2026 standings and category points.","caption":"The baseball dashboard’s saved 2026 standings and category points.","href":"https://michael-baker-content.github.io/fantasy-baseball/","capturedOn":"2026-11-07"},{"src":"/assets/projects/fantasy-baseball-roster.jpg","alt":"Team Baker’s roster breaks the saved league result into individual player statistics.","caption":"Team Baker’s roster breaks the saved league result into individual player statistics.","href":"https://michael-baker-content.github.io/fantasy-baseball/?owner=Baker","capturedOn":"2026-11-07"},{"src":"/assets/projects/fantasy-baseball-scoring.jpg","alt":"The leaderboard explanation identifies category points and which statistics favor lower values.","caption":"The leaderboard explanation identifies category points and which statistics favor lower values.","href":"https://michael-baker-content.github.io/fantasy-baseball/","capturedOn":"2026-11-07"}],
    detailHref: "/projects/nba-roto-tracker",
    appHref: "https://michael-baker-content.github.io/fantasy-baseball/",
    repoHref: "https://github.com/michael-baker-content/fantasy-baseball",
    relatedLinks: [{ label: "Earlier NBA repository · includes baseball adaptation work", href: "https://github.com/michael-baker-content/nba-roto-tracker" }],
    tone: "blue",
    status: "Seasonal projects · baseball results archived",
    timeline: "2026",
    role: "League requirements, interface direction, and publishing workflow; coding primarily by Codex",
    collaborators: ["Michael Baker", "Codex"],
    tools: ["Python", "JavaScript", "MLB Stats API", "Railway", "PythonAnywhere", "GitHub Pages", "GitHub Actions"],
    evidence: ["Basketball-to-baseball adaptation", "Hosting evolution", "Automated publishing"],
    metrics: [],
    summary:
      "These dashboards grew out of fantasy basketball and baseball leagues using familiar fantasy rules with small adjustments. Basketball provided the foundation for the baseball project shown here. Along the way, hosting moved from Railway to PythonAnywhere to GitHub Pages. Finding a practical way to keep a seasonal dashboard available became as interesting as building the standings, and introduced me to the possibilities of GitHub Actions.",
    problem:
      "The league rules are largely conventional; the challenge is making standings, roster contributions, and player statistics easy to inspect. A seasonal project also needs a sustainable home. I wanted the results to remain available after the competition ended without an ongoing hosting bill or repeated attention just to keep the site online.",
    outcome:
      "The baseball dashboard publishes standings, owner rosters, and searchable player statistics as a static website on GitHub Pages. Its season is now in archival mode, preserving saved results with scheduled statistics checks disabled in the project configuration. The basketball dashboard is seasonal: demand for its results falls away after the competition ends, and I plan to revisit it when the basketball playoffs return. Its repository remains the foundation of the baseball project and contains adaptation work alongside basketball material.",
    decisions: [
      "Use the basketball dashboard as the starting point for baseball, adapting the statistics and small league-specific rule adjustments.",
      "Keep standings and roster detail connected so a league member can inspect the performances behind a score.",
      "Separate Python data preparation from static publishing so the site can remain available on GitHub Pages without a running Python server.",
      "Distinguish unavailable statistics from zero results, and make category direction and tied scores explicit.",
      "Use GitHub Actions for statistics and publishing workflows, then preserve completed results when the competition ends.",
    ],
    sections: [
      {
        title: "Basketball: the starting point",
        body:
          "The basketball project established the idea of a dedicated league dashboard. I specified the league requirements and small rule adjustments and directed the interface and workflow; Codex handled most of the coding. I then used that foundation for baseball, adapting the statistics, rosters, and standings to a different sport. Some baseball adaptation work remains in the NBA repository, so its current contents span both sports. The separate baseball repository is the source for the dashboard shown in this case study.",
      },
      {
        title: "Baseball: adapting the model",
        body:
          "Baseball introduces separate hitting and pitching categories, including rates where lower values are better. The dashboard supports configurable owners and rosters, category points, and tied rankings. A player without an appearance is different from a player who appeared and recorded zero; rates without a denominator remain unavailable. These distinctions matter because display choices can otherwise misrepresent the competition.",
      },
      {
        title: "Exploring the player pool",
        body:
          "The baseball Player Stats pages provide search, sorting, and filters for team, owner, position, and minimum playing time. Saved regular-season and postseason ranges support different questions. Roster pages explain an owner's results, while the wider player pool supports comparison. Manual position eligibility and review-sheet selections remain separate from routine statistics updates.",
      },
      {
        title: "Finding a sustainable home",
        body:
          "The hosting journey went from Railway to PythonAnywhere and then GitHub Pages. In my setup, Railway brought monthly fees, while PythonAnywhere required periodic attention to keep the site available. GitHub Pages offered a way to leave the published results online at no hosting cost. Moving to a static website meant separating the work of retrieving and calculating statistics from the pages people browse. That fit a seasonal project: update the data while games are happening, then leave the results available afterward.",
      },
      {
        title: "Updating and preserving results",
        body:
          "Python scripts prepare baseball statistics and publish JSON for the static website. GitHub Actions became a way to connect that preparation to publication: the statistics workflow checks completed games and scoring corrections, while a separate deployment workflow can publish website changes. This project helped spark my interest in what Actions can offer beyond hosting the code. The current archive configuration disables scheduled statistics checks while retaining the season’s saved results.",
      },
    ],
    nextSteps: [
      "Add baseball roster and player-statistics screenshots to complement the saved standings view.",
      "Document a worked scoring example that connects player totals, category points, ties, and overall rank.",
      "Revisit the basketball dashboard when the playoffs return, separating basketball-specific material from the baseball adaptation work.",
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
    cardImage: {"src":"/assets/projects/cine2helper-film-details.jpg","alt":"Cine2Helper’s film-details overlay with cast and crew information."},
    screenshots: [{"src":"/assets/projects/cine2helper.jpg","alt":"Cine2Helper homepage introducing film connections and win conditions.","caption":"The movie companion introduces browsing by game win conditions.","href":"https://cine2helper.vercel.app/","capturedOn":"2026-11-07"},{"src":"/assets/projects/cine2helper-results.jpg","alt":"Cine2Helper film results with person filters, sorting, and overlapping win conditions.","caption":"Film results connect filtering and sorting with related game conditions.","href":"https://cine2helper.vercel.app/","capturedOn":"2026-11-07"},{"src":"/assets/projects/cine2helper-film-details.jpg","alt":"A film-information overlay exposes cast and crew without leaving the condition-results view.","caption":"A film-information overlay exposes cast and crew without leaving the condition-results view.","href":"https://cine2helper.vercel.app/","capturedOn":"2026-11-07"}],
    appHref: "https://cine2helper.vercel.app/",
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
    cardImage: {"src": "/assets/projects/bakerversity.jpg", "alt": "The Bakerversity homepage introduces free technical courses."},
    screenshots: [{"src":"/assets/projects/bakerversity.jpg","alt":"The Bakerversity homepage introduces free technical courses.","caption":"The Bakerversity homepage introduces free technical courses.","href":"https://bakerversity.vercel.app/","capturedOn":"2026-11-07"},{"src":"/assets/projects/bakerversity-course-outline.jpg","alt":"The course overview introduces free access and the course-content outline.","caption":"The course overview introduces free access and the course-content outline.","href":"https://bakerversity.vercel.app/courses/basic-skills-for-localization-engineering","capturedOn":"2026-11-07"},{"src":"/assets/projects/bakerversity-lesson.jpg","alt":"A Unicode normalization lesson pairs technical reading with persistent course navigation.","caption":"A Unicode normalization lesson pairs technical reading with persistent course navigation.","href":"https://bakerversity.vercel.app/courses/basic-skills-for-localization-engineering/2/lesson-23-diacritics-combining-characters-unicode-normalization","capturedOn":"2026-11-07"}],
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
    cardImage: {"src": "/assets/projects/bakerlinks.jpg", "alt": "A customized BakerLinks profile with project links and a cloud background."},
    screenshots: [{"src":"/assets/projects/bakerlinks.jpg","alt":"A customized BakerLinks profile with project links and a cloud background.","caption":"A customized BakerLinks profile with project links and a cloud background.","href":"https://bakerlinks.com/michael","capturedOn":"2026-11-07"},{"src":"/assets/projects/bakerlinks-about.jpg","alt":"The About Me tab adds a written introduction alongside the profile’s links.","caption":"The About Me tab adds a written introduction alongside the profile’s links.","href":"https://bakerlinks.com/michael","capturedOn":"2026-11-07"}],
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
    priority: 120,
    category: "Interactive tracker",
    label: "Case study",
    title: "Saske · Pathfinder Session Tracker",
    description:
      "A personal Pathfinder tracker whose next challenge is making phone use simpler and more pleasant than a plain-text session note.",
    cardImage: {"src":"/assets/projects/saske-companion.jpg","alt":"Haki’s companion panel with health, attacks, statistics, and barding."},
    screenshots: [{"src":"/assets/projects/saske.jpg","alt":"Saske’s level 9 combat panel with core statistics, actions, and weapon cards.","caption":"The live tracker shows Saske at level 9, with combat information grouped for play.","href":"https://michael-baker-content.github.io/saske/","capturedOn":"2026-11-07"},{"src":"/assets/projects/saske-medicine.jpg","alt":"The Skills panel brings the Medicine tool’s targets, treatment choices, and roll controls together.","caption":"The Skills panel brings the Medicine tool’s targets, treatment choices, and roll controls together.","href":"https://michael-baker-content.github.io/saske/","capturedOn":"2026-11-07"},{"src":"/assets/projects/saske-companion.jpg","alt":"Haki’s companion panel separates health, core statistics, attacks, and equipped barding.","caption":"Haki’s companion panel separates health, core statistics, attacks, and equipped barding.","href":"https://michael-baker-content.github.io/saske/","capturedOn":"2026-11-07"}],
    detailHref: "/projects/saske",
    appHref: "https://michael-baker-content.github.io/saske/",
    repoHref: "https://github.com/michael-baker-content/saske",
    tone: "blue",
    status: "Public personal tool · further work planned",
    timeline: "2026–present",
    role: "Character requirements, interface direction, and play workflow",
    collaborators: ["Michael Baker"],
    tools: ["HTML", "CSS", "JavaScript", "JSON", "Browser storage", "GitHub Pages"],
    evidence: ["Level 9 character", "Companion tracking", "Medicine workflow", "Session reports"],
    metrics: [],
    summary:
      "Saske is a session tracker for my level 9 Pathfinder 2E character, Saske Ullaell, and her animal companion, Haki. I like the interface, but during play it still has not become more useful to me than a plain-text note on my phone. Moving through menus on a small screen takes effort that the extra features do not yet justify. The next phase is about making the experience much simpler and more pleasant to use.",
    problem:
      "During a tabletop session, I need the right information with very little navigation. Combat, companion, skills, inventory, and reference panels organize the material, but switching among them on my phone is less convenient than scanning a simple note. A tablet might give the interface more room, but I do not own one. The design needs to work for the device I actually bring to the table.",
    outcome:
      "The live tracker displays Saske and Haki at level 9, with combat information, conditions, medicine tools, inventory, notes, and local session storage. Those capabilities have not yet made it my preferred tool during play. My next goal is to reduce the effort of finding and using information on a phone. A ground-up rebuild is one possibility, informed by what I have learned from this version.",
    decisions: [
      "Build around my own character and actual sessions rather than trying to support every Pathfinder character.",
      "Reconsider the panel structure where moving between menus costs more effort than scanning a plain-text note.",
      "Expose the components behind calculated values so the numbers can be understood and checked.",
      "Keep session state in the browser and character defaults in a separate data file.",
      "Judge future changes against actual phone use during a session, with simplicity and a pleasant experience as the priorities.",
    ],
    sections: [
      {
        title: "A character I actually play",
        body:
          "Saske is a ranger with a medicine role and an animal companion. That creates distinct tasks: managing her actions and attacks, checking Haki’s state, and treating party members. The tracker brings those tasks together, but my own use has revealed a gap between having the features and wanting to navigate them during play. The character is now level 9; improving the experience matters more than simply adding another level of data.",
      },
      {
        title: "Making changing values understandable",
        body:
          "The tracker brings together core statistics, saves, weapon cards, and conditions. The implementation includes condition-adjusted values and explanations of attack calculations. The design goal is to make the effects of a change visible without requiring a player to reconstruct every modifier during a turn. The displayed calculations still need checking against the character and applicable rules as the tool evolves.",
      },
      {
        title: "Medicine and companion workflows",
        body:
          "Haki has a dedicated panel for health, conditions, attacks, and barding. Medicine tools bring party targets, treatment choices, and Battle Medicine cooldowns together. These are specific workflows within my character’s role, where a generic list of skills would leave much of the session management to memory.",
      },
      {
        title: "The plain-text benchmark",
        body:
          "A plain-text note on my phone is the practical benchmark. It gives me information without making me decide which menu to open. I still like Saske’s visual interface, and it might feel more comfortable on a tablet, but that is not the device I have. Further development will focus on making the essential actions dead simple and pleasant on a phone. I may rebuild from the ground up rather than keep extending the current structure; that is a direction to explore, not a decision already made.",
      },
    ],
    nextSteps: [
      "Identify the information and actions I reach for during play, using my plain-text phone note as the comparison.",
      "Explore a simpler phone experience with less menu navigation, keeping only the interactions that earn their place.",
      "Consider a ground-up rebuild informed by this version, and try the simpler approach during actual sessions before expanding it.",
    ],
  },
  {
    slug: "notion-clean",
    visibility: "listed",
    stage: "background",
    priority: 130,
    category: "Workflow utility",
    label: "Case study",
    title: "Notion Archive Cleaner",
    description:
      "A utility for stripping Notion's auto-appended UUIDs from exported zip archives.",
    cardImage: stockImage("photo-1450101499163-c8848c66ca85", "Paper files and folders arranged for archival organization."),
    screenshots: [{"src":"/assets/projects/notion-clean-interface.jpg","alt":"The archive cleaner provides a ZIP drop zone and explains that processing stays in the browser.","caption":"The archive cleaner provides a ZIP drop zone and explains that processing stays in the browser.","href":"https://michael-baker-content.github.io/notion-clean/","capturedOn":"2026-11-07"}],
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
    priority: 70,
    category: "Technical writing",
    label: "Case study",
    title: "Development Journal",
    description:
      "Development notes from my independent projects: how they work, the choices behind them, and what changes along the way.",
    cardImage: {"src": "/assets/projects/development-journal.jpg", "alt": "The journal index with search, topic tags, and development notes."},
    screenshots: [{"src":"/assets/projects/development-journal.jpg","alt":"The journal index with search, topic tags, and development notes.","caption":"The journal index with search, topic tags, and development notes.","href":"https://michael-baker-content.github.io/blog/","capturedOn":"2026-11-07"},{"src":"/assets/projects/development-journal-article.jpg","alt":"A development article presents its introduction, topic links, and repository link.","caption":"A development article presents its introduction, topic links, and repository link.","href":"https://michael-baker-content.github.io/blog/returning-to-bakerlinks/","capturedOn":"2026-11-07"},{"src":"/assets/projects/development-journal-tag.jpg","alt":"The interface-design topic page collects related writing across projects.","caption":"The interface-design topic page collects related writing across projects.","href":"https://michael-baker-content.github.io/tags/interface-design/","capturedOn":"2026-11-07"}],
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
      "Development Journal is my customized Astro blog, hosted on GitHub Pages. It brings together technical walkthroughs, implementation details, and reflections on my independent projects, explaining how they work and the decisions behind them. The writing follows the work as it develops, from exploring an idea to revisiting an interface or solving a data problem.",
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
