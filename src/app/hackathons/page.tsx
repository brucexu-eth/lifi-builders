import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/button";
import { ExternalLinkIcon, ArrowRightIcon, ChevronRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Hackathons | LI.FI Builders",
  description: "Participate in LI.FI hackathons and bounties. Build cross-chain applications and win prizes.",
};

const tracks = [
  {
    prize: "$400",
    title: "Yield Builder",
    description: "Build a yield product — earn dashboard, vault aggregator, portfolio manager, stablecoin treasury tool. Integrating Earn into an existing project? That counts too (only the integration is judged).",
  },
  {
    prize: "$400",
    title: "AI × Earn",
    description: "AI-powered yield tools — agents that auto-allocate across vaults, chatbots for DeFi deposits, LLM-driven risk scoring, natural language vault interaction.",
  },
  {
    prize: "$400",
    title: "DeFi UX Challenge",
    description: "Make DeFi yield as simple as a savings account. Reimagine how everyday users interact with on-chain earning. Best UX wins.",
  },
  {
    prize: "$400",
    title: "Developer Tooling",
    description: "Build tools for other builders — SDKs, CLI tools, Hardhat plugins, testing frameworks, starter templates, or any dev infrastructure around the Earn API.",
  },
  {
    prize: "$400",
    title: "Open Track",
    description: "Anything creative using the Earn API that doesn't fit above. Telegram bots, Discord integrations, analytics dashboards, yield-based games — surprise us.",
  },
];

const lifiEvents = [
  { month: "Aug", year: "2026", title: "LI.FI Hackathon", focus: "AI Focus", color: "from-purple-500 to-purple-400" },
  { month: "Oct", year: "2026", title: "LI.FI Hackathon", focus: "Intents Focus", color: "from-blue to-indigo-400" },
];

const ecosystemEvents = [
  { month: "Jun", year: "2026", title: "Dappcon", location: "Berlin", color: "from-amber-500 to-yellow-400" },
  { month: "Jul 24", year: "2026", title: "ETHGlobal Lisbon", location: "Lisbon", color: "from-teal-500 to-cyan-400" },
  { month: "Sep", year: "2026", title: "ETHBelgrade", location: "Belgrade", color: "from-rose-500 to-pink-400" },
  { month: "Sep 24", year: "2026", title: "ETHGlobal Tokyo", location: "Tokyo", color: "from-emerald-500 to-green-400" },
];

const latestHackathon = {
  badge: "Latest recap",
  title: "Agentic Commerce Vibeathon",
  subtitle: "Autonomous agents that move capital across chains",
  description:
    "Builders shipped autonomous LI.FI-powered traders, treasury managers, and memecoin desks that run entirely on agent loops.",
  date: "March 2026",
  prize: "$5,000 prize pool",
  theme: "Agentic commerce",
  recapUrl: "https://lifi.notion.site/Agentic-Commerce-Vibeathon-Recap-Mar-2026-323b2092b81d818eba66e5180ceefd7f",
  submissionsUrl: "https://docs.google.com/spreadsheets/d/1mPw6Xsdzxt9p9p6GDqahOOS9VqJbX6YB-6RKXejrx4A/edit?usp=sharing",
  winners: [
    {
      name: "DISPATCH",
      description:
        "Narrative-trading agent that monitors CryptoPanic, caches LI.FI routes, and executes trades with automated stop-losses.",
    },
    {
      name: "ATLAS",
      description:
        "OpenClaw-based treasury pilot where every swap and bridge routes through LI.FI with transparent risk guardrails.",
    },
    {
      name: "Memevelli",
      description:
        "Three-character ElizaOS squad plus @elizaos/plugin-lifi so any agent can bridge, swap, or check balances instantly.",
    },
  ],
};

