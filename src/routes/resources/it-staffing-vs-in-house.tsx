import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildStandardPageHead, buildFaqJsonLd , buildBlogPostingJsonLd, buildPersonJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/resources/it-staffing-vs-in-house")({
  head: () => ({
    ...buildStandardPageHead({
      title: "IT Staff Augmentation vs In-house Hiring UK | Dastute",
      description: "Compare IT staff augmentation vs in-house hiring in the UK. Learn how to scale your development team, reduce hiring costs, and access niche software engineering skills instantly.",
      path: "/resources/it-staffing-vs-in-house",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBlogPostingJsonLd({
            headline: "IT Staff Augmentation vs In-house Hiring UK | Dastute",
            description: "Compare IT staff augmentation vs in-house hiring in the UK. Learn how to scale your development team, reduce hiring costs, and access niche software engineering skills instantly.",
            datePublished: "2026-04-29T19:38:10.909Z",
            authorName: "Sanjay Dastute",
            path: "/resources/it-staffing-vs-in-house",
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
            { name: "IT Staffing vs In-house", path: "/resources/it-staffing-vs-in-house" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildFaqJsonLd("/resources/it-staffing-vs-in-house", [
            {
              question: "What is IT Staff Augmentation?",
              answer: "IT staff augmentation is a flexible outsourcing strategy where you hire highly skilled software engineers or IT professionals from an external agency (like Dastute) to temporarily join your internal team. You manage the developers directly, but the agency handles their payroll, benefits, and HR administration.",
            },
            {
              question: "Is staff augmentation cheaper than hiring in-house in the UK?",
              answer: "Yes, when calculating the Total Cost of Employment (TCE). While an augmented contractor's daily rate might seem higher than an employee's daily salary, you do not pay for recruitment agency fees (usually 15-20% of salary), National Insurance contributions, pensions, holiday pay, sick leave, or expensive hardware. You also only pay for the exact duration of the project.",
            },
            {
              question: "When should a business choose staff augmentation over in-house hiring?",
              answer: "You should choose staff augmentation when you have a strict deadline (e.g., a product launch in 3 months) and cannot wait 6-8 weeks to recruit an employee. It is also ideal when you need a highly specialized, niche skill (like a Blockchain architect or an AWS Cloud Migration expert) for a short-term project where a full-time hire cannot be justified.",
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
            / Talent Strategy Guide
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-balance text-white">
            IT Staff Augmentation vs. In-House Hiring
          </h1>
          <p className="mt-8 text-lg text-slate-300 leading-relaxed mx-auto">
            The complete UK guide to scaling your software engineering team. Understand the true costs, speed-to-market advantages, and when to use which model.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="lead text-xl text-slate-600 mb-10">
              The UK faces a chronic shortage of elite technology talent. If your company lands a massive new software project, your immediate reaction is likely: <em>"We need to hire."</em> But relying strictly on traditional full-time hiring in a candidate-driven market will result in delayed projects and bloated overhead.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Traditional Route: In-House Hiring</h2>
            <p>
              In-house hiring means recruiting an employee onto your permanent payroll. They receive a salary, pension, and standard UK employment rights.
            </p>
            
            <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">The Pros of In-House Hiring</h3>
            <ul>
              <li><strong>Cultural Alignment:</strong> Full-time employees are deeply embedded in your company culture and are emotionally invested in the long-term success of the business.</li>
              <li><strong>Institutional Knowledge:</strong> When they build a system, the knowledge of how that system works remains inside your company for years.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">The Cons of In-House Hiring</h3>
            <ul>
              <li><strong>Speed:</strong> In the UK tech sector, it typically takes 45 to 60 days to source, interview, and offer a Senior Software Engineer. Furthermore, most senior candidates have a 1-to-3 month notice period. You could be waiting 4 months before they write a single line of code.</li>
              <li><strong>The Total Cost of Employment (TCE):</strong> The base salary is just the beginning. You must factor in recruitment fees (typically 15-20% of salary), Employer National Insurance (13.8%), pension contributions, paid holiday, sick leave, software licenses, and a £2,000 MacBook Pro.</li>
              <li><strong>Inflexibility:</strong> If the project ends or the budget is slashed, reducing headcount requires a painful, legally complex, and expensive redundancy process.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Agile Alternative: IT Staff Augmentation</h2>
            <p>
              IT Staff Augmentation is a model where you partner with a technology consultancy (like Dastute) to instantly inject highly skilled, pre-vetted engineers directly into your existing team for a defined period. You manage their daily tasks, but we handle the payroll, HR, and benefits.
            </p>

            <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">The Pros of Staff Augmentation</h3>
            <ul>
              <li><strong>Unmatched Speed to Market:</strong> Instead of waiting 4 months for a new hire's notice period, you can have a Senior React Developer or AWS Architect integrated into your daily stand-ups within 48 to 72 hours.</li>
              <li><strong>Access to Niche Skills:</strong> If you only need a Kubernetes specialist for 6 weeks to configure your cloud infrastructure, it makes zero financial sense to hire them full-time. Augmentation allows you to rent elite skills exactly when you need them.</li>
              <li><strong>Ultimate Flexibility:</strong> When the project finishes, or if priorities change, you simply scale the augmented team down. No redundancy payouts, no HR nightmares.</li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 p-6 my-10 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mt-0 mb-4">Cost Comparison: A Practical Example</h3>
              <p className="text-sm text-blue-800 mb-2">Let's look at a 6-month requirement for a Senior Python Developer.</p>
              <table className="w-full text-sm text-left border-collapse mt-4">
                <thead>
                  <tr className="border-b border-blue-200">
                    <th className="py-2 text-blue-900">Expense</th>
                    <th className="py-2 text-blue-900">In-House Hire (Pro-rated)</th>
                    <th className="py-2 text-blue-900">Staff Augmentation</th>
                  </tr>
                </thead>
                <tbody className="text-blue-800">
                  <tr className="border-b border-blue-100">
                    <td className="py-2">Base Salary (£80k /yr)</td>
                    <td className="py-2">£40,000</td>
                    <td className="py-2">Included in daily rate</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-2">Recruitment Agency Fee (20%)</td>
                    <td className="py-2">£16,000</td>
                    <td className="py-2">£0</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-2">Employer NI + Pension</td>
                    <td className="py-2">~£6,000</td>
                    <td className="py-2">£0</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-2">Hardware & Software</td>
                    <td className="py-2">£2,500</td>
                    <td className="py-2">£0</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold">Total Friction/Overhead</td>
                    <td className="py-2 font-bold text-red-600">Extremely High</td>
                    <td className="py-2 font-bold text-emerald-600">Zero</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">When to Use Which Model?</h2>
            
            <p><strong>You should hire In-House when:</strong></p>
            <ul>
              <li>You are building your core founding engineering team.</li>
              <li>You have a permanent, ongoing requirement that will last 3+ years.</li>
              <li>You have the luxury of time (3-4 months) before the project must kick off.</li>
            </ul>

            <p><strong>You should use Staff Augmentation when:</strong></p>
            <ul>
              <li>You have a hard deadline and need developers writing code <em>this week</em>.</li>
              <li>You need highly specialized skills (AI/Machine Learning, Cybersecurity, Cloud Architecture) for a specific phase of a project.</li>
              <li>Your budget requires OpEx flexibility rather than CapEx commitments.</li>
              <li>You are clearing a temporary backlog of technical debt.</li>
            </ul>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-gradient border-b border-border">
        <div className="max-w-4xl mx-auto p-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Staffing FAQs</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">What is IT Staff Augmentation?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                IT staff augmentation is a flexible outsourcing strategy where you hire highly skilled software engineers or IT professionals from an external agency (like Dastute) to temporarily join your internal team. You manage the developers directly, but the agency handles their payroll, benefits, and HR administration.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Is staff augmentation cheaper than hiring in-house in the UK?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Yes, when calculating the Total Cost of Employment (TCE). While an augmented contractor's daily rate might seem higher than an employee's daily salary, you do not pay for recruitment agency fees (usually 15-20% of salary), National Insurance contributions, pensions, holiday pay, sick leave, or expensive hardware. You also only pay for the exact duration of the project.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">When should a business choose staff augmentation over in-house hiring?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                You should choose staff augmentation when you have a strict deadline (e.g., a product launch in 3 months) and cannot wait 6-8 weeks to recruit an employee. It is also ideal when you need a highly specialized, niche skill (like a Blockchain architect or an AWS Cloud Migration expert) for a short-term project where a full-time hire cannot be justified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto p-6 py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Scale Your Engineering Team Today
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Dastute provides elite, pre-vetted software engineers, cloud architects, and QA testers ready to join your team within 48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              Request Engineering Talent
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
