export interface Faq {
  question: string;
  answer: string;
}

// Answer-first FAQs: each answer opens with a direct, quotable sentence for
// featured snippets and AI answer engines. Keep claims consistent with page copy.
export const FAQS: Record<string, Faq[]> = {
  home: [
    {
      question: "What does Dastute Technologies do?",
      answer:
        "Dastute Technologies is an IT services company that provides managed IT support, cyber security, cloud services, web and mobile development, ERP, blockchain and IT consulting to businesses in the UK, India and Singapore.",
    },
    {
      question: "Who does Dastute work with?",
      answer:
        "We work with SMEs and growing businesses that need dependable IT without building a large in-house team, with particular experience in healthcare, fintech, manufacturing and logistics.",
    },
    {
      question: "Do you offer 24/7 IT support?",
      answer:
        "Yes. Our managed IT service includes a 24/7 helpdesk and proactive monitoring, supported by teams across the UK, India and Singapore.",
    },
    {
      question: "How do I get started with Dastute?",
      answer:
        "Book a free strategy call or request an IT audit. We review your current environment and goals, then propose a scope and price based on your actual requirements.",
    },
  ],
  "managed-it": [
    {
      question: "What are managed IT services?",
      answer:
        "Managed IT services means outsourcing the day-to-day running of your IT to a specialist provider. Dastute covers 24/7 helpdesk support, proactive monitoring, patching, endpoint security, backup and disaster recovery, and vCIO advisory for one predictable fee.",
    },
    {
      question: "What is included in Dastute's managed IT service?",
      answer:
        "Every plan includes a 24/7 helpdesk, proactive infrastructure monitoring, patch and vulnerability management, endpoint protection, backup and business continuity, regular service reports and an IT roadmap from a virtual CIO.",
    },
    {
      question: "How does onboarding work?",
      answer:
        "Onboarding has four stages: an environment audit, deployment of our monitoring and security tooling, handover and integration with your team, then active management.",
    },
    {
      question: "Is managed IT cheaper than an in-house IT team?",
      answer:
        "For most SMEs, yes. You get a full team of specialists for a flat monthly fee instead of salaries, training and cover for a single in-house hire. See our pricing page or request a quote for your environment.",
    },
  ],
  consulting: [
    {
      question: "What does an IT consultant do?",
      answer:
        "An IT consultant aligns technology with business goals. Dastute's consultants build IT strategies and roadmaps, run IT audits, select vendors, plan digital transformation and AI adoption, and act as a fractional CIO or CTO.",
    },
    {
      question: "What is a fractional CIO or vCIO?",
      answer:
        "A fractional or virtual CIO is a senior technology leader who works with you part-time. You get board-level IT strategy, budgeting and vendor oversight without the cost of a full-time executive.",
    },
    {
      question: "What will I receive from a consulting engagement?",
      answer:
        "Typical deliverables are an IT strategy document, a vendor evaluation report, and a business case with an ROI model you can take to your board.",
    },
    {
      question: "How does a consulting engagement run?",
      answer:
        "We follow four steps: discovery, assessment of your current state, strategy and roadmap, then support through implementation.",
    },
  ],
  "cyber-security": [
    {
      question: "What is the difference between red team and blue team security?",
      answer:
        "A red team attacks your organisation the way a real adversary would to find weaknesses. A blue team defends it by monitoring, detecting and responding to threats. Purple team exercises combine both so defences improve from each attack.",
    },
    {
      question: "What cyber security services does Dastute provide?",
      answer:
        "We provide penetration testing, red team adversary simulation, SOC monitoring and threat detection, social engineering and phishing tests, security posture assessments, GDPR and privacy programmes, and incident response planning.",
    },
    {
      question: "Which UK compliance standards do you support?",
      answer:
        "We help businesses prepare for and maintain UK compliance including Cyber Essentials, ISO 27001 and UK GDPR, with gap analysis and a remediation roadmap.",
    },
    {
      question: "What happens after a penetration test?",
      answer:
        "You receive an executive summary, a technical findings matrix ranked by risk, and a remediation roadmap. We then run a debrief with your team and can retest once fixes are in place.",
    },
  ],
  cloud: [
    {
      question: "Which cloud platforms do you work with?",
      answer:
        "We design, migrate and manage workloads on AWS, Microsoft Azure and Google Cloud, including multi-cloud and hybrid setups.",
    },
    {
      question: "How does a cloud migration work?",
      answer:
        "A Dastute migration runs in four phases: discovery of your current systems, target architecture design, a planned migration using a documented runbook, then ongoing optimisation of cost and performance.",
    },
    {
      question: "Can you reduce our cloud costs?",
      answer:
        "Yes. Our FinOps service reviews usage, rightsizes resources and removes waste, and you receive a cost and performance report with prioritised savings.",
    },
    {
      question: "Do you manage infrastructure as code?",
      answer:
        "Yes. We deliver your environment as an infrastructure-as-code codebase with CI/CD pipelines, so it is repeatable, auditable and easy to recover.",
    },
  ],
  "web-development": [
    {
      question: "What kind of websites and web apps do you build?",
      answer:
        "We build corporate and marketing websites, custom web applications such as SaaS products and portals, e-commerce stores, APIs and microservices, and headless CMS platforms.",
    },
    {
      question: "What is your web development process?",
      answer:
        "We work in four stages: discovery and design, architecture and setup, an agile build with continuous testing, then launch and ongoing support.",
    },
    {
      question: "Will my website be fast and SEO-friendly?",
      answer:
        "Yes. Performance, SEO and accessibility are built in from the start, and you receive a performance report at launch.",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes. We provide technical documentation at handover and offer ongoing maintenance, monitoring and feature development.",
    },
  ],
  mobile: [
    {
      question: "Do you build native or cross-platform apps?",
      answer:
        "Both. We build native iOS and Android apps, and cross-platform apps with React Native and Flutter, which deliver native-quality UX from one codebase for both app stores.",
    },
    {
      question: "How do you keep mobile apps secure?",
      answer:
        "We test against the OWASP Mobile Top 10 and use certificate pinning, biometric authentication and secure storage, plus MDM and SSO integration for enterprise apps.",
    },
    {
      question: "Can the app work offline and connect to our ERP or CRM?",
      answer:
        "Yes. We build offline-first apps that sync when a connection returns, and integrate them with your ERP, CRM and other business systems.",
    },
    {
      question: "Do you help after the app is published?",
      answer:
        "Yes. We provide crash and performance monitoring, analytics and A/B testing, app store optimisation and ongoing feature releases.",
    },
  ],
  blockchain: [
    {
      question: "What blockchain services does Dastute offer?",
      answer:
        "We develop and audit smart contracts, build DeFi protocols, NFT marketplaces, wallets and dApps, and deliver enterprise blockchain for supply chain traceability, trade finance and real-world asset tokenisation.",
    },
    {
      question: "What is a smart contract audit?",
      answer:
        "A smart contract audit is a security review of contract code before deployment to find vulnerabilities that could lead to lost funds. You receive an audit report with findings and fixes.",
    },
    {
      question: "How can blockchain help a traditional business?",
      answer:
        "Blockchain gives every party a shared, tamper-proof record. Businesses use it to trace goods through supply chains, prevent counterfeits, automate settlements and tokenise real-world assets.",
    },
    {
      question: "What is your blockchain development process?",
      answer:
        "We design the architecture and tokenomics, develop and test the contracts, run a security audit, then deploy and monitor them in production.",
    },
  ],
  erp: [
    {
      question: "Which ERP systems do you implement?",
      answer:
        "We implement and integrate leading platforms including Odoo and SAP, and build custom ERP systems when off-the-shelf software does not fit your processes.",
    },
    {
      question: "How does an ERP implementation work?",
      answer:
        "Our ERP implementations follow four stages: discovery and a written blueprint, configuration and integration, user acceptance testing with training, then go-live and ongoing support.",
    },
    {
      question: "Can you migrate data from our old system?",
      answer:
        "Yes. We extract, cleanse and migrate your data, including master data, so the new ERP starts with accurate records.",
    },
    {
      question: "Do you support the ERP after go-live?",
      answer:
        "Yes. Our managed ERP support covers fixes, updates, new reports and optimisation, and we provide an ROI and optimisation report.",
    },
  ],
  network: [
    {
      question: "What network services does Dastute provide?",
      answer:
        "We design, deploy and manage business networks, including enterprise Wi-Fi, SD-WAN and WAN optimisation, firewalls and zero trust security, remote access VPNs and 24/7 NOC monitoring.",
    },
    {
      question: "What is SD-WAN and do I need it?",
      answer:
        "SD-WAN is software-defined networking that routes traffic across multiple connections for better performance and resilience. It suits businesses with several sites or heavy cloud use.",
    },
    {
      question: "How does a network project run?",
      answer:
        "We start with a site survey and assessment, then design and procure equipment, deploy and test, and finally monitor and optimise the network.",
    },
    {
      question: "What reporting do I get?",
      answer:
        "You receive network architecture diagrams, a performance baseline report and monthly NOC reports.",
    },
  ],
  marketing: [
    {
      question: "What digital marketing services does Dastute offer?",
      answer:
        "We provide SEO, PPC and paid media, social media management, content marketing, email marketing and automation, conversion rate optimisation, brand strategy, and marketing analytics with attribution.",
    },
    {
      question: "How do you measure marketing ROI?",
      answer:
        "We set up analytics and attribution before campaigns launch, then report results in a live analytics dashboard, a monthly performance report and a quarterly strategy review.",
    },
    {
      question: "How does a marketing engagement start?",
      answer:
        "Every engagement starts with a discovery and audit, including an SEO audit and roadmap, followed by strategy and planning, campaign build and launch, then ongoing optimisation and reporting.",
    },
    {
      question: "Which industries do you market for?",
      answer:
        "We work with financial services and fintech, healthcare and pharma, B2B technology and SaaS, legal and professional services, e-commerce and retail, and manufacturing.",
    },
  ],
  "custom-software": [
    {
      question: "Should I choose custom software or an off-the-shelf product?",
      answer:
        "Choose off-the-shelf when it fits your processes. Choose custom software when your workflows are a competitive advantage, when you need deep integrations, or when licence costs grow with every user.",
    },
    {
      question: "Can you customise software we already use?",
      answer:
        "Yes. We extend and customise existing platforms as well as building new systems from scratch, and we modernise legacy applications.",
    },
    {
      question: "Which technologies do you use?",
      answer:
        "We work across all major tech stacks and choose the one that best fits your requirements and existing systems.",
    },
    {
      question: "How do you deliver custom software projects?",
      answer:
        "We follow discovery and analysis, architecture design, agile development, then deployment and ongoing support. You receive a maintainable codebase and documentation.",
    },
  ],
};