const pastHackathons = [
  {
    badge: "LI.FI Builders",
    title: "Agentic Commerce Vibeathon",
    meta: "March 2026 · $5,000 prize pool · Agentic Commerce sprint",
    recapUrl: "https://lifi.notion.site/Agentic-Commerce-Vibeathon-Recap-Mar-2026-323b2092b81d818eba66e5180ceefd7f",
    winners: [
      {
        place: "1st",
        name: "DISPATCH",
        link: "https://github.com/harystyleseze/dispatch",
        description:
          "Narrative-trading agent that ingests CryptoPanic, scores conviction with Claude, caches LI.FI routes, and executes with automatic stop-losses.",
      },
      {
        place: "2nd",
        name: "ATLAS",
        link: "https://github.com/Magicianhax/atlas-agent",
        description:
          "11-skill treasury operator that routes every swap and bridge through LI.FI while enforcing risk guardrails and streaming a live dashboard.",
      },
      {
        place: "3rd",
        name: "Memevelli",
        link: "https://github.com/Bleyle823/Memevelli",
        description:
          "ElizaOS strategist/analyst/executor trio plus a reusable @elizaos/plugin-lifi so any character can bridge, swap, or check balances natively.",
      },
      {
        place: "4th",
        name: "Brahma",
        link: "https://github.com/daiwikmh/brahma",
        description:
          "Guardian + Yielder brains that poll yields every 30 seconds, price LI.FI bridge costs, and lock execution whenever the math doesn’t clear.",
      },
      {
        place: "5th",
        name: "Caliper",
        link: "https://github.com/Bigestdave/caliper-agent",
        description:
          "Headless treasury manager that refuses to move capital unless LI.FI quotes prove the yield delta repays bridge costs inside strict windows.",
      },
    ],
  },
  {
    badge: "Encode Club",
    title: "Hyperliquid Hackathon",
    meta: "January 2026 · $6,500+ in prizes · 25+ submissions",
    recapUrl: "https://li.fi/knowledge-hub/encodes-hyperliquid-hackathon-winners-january-2026/",
    winners: [
      {
        place: "1st",
        name: "Mina",
        link: "https://usemina.co",
        description:
          "Complete Hyperliquid onboarding platform with web app, SDK, and CLI. Uses LI.FI routing to bridge from 40+ EVM chains.",
      },
      {
        place: "2nd",
        name: "HyperGate",
        link: "https://hypergate-pi.vercel.app",
        description:
          "Embeddable React widget for atomic one-click onboarding directly to Hyperliquid L1 trading accounts.",
      },
      {
        place: "3rd",
        name: "Delta0",
        link: "https://www.delta0.xyz",
        description:
          "Turn any asset into a stablecoin with on-chain cash-and-carry strategies on Hyperliquid.",
      },
    ],
  },
];

const requirements = [
  {
    num: "01",
    title: "Use LI.FI SDK or API",
    description: "Your project must integrate LI.FI for cross-chain functionality. Show real usage, not just imports.",
  },
  {
    num: "02",
    title: "Working Demo",
    description: "Submit a functional prototype. We want to see your integration in action.",
  },
  {
    num: "03",
    title: "Documentation",
    description: "Include a README explaining what you built and how LI.FI is used.",
  },
  {
    num: "04",
    title: "Open Source",
    description: "Your code should be publicly available on GitHub.",
  },
];

