import { capabilityLabels, capabilitiesForProject } from "../data/projectCapabilities.js";

export function readProjectFilters(search = "") {
  const params = new URLSearchParams(search);
  const capability = params.get("capability");
  return {
    capability: Object.hasOwn(capabilityLabels, capability) ? capability : "all",
    query: params.get("q") || "",
    sort: params.get("sort") === "title" ? "title" : "priority",
  };
}

export function projectFiltersSearch(search, filters) {
  const params = new URLSearchParams(search);
  for (const key of ["capability", "q", "sort"]) params.delete(key);
  if (filters.capability !== "all") params.set("capability", filters.capability);
  if (filters.query.trim()) params.set("q", filters.query);
  if (filters.sort === "title") params.set("sort", "title");
  const value = params.toString();
  return value ? "?" + value : "";
}

export function filterProjects(projects, { capability, query, sort }) {
  const words = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  return projects.filter((project) => {
    if (capability !== "all" && !capabilitiesForProject(project.slug).includes(capability)) return false;
    const text = [project.title, project.description, project.category, project.status,
      project.role, ...(project.tools || []), ...(project.evidence || []),
      ...capabilitiesForProject(project.slug).map((key) => capabilityLabels[key])]
      .join(" ").toLocaleLowerCase();
    return words.every((word) => text.includes(word));
  }).sort((first, second) => sort === "title"
    ? first.title.localeCompare(second.title) || first.priority - second.priority
    : first.priority - second.priority);
}
