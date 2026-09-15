export type Detector = {
  name: string;
  blurb: string;
  phase: "Available at launch" | "Pro" | "Roadmap";
  advisory?: boolean;
};

export const detectorGroups: { title: string; intro: string; items: Detector[] }[] = [
  {
    title: "Perimeter and security",
    intro: "The detectors every site needs on day one. Conservative thresholds, tuned per camera.",
    items: [
      { name: "Person and vehicle", blurb: "Classes, tracks and dwell time for every camera.", phase: "Available at launch" },
      { name: "Intrusion and line-cross", blurb: "Polygon zones and directional lines, per schedule.", phase: "Available at launch" },
      { name: "Loitering", blurb: "Dwell beyond a threshold in a zone you draw.", phase: "Available at launch" },
      { name: "Camera tamper", blurb: "Covered, defocused, repositioned or blinded.", phase: "Available at launch" },
      { name: "Weapon", blurb: "Visible firearm or blade, flagged Critical.", phase: "Pro" },
      { name: "Number plates (ANPR)", blurb: "Plate read at gates, matched to allow and deny lists.", phase: "Roadmap" },
    ],
  },
  {
    title: "Safety and compliance",
    intro: "For plants, depots and warehouses that need a number for the auditor every Monday.",
    items: [
      { name: "PPE compliance", blurb: "Helmet, vest and boots by zone and shift.", phase: "Pro" },
      { name: "Man-down", blurb: "A person on the ground who does not get up.", phase: "Pro" },
      { name: "Fire and smoke", blurb: "Early visual detection, independent of smoke detectors.", phase: "Pro" },
      { name: "People and vehicle counting", blurb: "Occupancy, throughput and queue length.", phase: "Pro" },
      { name: "Forklift proximity", blurb: "People inside a vehicle's danger envelope.", phase: "Roadmap" },
      { name: "Abandoned object", blurb: "A bag or box left in a zone longer than allowed.", phase: "Roadmap" },
    ],
  },
  {
    title: "Advisory behaviour",
    intro:
      "Worded as \"for review\", never as an accusation. Advisory detectors never trigger automated consequences.",
    items: [
      { name: "Possible aggression", blurb: "Flags a scene for a human to review.", phase: "Roadmap", advisory: true },
      { name: "Possible concealment", blurb: "Retail shrinkage cues, for review.", phase: "Roadmap", advisory: true },
      { name: "Crowd formation", blurb: "Density above a threshold you set.", phase: "Roadmap", advisory: true },
      { name: "Fly-tipping", blurb: "Dumping in a monitored zone.", phase: "Roadmap", advisory: true },
    ],
  },
];

export const steps = [
  {
    n: "01",
    title: "Plug in beside your NVR",
    body:
      "The Crokta Edge appliance joins your camera VLAN and discovers cameras over ONVIF, or you add RTSP streams by hand. Your NVR keeps recording. Nothing is replaced.",
    meta: "ONVIF discovery · RTSP · H.264/H.265 · sub-streams",
  },
  {
    n: "02",
    title: "Draw zones, pick a template",
    body:
      "Polygon zones and lines on a live snapshot. Rules read like a sentence: WHEN person IN yard-perimeter DURING after-hours THEN alert Critical. Vertical templates get you 80% of the way.",
    meta: "16 cameras live in under 2 hours",
  },
  {
    n: "03",
    title: "Detect at the edge",
    body:
      "Computer vision runs on the appliance, not in the cloud. Detection continues when the uplink drops. Every confirmed event is written to a crash-safe log before anything else happens.",
    meta: "≤ 300 ms frame-to-detection target",
  },
  {
    n: "04",
    title: "Alert with evidence, then learn",
    body:
      "WhatsApp, push, SMS, siren or webhook. Every alert carries a thumbnail, a clip, the camera, the zone, the rule and the confidence. One tap to mark it false, and the system tightens.",
    meta: "≤ 8 s event-to-WhatsApp target",
  },
];

export const pricing = [
  {
    name: "Core",
    price: "Entry tier",
    unit: "per camera / month",
    tagline: "Make every camera you own useful.",
    features: [
      "Person and vehicle detection",
      "Intrusion, line-cross, loitering, tamper",
      "Zones, schedules and rule builder",
      "WhatsApp, push, SMS and email alerts",
      "30-day event history",
      "Mobile app for operators",
    ],
    cta: "Start a pilot",
    highlight: false,
  },
  {
    name: "Pro",
    price: "About 2× Core",
    unit: "per camera / month",
    tagline: "For sites that answer to an auditor.",
    features: [
      "Everything in Core",
      "PPE, fire and smoke, man-down, counting",
      "Weekly safety and alert-quality reports",
      "Escalation ladders and quiet hours",
      "REST API and signed webhooks",
      "90-day event history",
    ],
    cta: "Start a pilot",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Quoted",
    unit: "per site or per fleet",
    tagline: "Multi-site, regulated, on your terms.",
    features: [
      "Everything in Pro",
      "ANPR and AI video search",
      "Face recognition where lawful, consent-gated",
      "SSO and SAML, audit log export",
      "Fully on-prem control plane option",
      "SLA, custom detectors, data residency",
    ],
    cta: "Talk to us",
    highlight: false,
  },
];

