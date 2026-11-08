import React, { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { buildScreenshotSlides } from "../lib/screenshotSlides.js";

export function ScreenshotGallery({ screenshots, title }) {
  const slides = useMemo(() => buildScreenshotSlides(screenshots), [screenshots]);
  const [active, setActive] = useState(0);
  const [height, setHeight] = useState();
  const track = useRef(null);
  const panels = useRef([]);
  const selected = slides[active];

  useEffect(() => {
    const panel = panels.current[active];
    if (!panel) return;
    const observer = new ResizeObserver(() => setHeight(panel.getBoundingClientRect().height));
    observer.observe(panel);
    return () => observer.disconnect();
  }, [active, slides]);

  useEffect(() => {
    const viewport = track.current;
    if (!viewport) return;
    let previousWidth = viewport.clientWidth;
    const observer = new ResizeObserver(() => {
      if (viewport.clientWidth === previousWidth) return;
      previousWidth = viewport.clientWidth;
      viewport.scrollTo({ left: active * viewport.clientWidth, behavior: "instant" });
    });
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [active]);

  function goTo(index) {
    const next = Math.max(0, Math.min(slides.length - 1, index));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.current.scrollTo({ left: next * track.current.clientWidth, behavior: reduced ? "instant" : "smooth" });
  }

  return (
    <section className="page-shell border-t border-ink/15 py-12" aria-labelledby="project-screenshots">
      <p className="eyebrow">Project views</p>
      <div className="screenshot-gallery-heading">
        <h2 id="project-screenshots" className="text-3xl">A closer look.</h2>
        {slides.length > 1 ? <div className="screenshot-gallery-controls">
          <button type="button" aria-label="Previous screenshot" disabled={active === 0} onClick={() => goTo(active - 1)}><ArrowLeft size={20} /></button>
          <span role="status" aria-live="polite" aria-atomic="true">{active + 1} of {slides.length}</span>
          <button type="button" aria-label="Next screenshot" disabled={active === slides.length - 1} onClick={() => goTo(active + 1)}><ArrowRight size={20} /></button>
        </div> : null}
      </div>
      <div className="screenshot-gallery" role="region" aria-roledescription="carousel" aria-label={title + " screenshots"}>
        <div className="screenshot-track" ref={track} style={height ? { height } : undefined}
          tabIndex={slides.length > 1 ? 0 : undefined} aria-label="Screenshot slides"
          onScroll={() => { const node = track.current; setActive(Math.max(0, Math.min(slides.length - 1, Math.round(node.scrollLeft / node.clientWidth)))); }}
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget) return;
            const next = event.key === "ArrowRight" ? active + 1 : event.key === "ArrowLeft" ? active - 1 : event.key === "Home" ? 0 : event.key === "End" ? slides.length - 1 : null;
            if (next !== null) { event.preventDefault(); goTo(next); }
          }}>
          {slides.map((slide, index) => (
            <div className="screenshot-slide" key={slide.id} ref={(node) => { panels.current[index] = node; }} role="group" aria-roledescription="slide"
              aria-label={(index + 1) + " of " + slides.length} aria-hidden={index !== active} inert={index !== active ? true : undefined}>
              <div className={"screenshot-views" + (slide.shots.length === 2 ? " screenshot-pair" : "")}>
                {slide.shots.map((shot, shotIndex) => <figure key={shot.src}>
                  {slide.shots.length === 2 ? <p className="screenshot-view-label">{shotIndex === 0 ? "Desktop" : "Mobile"}</p> : null}
                  <a className="screenshot-stage" href={shot.src} aria-label={"View full screenshot: " + shot.alt}>
                    <img src={shot.src} alt={shot.alt} loading={index === 0 ? "eager" : "lazy"} />
                  </a>
                  <figcaption className="screenshot-source">
                    <span>{shot.capturedOn ? "Captured " + shot.capturedOn : ""}</span>
                    {shot.href ? <a className="editorial-link" href={shot.href}>Source page <ExternalLink size={13} /></a> : null}
                  </figcaption>
                </figure>)}
              </div>
              <div className="screenshot-caption">
                {slide.comparison ? <><h3>{slide.title}</h3><p>{slide.comparison}</p></> : <p>{slide.title}</p>}
              </div>
            </div>
          ))}
        </div>
        {slides.length > 1 ? <div className="screenshot-thumbnails" aria-label="Choose a screenshot">
          {slides.map((slide, index) => <button key={slide.id} type="button" aria-label={"Show slide " + (index + 1) + ": " + slide.title}
            aria-current={active === index ? "true" : undefined} onClick={() => goTo(index)}>
            {slide.shots.map((shot) => <img src={shot.src} alt="" key={shot.src} loading="lazy" />)}
            <span>{index + 1}</span>
          </button>)}
        </div> : null}
      </div>
    </section>
  );
}
