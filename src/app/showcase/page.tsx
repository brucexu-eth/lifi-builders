"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { projects, HACKATHONS, ALL_TAGS } from "@/data/projects";
import { GlobeIcon, GitHubIcon, ChevronRight } from "@/components/icons";

const ACCENT_PALETTE = [
  { bar: "from-fuchsia-500 to-rose-500", bg: "from-fuchsia-500/[0.08]", border: "hover:border-fuchsia-500", shadow: "hover:shadow-fuchsia-500/20" },
  { bar: "from-slate-400 to-blue-500",   bg: "from-slate-500/[0.08]",   border: "hover:border-slate-400",   shadow: "hover:shadow-slate-400/20"   },
  { bar: "from-orange-500 to-rose-400",  bg: "from-orange-500/[0.08]",  border: "hover:border-orange-500",  shadow: "hover:shadow-orange-500/20"  },
  { bar: "from-lime-500 to-emerald-400", bg: "from-lime-500/[0.08]",    border: "hover:border-lime-500",    shadow: "hover:shadow-lime-500/20"    },
  { bar: "from-indigo-500 to-purple-500",bg: "from-indigo-500/[0.08]",  border: "hover:border-indigo-500",  shadow: "hover:shadow-indigo-500/20"  },
  { bar: "from-teal-500 to-cyan-400",    bg: "from-teal-500/[0.08]",    border: "hover:border-teal-500",    shadow: "hover:shadow-teal-500/20"    },
  { bar: "from-amber-500 to-orange-400", bg: "from-amber-500/[0.08]",   border: "hover:border-amber-500",   shadow: "hover:shadow-amber-500/20"   },
  { bar: "from-pink-500 to-rose-400",    bg: "from-pink-500/[0.08]",    border: "hover:border-pink-500",    shadow: "hover:shadow-pink-500/20"    },
  { bar: "from-emerald-500 to-green-400",bg: "from-emerald-500/[0.08]", border: "hover:border-emerald-500", shadow: "hover:shadow-emerald-500/20" },
  { bar: "from-violet-500 to-indigo-400",bg: "from-violet-500/[0.08]",  border: "hover:border-violet-500",  shadow: "hover:shadow-violet-500/20"  },
  { bar: "from-cyan-500 to-teal-400",    bg: "from-cyan-500/[0.08]",    border: "hover:border-cyan-500",    shadow: "hover:shadow-cyan-500/20"    },
  { bar: "from-rose-500 to-pink-400",    bg: "from-rose-500/[0.08]",    border: "hover:border-rose-500",    shadow: "hover:shadow-rose-500/20"    },
];

const PAGE_SIZE = 9;

// Assign palette by global index so colors are stable across filters
const paletteMap = new Map(
  projects.map((p, i) => [p.slug, ACCENT_PALETTE[i % ACCENT_PALETTE.length]])
);

