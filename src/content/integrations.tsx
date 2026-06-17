export interface Integration {
  name: string;
  heading: string;
  subheading: string;
  sectionHeading: React.ReactNode;
  sectionBody: string;
  benefits: { title: string; body: string }[];
  workflow: string[];
  setupNote: string;
  readyLine: string;
}

export const INTEGRATIONS: Record<string, Integration> = {
  hubly: {
    name: "Hubly",
    heading: "Native Hubly Integration",
    subheading:
      "Stop exporting CSVs. Put verifiable buying signals, source quotes, and “Why Now” narratives directly into the CRM your reps already live in.",
    sectionHeading: (
      <>
        Not just data fields. <strong className="font-bold">App Card available.</strong>
      </>
    ),
    sectionBody:
      "Peldot functions as an invisible intelligence layer — delivering a Why Now summary, individual signals, and the sources, quotes, and relevant details behind each one.",
    benefits: [
      { title: "Zero Manual Uploads", body: "Automatic daily syncing to Hubly — no spreadsheets to manage." },
      { title: "Lifecycle-Aware Signals", body: "Context-dependent signal relevance based on deal stage." },
      { title: "Closed-Won Analysis", body: "Revenue correlation calculations tied to the market triggers that close." },
    ],
    workflow: ["Signal trigger", "Webhook action", "Native sync update", "Team notification"],
    setupNote: "Less than a 10-minute integration",
    readyLine: "Hubly access is included in all account plans.",
  },
  forcely: {
    name: "Forcely",
    heading: "Forcely Integration",
    subheading:
      "Stop exporting CSVs. Put verifiable buying signals, source quotes, and “Why Now” narratives directly into the CRM your reps already live in.",
    sectionHeading: (
      <>
        Context exactly <strong className="font-bold">where reps need it.</strong>
      </>
    ),
    sectionBody:
      "Configure webhooks to push payloads to your endpoints the moment target accounts trigger signals — ideal for Flowstep automations, database updates, or alert routing.",
    benefits: [
      { title: "Zero Manual Uploads", body: "No spreadsheet management; automatic daily syncs to Forcely." },
      { title: "Lifecycle-Aware Signals", body: "Surface relevant signals based on prospect stage." },
      { title: "Closed-Won Analysis", body: "Calculate the market triggers correlated with revenue." },
    ],
    workflow: ["Signal triggers", "Find contacts & enrich", "Update company & create task", "Send account alert"],
    setupNote: "Less than a 10-minute integration",
    readyLine: "Forcely access is included in all account plans. 700+ sellers already using it.",
  },
  pingr: {
    name: "Pingr",
    heading: "Pingr Integration",
    subheading:
      "Every morning, push verifiable buying signals directly into the Pingr channels your team already lives in.",
    sectionHeading: (
      <>
        Daily alerts with <strong className="font-bold">all the context.</strong>
      </>
    ),
    sectionBody:
      "Each signal comes with details, sources, quotes, and facts to support your outreach. Your team is busy — pushing signals directly into Pingr eliminates tool fatigue and dramatically decreases speed-to-lead.",
    benefits: [
      { title: "Daily Alerts", body: "Detection triggers instantly deliver exact quotes to your team’s devices." },
      { title: "No New Tools to Learn", body: "Adoption is guaranteed because there is no login required." },
      { title: "One-Click Actions", body: "Native buttons enable direct CRM access or source navigation." },
    ],
    workflow: ["Signal detected", "Quote + source attached", "Posted to channel", "One-click to CRM"],
    setupNote: "Less than a 10-minute integration",
    readyLine: "Pingr access is included in all account plans. 700+ sellers already using it.",
  },
  tablr: {
    name: "Tablr",
    heading: "Signals in Tablr",
    subheading:
      "Every morning, push verifiable buying signals directly into your Tablr tables to run enrichments and workflows.",
    sectionHeading: (
      <>
        Enrich your tables <strong className="font-bold">with signal data.</strong>
      </>
    ),
    sectionBody:
      "When signals are detected, Peldot returns quoted sources and synthesized narratives for workflows, contact discovery, and messaging personalization. Pushing signals into Tablr eliminates manual research and accelerates speed-to-lead.",
    benefits: [
      { title: "Automate Enrichments", body: "Detection triggers automatic waterfall enrichment of the buying committee." },
      { title: "No Manual Research", body: "Use source quotes from regulatory filings, job boards, and earnings calls for AI email personalization." },
      { title: "Real-Time Workflows", body: "Evaluate intent, score accounts, and push enriched contacts to CRM or sequencing tools." },
    ],
    workflow: ["Signal detected", "Waterfall enrichment", "Score & evaluate", "Push to sequencing"],
    setupNote: "Less than a 10-minute integration",
    readyLine: "Tablr access is included in all account plans. 700+ sellers already using it.",
  },
  atlas: {
    name: "MCP / Atlas",
    heading: "MCP & Atlas",
    subheading:
      "Your sales signal intelligence, entirely in natural language. Ask Atlas to prioritize accounts, configure tracking, upload lists, and pull signal data.",
    sectionHeading: (
      <>
        Your pipeline data, <strong className="font-bold">fully conversational.</strong>
      </>
    ),
    sectionBody:
      "Give Atlas direct access to your Peldot intelligence. Instantly pull regulatory quotes, evaluate target accounts, and generate personalized outreach — all in one chat interface. By bringing Peldot into Atlas Desktop you eliminate context switching and dramatically increase execution speed.",
    benefits: [
      { title: "Daily Prioritization", body: "Get ranked account lists with exact buying triggers and source quotes, ready for action." },
      { title: "No-Code Configuration", body: "Manage the entire setup via chat — upload lists, adjust signal weights, create ICP segments without dashboards." },
      { title: "Account Discovery", body: "Scan the market automatically and add net-new target accounts matching your ideal profile." },
    ],
    workflow: ["Ask in natural language", "Atlas calls the tool", "Signals + sources returned", "Draft outreach"],
    setupNote: "No-code, conversational setup",
    readyLine: "Atlas / MCP access is included in all account plans. 700+ sellers already using it.",
  },
};
