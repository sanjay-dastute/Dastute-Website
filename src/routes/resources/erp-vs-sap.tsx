import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildStandardPageHead, buildFaqJsonLd , buildBlogPostingJsonLd, buildPersonJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/resources/erp-vs-sap")({
  head: () => ({
    ...buildStandardPageHead({
      title: "What is the difference between ERP and SAP? | Dastute Guide",
      description: "Confused by enterprise software acronyms? Learn the exact difference between ERP (Enterprise Resource Planning) and SAP in this straightforward guide.",
      path: "/resources/erp-vs-sap",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBlogPostingJsonLd({
            headline: "What is the difference between ERP and SAP? | Dastute Guide",
            description: "Confused by enterprise software acronyms? Learn the exact difference between ERP (Enterprise Resource Planning) and SAP in this straightforward guide.",
            datePublished: "2026-03-05T21:49:05.454Z",
            authorName: "Sanjay Dastute",
            path: "/resources/erp-vs-sap",
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
            { name: "ERP vs SAP", path: "/resources/erp-vs-sap" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildFaqJsonLd("/resources/erp-vs-sap", [
            {
              question: "What is the difference between ERP and SAP?",
              answer: "The difference is that ERP (Enterprise Resource Planning) is a category of business management software, whereas SAP is the name of a specific company that builds and sells ERP software. Asking the difference between ERP and SAP is like asking the difference between a 'car' and a 'Ford'.",
            },
            {
              question: "Is SAP the only ERP system available?",
              answer: "No, SAP is not the only ERP system available, though it is one of the largest globally. Other major ERP providers include Oracle (NetSuite), Microsoft (Dynamics 365), Sage, and Workday. Each vendor tailors their ERP software to different business sizes, industries, and technical requirements.",
            },
            {
              question: "Does my small business need SAP?",
              answer: "Most small businesses do not need SAP's flagship enterprise software (S/4HANA), as it is incredibly complex and expensive. However, SAP does offer 'SAP Business One', which is designed specifically for SMEs. Alternatively, many small businesses use lighter cloud-based ERPs like NetSuite or Xero combined with specialized integrations.",
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
            / Enterprise Software Guide
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-balance text-white">
            ERP vs SAP: What is the difference?
          </h1>
          <p className="mt-8 text-lg text-slate-300 leading-relaxed mx-auto">
            Demystifying enterprise software jargon. Understand the relationship between Enterprise Resource Planning (ERP) systems and the software giant SAP.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="lead text-xl text-slate-600 mb-10">
              When navigating the complex world of business software, two acronyms constantly appear side-by-side: <strong>ERP</strong> and <strong>SAP</strong>. Because they are often used interchangeably in boardrooms, it leads to a very common misconception that they mean the exact same thing. They do not.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 my-10 rounded-r-lg">
              <h3 className="text-xl font-bold text-emerald-900 mb-2 mt-0">The Short Answer</h3>
              <p className="text-emerald-800 mb-0">
                <strong>ERP</strong> (Enterprise Resource Planning) is a <em>type of software</em>. <strong>SAP</strong> is a <em>company</em> that sells ERP software. Asking "What is the difference between ERP and SAP?" is exactly like asking "What is the difference between a smartphone and Apple?"
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">What is ERP? (Enterprise Resource Planning)</h2>
            <p>
              An ERP system is a massive suite of integrated business applications. Instead of a company using ten different software programs for accounting, HR, warehouse management, sales, and supply chain logistics, an ERP combines all of these functions into one centralized database.
            </p>
            <p>
              The primary goal of an ERP is to eliminate "data silos." When a salesperson closes a deal in the CRM module, the inventory module immediately updates, the accounting module generates an invoice, and the warehouse module prints a shipping label. Everything is connected in real-time.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">What is SAP? (Systems, Applications, and Products)</h2>
            <p>
              SAP is a German multinational software corporation founded in 1972. They are the inventors of the modern ERP system and remain the undisputed global market leader in enterprise software. When people say "We run on SAP," they mean they are using SAP's flagship ERP product (such as SAP ECC or the modern cloud-based SAP S/4HANA) to run their daily business operations.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Who are the other ERP vendors?</h2>
            <p>
              Because ERP is just a category of software, SAP has many competitors. Depending on the size of your business and your specific industry, you might choose a different ERP vendor. Major alternatives to SAP include:
            </p>
            <ul>
              <li><strong>Oracle:</strong> Offers Oracle Cloud ERP (for massive enterprises) and Oracle NetSuite (the market leader for mid-sized cloud businesses).</li>
              <li><strong>Microsoft:</strong> Offers Microsoft Dynamics 365, which integrates flawlessly with Office 365, Teams, and Azure.</li>
              <li><strong>Workday:</strong> Highly specialized in Human Capital Management (HR) and Finance.</li>
              <li><strong>Sage:</strong> Popular among small-to-medium businesses for accounting-heavy ERP capabilities.</li>
              <li><strong>Infor:</strong> Specializes in highly customized ERPs for niche manufacturing and supply chain industries.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Does my business need an ERP like SAP?</h2>
            <p>
              Implementing a tier-one ERP like SAP S/4HANA is a massive undertaking, often taking years and costing millions of pounds. It is designed for massive global corporations with incredibly complex supply chains.
            </p>
            <p>
              However, if your business is growing rapidly and you find that your staff are spending hours manually moving data between disconnected systems (like exporting CSVs from Shopify and importing them into Xero), you definitely need an ERP.
            </p>
            <p>
              For small and medium enterprises (SMEs), cloud-native mid-market ERPs like Microsoft Dynamics, NetSuite, or SAP's own SME offering (SAP Business One) are usually the perfect fit.
            </p>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-gradient border-b border-border">
        <div className="max-w-4xl mx-auto p-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">ERP & SAP FAQs</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">What is the difference between ERP and SAP?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                The difference is that ERP (Enterprise Resource Planning) is a category of business management software, whereas SAP is the name of a specific company that builds and sells ERP software. Asking the difference between ERP and SAP is like asking the difference between a 'car' and a 'Ford'.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Is SAP the only ERP system available?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                No, SAP is not the only ERP system available, though it is one of the largest globally. Other major ERP providers include Oracle (NetSuite), Microsoft (Dynamics 365), Sage, and Workday. Each vendor tailors their ERP software to different business sizes, industries, and technical requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Does my small business need SAP?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Most small businesses do not need SAP's flagship enterprise software (S/4HANA), as it is incredibly complex and expensive. However, SAP does offer 'SAP Business One', which is designed specifically for SMEs. Alternatively, many small businesses use lighter cloud-based ERPs like NetSuite or Xero combined with specialized integrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto p-6 py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Need help selecting an ERP?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Dastute's technology consultants can audit your business processes and recommend the perfect software architecture.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              Book an ERP Consultation
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
