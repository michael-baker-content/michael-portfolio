import React, { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { capabilityLabels } from "../data/projectCapabilities.js";
import { filterProjects, projectFiltersSearch, readProjectFilters } from "../lib/projectFilters.js";
import { ProjectCard } from "../components/ProjectCard.jsx";
import { Link } from "../components/Link.jsx";

export function CaseStudiesPage({ content }) {
  const { listedProjects } = content;
  const [filters, setFilters] = useState(() => readProjectFilters(window.location.search));
  const { capability, query, sort } = filters;

  useEffect(() => {
    const restore = () => setFilters(readProjectFilters(window.location.search));
    window.addEventListener("popstate", restore);
    return () => window.removeEventListener("popstate", restore);
  }, []);

  function updateFilters(changes, replace = false) {
    const next = { ...filters, ...changes };
    const url = window.location.pathname + projectFiltersSearch(window.location.search, next) + window.location.hash;
    const current = window.location.pathname + window.location.search + window.location.hash;
    if (url !== current) window.history[replace ? "replaceState" : "pushState"]({}, "", url);
    setFilters(next);
  }

  const filteredProjects = useMemo(() => filterProjects(listedProjects, filters), [listedProjects, filters]);
  const hasFilters = capability !== "all" || Boolean(query.trim());
  const clearFilters = () => updateFilters({ capability: "all", query: "" });

  return (
    <main id="main-content" className="bg-paper">
      <section className="border-b border-ink/15 bg-paper px-4 py-20 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <Link className="editorial-link" href="/">Back home</Link>
          <div className="mt-10 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="eyebrow">Case studies</p>
              <h1 className="display-type mt-3 text-[clamp(3.5rem,8vw,8rem)] leading-[0.86]">Projects with a point of view.</h1>
            </div>
            <p className="text-lg font-bold leading-8 text-muted">
              Websites, tools, and experiments. Explore a capability, search for something specific, or browse the collection.
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell py-10">
        <div className="editorial-panel p-5">
          <fieldset>
            <legend className="mb-3 text-sm font-bold">Explore by capability</legend>
            <div className="flex flex-wrap gap-2">
              {[["all", "All projects"], ...Object.entries(capabilityLabels)].map(([key, label]) => (
                <button key={key} type="button" aria-pressed={capability === key}
                  className={"rounded-full border px-4 py-3 text-sm font-bold " + (capability === key ? "border-portfolioBlue bg-portfolioBlue text-white" : "border-ink/25 bg-white text-ink hover:border-portfolioBlue")}
                  onClick={() => updateFilters({ capability: key })}>{label}</button>
              ))}
            </div>
          </fieldset>
          <div className="mt-5 grid gap-4 sm:grid-cols-[minmax(0,1fr)_11rem]">
            <label className="block min-w-0">
              <span className="text-xs font-black uppercase text-ink/65">Search projects</span>
              <span className="mt-2 flex min-h-12 items-center gap-2 border border-ink/30 bg-white/70 px-3 focus-within:ring-2 focus-within:ring-portfolioBlue">
                <Search size={18} aria-hidden="true" className="shrink-0" />
                <input className="min-w-0 w-full bg-transparent font-bold outline-none" type="search"
                  value={query} onChange={(event) => updateFilters({ query: event.target.value }, true)}
                  placeholder="Project, topic, or tool" />
              </span>
            </label>
            <label className="block">
              <span className="text-xs font-black uppercase text-ink/65">Sort</span>
              <select className="editorial-input" value={sort} onChange={(event) => updateFilters({ sort: event.target.value })}>
                <option value="priority">Recommended</option>
                <option value="title">A–Z</option>
              </select>
            </label>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
            <p role="status" aria-live="polite" className="text-muted">
              {filteredProjects.length} of {listedProjects.length} projects
              {capability !== "all" ? " · " + capabilityLabels[capability] : ""}
            </p>
            {hasFilters ? <button type="button" className="editorial-link min-h-11" onClick={clearFilters}>Clear filters</button> : null}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
        {filteredProjects.length === 0 ? (
          <div className="editorial-panel mt-8 p-8 text-center">
            <h2 className="display-type text-4xl leading-none">No projects found.</h2>
            <p className="mt-3 font-semibold text-muted">Try another search or clear the filters to browse all projects.</p>
          </div>
        ) : null}
      </section>
    </main>
  );
}
