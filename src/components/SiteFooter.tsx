import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-white px-4 sm:px-6 py-4 sm:py-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div>
            <h2 className="text-lg sm:text-xl font-bold tracking-tighter mb-2 sm:mb-3 leading-tight">
              DASTUTE
              <br />
              TECHNOLOGIES
            </h2>
            <address className="not-italic text-xs text-white/90 space-y-0.5 font-mono">
              <p>Dastute Technologies Limited</p>
              <p>128 City Road, London, EC1V 2NX</p>
              <p>United Kingdom &bull; Co. No. 17019407</p>
            </address>
          </div>
          <div className="flex flex-col justify-end items-start md:items-end">
            <a
              href="mailto:contact@dastute.co.uk"
              className="text-sm sm:text-base font-light hover:text-primary transition-colors underline decoration-1 underline-offset-2 break-all"
            >
              contact@dastute.co.uk
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-12 py-3 sm:py-4 border-t border-white/20">
          <div className="text-left">
            <p className="font-mono text-[8px] uppercase tracking-widest text-white/50 mb-1">
              Practice
            </p>
            <div className="flex flex-col gap-0 text-xs text-white/80 leading-tight">

              <Link
                to="/technology"
                className="hover:text-white transition-colors block"
              >
                Technology
              </Link>
              <Link
                to="/products"
                className="hover:text-white transition-colors block"
              >
                Products
              </Link>
              <Link
                to="/pricing"
                className="hover:text-white transition-colors block"
              >
                Pricing
              </Link>
              <Link
                to="/marketing"
                className="hover:text-white transition-colors block"
              >
                Marketing
              </Link>
              <Link
                to="/capabilities"
                className="hover:text-white transition-colors block"
              >
                Capabilities
              </Link>
            </div>
          </div>
          <div className="text-left">
            <p className="font-mono text-[8px] uppercase tracking-widest text-white/50 mb-1">
              Company
            </p>
            <div className="flex flex-col gap-0 text-xs text-white/80 leading-tight">
              <Link
                to="/about"
                className="hover:text-white transition-colors block"
              >
                About
              </Link>
              <Link
                to="/team"
                className="hover:text-white transition-colors block"
              >
                Team
              </Link>
              <Link
                to="/careers"
                className="hover:text-white transition-colors block"
              >
                Careers
              </Link>
              <Link
                to="/case-studies"
                className="hover:text-white transition-colors block"
              >
                Case Studies
              </Link>
            </div>
          </div>
          <div className="text-left">
            <p className="font-mono text-[8px] uppercase tracking-widest text-white/50 mb-1">
              Engage
            </p>
            <div className="flex flex-col gap-0 text-xs text-white/80 leading-tight">
              <Link
                to="/contact"
                className="hover:text-white transition-colors block"
              >
                Contact
              </Link>
              <Link
                to="/request-audit"
                className="hover:text-white transition-colors block"
              >
                Request an Audit
              </Link>
              <Link
                to="/project-estimator"
                className="hover:text-white transition-colors block"
              >
                Project Estimator
              </Link>
              <Link
                to="/insights"
                className="hover:text-white transition-colors block"
              >
                Insights & FAQs
              </Link>
              <Link
                to="/resources/glossary"
                className="hover:text-white transition-colors block"
              >
                IT Glossary
              </Link>
            </div>
          </div>
          <div className="text-left">
            <p className="font-mono text-[8px] uppercase tracking-widest text-white/50 mb-1">
              Legal
            </p>
            <div className="flex flex-col gap-0 text-xs text-white/80 leading-tight">
              <Link
                to="/privacy-policy"
                className="hover:text-white transition-colors block"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-white transition-colors block"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookie-policy"
                className="hover:text-white transition-colors block"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-2 sm:pt-3 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 text-[7px] sm:text-[9px] uppercase tracking-widest text-white/80">
          <span>© {new Date().getFullYear()} Dastute Technologies Limited</span>
          <div className="flex gap-2 sm:gap-4">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms
            </Link>
            <a
              href="https://www.linkedin.com/company/dastute-switcher-technologies"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
            <a href="https://github.com/dastute-technologies" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
            <a href="https://www.crunchbase.com/organization/dastute-technologies" target="_blank" rel="noopener noreferrer" className="hover:text-white">Crunchbase</a>
            <a href="https://clutch.co/profile/dastute-technologies" target="_blank" rel="noopener noreferrer" className="hover:text-white">Clutch</a>
            <a href="https://www.g2.com/products/dastute-technologies" target="_blank" rel="noopener noreferrer" className="hover:text-white">G2</a>
            <a href="https://www.trustpilot.com/review/dastute.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-white">Trustpilot</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
