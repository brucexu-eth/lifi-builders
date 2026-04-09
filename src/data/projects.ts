export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  lifiIntegration: string;
  lifiProducts: string[];
  hackathon: string;
  hackathonSlug: string;
  hackathonDate: string;
  track?: string;
  place?: string;
  tags: string[];
  website?: string;
  github?: string;
  xPost?: string;
  builder?: string;
  featured?: boolean;
  feedback?: {
    struggled?: string;
    workedWell?: string;
    plans?: string;
  };
}

export const projects: Project[] = [
  // ─── Agentic Commerce Vibeathon · March 2026 ──────────────────────────────

  {
    slug: "dispatch",
    title: "DISPATCH",
    tagline: "Autonomous narrative-trading agent that bridges capital to trending chains before retail catches up.",
    description:
      "DISPATCH reads crypto news headlines, identifies which blockchain ecosystems are gaining narrative momentum (Base, Arbitrum, Optimism), and automatically bridges USDC to those chains via LI.FI to purchase ecosystem tokens before the narrative is fully priced in. The agent operates in 60-minute cycles: monitoring CryptoPanic → analyzing sentiment with Claude AI → identifying trending tokens on CoinGecko → calculating conviction scores → bridging + executing trades across 5 major chains. Intelligent exit strategies include automatic stop-losses (−20%), profit targets (+40%), 48-hour max hold periods, and narrative reversal detection. Everything is configurable via environment variables. A live dashboard shows positions, P&L, and AI reasoning in real time.",
    lifiIntegration:
      "Uses getRoutes() and executeRoute() for all cross-chain execution. Implements updateRouteHook for real-time bridge status streaming into the agent log panel. Built a sophisticated route-scoring system on top of LI.FI quotes that weighs bridge trust scores, execution time, gas costs, and slippage tolerance. Route caching with amount-tolerance checks ensures stale quotes are never executed.",
    lifiProducts: ["SDK"],
    hackathon: "Agentic Commerce Vibeathon",
    hackathonSlug: "vibeathon-mar-2026",
    hackathonDate: "March 2026",
    place: "1st",
    tags: ["AI Agent", "Trading", "Narrative", "Bridge"],
    github: "https://github.com/harystyleseze/dispatch",
    xPost: "https://x.com/Harystylesdev/status/2031146899118399619",
    builder: "harystyleseze",
    featured: true,
    feedback: {
      struggled:
        "Handling dynamic route optimization across multiple chains — LI.FI returns many possible routes and building a scoring system that considers bridge trust scores, execution time, gas costs, and slippage took significant work. Also managing different token decimals (6 for USDC, 18 for ecosystem tokens) required careful atom-level calculations.",
      workedWell:
        "The unified abstraction of cross-chain complexity is incredible. Instead of integrating 15+ bridge protocols, one call to getRoutes() and executeRoute() handles Across, Stargate, Circle, Relay, and others. updateRouteHook was game-changing for live agent status updates.",
      plans:
        "Absolutely. DISPATCH represents the first wave of autonomous capital allocation agents. The core thesis is proven: AI agents can outperform human traders on narrative momentum because they process information and execute at machine speed.",
    },
  },
  {
    slug: "atlas",
    title: "ATLAS",
    tagline: "11-skill OpenClaw treasury agent that thinks in OODA loops and logs every trade decision.",
    description:
      "ATLAS is an autonomous DeFi agent that manages real money across Arbitrum, Base, and Optimism without human approval. It follows an OODA-style decision loop — researching market conditions, forming a thesis, making predictions with confidence scores, and executing trades through LI.FI. Every decision is logged with full reasoning. The agent runs 24/7 on automated schedules: scanning markets every hour, strategizing every 2 hours, reviewing daily, and adapting weekly. Hard-coded risk parameters (max position sizes, stop-losses, drawdown limits) prevent runaway behavior. The dashboard streams real-time brain activity, portfolio performance, and prediction accuracy.",
    lifiIntegration:
      "All swaps and bridges call LI.FI quotes and status hooks so the dashboard streams real-time execution telemetry. The SDK's single-call abstraction — handling token approvals, route finding, DEX aggregation, and bridge selection — let the team focus on agent decision-making instead of cross-chain plumbing. Multi-step routes (e.g., USDC on Arbitrum → BRETT on Base) execute in a single transaction flow.",
    lifiProducts: ["SDK"],
    hackathon: "Agentic Commerce Vibeathon",
    hackathonSlug: "vibeathon-mar-2026",
    hackathonDate: "March 2026",
    place: "2nd",
    tags: ["AI Agent", "Treasury", "Multi-chain", "Bridge"],
    github: "https://github.com/Magicianhax/atlas-agent",
    xPost: "https://x.com/Magicianafk/status/2031035672350560630",
    builder: "Magicianhax",
    featured: true,
    feedback: {
      struggled:
        "Getting the quote-to-execution flow reliable. By the time the agent approves and executes, slippage or liquidity can shift. Tuning slippage tolerance, picking the right bridge for each chain pair, and handling partial fills without retrying into worse conditions took a lot of trial and error.",
      workedWell:
        "The SDK just works. One API call handles the entire swap or bridge — approvals, route finding, DEX aggregation, bridge selection, all abstracted away.",
      plans:
        "No real plans yet — giving an autonomous agent money isn't very viable right now. Maybe in six months things will improve, but I'll keep building it for fun.",
    },
  },
  {
    slug: "memevelli",
    title: "Memevelli",
    tagline: "Three-character ElizaOS squad plus a reusable @elizaos/plugin-lifi for any agent.",
    description:
      "Three ElizaOS characters — strategist, analyst, executor — running a memecoin trading desk through a brand-new @elizaos/plugin-lifi. The plugin exposes buy, sell, bridge, and balance-check actions so any Eliza agent can execute on LI.FI instantly. The plugin will be published to the official Eliza project registry — no equivalent cross-chain plugin currently exists in the Eliza ecosystem without going through third-party tools like GOAT.",
    lifiIntegration:
      "Plugin wraps the LI.FI SDK to expose actions directly inside Eliza character runtimes. Individual character implementation tested beautifully — bridges and memecoin buys worked reliably compared to other cross-chain solutions. The plugin architecture makes LI.FI a first-class citizen in the ElizaOS ecosystem.",
    lifiProducts: ["SDK"],
    hackathon: "Agentic Commerce Vibeathon",
    hackathonSlug: "vibeathon-mar-2026",
    hackathonDate: "March 2026",
    place: "3rd",
    tags: ["AI Agent", "Eliza", "Plugin", "Memecoin"],
    github: "https://github.com/Bleyle823/Memevelli",
    xPost: "https://x.com/BleyleGz/status/2031045784292950117",
    builder: "Bleyle823",
    featured: true,
    feedback: {
      struggled:
        "Getting the agents to call Eliza actions from within the implemented plugin using the LI.FI SDK.",
      workedWell:
        "The LI.FI actions for bridges and memecoin buys worked beautifully in the individual character implementation — even compared to other cross-chain solutions like Kamino.",
      plans:
        "The plugin will be improved and published to the Eliza project registry. The broader project (Swaps and Bridging on Farcaster) shares the same motivation: building solutions that promote interoperability.",
    },
  },
  {
    slug: "brahma",
    title: "Brahma",
    tagline: "Guardian + Yielder brains that poll yields every 30s and only move capital when the LI.FI math clears.",
    description:
      "Brahma is an autonomous cross-chain USDC yield optimizer. It scans Aave V3 and Compound USDC pools across Base, Arbitrum, Optimism, and Polygon every 30 seconds using DeFiLlama, asks an LLM whether the yield difference justifies a move (factoring in real LI.FI bridge costs), and if so — withdraws from the current Aave position, bridges cross-chain via LI.FI, and re-deposits automatically. No clicks required. It runs in Simulation or Live mode from a single dashboard.",
    lifiIntegration:
      "ExecuteRoute with updateRouteHook streams real-time bridge status directly into the agent log panel without polling. The SDK abstracts away bridge aggregation (Across, Stargate, etc.) so no bridge logic is hardcoded. getQuote returning a transactionRequest ready for eth_call made dry-run simulation trivial.",
    lifiProducts: ["SDK"],
    hackathon: "Agentic Commerce Vibeathon",
    hackathonSlug: "vibeathon-mar-2026",
    hackathonDate: "March 2026",
    place: "4th",
    tags: ["AI Agent", "Yield", "Bridge", "USDC"],
    github: "https://github.com/daiwikmh/brahma",
    xPost: "https://x.com/daiwik_mhi/status/2031030761244315967",
    builder: "daiwikmh",
    featured: true,
    feedback: {
      struggled:
        "The SDK singleton (createConfig) needed to be re-initialized whenever the source chain changed — this wasn't obvious and caused silent failures where the wallet client was signing on the wrong chain.",
      workedWell:
        "ExecuteRoute with updateRouteHook callback was excellent — it streams real-time bridge status directly into the agent log without any polling.",
      plans:
        "The next step is multi-user: each user funds a smart account (ERC-4337) that the agent controls with scoped permissions, so multiple wallets run independent yield strategies without sharing a private key.",
    },
  },
  {
    slug: "caliper",
    title: "Caliper",
    tagline: "Headless treasury manager that refuses to move capital unless bridge fees repay within the risk window.",
    description:
      "Caliper Agent is an autonomous yield optimizer that scans 40+ DeFi yield pools across 5 blockchains (Arbitrum, Base, Optimism, Polygon, Ethereum) and 6 protocols (Aave, Compound, Morpho, Stargate, Yearn). It finds the single best yield opportunity, pulls live bridge quotes from LI.FI to calculate the real cost of moving funds there, and only executes the move if the bridge cost recovers quickly through the higher yield. If the math doesn't work, it stays put. Runs autonomously every 6 hours and can be triggered manually via chat.",
    lifiIntegration:
      "Uses the unified quote API to compare routes across Stargate, Across, and Hop in a single call. Extracts real fee data and estimated times from LI.FI quote responses to power cost-benefit calculations and break-even analysis before any capital moves.",
    lifiProducts: ["API"],
    hackathon: "Agentic Commerce Vibeathon",
    hackathonSlug: "vibeathon-mar-2026",
    hackathonDate: "March 2026",
    place: "5th",
    tags: ["AI Agent", "Yield", "Bridge", "Optimizer"],
    github: "https://github.com/Bigestdave/caliper-agent",
    xPost: "https://www.linkedin.com/posts/david-olabowale_defi-ai-autonomousagents-activity-7436779009616687104-EqJP",
    builder: "Bigestdave",
    featured: true,
    feedback: {
      struggled:
        "Getting the cost-benefit logic right — extracting real fee data from LI.FI quotes and comparing multiple bridge routes to pick best value while factoring in cost recovery time against APY gains.",
      workedWell:
        "The unified quote API is excellent — one endpoint to compare routes across multiple bridges and chains. The fee and estimated time data in responses was exactly what was needed for cost-benefit calculations.",
      plans:
        "Planning to add more protocols, support more asset types beyond stablecoins, and implement portfolio-level optimization across multiple positions simultaneously.",
    },
  },
  {
    slug: "cross-chain-yield-hunter",
    title: "Cross-Chain Yield Hunter",
    tagline: "Autonomous agent that chases the best vault yields across 5 chains using Composer for atomic execution.",
    description:
      "Cross-Chain Yield Hunter scans yield opportunities across chains via DefiLlama, decides when to rebalance using rule-based logic and AI, and executes cross-chain vault deposits via LI.FI Composer. It checks bridge costs vs APY gains before moving capital and runs 24/7 to chase the best yields on Morpho, Aave, Euler, and Pendle across Ethereum, Arbitrum, Base, Optimism, and Polygon.",
    lifiIntegration:
      "Uses LI.FI Composer's atomic bridge + vault deposit in a single transaction. The REST quote API estimates bridge costs and net APY before executing. Uses SDK's getQuote, convertQuoteToRoute, and executeRoute flow for execution.",
    lifiProducts: ["SDK", "API", "Composer"],
    hackathon: "Agentic Commerce Vibeathon",
    hackathonSlug: "vibeathon-mar-2026",
    hackathonDate: "March 2026",
    tags: ["AI Agent", "Yield", "Composer", "Bridge"],
    github: "https://github.com/panditdhamdhere/Cross-Chain-Yield-Hunter",
    xPost: "https://x.com/panditdhamdhere/status/2031020952675598711",
    builder: "panditdhamdhere",
    feedback: {
      struggled:
        "Mapping DefiLlama pools (chain names, symbol formats) to LI.FI vault addresses and Composer-compatible tokens. Also needed time to understand when to use REST quote API vs SDK.",
      workedWell:
        "LI.FI Composer's atomic bridge + vault deposit in a single transaction is very useful. The REST quote API made it easy to estimate bridge costs and net APY before executing.",
      plans:
        "Considering adding more chains and protocols, configurable strategies (risk vs yield), and a simple dashboard for monitoring and tuning.",
    },
  },
  {
    slug: "router-402",
    title: "Router-402",
    tagline: "Natural language cross-chain execution meets x402 pay-per-use AI access on Base.",
    description:
      "Router-402 lets users interact with DeFi using natural language. A user asks the AI to bridge or swap tokens across chains, and the agent uses LI.FI tools to find the best route and generate a ready-to-sign transaction. Additionally, the platform enables pay-per-use access to LLMs via x402 micropayments in USDC on Base — removing the need for expensive AI subscriptions.",
    lifiIntegration:
      "Integrates the LI.FI MCP server into the AI agent workflow. Maps natural language requests to the correct MCP tool calls to fetch routing data and generate cross-chain transactions.",
    lifiProducts: ["MCP"],
    hackathon: "Agentic Commerce Vibeathon",
    hackathonSlug: "vibeathon-mar-2026",
    hackathonDate: "March 2026",
    tags: ["AI Agent", "x402", "MCP", "Bridge"],
    github: "https://github.com/dino-786/router-402-lifi",
    xPost: "https://x.com/sonty_143/status/2031019203214348315",
    builder: "dino-786",
    feedback: {
      struggled:
        "Integrating the LI.FI MCP server with the AI agent workflow — mapping natural language requests to the correct MCP tool calls and handling responses required experimentation.",
      workedWell:
        "LI.FI's support for multiple chains and protocols makes cross-chain operations much easier. MCP tools made it straightforward to fetch routing data and generate transactions.",
      plans:
        "Planning to develop Router-402 into a production-ready AI gateway for blockchain and AI services with pay-per-use micropayments, expanding agent capabilities to cover more DeFi operations.",
    },
  },
  {
    slug: "agent-economy",
    title: "Agent Economy",
    tagline: "Competing agents with different strategies fight to maximize yield across DeFi pools.",
    description:
      "A multi-agent framework where autonomous agents compete against each other with different strategies to maximize yield across DeFi pools. The framework is highly customizable — add or remove agents and chains as needed.",
    lifiIntegration:
      "Uses the LI.FI SDK for cross-chain execution across all competing agents in the framework.",
    lifiProducts: ["SDK"],
    hackathon: "Agentic Commerce Vibeathon",
    hackathonSlug: "vibeathon-mar-2026",
    hackathonDate: "March 2026",
    tags: ["AI Agent", "Yield", "Multi-agent", "Framework"],
    github: "https://github.com/merdikim/agent-economy-li.fi-",
    xPost: "https://x.com/_merdikim/status/2031030937803223090",
    builder: "merdikim",
    feedback: {
      struggled: "Understanding the difference between getQuote and getRoutes.",
      workedWell: "The ease of integration with the SDK.",
      plans: "Yes, if given a grant to focus on it full time.",
    },
  },
  {
    slug: "agent-lily",
    title: "Agent Lily",
    tagline: "Cross-chain yield agent for USDC that automatically finds better opportunities and routes funds.",
    description:
      "Agent Lily is a cross-chain yield agent for USDC that automatically finds better yield opportunities and routes funds across chains with no manual involvement.",
    lifiIntegration:
      "Uses the LI.FI MCP integration for cross-chain route discovery and execution.",
    lifiProducts: ["MCP"],
    hackathon: "Agentic Commerce Vibeathon",
    hackathonSlug: "vibeathon-mar-2026",
    hackathonDate: "March 2026",
    tags: ["AI Agent", "Yield", "MCP", "USDC"],
    github: "https://github.com/Saber1Y/Agent-Lily",
    xPost: "https://x.com/Sabercodes123/status/2031035423561048092",
    builder: "Saber1Y",
    feedback: {
      struggled: "Nothing — loved the whole MCP integration.",
      workedWell: "The execution was the best part.",
      plans: "Yes, it's a feasible approach — if LI.FI can support we'd be glad to upscale.",
    },
  },
  {
    slug: "moirai",
    title: "Moirai",
    tagline: "Narrative-driven autonomous trading agent built for agentic commerce.",
    description:
      "Moirai is a narrative-driven autonomous trading agent built for agentic commerce using the LI.FI API. The agent generates dynamic trade candidates and evaluates quotes in real time while considering gas, fees, and bridge delays.",
    lifiIntegration:
      "Uses LI.FI routing to handle cross-chain swaps and bridges uniformly inside the execution layer. Compares LI.FI routes and feeds that information back into the agent's decision process.",
    lifiProducts: ["API"],
    hackathon: "Agentic Commerce Vibeathon",
    hackathonSlug: "vibeathon-mar-2026",
    hackathonDate: "March 2026",
    tags: ["AI Agent", "Trading", "Bridge", "Narrative"],
    github: "https://github.com/IMPERIAL-X7/Moirai/",
    xPost: "https://x.com/0xArnav_/status/2031037161592492109",
    builder: "IMPERIAL-X7",
    feedback: {
      struggled:
        "Integrating LI.FI routing into an autonomous agent loop — the agent generates dynamic trade candidates so quotes had to be evaluated in real time.",
      workedWell:
        "Handling cross-chain swaps and bridges uniformly inside the execution layer. The unified API made it easy to compare routes.",
      plans: "Yes, it's already working making ~0.1% profits per minute.",
    },
  },
  {
    slug: "autoindex",
    title: "AutoIndex",
    tagline: "AI-managed diversified crypto index portfolio that rebalances and moves funds across chains automatically.",
    description:
      "AutoIndex automatically creates and manages a diversified crypto index portfolio. After depositing funds, the AI allocates assets, rebalances the portfolio over time, and moves funds across chains to capture better opportunities.",
    lifiIntegration:
      "Uses the LI.FI MCP server and API to power cross-chain trade execution. The infrastructure saves significant development time — no custom bridging logic required.",
    lifiProducts: ["MCP", "API"],
    hackathon: "Agentic Commerce Vibeathon",
    hackathonSlug: "vibeathon-mar-2026",
    hackathonDate: "March 2026",
    tags: ["AI Agent", "Portfolio", "Bridge", "Index"],
    github: "https://github.com/Harshal0902/AutoIndex",
    xPost: "https://x.com/rider_shad59489/status/2031040152982925389",
    builder: "Harshal0902",
    feedback: {
      struggled:
        "Structuring cross-chain execution and integrating the MCP server, API, and agent tools together took some experimentation.",
      workedWell:
        "The cross-chain routing and swap infrastructure worked smoothly — executing trades across multiple chains without needing custom bridging logic.",
      plans:
        "Would like to expand into a full AI-powered crypto portfolio manager with more strategies, better risk management, and deeper DeFi protocol integrations.",
    },
  },
  {
    slug: "chain-pilot",
    title: "Chain Pilot",
    tagline: "Autonomous agent that scans narrative signals across chains and uses LI.FI to fetch execution routes.",
    description:
      "Chain Pilot is an autonomous cross-chain agent that scans narrative signals across chains, decides where capital should move, and uses LI.FI to fetch the execution route for cross-chain transfers.",
    lifiIntegration:
      "Integrates the LI.FI API into the backend for fetching routes and executing cross-chain transactions without custom bridge logic.",
    lifiProducts: ["API"],
    hackathon: "Agentic Commerce Vibeathon",
    hackathonSlug: "vibeathon-mar-2026",
    hackathonDate: "March 2026",
    tags: ["AI Agent", "Bridge", "Narrative", "Backend"],
    github: "https://github.com/Winifredchidi/chain-pilot",
    builder: "Winifredchidi",
    feedback: {
      struggled:
        "Understanding the transaction flow and how to properly handle routes and execution. Cross-chain transactions involve multiple steps and it took time to understand how everything works together.",
      workedWell:
        "How easy it was to integrate the LI.FI API into the backend for fetching routes and executing transactions without building complex bridge logic.",
      plans:
        "Planning to add a user interface and more automation features to make it a more complete product.",
    },
  },
  {
    slug: "pendle-yield-agent",
    title: "Pendle Yield Agent",
    tagline: "Looks for price dislocations in Pendle PTs and buys at a discount with no manual involvement.",
    description:
      "Pendle Yield Agent looks for price dislocations (discounts) in Pendle PTs and buys PTs in real time at cheaper prices with no manual involvement. The agentic workflow manages execution via LI.FI, turning yield signals into real utility.",
    lifiIntegration:
      "Manages execution via LI.FI, turning yield signals into real utility. The routing and transaction flow across chains was the main learning curve; once clear, integration through SDK and APIs was straightforward.",
    lifiProducts: ["SDK", "API"],
    hackathon: "Agentic Commerce Vibeathon",
    hackathonSlug: "vibeathon-mar-2026",
    hackathonDate: "March 2026",
    tags: ["AI Agent", "Yield", "Pendle", "Arbitrage"],
    xPost: "https://x.com/japneet_singh17/status/2031010543486808406",
    builder: "japneet-crypto",
    feedback: {
      struggled:
        "The main learning curve was understanding the routing and transaction flow across chains, especially while testing transactions locally.",
      workedWell:
        "Without LI.FI-managed execution, yield signals had no utility. LI.FI gave the product real edge.",
      plans: "Thinking to add more features and then launch for public access.",
    },
  },
  {
    slug: "jumpwiz",
    title: "JumpWiz",
    tagline: "Prompt-driven bridge and swap dapp — just describe what you want and it executes.",
    description:
      "JumpWiz lets users transact on LI.FI with just prompts — no manual bridging or swapping UI needed. Built to be a free sub-dapp of LI.FI with no hidden fees.",
    lifiIntegration:
      "Uses LI.FI bridge and swap infrastructure as the execution backend, wrapped with a conversational interface. Bridging worked on the first trial.",
    lifiProducts: ["SDK", "API"],
    hackathon: "Agentic Commerce Vibeathon",
    hackathonSlug: "vibeathon-mar-2026",
    hackathonDate: "March 2026",
    tags: ["AI Agent", "Bridge", "Swap", "Conversational"],
    github: "https://github.com/JaybankOz/Jumpwiz",
    xPost: "https://x.com/cryptojay/status/2030992058991706129",
    builder: "JaybankOz",
    feedback: {
      struggled: "Some issues with swaps — took trial and error to get right.",
      workedWell: "Setting up the bridge was the easiest part — worked on the first trial.",
      plans: "Can grow into a sub-dapp of LI.FI, free to use with no hidden fees.",
    },
  },

  // ─── Encode x Hyperliquid Hackathon · January 2026 ────────────────────────

  {
    slug: "mina",
    title: "Mina",
    tagline: "Complete Hyperliquid onboarding platform — from any chain to actively trading in one flow.",
    description:
      "A complete Hyperliquid onboarding platform that takes users from any blockchain to actively trading in one seamless flow. Includes a published SDK, mobile-first web app, and terminal CLI.",
    lifiIntegration:
      "Uses LI.FI routing to bridge assets from 40+ EVM chains with 15+ bridge protocols including Stargate, Across, and Celer.",
    lifiProducts: ["SDK"],
    hackathon: "Encode x Hyperliquid Hackathon",
    hackathonSlug: "encode-hyperliquid-jan-2026",
    hackathonDate: "January 2026",
    place: "1st",
    tags: ["Onboarding", "SDK", "CLI", "Bridge"],
    website: "https://usemina.co",
    github: "https://github.com/SiphoYawe/mina",
    builder: "SiphoYawe",
    featured: true,
  },
  {
    slug: "hypergate",
    title: "HyperGate",
    tagline: "Embeddable React widget for atomic one-click onboarding into Hyperliquid L1 trading accounts.",
    description:
      "An embeddable React widget enabling atomic, one-click onboarding from any chain directly into Hyperliquid L1 trading accounts. Packaged as a plug-and-play npm library.",
    lifiIntegration:
      "Wraps LI.FI routing logic with a custom Auto-Forward engine for seamless cross-chain deposits.",
    lifiProducts: ["SDK"],
    hackathon: "Encode x Hyperliquid Hackathon",
    hackathonSlug: "encode-hyperliquid-jan-2026",
    hackathonDate: "January 2026",
    place: "2nd",
    tags: ["Widget", "React", "Onboarding", "Bridge"],
    website: "https://hypergate-pi.vercel.app",
    github: "https://github.com/0-robert/Hyperliquid",
    builder: "0-robert",
    featured: true,
  },
  {
    slug: "delta0",
    title: "Delta0",
    tagline: "Turn any asset into a stablecoin via on-chain cash-and-carry strategies on Hyperliquid.",
    description:
      "Turn any asset into a stablecoin. Executes on-chain cash-and-carry strategies (long spot + short perp) on Hyperliquid, providing funding rate yields to users.",
    lifiIntegration:
      "Uses LI.FI bridge to make bridging and trading tokens into the protocol accessible from all chains in just three clicks.",
    lifiProducts: ["SDK"],
    hackathon: "Encode x Hyperliquid Hackathon",
    hackathonSlug: "encode-hyperliquid-jan-2026",
    hackathonDate: "January 2026",
    place: "3rd",
    tags: ["DeFi", "Stablecoin", "Bridge", "Perps"],
    website: "https://www.delta0.xyz",
    github: "https://github.com/HaroldRobson/Delta0",
    builder: "HaroldRobson",
  },
  {
    slug: "tago-leap",
    title: "TAGO Leap",
    tagline: "Narrative-first trading terminal where you describe a thesis and the platform generates the trade.",
    description:
      "Trade ideas, not tokens. A narrative-first trading terminal where users describe market theses and the platform generates hedged pair trades via Pear Protocol.",
    lifiIntegration:
      "Powers 14+ chain bridging with route optimization, real-time quotes, and fee calculation for one-click onboarding.",
    lifiProducts: ["API"],
    hackathon: "Encode x Hyperliquid Hackathon",
    hackathonSlug: "encode-hyperliquid-jan-2026",
    hackathonDate: "January 2026",
    tags: ["Trading", "Narrative", "Bridge", "Perps"],
    website: "https://tago-leap-frontend.vercel.app",
    github: "https://github.com/RealKevinApetrei/tago-leap",
    builder: "RealKevinApetrei",
  },
  {
    slug: "onliq",
    title: "onLiq",
    tagline: "Mobile-first React Native app that onboards users into Hyperliquid in one seamless flow.",
    description:
      "A mobile-first React Native app that onboards crypto-native users and beginners into Hyperliquid in one flow, with theme and pair trading via Pear Execution API.",
    lifiIntegration:
      "Removes friction from bridging as part of the onboarding flow, enabling users to go from email to funded account seamlessly.",
    lifiProducts: ["SDK"],
    hackathon: "Encode x Hyperliquid Hackathon",
    hackathonSlug: "encode-hyperliquid-jan-2026",
    hackathonDate: "January 2026",
    tags: ["Mobile", "Onboarding", "React Native", "Bridge"],
    github: "https://github.com/Sahid-m/onLiq",
    builder: "Sahid-m",
  },

  // ─── ETHGlobal HackMoney 2026 · February 2026 ─────────────────────────────

  {
    slug: "omniflow",
    title: "OmniFlow",
    tagline: "Payments orchestration protocol. One API. One Balance. Any Chain.",
    description:
      "OmniFlow is a payments orchestration protocol built on Circle's Arc that unifies fragmented crypto liquidity into a single balance across all chains. Deposit any token from any chain — it auto-swaps to USDC via LI.FI and settles on Arc. Pay out to multiple recipients with any token on any chain with a single API call. The protocol makes cross-chain payment complexity completely invisible to end users and application developers.",
    lifiIntegration:
      "Uses LI.FI Composer to orchestrate multi-step DeFi workflows atomically in a single UserOp. On deposit: any token → LI.FI swap → USDC → Gateway deposit, all in one transaction. On payout: Gateway mint → USDC → LI.FI swap → recipient's preferred token. The entire deposit and withdrawal lifecycle flows through Composer, making cross-chain complexity invisible.",
    lifiProducts: ["SDK", "Composer"],
    hackathon: "ETHGlobal HackMoney 2026",
    hackathonSlug: "ethglobal-hackmoney-2026",
    hackathonDate: "February 2026",
    track: "Best Use of LI.FI Composer in DeFi",
    place: "1st",
    tags: ["Payments", "Composer", "USDC", "Multi-step"],
    website: "https://omniflow-app.up.railway.app/",
    github: "https://github.com/gliry/payments",
    builder: "gliry, spiehdid",
    featured: true,
  },
  {
    slug: "router402-ethglobal",
    title: "Router402",
    tagline: "OpenRouter-compatible AI gateway with true pay-per-use billing via x402 micropayments and a built-in LI.FI MCP server.",
    description:
      "Router402 is an OpenRouter-compatible AI gateway bringing true pay-per-use billing to LLMs through x402 micropayments on Base with ~0.2s Flashblock settlement. Built a LI.FI MCP server as a built-in plugin that returns typed transaction data users sign themselves — private keys never leave the client. Ships with a TypeScript SDK, VS Code extension, and demo web client. Exposes five LI.FI tools to LLM agents: get_quote, get_status, get_chains, get_tokens, get_token_price.",
    lifiIntegration:
      "Built a purpose-built LI.FI MCP server deployed on Cloudflare Workers. The server wraps the LI.FI REST API and exposes typed tools to LLM agents. A custom code-fence format (```tx) in LLM output lets clients parse and present unsigned transactions for user signing — no private key handoff. Tools exposed: get_quote, get_status, get_chains, get_tokens, get_token_price.",
    lifiProducts: ["API", "MCP"],
    hackathon: "ETHGlobal HackMoney 2026",
    hackathonSlug: "ethglobal-hackmoney-2026",
    hackathonDate: "February 2026",
    track: "Best AI x LI.FI Smart App",
    place: "1st",
    tags: ["AI Agent", "MCP", "x402", "Payments"],
    website: "https://www.router402.xyz/",
    github: "https://github.com/itublockchain/hackmoney-router402",
    builder: "feyyazcigim, asgarovf, uok825, oemerfurkan, eyllshn",
    featured: true,
  },
  {
    slug: "takeaway",
    title: "Takeaway",
    tagline: "Receive from any chain to your favorite chain — just send to an ENS name, no bridge UI.",
    description:
      "Takeaway lets you create chain-specific ENS subnames (e.g. arbitrum.yourname.eth, base.yourname.eth). You send funds to the subname from any chain; a relayer detects the deposit, reads your destination chain and address from ENS text records, and bridges to your chosen chain and address via LI.FI. No bridge UI, no extra signing after one-time setup. The result: invisible bridging behind a simple 'send to a name' experience.",
    lifiIntegration:
      "LI.FI is the execution layer for every bridge. The relayer fetches quotes and transaction requests from the LI.FI SDK and executes the cross-chain transfer so users never open a bridge UI. All cross-chain volume in Takeaway flows through LI.FI, demonstrating how LI.FI can power invisible bridging behind a simple send-to-name experience.",
    lifiProducts: ["SDK"],
    hackathon: "ETHGlobal HackMoney 2026",
    hackathonSlug: "ethglobal-hackmoney-2026",
    hackathonDate: "February 2026",
    track: "Best LI.FI Powered DeFi Integration",
    place: "1st",
    tags: ["ENS", "Payments", "Bridge", "UX"],
    website: "https://takeaway-mbg8.onrender.com/",
    github: "https://github.com/FaezehShakouri/Takeaway",
    builder: "FaezehShakouri",
    featured: true,
  },
  {
    slug: "magnee",
    title: "Magnee",
    tagline: "Browser extension that intercepts any dapp transaction and lets you pay from a different chain or token.",
    description:
      "Magnee is a browser extension that intercepts payable Ethereum transactions on any dapp and lets users pay from a different chain or token. When a dapp calls eth_sendTransaction with a non-zero value, Magnee catches it, shows the user their token balances across supported chains (Ethereum, Optimism, Base, Arbitrum), fetches a bridge quote via LI.FI, and executes the cross-chain payment. Uses EIP-7702 delegate contracts on the destination chain and EIP-712 signed authorizations — no dapp modifications needed. NFT mints, DeFi interactions, and contract whitelists all work as if the user transacted directly.",
    lifiIntegration:
      "Uses @lifi/sdk as the core bridging layer. Calls getContractCallsQuote to get bridge quotes with embedded destination contract calls, executeRoute to send cross-chain transactions, and getStatus to track bridge delivery. Token discovery and balance fetching across chains use LI.FI's getTokens and getTokenBalancesByChain endpoints. The transaction explorer queries the LI.FI status REST API to trace transactions end-to-end across chains.",
    lifiProducts: ["SDK"],
    hackathon: "ETHGlobal HackMoney 2026",
    hackathonSlug: "ethglobal-hackmoney-2026",
    hackathonDate: "February 2026",
    track: "Best LI.FI Powered DeFi Integration",
    place: "2nd",
    tags: ["Browser Extension", "UX", "Bridge", "EIP-7702"],
    website: "https://ethglobal.com/showcase/magnee-dude7",
    github: "https://github.com/guy-do-or-die/magn.ee",
    builder: "guy-do-or-die",
    featured: true,
  },
  {
    slug: "ensrouter",
    title: "ENSRouter",
    tagline: "Pay any ENS name in USDC, auto-routed to their preferred chain and token.",
    description:
      "ENSRouter is a cross-chain payment routing platform built on ENS that simplifies how people receive crypto payments across blockchains. Recipients configure their payment preferences once on their ENS name — preferred chain, preferred tokens, and split percentages. Senders enter any ENS name (e.g. alice.eth), choose how much USDC to send, and ENSRouter handles everything: bridging cross-chain via LI.FI SDK, swapping into the recipient's preferred token allocations, and delivering final tokens. The sender gets a real-time progress tracker showing each step: approval, swap, bridge, and delivery. Includes a Telegram bot for payment notifications.",
    lifiIntegration:
      "LI.FI SDK is configured as a singleton using createConfig with Wagmi integration for wallet signing and chain switching. Used for all cross-chain routing: executeRoute handles the full bridge + swap flow, and Webhook processing tracks settlement. The SDK handles mid-execution chain switching (switchChain) transparently.",
    lifiProducts: ["SDK"],
    hackathon: "ETHGlobal HackMoney 2026",
    hackathonSlug: "ethglobal-hackmoney-2026",
    hackathonDate: "February 2026",
    track: "Best LI.FI Powered DeFi Integration",
    place: "3rd",
    tags: ["ENS", "Payments", "Bridge", "UX"],
    website: "https://ensrouter.vercel.app/",
    github: "https://github.com/SakshiShah29/ENSRouter",
    builder: "SamAg19, SakshiShah29",
  },
  {
    slug: "tidal",
    title: "Tidal",
    tagline: "Chat with AI to find and execute the best DeFi yields matched to your risk appetite.",
    description:
      "Tidal is an AI-powered DeFi yield management assistant that helps users find and execute yield strategies matched to their risk tolerance. Users select a 'depth' — Shallows for conservative, Mid-Depth for moderate, Deep Water for aggressive — and Tidal's AI agent recommends, explains, and executes yield opportunities through natural conversation. All on Base via AAVE V3 and Morpho vaults.",
    lifiIntegration:
      "Tidal uses LI.FI as its core execution layer for AI-driven yield management. The agent automatically routes swaps through LI.FI whenever a user's tokens don't match their target strategy — e.g., swapping ETH→USDC via LI.FI before depositing to AAVE or Morpho vaults.",
    lifiProducts: ["SDK"],
    hackathon: "ETHGlobal HackMoney 2026",
    hackathonSlug: "ethglobal-hackmoney-2026",
    hackathonDate: "February 2026",
    tags: ["AI Agent", "Yield", "DeFi", "Conversational"],
    website: "https://ethglobal.com/showcase/tidal-xh4hk",
    github: "https://github.com/0xSardius/tidal",
    builder: "0xJulo, 0xSardius",
  },
  {
    slug: "prismos",
    title: "PrismOS",
    tagline: "Non-custodial marketplace where DeFi agents manage your liquidity positions autonomously.",
    description:
      "PrismOS is a non-custodial marketplace where users subscribe to AI agents that autonomously manage their DeFi liquidity positions on Ethereum mainnet. Agents handle Uniswap LP position management — watching prices, adjusting tick ranges, collecting fees, compounding, and rebalancing. Agent builders get a distribution channel without requiring custody of user funds.",
    lifiIntegration:
      "Uses LI.FI to build calldata for swaps, bridges, and liquidity pool deposits. LI.FI serves as the source of truth for the API in order to facilitate agent integrations — getContractCallsQuote powers multi-step composed operations for agents.",
    lifiProducts: ["SDK"],
    hackathon: "ETHGlobal HackMoney 2026",
    hackathonSlug: "ethglobal-hackmoney-2026",
    hackathonDate: "February 2026",
    tags: ["AI Agent", "Liquidity", "Uniswap", "Non-custodial"],
    website: "https://ethglobal.com/showcase/prismos-b0hp2",
    github: "https://github.com/Koploseus/PrismOS",
    builder: "Koploseus, gravithex",
  },
  {
    slug: "moltrades",
    title: "Moltrades",
    tagline: "Social DeFi platform where AI agents communicate, discuss strategies, and execute trades across chains.",
    description:
      "Moltrades is a social DeFi platform built for AI agents. Two core components: (1) Moltrades Core Engine — a ChatGPT-like interface for complex multi-step DeFi trades via natural language using LI.FI Composer + Uniswap V4, with a visual n8n-style flow builder; (2) Moltrades Social Platform — a Twitter-like feed for agents to post strategies and discuss positions.",
    lifiIntegration:
      "LI.FI is the core execution layer for all DeFi operations. The MCP server exposes 20 tools to AI agents — 7 powered by LI.FI — enabling protocol discovery, multi-step composed quotes via getContractCallsQuote, simple swap/bridge aggregation via getQuote, cross-chain trade execution, and bridge status polling. Supports 11 EVM chains plus Solana and SUI-to-EVM bridging, with calldata encoded for 17 DeFi protocol deployments.",
    lifiProducts: ["SDK", "API", "Composer", "MCP"],
    hackathon: "ETHGlobal HackMoney 2026",
    hackathonSlug: "ethglobal-hackmoney-2026",
    hackathonDate: "February 2026",
    tags: ["AI Agent", "Social", "Composer", "Multi-chain"],
    website: "https://ethglobal.com/showcase/moltrades-98xk8",
    github: "https://github.com/gabrielantonyxaviour/moltrades",
    builder: "gabrielantonyxaviour, aadharshweb3, JoannaJenifa",
  },
  {
    slug: "hands-for-ai",
    title: "Hands for AI",
    tagline: "Marketplace where AI agents autonomously hire humans for real-world tasks using instant cross-chain payments.",
    description:
      "AI agents can write code, analyze data, and reason — but they can't walk into a store, take a photo, or deliver a package. Hands for AI gives them human hands. A fully functional marketplace where AI agents autonomously hire humans for real-world tasks. Agents post tasks with USDC bounties locked in escrow via Yellow Network state channels on Base L2. Humans apply, complete the work, and are paid instantly.",
    lifiIntegration:
      "Embedded as a 'Bridge to Base' modal in the user dashboard. Lets users bridge any token from any chain directly to USDC on Base to fund their account — removing the friction of manually finding and using a bridge before they can engage with the marketplace.",
    lifiProducts: ["SDK"],
    hackathon: "ETHGlobal HackMoney 2026",
    hackathonSlug: "ethglobal-hackmoney-2026",
    hackathonDate: "February 2026",
    tags: ["AI Agent", "Payments", "Real-world", "Bridge"],
    website: "https://ethglobal.com/showcase/hands-for-ai-n9q6n",
    github: "https://github.com/0xPasho/handsfor.ai",
    builder: "0xPasho",
  },
  {
    slug: "molty",
    title: "Molty",
    tagline: "3D-printed OpenClaw robot on your desk that reacts emotionally to crypto events and executes swaps by voice.",
    description:
      "Molty is a 3D-printed OpenClaw robot (running on a Raspberry Pi) that lives on your desk and reacts emotionally to crypto portfolio events via voice AI. Your bet winning? It gets hyped. Your trade nuking? Molty looks heartbroken. Includes cross-chain swap skills triggered entirely by voice commands — say 'swap my USDC on Arbitrum to ETH on Base' and Molty executes it.",
    lifiIntegration:
      "The agent skill calls LI.FI's REST API to fetch quotes, execute swap transactions, and poll the status endpoint until the transfer completes. Enables the full e2e voice-triggered cross-chain swap flow. Also used as the first step in prediction flows: bridge funds cross-chain via LI.FI, then deposit into custody.",
    lifiProducts: ["API"],
    hackathon: "ETHGlobal HackMoney 2026",
    hackathonSlug: "ethglobal-hackmoney-2026",
    hackathonDate: "February 2026",
    tags: ["AI Agent", "Voice", "Hardware", "Bridge"],
    website: "https://ethglobal.com/showcase/molty-s23q7",
    github: "https://github.com/Jovian-Dsouza/molty",
    builder: "pettiboy, harshalbhangale, Jovian-Dsouza",
  },
  {
    slug: "xylkstream",
    title: "XylkStream",
    tagline: "Multi-tenant vesting platform where AI agents deploy idle streaming funds to the highest-yield markets.",
    description:
      "XylkStream is a multi-tenant vesting platform where unvested funds work for you. Stream payments to anyone while AI agents automatically deploy idle capital to the highest-yield markets across Sui and EVM chains. Hot-swappable yield strategies and real-time optimization — you set policy, AI maximizes returns. Payment streams (salary, contractor payments, vesting schedules) automatically earn yield while waiting to be claimed.",
    lifiIntegration:
      "Creates a yield strategy on passive streaming funds. LI.FI handles cross-chain movement of capital between yield markets during strategy execution.",
    lifiProducts: ["SDK"],
    hackathon: "ETHGlobal HackMoney 2026",
    hackathonSlug: "ethglobal-hackmoney-2026",
    hackathonDate: "February 2026",
    tags: ["AI Agent", "Yield", "Vesting", "Multi-chain"],
    website: "https://ethglobal.com/showcase/xylkstream-0he32",
    github: "https://github.com/kelvinpraises/xylkstream",
    builder: "kelvinpraises",
  },
];

export const HACKATHONS = [
  { slug: "ethglobal-hackmoney-2026", name: "ETHGlobal HackMoney 2026", date: "February 2026" },
  { slug: "vibeathon-mar-2026", name: "Agentic Commerce Vibeathon", date: "March 2026" },
  { slug: "encode-hyperliquid-jan-2026", name: "Encode x Hyperliquid Hackathon", date: "January 2026" },
];

export const ALL_TAGS = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
