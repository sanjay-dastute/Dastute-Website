import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { FaqSection } from "@/components/FaqSection";
import { FAQS } from "@/lib/faqs";
import { buildBlogPostingJsonLd, buildBreadcrumbJsonLd, buildFaqJsonLd, buildStandardPageHead } from "@/lib/seo";
import { Icon } from "@/components/Icon";

export const Route = createFileRoute("/resources/generative-ai-enterprise")({
  head: () => ({
    ...buildStandardPageHead({
      title: "Generative AI in the Enterprise | Real-World Automation Scenario",
      description: "How businesses use generative AI beyond chatbots: a real-world scenario of AI automating large-scale data analysis and saving hundreds of hours.",
      path: "/resources/generative-ai-enterprise",

    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBlogPostingJsonLd({
            headline: "Generative AI in the Enterprise: A Real-World Automation Scenario",
            description: "How businesses use generative AI beyond chatbots: a real-world scenario of AI automating large-scale data analysis and saving hundreds of hours.",
            datePublished: "2026-06-11T16:22:14+01:00",
            dateModified: "2026-10-28T00:00:00+00:00",
            authorName: "Sanjay Dastute",
            path: "/resources/generative-ai-enterprise",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd("/resources/generative-ai-enterprise", FAQS["genai"])),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: "Generative AI in Enterprise", path: "/resources/generative-ai-enterprise" },
          ]),
        ),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-slate-900 text-white pt-32 pb-24 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Link to="/resources/glossary" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
              <Icon name="fa-arrow-left" className="mr-2" /> Back to IT Glossary
            </Link>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
            / AUTOMATION SCENARIO
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Beyond the Chatbot: Real Generative AI for Enterprise
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Everyone is talking about AI, but how does it actually generate ROI? Explore how secure, custom Generative AI integrations turn massive operational bottlenecks into automated workflows.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-slate">
          <h2>The Problem with Public AI</h2>
          <p>
            When employees use public AI tools like ChatGPT to draft emails or summarize reports, they are inadvertently feeding confidential corporate data—and potentially protected customer data—into a public model. This is a massive compliance and cybersecurity risk.
          </p>
          <p>
            Enterprise Generative AI involves integrating powerful large language models (LLMs) directly into your private corporate infrastructure via APIs. This ensures that the AI only operates on your private data, and none of that data is ever used to train public models.
          </p>

          <hr className="my-12 border-slate-200" />

          <h2>Real-World Scenario: The 400-Hour Contract Review</h2>
          
          <div className="bg-slate-50 border-l-4 border-slate-800 p-8 rounded-r-xl my-8">
            <h3 className="mt-0 text-slate-900">The Bottleneck</h3>
            <p className="text-slate-700">
              A mid-sized commercial real estate firm is acquiring a new property portfolio. They need to extract key dates, liability clauses, and fee structures from 1,200 PDF lease agreements. Manually reading and entering this data into their ERP system typically takes a team of paralegals over 400 hours, significantly delaying the acquisition.
            </p>

            <h3 className="text-slate-900">The Enterprise AI Solution</h3>
            <p className="text-slate-700">
              Dastute engineers build a secure, private AI pipeline using Microsoft Azure OpenAI. The 1,200 PDFs are uploaded to a secure cloud blob. A custom Python script feeds the documents to the LLM with a highly specific prompt: <em>"Extract the termination date, exact liability cap amount, and tenant name from this lease. Return the data strictly as JSON format."</em>
            </p>

            <h3 className="text-slate-900">The ROI</h3>
            <p className="text-slate-700 mb-0">
              The LLM processes all 1,200 documents simultaneously in less than 45 minutes. It perfectly structures the unstructured PDF data into clean code, which is then automatically pushed into the firm's ERP database via an API. What used to take 400 hours of tedious human labor is completed during a lunch break, allowing the paralegals to focus entirely on negotiating the actual deal terms.
            </p>
          </div>

          <h2>How to Start Your AI Journey</h2>
          <p>
            Implementing Generative AI doesn't mean replacing your workforce; it means augmenting them. The most successful AI projects start by identifying a single, high-volume, unstructured data bottleneck and building a secure proof-of-concept.
          </p>
          <ul>
            <li><strong>Customer Service:</strong> Feed your internal knowledge base to an LLM to instantly draft hyper-accurate responses to complex technical support tickets.</li>
            <li><strong>Software Development:</strong> Integrate AI into your CI/CD pipeline to automatically review code for security vulnerabilities before it reaches production.</li>
            <li><strong>Marketing:</strong> Automatically generate hundreds of localized product descriptions based on raw spreadsheet data.</li>
          </ul>

          <h2>Practical Generative AI Use Cases for Business</h2>
          <table>
            <thead>
              <tr><th>Department</th><th>Use case</th><th>Typical benefit</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Operations</strong></td><td>Extracting data from invoices, contracts and forms</td><td>Removes manual data entry</td></tr>
              <tr><td><strong>Customer service</strong></td><td>Drafting replies and summarising ticket history</td><td>Faster, more consistent responses</td></tr>
              <tr><td><strong>Sales</strong></td><td>Proposal drafting and CRM note summaries</td><td>More time spent selling</td></tr>
              <tr><td><strong>Finance</strong></td><td>Variance commentary and report narratives</td><td>Faster month-end reporting</td></tr>
              <tr><td><strong>IT and engineering</strong></td><td>Code assistance, documentation and log analysis</td><td>Quicker delivery and troubleshooting</td></tr>
              <tr><td><strong>HR and legal</strong></td><td>Policy Q&amp;A and first-pass contract review</td><td>Staff find answers without waiting</td></tr>
            </tbody>
          </table>

          <h2>Generative AI vs Traditional Automation vs AI Agents</h2>
          <ul>
            <li><strong>Traditional automation (RPA)</strong> follows fixed rules. It is reliable for structured, repetitive tasks but breaks when inputs change.</li>
            <li><strong>Generative AI</strong> understands and produces language, so it can handle unstructured content such as emails, PDFs and free text.</li>
            <li><strong>AI agents</strong> combine generative AI with tools and workflows, allowing them to plan and complete multi-step tasks. Read our <Link to="/resources/ai-agents-enterprise-guide">AI agents guide</Link> to learn more.</li>
          </ul>

          <h2>How to Adopt Generative AI Safely: A 5-Step Roadmap</h2>
          <ol>
            <li><strong>Pick high-value, low-risk use cases.</strong> Start with internal tasks where a person reviews the output, such as summarising documents.</li>
            <li><strong>Prepare your data.</strong> AI is only as good as the information it can access. Clean up permissions so the AI cannot surface documents a user should not see.</li>
            <li><strong>Choose enterprise-grade tools.</strong> Use platforms that do not train on your data and that keep it in an appropriate region.</li>
            <li><strong>Set an AI usage policy.</strong> Define approved tools, what data may be entered and when human review is mandatory.</li>
            <li><strong>Measure and scale.</strong> Track time saved and error rates on the pilot, then expand to further processes.</li>
          </ol>

          <h2>Risks and Governance</h2>
          <ul>
            <li><strong>Data leakage:</strong> staff pasting confidential or personal data into consumer AI tools. An approved, enterprise-grade alternative is the best prevention.</li>
            <li><strong>Hallucinations:</strong> AI can produce confident but incorrect answers. Keep a human in the loop for anything customer-facing or high-stakes.</li>
            <li><strong>UK GDPR:</strong> processing personal data with AI requires a lawful basis and, for higher-risk uses, a Data Protection Impact Assessment (DPIA). The ICO publishes guidance on AI and data protection.</li>
            <li><strong>Security:</strong> AI systems can be manipulated through prompt injection, so treat them like any other application and include them in <Link to="/resources/penetration-testing-explained">security testing</Link>.</li>
          </ul>

          <div className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-0">Ready to automate your operations?</h3>
            <p className="text-slate-600 mb-8">
              Our software development team specializes in secure, private API integrations with leading LLMs. Let's discuss your biggest data bottlenecks.
            </p>
            <Link to="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-blue-700 transition-colors">
              Schedule an AI Discovery Call
            </Link>
          </div>
        </div>
      </section>
      <FaqSection items={FAQS["genai"]} />
    </SiteLayout>
  );
}
