"use client";

import Link from "next/link";
import { Button } from "@/components/button";
import { GitHubIcon, ChevronRight } from "@/components/icons";
import { getFeaturedProjects } from "@/data/projects";

const ACCENT_PALETTE = [
  { bar: "from-fuchsia-500 to-rose-500", bg: "from-fuchsia-500/[0.08]", border: "hover:border-fuchsia-500", shadow: "hover:shadow-fuchsia-500/20" },
  { bar: "from-slate-400 to-blue-500",   bg: "from-slate-500/[0.08]",   border: "hover:border-slate-400",   shadow: "hover:shadow-slate-400/20"   },
  { bar: "from-orange-500 to-rose-400",  bg: "from-orange-500/[0.08]",  border: "hover:border-orange-500",  shadow: "hover:shadow-orange-500/20"  },
  { bar: "from-lime-500 to-emerald-400", bg: "from-lime-500/[0.08]",    border: "hover:border-lime-500",    shadow: "hover:shadow-lime-500/20"    },
  { bar: "from-indigo-500 to-purple-500",bg: "from-indigo-500/[0.08]",  border: "hover:border-indigo-500",  shadow: "hover:shadow-indigo-500/20"  },
  { bar: "from-teal-500 to-cyan-400",    bg: "from-teal-500/[0.08]",    border: "hover:border-teal-500",    shadow: "hover:shadow-teal-500/20"    },
  { bar: "from-amber-500 to-orange-400", bg: "from-amber-500/[0.08]",   border: "hover:border-amber-500",   shadow: "hover:shadow-amber-500/20"   },
];

const featured = getFeaturedProjects();

export function Showcase() {
  return (
    <section id="showcase" className="py-24 px-6 bg-bg-paper">
      <div className="text-center max-w-[620px] mx-auto mb-12">
        <span className="inline-block text-xs font-semibold text-pink uppercase tracking-widest mb-4">
          Showcase & Hackathon Alumni
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          LI.FI-powered winners
        </h2>
        <p className="text-[17px] text-text-secondary">
          Standout projects from hackathon winners and accelerator alumni — all built on LI.FI.
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((project, i) => {
          const palette = ACCENT_PALETTE[i % ACCENT_PALETTE.length];
          return (
            <Link
              key={project.slug}
              href={`/showcase/${project.slug}`}
              className={`bg-gradient-to-br ${palette.bg} to-transparent bg-bg-card rounded-xl border border-border p-8 flex flex-col text-left transition-all duration-200 relative overflow-hidden ${palette.border} hover:-translate-y-0.5 hover:shadow-[0_8px_30px] ${palette.shadow} group`}
            >
              <div className={`absolute top-0 left-0 right-0 h-[3px] opacity-80 group-hover:opacity-100 transition-opacity bg-gradient-to-r ${palette.bar}`} />

              <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-wider text-text-secondary mb-3">
                {project.hackathon}
                {project.place ? ` · ${project.place}` : ""}
              </span>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow line-clamp-3">
                {project.tagline}
              </p>

              <div className="bg-bg-elevated rounded-lg p-4 mt-auto">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-pink mb-1">
                  LI.FI Integration
                </span>
                <p className="text-[13px] text-text-secondary leading-relaxed line-clamp-3">
                  {project.lifiIntegration}
                </p>
              </div>

              <div className="flex gap-4 mt-6 pt-4 border-t border-border items-center justify-between">
                <div className="flex gap-4">
                  {project.github && (
                    <span
                      onClick={(e) => { e.preventDefault(); window.open(project.github, "_blank"); }}
                      className="inline-flex items-center gap-1 text-[13px] font-medium text-text-secondary hover:text-pink transition-colors"
                    >
                      <GitHubIcon className="opacity-70 group-hover:opacity-100" />
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

      <div className="text-center mt-10">
        <Button href="/showcase" variant="secondary">
          View all projects
          <ChevronRight />
        </Button>
      </div>
    </section>
  );
}
