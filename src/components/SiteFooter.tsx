import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter mb-8">
              DASTUTE<br />TECHNOLOGIES
            </h2>
            <address className="not-italic text-sm text-white/90 space-y-1 font-mono">
              <p>Dastute Technologies Limited</p>
              <p>128 City Road, London, EC1V 2NX</p>
              <p>United Kingdom &bull; Co. No. 17019407</p>
            </address>
          </div>
          <div className="flex flex-col justify-end items-start md:items-end">
            <a
              href="mailto:hello@dastute.co.uk"
              className="text-2xl md:text-4xl font-light hover:text-primary transition-colors underline decoration-1 underline-offset-8"
            >
              hello@dastute.co.uk
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-white/20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-4">Practice</p>
            <div className="flex flex-col gap-2 text-sm text-white/80">
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <Link to="/technology" className="hover:text-white transition-colors">Technology</Link>
              <Link to="/marketing" className="hover:text-white transition-colors">Marketing</Link>
              <Link to="/capabilities" className="hover:text-white transition-colors">Capabilities</Link>
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-4">Company</p>
            <div className="flex flex-col gap-2 text-sm text-white/80">
              <Link to="/about" className="hover:text-white transition-colors">About</Link>
              <Link to="/team" className="hover:text-white transition-colors">Team</Link>
              <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
              <Link to="/insights" className="hover:text-white transition-colors">Insights</Link>
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-4">Engage</p>
            <div className="flex flex-col gap-2 text-sm text-white/80">
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link to="/request-audit" className="hover:text-white transition-colors">Request an Audit</Link>
              <Link to="/project-estimator" className="hover:text-white transition-colors">Project Estimator</Link>
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-4">Legal</p>
            <div className="flex flex-col gap-2 text-sm text-white/80">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/80">
          <span>© {new Date().getFullYear()} Dastute Technologies Limited</span>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
