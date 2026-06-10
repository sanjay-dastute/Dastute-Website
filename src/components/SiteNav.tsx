import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="font-bold tracking-tighter text-xl uppercase">
            Dastute
          </Link>
          <div className="hidden lg:flex gap-4 xl:gap-6 text-[10px] lg:text-[11px] font-medium uppercase tracking-widest text-muted-foreground">

            <Link
              to="/products"
              className="hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              Products
            </Link>
            <Link
              to="/technology"
              className="hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              Technology
            </Link>
            <Link
              to="/marketing"
              className="hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              Marketing
            </Link>
            <Link
              to="/insights"
              className="hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              Insights
            </Link>
            <Link
              to="/careers"
              className="hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              Careers
            </Link>
            <Link
              to="/about"
              className="hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              About
            </Link>
            <Link
              to="/team"
              className="hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              Team
            </Link>
            <Link
              to="/contact"
              className="hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="font-mono text-[8px] sm:text-[10px] text-muted-foreground hidden sm:block">
            LONDON &bull; 51.5275° N, 0.0888° W
          </div>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-foreground transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="px-4 sm:px-6 py-4 sm:py-6 flex flex-col gap-3 sm:gap-4 text-[10px] sm:text-[11px] font-medium uppercase tracking-widest">

            <Link
              to="/products"
              className="py-2 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              onClick={() => setMobileOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/technology"
              className="py-2 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              onClick={() => setMobileOpen(false)}
            >
              Technology
            </Link>
            <Link
              to="/marketing"
              className="py-2 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              onClick={() => setMobileOpen(false)}
            >
              Marketing
            </Link>
            <Link
              to="/insights"
              className="py-2 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              onClick={() => setMobileOpen(false)}
            >
              Insights
            </Link>
            <Link
              to="/careers"
              className="py-2 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              onClick={() => setMobileOpen(false)}
            >
              Careers
            </Link>
            <Link
              to="/about"
              className="py-2 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              to="/team"
              className="py-2 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              onClick={() => setMobileOpen(false)}
            >
              Team
            </Link>
            <Link
              to="/contact"
              className="py-2 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <div className="border-t border-border pt-4 mt-2 flex flex-col gap-3 text-muted-foreground">
              <Link
                to="/request-audit"
                className="py-1 hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Request an Audit
              </Link>
              <Link
                to="/project-estimator"
                className="py-1 hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Project Estimator
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