export const faq = [
  {
    q: "Do I need to replace my cameras?",
    a: "No. Crokta works with the IP cameras, NVRs and DVRs you already have, as long as they expose an RTSP stream or speak ONVIF. Hikvision, Dahua, Uniview, Axis and their OEM rebrands are the ones we test on every release. At onboarding, every camera gets a green, amber or red compatibility grade so you know what to expect before you pay for it.",
  },
  {
    q: "What happens when the power or the internet goes?",
    a: "Detection keeps running on the appliance. Local actions like a siren or relay still fire. Confirmed events are written to a crash-safe log and buffered for at least 72 hours, clips for 24 hours. When the uplink returns, everything is uploaded and ingested, but you get one summary notification, not a storm of stale alerts. On a modest UPS the appliance runs for four hours and shuts down gracefully on low battery.",
  },
  {
    q: "Does my video go to the cloud?",
    a: "Raw video never leaves the site. The appliance uploads event metadata, a thumbnail and a short clip for each confirmed event, and nothing when nothing is happening. Steady-state upload per camera is under 5 kbps. Live view is peer-to-peer WebRTC from the appliance to your phone or console.",
  },
  {
    q: "How do you stop the system crying wolf?",
    a: "Every new site goes through a 14-day tuning window. Days one to seven are observation mode: events are recorded, only Critical alerts are sent. Days eight to fourteen tighten thresholds using real labels from your operators. From day fifteen the contractual target applies: three or fewer false alerts per camera per day, measured and published per site.",
  },
  {
    q: "What does the appliance need from my network?",
    a: "Outbound HTTPS only. The appliance accepts no inbound connections, opens no ports, and authenticates with a per-device certificate. It fails over from Ethernet to Wi-Fi to 4G and is aware of data caps.",
  },
  {
    q: "What about face recognition?",
    a: "Off by default, at the organisation level. Turning it on records the legal basis, stores biometric data in a separate store under a separate key, and audits every access. We do not do emotion recognition, demographic classification or any kind of \"suspicious person\" scoring, and we will not build them.",
  },
  {
    q: "Who installs it?",
    a: "Usually your existing CCTV installer, who we train and certify. The install flow is designed to take under two hours for sixteen cameras: scan a QR code to claim the box, review discovered cameras, pick a template, draw zones, start observation mode, hand over.",
  },
];

export const hardwareTiers = [
  {
    name: "Edge Lite",
    cameras: "4–8 cameras",
    fit: "Small retail, single-building estates, branches",
    build: "Fanless x86 mini PC with a Hailo-8 accelerator",
    notes: ["12 V DC", "Fanless", "NVMe buffer", "Dual uplink"],
  },
  {
    name: "Edge Pro",
    cameras: "Up to 16 cameras",
    fit: "Warehouses, bank branches, medium estates",
    build: "NVIDIA Jetson Orin on a production carrier",
    notes: ["12 V DC", "NVMe buffer", "Dual uplink", "TPM sealed"],
    featured: true,
  },
  {
    name: "Edge Max",
    cameras: "32–48 cameras",
    fit: "Factories, campuses, councils",
    build: "x86 with an RTX-class GPU, rack or wall mount",
    notes: ["Rack mount", "Dual NIC", "Filtered enclosure"],
  },
  {
    name: "Edge Software",
    cameras: "Licensed per channel",
    fit: "IT-mature enterprise with its own servers",
    build: "Docker image on a server from our validated list",
    notes: ["Your hardware", "Validated by us", "Import-free"],
  },
];

export const segments = [
  { name: "Warehouses, factories, depots", use: "PPE, man-down, intrusion, forklift proximity" },
  { name: "Gated estates and facility managers", use: "Intrusion, loitering, ANPR, tailgating" },
  { name: "Retail chains", use: "Shrinkage cues, people counting, queues, till areas" },
  { name: "Banks, fuel stations, telecom sites", use: "Weapon, intrusion, tamper, ANPR" },
  { name: "Schools, hospitals, hospitality", use: "Intrusion, crowd, fire and smoke, falls" },
  { name: "Local government", use: "Fly-tipping, anti-social behaviour, ANPR" },
];