export default function HackathonsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          Hackathons & Events
        </h1>
        <p className="text-lg text-text-secondary max-w-[500px] mx-auto">
          Compete in hackathons, win prizes, and get fast-tracked into the Builders Accelerator Program.
        </p>
      </section>

      {/* Live Hackathon */}
      <section className="py-12 px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-500 mb-8">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse-slow" />
            Live Now
          </div>

          <div className="mb-10">
            <span className="text-sm text-text-secondary block mb-2">LI.FI</span>
            <h2 className="text-3xl font-bold tracking-tight mb-1">DeFi Mullet Hackathon #1</h2>
            <p className="text-text-secondary">Apr 8 — Apr 14, 2026</p>
          </div>

          <div className="flex items-baseline gap-4 py-6 border-t border-b border-border mb-10">
            <span className="text-sm text-text-secondary">Total Prize Pool</span>
            <span className="text-2xl font-bold text-text-primary">$5,000 USDC</span>
          </div>

          {/* Tracks */}
          <div className="flex flex-col gap-8 mb-10">
            {tracks.map((track, i) => (
              <div key={i} className={`pb-8 ${i < tracks.length - 1 ? "border-b border-border" : ""}`}>
                <div className="flex items-baseline gap-6 mb-2 flex-col sm:flex-row">
                  <span className="font-mono text-sm font-semibold text-pink">{track.prize}</span>
                  <h3 className="text-base font-semibold">{track.title}</h3>
                </div>
                <p className="text-[15px] text-text-secondary leading-relaxed sm:pl-[calc(3.5rem+1.5rem)] pl-0">
                  {track.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-4 flex-col sm:flex-row">
            <Button href="https://forms.gle/RFLGG8RiEKC3AqnQA" external>
              Register Now
              <ExternalLinkIcon />
            </Button>
            <Button href="https://docs.li.fi/earn/overview" variant="secondary" external>
              Earn API Docs
              <ExternalLinkIcon />
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Hackathon Recap */}
      <section className="py-16 px-6 bg-bg-card/20 border-y border-border">
        <div className="max-w-[900px] mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-pink">{latestHackathon.badge}</span>
            <h2 className="text-3xl font-bold tracking-tight mt-3">{latestHackathon.title}</h2>
            <p className="text-text-secondary text-[15px] leading-relaxed mt-4">{latestHackathon.subtitle}</p>
            <p className="text-text-secondary text-[15px] leading-relaxed mt-3">{latestHackathon.description}</p>
            <div className="flex flex-wrap gap-6 mt-6 text-sm text-text-secondary">
              <div>
                <span className="block font-semibold text-text-primary">{latestHackathon.date}</span>
                <span>{latestHackathon.prize}</span>
              </div>
              <div>
                <span className="block font-semibold text-text-primary">Theme</span>
                <span>{latestHackathon.theme}</span>
              </div>
            </div>
            <div className="flex gap-4 flex-col sm:flex-row mt-8">
              <Button href={latestHackathon.recapUrl} external>
                Read recap
                <ExternalLinkIcon />
              </Button>
              <Button href={latestHackathon.submissionsUrl} variant="secondary" external>
                Browse submissions
                <ExternalLinkIcon />
              </Button>
            </div>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">Podium</span>
                <h3 className="text-lg font-semibold text-text-primary">Top builders</h3>
              </div>
              <span className="text-sm font-mono text-text-secondary">#agentic</span>
            </div>
            <div className="flex flex-col gap-4">
              {latestHackathon.winners.map((winner, i) => (
                <div key={winner.name} className="flex items-start gap-4">
                  <span className="font-mono text-xs font-semibold text-pink min-w-[32px] pt-0.5">#{i + 1}</span>
                  <div>
                    <h4 className="text-[15px] font-semibold text-text-primary mb-0.5">{winner.name}</h4>
                    <p className="text-[13px] text-text-secondary">{winner.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-16 px-6 bg-bg-paper">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl font-semibold mb-10">Upcoming</h2>

          <div className="flex flex-col gap-10">
            {/* LI.FI Organized */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-4">
                LI.FI Organized
              </h3>
              <div className="flex flex-col">
                {lifiEvents.map((event, i) => (
                  <Link
                    key={i}
                    href="#"
                    className={`flex items-center gap-4 sm:gap-6 py-4 pl-4 ${
                      i < lifiEvents.length - 1 ? "border-b border-border" : ""
                    } hover:pl-6 hover:bg-white/[0.02] transition-all rounded-sm relative group`}
                  >
                    <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[60%] rounded-sm opacity-70 group-hover:opacity-100 group-hover:h-[80%] transition-all bg-gradient-to-b ${event.color}`} />
                    <div className="min-w-[60px] px-3 py-2 bg-gradient-to-br from-pink/15 to-pink/5 border border-pink/20 rounded-lg text-center">
                      <span className="block text-[13px] font-semibold text-text-primary">{event.month}</span>
                      <span className="text-[11px] text-text-secondary">{event.year}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[15px] font-semibold mb-0.5">{event.title}</h4>
                      <span className="text-[13px] text-pink">{event.focus}</span>
                    </div>
                    <ArrowRightIcon className="text-text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Ecosystem */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-4">
                Ecosystem
              </h3>
              <div className="flex flex-col">
                {ecosystemEvents.map((event, i) => (
                  <Link
                    key={i}
                    href="#"
                    className={`flex items-center gap-4 sm:gap-6 py-4 pl-4 ${
                      i < ecosystemEvents.length - 1 ? "border-b border-border" : ""
                    } hover:pl-6 hover:bg-white/[0.02] transition-all rounded-sm relative group`}
                  >
                    <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[60%] rounded-sm opacity-70 group-hover:opacity-100 group-hover:h-[80%] transition-all bg-gradient-to-b ${event.color}`} />
                    <div className="min-w-[60px] px-3 py-2 bg-bg-card border border-border rounded-lg text-center">
                      <span className="block text-[13px] font-semibold text-text-primary">{event.month}</span>
                      <span className="text-[11px] text-text-secondary">{event.year}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[15px] font-semibold mb-0.5">{event.title}</h4>
                      <span className="text-[13px] text-text-secondary">{event.location}</span>
                    </div>
                    <ArrowRightIcon className="text-text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Winners */}
      <section className="py-16 px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl font-semibold mb-10">Past Winners</h2>

          <div className="flex flex-col gap-8">
            {pastHackathons.map((hackathon) => (
              <div key={hackathon.title} className="bg-bg-card border border-border rounded-xl p-8">
                <div className="flex justify-between items-start mb-8 pb-6 border-b border-border flex-col sm:flex-row gap-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-pink">{hackathon.badge}</span>
                    <h3 className="text-lg font-semibold my-1">{hackathon.title}</h3>
                    <span className="text-[13px] text-text-secondary">{hackathon.meta}</span>
                  </div>
                  {hackathon.recapUrl ? (
                    <Link
                      href={hackathon.recapUrl}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-sm font-medium text-pink hover:opacity-80 transition-opacity"
                    >
                      Read recap
                      <ExternalLinkIcon />
                    </Link>
                  ) : null}
                </div>

                <div className="flex flex-col gap-4">
                  {hackathon.winners.map((winner) => (
                    <div
                      key={`${hackathon.title}-${winner.place}-${winner.name}`}
                      className="flex items-start gap-4"
                    >
                      <span className="font-mono text-xs font-semibold text-text-secondary min-w-[28px] pt-0.5">
                        {winner.place}
                      </span>
                      <div>
                        <h4 className="text-[15px] font-semibold mb-0.5">
                          <Link
                            href={winner.link}
                            target="_blank"
                            className="text-text-primary hover:text-pink transition-colors"
                          >
                            {winner.name}
                          </Link>
                        </h4>
                        <p className="text-[13px] text-text-secondary">{winner.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 px-6 bg-bg-paper">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl font-semibold mb-10">Submission Requirements</h2>

          <div className="flex flex-col gap-6">
            {requirements.map((req, i) => (
              <div key={i} className={`flex gap-6 pb-6 ${i < requirements.length - 1 ? "border-b border-border" : ""}`}>
                <span className="font-mono text-xs font-semibold text-pink min-w-[24px] pt-0.5">
                  {req.num}
                </span>
                <div>
                  <h4 className="text-[15px] font-semibold mb-1">{req.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{req.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-bg-default to-bg-elevated text-center border-t border-border">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to build?</h2>
          <p className="text-[17px] text-text-secondary mb-8">
            Start exploring the LI.FI SDK and prepare for the next hackathon.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Button href="https://docs.li.fi" external>
              Read the Docs
              <ChevronRight />
            </Button>
            <Button href="https://t.me/+42B6vxDV70QyNGI0" variant="secondary" external>
              Join Telegram
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
