import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildStandardPageHead, buildFaqJsonLd , buildBlogPostingJsonLd, buildPersonJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/resources/ai-agents-enterprise-guide")({
  head: () => ({
    ...buildStandardPageHead({
      title: "What are AI Agents in Business? | Enterprise AI Guide",
      description: "Discover how autonomous AI agents are replacing simple chatbots. Learn about LLM orchestration, secure enterprise data boundaries, and top business use cases.",
      path: "/resources/ai-agents-enterprise-guide",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBlogPostingJsonLd({
            headline: "What are AI Agents in Business? | Enterprise AI Guide",
            description: "Discover how autonomous AI agents are replacing simple chatbots. Learn about LLM orchestration, secure enterprise data boundaries, and top business use cases.",
            datePublished: "2026-01-10T00:00:00.000Z",
            authorName: "Sanjay Dastute",
            path: "/resources/ai-agents-enterprise-guide",
          })
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildPersonJsonLd({
            name: "Sanjay Dastute",
            jobTitle: "Chief Technology Officer",
            path: "/team",
          })
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: "Enterprise AI Agents", path: "/resources/ai-agents-enterprise-guide" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildFaqJsonLd("/resources/ai-agents-enterprise-guide", [
            {
              question: "What are AI agents in business?",
              answer: "AI agents in business are autonomous software programs powered by Large Language Models (LLMs) that can independently plan, execute, and evaluate complex multi-step tasks. Unlike simple chatbots that only generate text, an AI agent can actively interact with your company's APIs, databases, and third-party software to complete actual work.",
            },
            {
              question: "What is the difference between Generative AI and AI Agents?",
              answer: "Generative AI simply creates content (text, images, code) based on a single prompt. An AI agent uses Generative AI as its 'brain' but adds autonomy and tools. If you ask Generative AI to 'book a flight', it will write a template email. If you ask an AI Agent, it will log into the airline portal, check prices, and purchase the ticket using a corporate card.",
            },
            {
              question: "How do you secure enterprise data when using AI agents?",
              answer: "You secure enterprise data by deploying AI agents within private, tightly controlled cloud environments (like Azure OpenAI) rather than using public web interfaces. Furthermore, you must enforce strict Role-Based Access Control (RBAC) on the agent's API permissions, ensuring the AI can only read or modify data that its human operator is authorized to access.",
            }
          ])
        ),
      }
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="section-hero-dark">
        <div className="relative px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
            / Emerging Technology Guide
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-balance text-white">
            Enterprise AI Agents: Beyond the Chatbot
          </h1>
          <p className="mt-8 text-lg text-slate-300 leading-relaxed mx-auto">
            The era of basic chatbots is over. Discover how autonomous AI agents use LLM orchestration to independently execute complex business workflows.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="lead text-xl text-slate-600 mb-10">
              In 2023, businesses raced to implement Generative AI (like ChatGPT) to write emails and summarize documents faster. Today, the frontier has shifted from text generation to autonomous action. Welcome to the era of the Enterprise AI Agent.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">What exactly is an AI Agent?</h2>
            <p>
              An AI agent is an autonomous software system powered by a Large Language Model (LLM). While standard Generative AI acts as a passive answering machine, an AI agent acts as an active digital employee.
            </p>
            <p>
              When given a high-level goal, an AI agent can:
            </p>
            <ol className="space-y-4 mb-8">
              <li><strong>Plan:</strong> Break the goal down into a logical sequence of smaller tasks.</li>
              <li><strong>Use Tools:</strong> Connect to external APIs (like Salesforce, Jira, or a SQL database) to retrieve data or take action.</li>
              <li><strong>Evaluate:</strong> Review the results of its actions, identify errors, and correct its own course until the overarching goal is achieved.</li>
            </ol>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 my-10 rounded-r-lg">
              <h3 className="text-xl font-bold text-emerald-900 mb-2 mt-0">Example: Generative AI vs. AI Agent</h3>
              <p className="text-emerald-800 mb-3">
                <strong>Prompt:</strong> "Find all unpaid invoices over £5,000 from last month and remind the clients."
              </p>
              <ul className="text-sm text-emerald-800 space-y-2 mb-0">
                <li><i className="fas fa-times text-red-500 mr-2"></i> <strong>Generative AI:</strong> "I cannot access your accounting software. Here is a template email you can use to remind them."</li>
                <li><i className="fas fa-check text-emerald-600 mr-2"></i> <strong>AI Agent:</strong> The agent securely queries your Xero API, filters the unpaid invoices, drafts personalized reminder emails in Microsoft 365, and sends them to the appropriate client contacts automatically.</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">LLM Orchestration: How Agents Work</h2>
            <p>
              Building an enterprise AI agent requires "LLM Orchestration." This involves combining several complex software components:
            </p>
            <ul>
              <li><strong>The Foundation Model:</strong> The "brain" (e.g., GPT-4o, Claude 3.5 Sonnet, or Llama 3) that understands natural language and logic.</li>
              <li><strong>Vector Databases (RAG):</strong> "Retrieval-Augmented Generation" allows the agent to instantly search through millions of internal company documents (PDFs, policies, historical data) without hallucinating.</li>
              <li><strong>Tool Calling (Function Calling):</strong> Code that translates the LLM's decisions into strict API requests that your CRM, ERP, or HR software can understand.</li>
              <li><strong>Memory:</strong> Systems that allow the agent to remember context from past interactions, rather than starting every task with amnesia.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Securing AI Agents in the Enterprise</h2>
            <p>
              You cannot simply give a public AI model access to your corporate database. Enterprise AI requires strict security boundaries.
            </p>
            
            <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">1. Private Cloud Hosting</h3>
            <p>
              Enterprise AI agents must be deployed within your own private cloud tenant (such as Azure OpenAI). This ensures that your highly sensitive corporate data is never used by the provider to train their public models.
            </p>

            <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">2. Bounded Tool Access</h3>
            <p>
              An agent should operate on the principle of least privilege. If an agent is designed to assist customer service, it should have "read-only" access to the customer database, and absolutely zero access to the HR payroll system.
            </p>

            <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">3. Human-in-the-Loop (HITL)</h3>
            <p>
              For high-stakes actions (like executing a financial refund or deleting a database record), the agent should be programmed to pause and request human authorization before proceeding.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Top Use Cases for AI Agents</h2>
            <p>Forward-thinking companies are deploying agents to handle massive operational bottlenecks:</p>
            <ul>
              <li><strong>Autonomous Customer Support:</strong> Resolving complex Tier-1 support tickets by analyzing the customer's history, checking inventory via API, and processing returns without human intervention.</li>
              <li><strong>Data Entry & Extraction:</strong> Agents that monitor an inbox, open attached PDF invoices, extract 50 different line items, and input them flawlessly into an archaic ERP system.</li>
              <li><strong>Cybersecurity Triage:</strong> Agents that monitor SIEM alerts, instantly analyze server logs to determine if a threat is a false positive, and isolate compromised laptops automatically.</li>
            </ul>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-gradient border-b border-border">
        <div className="max-w-4xl mx-auto p-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Enterprise AI FAQs</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">What are AI agents in business?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                AI agents in business are autonomous software programs powered by Large Language Models (LLMs) that can independently plan, execute, and evaluate complex multi-step tasks. Unlike simple chatbots that only generate text, an AI agent can actively interact with your company's APIs, databases, and third-party software to complete actual work.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">What is the difference between Generative AI and AI Agents?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Generative AI simply creates content (text, images, code) based on a single prompt. An AI agent uses Generative AI as its 'brain' but adds autonomy and tools. If you ask Generative AI to 'book a flight', it will write a template email. If you ask an AI Agent, it will log into the airline portal, check prices, and purchase the ticket using a corporate card.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">How do you secure enterprise data when using AI agents?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                You secure enterprise data by deploying AI agents within private, tightly controlled cloud environments (like Azure OpenAI) rather than using public web interfaces. Furthermore, you must enforce strict Role-Based Access Control (RBAC) on the agent's API permissions, ensuring the AI can only read or modify data that its human operator is authorized to access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto p-6 py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Build Secure AI for Your Business
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Dastute's software engineering team specializes in LLM orchestration, RAG architectures, and secure enterprise AI deployment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              Consult Our AI Engineers
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
