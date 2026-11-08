// Curated navigation labels, separate from project status and display priority.
export const capabilityLabels = {
  data: "Data and APIs",
  interaction: "Design and interaction",
  content: "Content and publishing",
};

const projectCapabilities = {
  portfolio: ["content", "interaction"],
  sketchlet: ["interaction"],
  "daily-games": ["interaction"],
  bakerparks: ["data", "interaction", "content"],
  mikeslist: ["data", "content"],
  "making-tools": ["data", "interaction"],
  greeting: ["interaction"],
  "nba-roto-tracker": ["data", "interaction"],
  cine2helper: ["data", "interaction"],
  bakerversity: ["content", "interaction"],
  bakerlinks: ["content", "interaction"],
  saske: ["data", "interaction"],
  "notion-clean": ["content"],
  "github-repo-journal": ["content"],
};

export function capabilitiesForProject(slug) {
  return projectCapabilities[slug] || [];
}
