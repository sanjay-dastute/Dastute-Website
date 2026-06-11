import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd } from "@/lib/seo";
import { useFormSubmit } from "@/lib/useFormSubmit";

// NOTE: Job application submissions are sent to info@dastute.co.uk via Formspree
// Update the formspree form ID in the action attribute if needed
// Formspree endpoint format: https://formspree.io/f/{FORM_ID}

export const Route = createFileRoute("/careers-apply")({
  head: () => ({
    meta: [
      { title: "Apply for a Career at Dastute Technologies" },
      {
        name: "description",
        content:
          "Submit your application to join Dastute Technologies. We're looking for talented professionals in software engineering, cloud architecture, cybersecurity, and more.",
      },
      {
        property: "og:title",
        content: "Apply for a Career at Dastute Technologies",
      },
      {
        property: "og:description",
        content:
          "Join our global team across UK, India, and Singapore. Apply for engineering, advisory, and operational roles.",
      },
      { property: "og:url", content: "/careers-apply" },
    ],
    links: [{ rel: "canonical", href: "https://dastute.co.uk/careers-apply" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Careers", path: "/careers" },
            { name: "Apply", path: "/careers-apply" },
          ]),
        ),
      },
    ],
  }),
  component: CareerApplicationPage,
});

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
      >
        {label}
        {required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors"
      />
    </div>
  );
}

function CareerApplicationPage() {
  const { status, handleSubmit } = useFormSubmit();
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="section-hero-dark">
        <div className="relative px-4 sm:px-6 py-16 sm:py-24 md:py-32 max-w-7xl mx-auto">
        <span className="font-mono text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-4 sm:mb-6">
          / Careers
        </span>
        <h1 className="text-2xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl mb-12 sm:mb-16 text-white">
          Apply for a <span className="text-gradient-primary">role.</span>
        </h1>
        <p className="max-w-2xl text-base sm:text-lg text-slate-300 mb-8">
          We're building a global team of experienced practitioners across
          software engineering, cloud architecture, cybersecurity, product
          management, and advisory. Submit your application below.
        </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-gradient border-t border-border px-4 sm:px-6 py-16 sm:py-24 max-w-4xl mx-auto">
        <form
          className="space-y-4 sm:space-y-6"
          onSubmit={handleSubmit}
        >
          {/* Personal Information */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-6 pb-4 border-b border-border">
              Personal Information
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <Field label="First Name" name="firstName" required />
                <Field label="Last Name" name="lastName" required />
              </div>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <Field label="Current Location" name="location" required />
              <Field
                label="LinkedIn Profile (URL)"
                name="linkedin"
                type="url"
              />
            </div>
          </div>

          {/* Application Details */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-6 pb-4 border-b border-border">
              Application Details
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="position"
                  className="font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
                >
                  Position Interest *
                </label>
                <select
                  id="position"
                  name="position"
                  required
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors"
                >
                  <option value="">Select a position...</option>
                  <option value="senior-engineer">
                    Senior Software Engineer
                  </option>
                  <option value="cloud-architect">
                    Cloud Architect (AWS/Azure/GCP)
                  </option>
                  <option value="security-specialist">
                    Cybersecurity Specialist
                  </option>
                  <option value="devops-engineer">DevOps Engineer</option>
                  <option value="blockchain-developer">
                    Blockchain Developer
                  </option>
                  <option value="product-manager">Product Manager</option>
                  <option value="it-consultant">IT Consultant</option>
                  <option value="project-manager">Project Manager</option>
                  <option value="other">
                    Other (please specify in cover letter)
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="experience"
                  className="font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
                >
                  Years of Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors"
                >
                  <option value="">Select experience level...</option>
                  <option value="0-2">0-2 years</option>
                  <option value="2-5">2-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="skills"
                  className="font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
                >
                  Key Skills (comma-separated) *
                </label>
                <input
                  id="skills"
                  name="skills"
                  type="text"
                  required
                  placeholder="e.g., React, Node.js, AWS, Kubernetes, Python..."
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="workType"
                  className="font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
                >
                  Preferred Work Type *
                </label>
                <select
                  id="workType"
                  name="workType"
                  required
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors"
                >
                  <option value="">Select work type...</option>
                  <option value="full-time">Full-Time</option>
                  <option value="contract">Contract</option>
                  <option value="both">Both (Full-Time & Contract)</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="location-pref"
                  className="font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
                >
                  Preferred Work Location *
                </label>
                <select
                  id="location-pref"
                  name="locationPreference"
                  required
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors"
                >
                  <option value="">Select location...</option>
                  <option value="london">London, UK</option>
                  <option value="coimbatore">Coimbatore, India</option>
                  <option value="bangalore">Bangalore, India</option>
                  <option value="singapore">Singapore</option>
                  <option value="remote">Remote</option>
                  <option value="flexible">Flexible/Multiple Locations</option>
                </select>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-6 pb-4 border-b border-border">
              Additional Information
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="coverLetter"
                  className="font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
                >
                  Cover Letter / Why You're Interested *
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  rows={6}
                  required
                  placeholder="Tell us about yourself, your experience, and why you'd like to join Dastute Technologies..."
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm resize-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="portfolio"
                  className="font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
                >
                  Portfolio / GitHub / Website (optional)
                </label>
                <input
                  id="portfolio"
                  name="portfolio"
                  type="url"
                  placeholder="https://github.com/yourprofile"
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="questions"
                  className="font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
                >
                  Any Questions for Us? (optional)
                </label>
                <textarea
                  id="questions"
                  name="questions"
                  rows={4}
                  placeholder="Any questions about the role, company, or process?"
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm resize-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Submission */}
          <div className="pt-4 border-t border-border">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-gradient rounded-full px-6 sm:px-8 py-3 sm:py-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest min-h-[44px] w-full sm:w-auto disabled:opacity-50"
            >
              {status === 'submitting' ? 'Submitting...' : 'Submit Application →'}
            </button>
            {status === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-md text-sm mt-4">
                Thank you! Your application has been successfully submitted. We will review it shortly.
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-md text-sm mt-4">
                Something went wrong. Please try again or email us directly at info@dastute.co.uk.
              </div>
            )}
            <p className="text-[12px] sm:text-xs text-muted-foreground mt-4">
              We review all applications and will contact promising candidates
              within 2 weeks. Thank you for your interest in Dastute
              Technologies!
            </p>
          </div>
        </form>
      </section>

      {/* What We Offer */}
      <section className="section-dark px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
        <h2 className="text-lg sm:text-xl font-bold mb-8 pb-4 border-b border-white/10 text-white">
          Why Join Dastute?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Global Team",
              desc: "Work with experienced professionals across UK, India, and Singapore",
            },
            {
              title: "Growth Opportunities",
              desc: "Clear career progression and continuous learning in cutting-edge technologies",
            },
            {
              title: "Competitive Package",
              desc: "Competitive salary, benefits, and flexible work arrangements",
            },
            {
              title: "Diverse Projects",
              desc: "Work on enterprise projects across multiple industries and technologies",
            },
            {
              title: "Real Partnerships",
              desc: "Build long-term relationships with clients and team members",
            },
            {
              title: "Work-Life Balance",
              desc: "We believe in sustainable work practices and respect your time",
            },
          ].map((benefit, i) => (
            <div key={i} className="glass-card-dark rounded-3xl p-6">
              <h4 className="font-bold mb-2 text-white">{benefit.title}</h4>
              <p className="text-sm text-slate-300">{benefit.desc}</p>
            </div>
          ))}
        </div>
        </div>
      </section>
    </SiteLayout>
  );
}

