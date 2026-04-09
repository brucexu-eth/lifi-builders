import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getProjectBySlug, projects } from "@/data/projects";
import { Button } from "@/components/button";
import { GitHubIcon, ExternalLinkIcon, ChevronRight } from "@/components/icons";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | LI.FI Builders Showcase`,
    description: project.tagline,
  };
}

const PLACE_LABEL: Record<string, string> = {
  "1st": "🥇 1st Place",
  "2nd": "🥈 2nd Place",
  "3rd": "🥉 3rd Place",
  "4th": "4th Place",
  "5th": "5th Place",
};

export default async function ShowcaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  // Find adjacent projects in the same hackathon
  const sameHackathon = projects.filter(
    (p) => p.hackathonSlug === project.hackathonSlug && p.slug !== project.slug
  );
  const related = sameHackathon.slice(0, 3);

  return (
    <>
      {/* Back */}
      <div className="px-6 pt-32 pb-0 max-w-[900px] mx-auto">
        <Link
          href="/showcase"
          className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-pink transition-colors"
        >
          ← Back to Showcase
        </Link>
      </div>

      {/* Header */}
      <section className="px-6 pt-8 pb-16 max-w-[900px] mx-auto">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-pink bg-pink/10 border border-pink/20 px-2.5 py-1 rounded-full">
            {project.hackathon}
          </span>
          <span className="text-xs text-text-secondary">{project.hackathonDate}</span>
          {project.place && (
            <span className="text-xs font-semibold text-text-secondary bg-bg-card border border-border px-2.5 py-1 rounded-full">
              {PLACE_LABEL[project.place] ?? project.place}
            </span>
          )}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{project.title}</h1>
        <p className="text-xl text-text-secondary leading-relaxed max-w-[680px]">{project.tagline}</p>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mt-8">
          {project.github && (
            <Button href={project.github} variant="secondary" external>
              <GitHubIcon />
              GitHub
              <ExternalLinkIcon />
            </Button>
          )}
          {project.xPost && (
            <Button href={project.xPost} variant="secondary" external>
              Submission Post
              <ExternalLinkIcon />
            </Button>
          )}
        </div>
      </section>

      {/* Body */}
      <section className="px-6 pb-20 max-w-[900px] mx-auto grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* Left column */}
        <div className="flex flex-col gap-8">
          {/* About */}
          <div className="bg-bg-card border border-border rounded-xl p-8">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-text-secondary mb-4">
              About the project
            </h2>
            <p className="text-[15px] text-text-primary leading-relaxed">{project.description}</p>
          </div>

          {/* LI.FI Integration */}
          <div className="bg-bg-card border border-border rounded-xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-semibold uppercase tracking-widest text-pink">
                LI.FI Integration
              </span>
            </div>
            <p className="text-[15px] text-text-primary leading-relaxed">{project.lifiIntegration}</p>

            {project.lifiProducts.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-5">
                {project.lifiProducts.map((p) => (
                  <span
                    key={p}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-pink/10 border border-pink/20 text-pink"
                  >
                    {p}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Builder Feedback */}
          {project.feedback && (
            <div className="bg-bg-card border border-border rounded-xl p-8">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-text-secondary mb-6">
                Builder Feedback
              </h2>
              <div className="flex flex-col gap-6">
                {project.feedback.struggled && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">
                      Biggest challenge
                    </h3>
                    <p className="text-[14px] text-text-primary leading-relaxed">
                      {project.feedback.struggled}
                    </p>
                  </div>
                )}
                {project.feedback.workedWell && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">
                      What worked great
                    </h3>
                    <p className="text-[14px] text-text-primary leading-relaxed">
                      {project.feedback.workedWell}
                    </p>
                  </div>
                )}
                {project.feedback.plans && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">
                      Future plans
                    </h3>
                    <p className="text-[14px] text-text-primary leading-relaxed">
                      {project.feedback.plans}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6">
          {/* Meta card */}
          <div className="bg-bg-card border border-border rounded-xl p-6">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-4">
              Project info
            </h3>
            <div className="flex flex-col gap-3">
              {project.builder && (
                <div>
                  <span className="block text-[11px] text-text-secondary uppercase tracking-wider mb-0.5">
                    Builder
                  </span>
                  <span className="text-sm font-medium text-text-primary">{project.builder}</span>
                </div>
              )}
              <div>
                <span className="block text-[11px] text-text-secondary uppercase tracking-wider mb-0.5">
                  Hackathon
                </span>
                <span className="text-sm font-medium text-text-primary">{project.hackathon}</span>
              </div>
              <div>
                <span className="block text-[11px] text-text-secondary uppercase tracking-wider mb-0.5">
                  Date
                </span>
                <span className="text-sm font-medium text-text-primary">{project.hackathonDate}</span>
              </div>
              {project.place && (
                <div>
                  <span className="block text-[11px] text-text-secondary uppercase tracking-wider mb-0.5">
                    Result
                  </span>
                  <span className="text-sm font-medium text-text-primary">
                    {PLACE_LABEL[project.place] ?? project.place}
                  </span>
                </div>
              )}
              {project.track && (
                <div>
                  <span className="block text-[11px] text-text-secondary uppercase tracking-wider mb-0.5">
                    Track
                  </span>
                  <span className="text-sm font-medium text-text-primary">{project.track}</span>
                </div>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="bg-bg-card border border-border rounded-xl p-6">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-4">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/showcase?tag=${encodeURIComponent(tag)}`}
                  className="text-xs font-semibold px-2.5 py-1 rounded-full bg-bg-elevated border border-border text-text-secondary hover:text-pink hover:border-pink/30 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Apply CTA */}
          <div className="bg-gradient-to-br from-pink/10 to-transparent border border-pink/20 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-text-primary mb-2">
              Building with LI.FI?
            </h3>
            <p className="text-[13px] text-text-secondary leading-relaxed mb-4">
              Apply to the Builders Accelerator and get support, visibility, and fast-track to grants.
            </p>
            <Button href="/apply">
              Apply now
              <ChevronRight />
            </Button>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="px-6 py-16 border-t border-border bg-bg-paper">
          <div className="max-w-[900px] mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-semibold">More from {project.hackathon}</h2>
              <Link
                href="/showcase"
                className="text-sm text-text-secondary hover:text-pink transition-colors flex items-center gap-1"
              >
                View all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/showcase/${rel.slug}`}
                  className="bg-bg-card border border-border rounded-xl p-6 hover:border-pink/30 transition-colors group"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary block mb-2">
                    {rel.place ? `${rel.place} place` : "Submission"}
                  </span>
                  <h3 className="text-base font-semibold mb-1 group-hover:text-pink transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-[13px] text-text-secondary line-clamp-2">{rel.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
