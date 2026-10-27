import type { Faq } from "@/lib/faqs";

export function FaqSection({
  title = "Frequently Asked Questions",
  items,
}: {
  title?: string;
  items: Faq[];
}) {
  return (
    <section className="section-gradient border-b border-border">
      <div className="max-w-4xl mx-auto p-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">{title}</h2>
        </div>

        <div className="space-y-6">
          {items.map((item) => (
            <div key={item.question} className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.question}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
