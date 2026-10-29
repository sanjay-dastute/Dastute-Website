import { useRef, useState, type CSSProperties } from "react";
import { ArrowRight, Check, CheckCircle2, Mail, Send, UserCheck } from "lucide-react";
import { useFormSubmit } from "@/lib/useFormSubmit";

const STEPS = [
  { icon: Send, title: "You send a message", meta: "Takes about 2 minutes" },
  { icon: UserCheck, title: "A specialist is assigned", meta: "Routed by service, not a queue" },
  { icon: Mail, title: "You get a real reply", meta: "Within 1 business day" },
];

/** Hero visual: the journey of an enquiry, with a pulse travelling along the line. */
export function ResponseFlow() {
  return (
    <div className="ct-flow" aria-hidden="true">
      <div className="ct-flow-head">
        <span className="ct-flow-dot" />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-300">Enquiry status</span>
        <span className="ml-auto font-mono text-[10px] text-emerald-300">Online</span>
      </div>
      <ol className="ct-flow-list">
        <span className="ct-flow-line">
          <span className="ct-flow-pulse" />
        </span>
        {STEPS.map(({ icon: StepIcon, title, meta }, i) => (
          <li key={title} className="ct-flow-step" style={{ animationDelay: `${0.5 + i * 0.25}s` }}>
            <span className="ct-flow-icon">
              <StepIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-semibold text-white">{title}</span>
              <span className="block text-sm text-slate-400">{meta}</span>
            </span>
          </li>
        ))}
      </ol>
      <div className="ct-flow-foot">
        <CheckCircle2 className="h-4 w-4 text-emerald-300" />
        <span>Every enquiry is read by a person.</span>
      </div>
    </div>
  );
}

const SERVICES: [string, string][] = [
  ["managed-it", "Managed IT Services"],
  ["cyber-security", "Cyber Security"],
  ["cloud", "Cloud Services (AWS/Azure/GCP)"],
  ["web-dev", "Web Development"],
  ["mobile-dev", "Mobile App Development"],
  ["blockchain", "Blockchain & Web3"],
  ["erp", "ERP Solutions"],
  ["network", "Network Connectivity"],
  ["consulting", "IT Consulting & Advisory"],
  ["marketing", "Digital Marketing"],
  ["staffing", "IT Staff Resource Supply"],
  ["red-blue", "Red Team / Blue Team Security"],
  ["audit", "Free Technology Audit"],
  ["estimate", "Project Estimate"],
  ["other", "Other"],
];

const QUICK = [
  ["cyber-security", "Cyber Security"],
  ["cloud", "Cloud"],
  ["managed-it", "Managed IT"],
  ["web-dev", "Web & Apps"],
  ["audit", "Free Audit"],
];

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div className="ct-field">
      <label htmlFor={name}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <input id={name} name={name} type={type} required={required} />
    </div>
  );
}

/** Enquiry form. Field names and submission are unchanged (useFormSubmit). */
export function ContactForm() {
  const { status, handleSubmit, errorMessage } = useFormSubmit();
  const [service, setService] = useState("");
  const [progress, setProgress] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  const measure = () => {
    const req = Array.from(formRef.current?.querySelectorAll<HTMLInputElement>("[required]") ?? []);
    setProgress(req.length ? req.filter((el) => el.value.trim() && el.checkValidity()).length / req.length : 0);
  };

  return (
    <form ref={formRef} className="ct-form" onSubmit={handleSubmit} onInput={measure}>
      <div className="ct-form-head">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600">/ Start a conversation</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Tell us what you need</h2>
        </div>
        <div className="ct-meter" style={{ "--p": progress } as CSSProperties}>
          <span className="ct-meter-bar" />
          <span className="font-mono text-[10px] text-slate-500">{Math.round(progress * 100)}% complete</span>
        </div>
      </div>

      <fieldset className="ct-quick">
        <legend className="ct-label">What can we help with?</legend>
        <div className="flex flex-wrap gap-2">
          {QUICK.map(([v, l]) => (
            <button
              key={v}
              type="button"
              aria-pressed={service === v}
              className={`ct-chip ${service === v ? "is-on" : ""}`}
              onClick={() => setService(service === v ? "" : v)}
            >
              {service === v && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
              {l}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="First Name" name="firstName" required />
        <Field label="Last Name" name="lastName" required />
        <Field label="Business Email" name="businessEmail" type="email" required />
        <Field label="Company Name" name="companyName" required />
        <Field label="Phone Number" name="phone" type="tel" />
        <Field label="Country" name="country" required />
        <div className="ct-field">
          <label htmlFor="service">Service of Interest</label>
          <select id="service" name="service" value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Select a service...</option>
            {SERVICES.map(([v, l]) => (
              <option key={v} value={v}>{l}</option>
            ))}
          </select>
        </div>
        <div className="ct-field">
          <label htmlFor="source">How Did You Hear About Us?</label>
          <select id="source" name="source" defaultValue="">
            <option value="">Select...</option>
            <option>Google Search</option>
            <option>LinkedIn</option>
            <option>Referral</option>
            <option>Social Media</option>
            <option>Blog/Article</option>
            <option>Other</option>
          </select>
        </div>
        <div className="ct-field md:col-span-2">
          <label htmlFor="message">
            Message<span aria-hidden="true"> *</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tell us about your goals, challenges, and timeline..."
          />
        </div>
      </div>

      <div className="ct-form-foot">
        <p className="text-xs leading-relaxed text-slate-500">
          Your information is handled under our Privacy Policy and UK GDPR. We only use your details to respond to
          your enquiry.
        </p>
        <button type="submit" disabled={status === "submitting"} className="ct-submit btn-gradient">
          {status === "submitting" ? "Sending..." : "Send Message"}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      {status === "success" && (
        <div role="status" className="ct-alert is-ok">
          <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
          Thank you. Your message has been sent successfully. We will get back to you within one business day.
        </div>
      )}
      {status === "error" && (
        <div role="alert" className="ct-alert is-err">
          {errorMessage || "Something went wrong. Please try again or email us directly at contact@dastute.co.uk."}
        </div>
      )}
    </form>
  );
}