export default function ShowcasePage() {
  const [hackathonFilter, setHackathonFilter] = useState<string>("all");
  const [tagFilter, setTagFilter] = useState<string>("all");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchHackathon =
        hackathonFilter === "all" || p.hackathonSlug === hackathonFilter;
      const matchTag =
        tagFilter === "all" || p.tags.includes(tagFilter);
      return matchHackathon && matchTag;
    });
  }, [hackathonFilter, tagFilter]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function setFilter(type: "hackathon" | "tag", value: string) {
    setPage(1);
    if (type === "hackathon") setHackathonFilter(value);
    else setTagFilter(value);
  }

  return (
    <>
      {/* Hero */}
      <section className="py-24 px-6 text-center">
        <span className="inline-block text-xs font-semibold text-pink uppercase tracking-widest mb-4">
          Builder Showcase
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          LI.FI-powered projects
        </h1>
        <p className="text-lg text-text-secondary max-w-[520px] mx-auto">
          Real projects from hackathon winners and accelerator alumni — all built on LI.FI.
        </p>
      </section>

      {/* Filters */}
      <section className="px-6 pb-10 border-b border-border">
        <div className="max-w-[1100px] mx-auto flex flex-wrap gap-6">
          {/* Hackathon filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-text-secondary mr-1">
              Hackathon
            </span>
            <button
              onClick={() => setFilter("hackathon", "all")}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                hackathonFilter === "all"
                  ? "bg-pink/15 text-pink border border-pink/30"
                  : "bg-bg-card border border-border text-text-secondary hover:text-text-primary"
              }`}
            >
              All
            </button>
            {HACKATHONS.map((h) => (
              <button
                key={h.slug}
                onClick={() => setFilter("hackathon", h.slug)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                  hackathonFilter === h.slug
                    ? "bg-pink/15 text-pink border border-pink/30"
                    : "bg-bg-card border border-border text-text-secondary hover:text-text-primary"
                }`}
              >
                {h.name}
              </button>
            ))}
          </div>

          {/* Tag filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-text-secondary mr-1">
              Tag
            </span>
            <button
              onClick={() => setFilter("tag", "all")}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                tagFilter === "all"
                  ? "bg-pink/15 text-pink border border-pink/30"
                  : "bg-bg-card border border-border text-text-secondary hover:text-text-primary"
              }`}
            >
              All
            </button>
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter("tag", tag)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                  tagFilter === tag
                    ? "bg-pink/15 text-pink border border-pink/30"
                    : "bg-bg-card border border-border text-text-secondary hover:text-text-primary"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Result count */}
        <div className="max-w-[1100px] mx-auto mt-4">
          <span className="text-xs text-text-secondary">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            {hackathonFilter !== "all" || tagFilter !== "all" ? " matching filters" : " total"}
          </span>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 px-6">
        <div className="max-w-[1100px] mx-auto">
          {paginated.length === 0 ? (
            <p className="text-text-secondary text-center py-24">No projects match the selected filters.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginated.map((project) => {
                const palette = paletteMap.get(project.slug)!;
                return (
                  <Link
                    key={project.slug}
                    href={`/showcase/${project.slug}`}
                    className={`bg-gradient-to-br ${palette.bg} to-transparent bg-bg-card rounded-xl border border-border p-8 flex flex-col text-left transition-all duration-200 relative overflow-hidden ${palette.border} hover:-translate-y-0.5 hover:shadow-[0_8px_30px] ${palette.shadow} group`}
                  >
                    <div className={`absolute top-0 left-0 right-0 h-[3px] opacity-80 group-hover:opacity-100 transition-opacity bg-gradient-to-r ${palette.bar}`} />

                    <div className="flex items-start justify-between mb-3">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                        {project.hackathon}
                        {project.place ? ` · ${project.place}` : ""}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow line-clamp-3">
                      {project.tagline}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-bg-elevated text-text-secondary border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-border items-center justify-between">
                      <div className="flex gap-4">
                        {project.website && (
                          <span
                            onClick={(e) => { e.preventDefault(); window.open(project.website, "_blank"); }}
                            className="inline-flex items-center gap-1 text-[13px] font-medium text-text-secondary hover:text-pink transition-colors"
                          >
                            <GlobeIcon className="opacity-70" />
                            Website
                          </span>
                        )}
                        {project.github && (
                          <span
                            onClick={(e) => { e.preventDefault(); window.open(project.github, "_blank"); }}
                            className="inline-flex items-center gap-1 text-[13px] font-medium text-text-secondary hover:text-pink transition-colors"
                          >
                            <GitHubIcon className="opacity-70" />
                            GitHub
                          </span>
                        )}
                      </div>
                      <span className="text-[12px] font-medium text-text-secondary group-hover:text-pink transition-colors flex items-center gap-1">
                        Details <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 rounded-lg text-sm font-medium border border-border text-text-secondary hover:text-text-primary hover:border-pink/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ← Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`w-9 h-9 rounded-lg text-sm font-semibold transition-colors ${
                    n === page
                      ? "bg-pink/15 text-pink border border-pink/30"
                      : "border border-border text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 rounded-lg text-sm font-medium border border-border text-text-secondary hover:text-text-primary hover:border-pink/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
