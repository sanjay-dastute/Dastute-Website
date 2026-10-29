import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const COLUMNS: { title: string; links: [string, string][] }[] = [
  {
    title: "Practice",
    links: [
      ["/technology", "Technology"],
      ["/products", "Products"],
      ["/pricing", "Pricing"],
      ["/marketing", "Marketing"],
      ["/capabilities", "Capabilities"],
    ],
  },
  {
    title: "Company",
    links: [
      ["/about", "About"],
      ["/team", "Team"],
      ["/careers", "Careers"],
      ["/case-studies", "Case Studies"],
      ["/contact", "Contact"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["/blog", "Blog"],
      ["/insights", "Insights & FAQs"],
      ["/resources", "Guides & Resources"],
      ["/resources/glossary", "IT Glossary"],
    ],
  },
  {
    title: "Get Started",
    links: [
      ["/contact", "Talk to an Expert"],
      ["/request-audit", "Request an Audit"],
      ["/project-estimator", "Project Estimator"],
      ["/careers-apply", "Apply for a Role"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="ft">
      <div className="ft-glow" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Call to action */}
        <div className="ft-cta">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-blue-300">/ Let's build</p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Have a project in mind? <span className="text-gradient-primary">Let's talk.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="ft-btn btn-gradient">
              Contact Us <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/careers" className="ft-btn btn-glass">
              Join the Team
            </Link>
          </div>
        </div>

        {/* Brand and links */}
        <div className="ft-main">
          <div className="ft-brand">
            <Link to="/" className="ft-logo">DASTUTE</Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Technology, security and growth partner for ambitious businesses across the UK, India and Singapore.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-blue-400" aria-hidden="true" />
                <address className="not-italic">
                  Dastute Technologies Limited
                  <br />
                  128 City Road, London, EC1V 2NX
                  <br />
                  United Kingdom &bull; Co. No. 17019407
                </address>
              </li>
              <li>
                <a href="mailto:contact@dastute.co.uk" className="ft-contact">
                  <Mail className="h-4 w-4 text-blue-400" aria-hidden="true" /> contact@dastute.co.uk
                </a>
              </li>
              <li>
                <a href="tel:+447423021644" className="ft-contact">
                  <Phone className="h-4 w-4 text-blue-400" aria-hidden="true" /> +44 7423 021644
                </a>
              </li>
            </ul>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="ft-heading">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map(([to, label]) => (
                  <li key={label}>
                    <Link to={to} className="ft-link">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Legal */}
        <div className="ft-bottom">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
            <span>© {new Date().getFullYear()} Dastute Technologies Limited</span>
            <Link to="/privacy-policy" className="ft-legal">Privacy Policy</Link>
            <Link to="/terms" className="ft-legal">Terms of Service</Link>
            <Link to="/cookie-policy" className="ft-legal">Cookie Policy</Link>
          </div>
        </div>
      </div>
      <p className="ft-word" aria-hidden="true">DASTUTE</p>
    </footer>
  );
}
