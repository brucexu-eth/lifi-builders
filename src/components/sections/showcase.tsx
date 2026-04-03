import Link from "next/link";
import { Button } from "@/components/button";
import { GlobeIcon, GitHubIcon, ChevronRight } from "@/components/icons";

interface ShowcaseProject {
  title: string;
  program: string;
  description: string;
  integration: string;
  website?: string;
  github?: string;
  gradientClass: string;
  accentGradient: string;
  hoverBorder: string;
  hoverShadow: string;
}

const projects: ShowcaseProject[] = [
  {
    title: "DISPATCH",
    program: "Agentic Commerce Vibeathon · Mar 2026",
    description: "Autonomous narrative-trading desk that ingests CryptoPanic, scores conviction, and rebalances capital at machine speed.",
    integration: "Caches LI.FI routes, streams update hooks, and enforces stop-loss / profit targets for every bridge + swap pair.",
    github: "https://github.com/harystyleseze/dispatch",
    gradientClass: "bg-gradient-to-br from-fuchsia-500/[0.08] to-transparent",
    accentGradient: "bg-gradient-to-r from-fuchsia-500 to-rose-500",
    hoverBorder: "hover:border-fuchsia-500",
    hoverShadow: "hover:shadow-fuchsia-500/20",
  },
  {
    title: "ATLAS",
    program: "Agentic Commerce Vibeathon · Mar 2026",
    description: "An 11-skill OpenClaw treasury pilot that thinks in an OODA loop and logs every thesis, prediction, and trade decision.",
    integration: "All swaps/bridges call LI.FI quotes + status hooks so the dashboard streams real-time execution telemetry.",
    github: "https://github.com/Magicianhax/atlas-agent",
    gradientClass: "bg-gradient-to-br from-slate-500/[0.08] to-transparent",
    accentGradient: "bg-gradient-to-r from-slate-500 to-blue-500",
    hoverBorder: "hover:border-slate-500",
    hoverShadow: "hover:shadow-slate-500/20",
  },
  {
    title: "Memevelli",
    program: "Agentic Commerce Vibeathon · Mar 2026",
    description: "Three ElizaOS characters (strategist, analyst, executor) running a memecoin desk through a brand-new @elizaos/plugin-lifi.",
    integration: "Plugin exposes buy, sell, bridge, and balance-check actions so any Eliza agent can execute on LI.FI instantly.",
    github: "https://github.com/Bleyle823/Memevelli",
    gradientClass: "bg-gradient-to-br from-orange-500/[0.08] to-transparent",
    accentGradient: "bg-gradient-to-r from-orange-500 to-rose-400",
    hoverBorder: "hover:border-orange-500",
    hoverShadow: "hover:shadow-orange-500/20",
  },
  {
    title: "Brahma",
    program: "Agentic Commerce Vibeathon · Mar 2026",
    description: "Guardian + Yielder brains that poll DeFiLlama every 30 seconds and only move capital when LI.FI math justifies the jump.",
    integration: "Combines LI.FI REST quotes, SDK executeRoute, and update hooks to bridge, deposit, and monitor vault moves.",
    github: "https://github.com/daiwikmh/brahma",
    gradientClass: "bg-gradient-to-br from-lime-500/[0.08] to-transparent",
    accentGradient: "bg-gradient-to-r from-lime-500 to-emerald-400",
    hoverBorder: "hover:border-lime-500",
    hoverShadow: "hover:shadow-lime-500/20",
  },
  {
    title: "Caliper",
    program: "Agentic Commerce Vibeathon · Mar 2026",
    description: "Headless treasury manager that says “no” unless bridge fees repay within the risk window—ruthless cost-benefit logic.",
    integration: "Hits LI.FI quote + route APIs to compare multi-bridge fees, recovery times, and deterministic break-even points.",
    github: "https://github.com/Bigestdave/caliper-agent",
    gradientClass: "bg-gradient-to-br from-indigo-500/[0.08] to-transparent",
    accentGradient: "bg-gradient-to-r from-indigo-500 to-purple-500",
    hoverBorder: "hover:border-indigo-500",
    hoverShadow: "hover:shadow-indigo-500/20",
  },
  {
    title: "Mina",
    program: "Encode x Hyperliquid Hackathon · Jan 2026",
    description: "A complete Hyperliquid onboarding platform that takes users from any blockchain to actively trading in one seamless flow. Includes a published SDK, mobile-first web app, and terminal CLI.",
    integration: "Uses LI.FI routing to bridge assets from 40+ EVM chains with 15+ bridge protocols including Stargate, Across, and Celer.",
    website: "https://usemina.co",
    github: "https://github.com/SiphoYawe/mina",
    gradientClass: "bg-gradient-to-br from-blue/[0.08] to-transparent",
    accentGradient: "bg-gradient-to-r from-blue to-purple-500",
    hoverBorder: "hover:border-pink",
    hoverShadow: "hover:shadow-blue/20",
  },
  {
    title: "HyperGate",
    program: "Encode x Hyperliquid Hackathon · Jan 2026",
    description: "An embeddable React widget enabling atomic, one-click onboarding from any chain directly into Hyperliquid L1 trading accounts. Packaged as a plug-and-play npm library.",
    integration: "Wraps LI.FI routing logic with a custom 'Auto-Forward' engine for seamless cross-chain deposits.",
    website: "https://hypergate-pi.vercel.app",
    github: "https://github.com/0-robert/Hyperliquid",
    gradientClass: "bg-gradient-to-br from-teal-500/[0.08] to-transparent",
    accentGradient: "bg-gradient-to-r from-teal-500 to-cyan-500",
    hoverBorder: "hover:border-teal-500",
    hoverShadow: "hover:shadow-teal-500/20",
  },
  {
    title: "Delta0",
    program: "Encode x Hyperliquid Hackathon · Jan 2026",
    description: "Turn any asset into a stablecoin. Executes on-chain cash-and-carry strategies (long spot + short perp) on Hyperliquid, providing funding rate yields to users.",
    integration: "Uses LI.FI bridge to make bridging and trading tokens into the protocol accessible from all chains in just three clicks.",
    website: "https://www.delta0.xyz",
    github: "https://github.com/HaroldRobson/Delta0",
    gradientClass: "bg-gradient-to-br from-amber-500/[0.08] to-transparent",
    accentGradient: "bg-gradient-to-r from-amber-500 to-orange-500",
    hoverBorder: "hover:border-amber-500",
    hoverShadow: "hover:shadow-amber-500/20",
  },
  {
    title: "TAGO Leap",
    program: "Encode x Hyperliquid Hackathon · Jan 2026",
    description: "Trade ideas, not tokens. A narrative-first trading terminal where users describe market theses and the platform generates hedged pair trades via Pear Protocol.",
    integration: "Powers 14+ chain bridging with route optimization, real-time quotes, and fee calculation for one-click onboarding.",
    website: "https://tago-leap-frontend.vercel.app",
    github: "https://github.com/RealKevinApetrei/tago-leap",
    gradientClass: "bg-gradient-to-br from-pink-500/[0.08] to-transparent",
    accentGradient: "bg-gradient-to-r from-pink-500 to-rose-400",
    hoverBorder: "hover:border-pink-500",
    hoverShadow: "hover:shadow-pink-500/20",
  },
  {
    title: "onLiq",
    program: "Encode x Hyperliquid Hackathon · Jan 2026",
    description: "A mobile-first React Native app that onboards crypto-native users and beginners into Hyperliquid in one flow, with theme and pair trading via Pear Execution API.",
    integration: "Removes friction from bridging as part of the onboarding flow, enabling users to go from email to funded account seamlessly.",
    github: "https://github.com/Sahid-m/onLiq",
    gradientClass: "bg-gradient-to-br from-emerald-500/[0.08] to-transparent",
    accentGradient: "bg-gradient-to-r from-emerald-500 to-green-400",
    hoverBorder: "hover:border-emerald-500",
    hoverShadow: "hover:shadow-emerald-500/20",
  },
];

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
          Agentic Commerce Vibeathon podium + Encode x Hyperliquid champions—every card is tagged with the program it graduated from.
        </p>
      </div>
      
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`${project.gradientClass} bg-bg-card rounded-xl border border-border p-8 flex flex-col text-left transition-all duration-200 relative overflow-hidden ${project.hoverBorder} hover:-translate-y-0.5 hover:shadow-[0_8px_30px] ${project.hoverShadow} group`}
          >
            <div className={`absolute top-0 left-0 right-0 h-[3px] opacity-80 group-hover:opacity-100 transition-opacity ${project.accentGradient}`} />
            
            <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-wider text-text-secondary mb-3">
              {project.program}
            </span>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>
            
            <div className="bg-bg-elevated rounded-lg p-4 mt-auto">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-pink mb-1">
                LI.FI Integration
              </span>
              <p className="text-[13px] text-text-secondary leading-relaxed">
                {project.integration}
              </p>
            </div>
            
            <div className="flex gap-4 mt-6 pt-4 border-t border-border">
              {project.website && (
                <Link
                  href={project.website}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-[13px] font-medium text-text-secondary hover:text-pink transition-colors"
                >
                  <GlobeIcon className="opacity-70 group-hover:opacity-100" />
                  Website
                </Link>
              )}
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-[13px] font-medium text-text-secondary hover:text-pink transition-colors"
                >
                  <GitHubIcon className="opacity-70 group-hover:opacity-100" />
                  GitHub
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <Button href="/hackathons" variant="secondary">
          View Hackathons & Events
          <ChevronRight />
        </Button>
      </div>
    </section>
  );
}
