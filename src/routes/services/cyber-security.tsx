import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildServiceJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/services/cyber-security")({
  head: () => ({
    meta: [
      { title: "Cyber Security Services | Dastute Technologies Limited" },
      {
        name: "description",
        content:
          "VAPT, SOC monitoring, ISO 27001 compliance, and penetration testing from Dastute Technologies. Enterprise cybersecurity, 24/7 protection.",
      },
      { name: "author", content: "Dastute Technologies Limited" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "GB" },
      { name: "geo.placename", content: "United Kingdom" },
      { name: "theme-color", content: "#1a56db" },
      {
        property: "og:title",
        content: "Cyber Security Services | Dastute Technologies Limited",
      },
      {
        property: "og:description",
        content:
          "VAPT, SOC monitoring, ISO 27001 compliance, and penetration testing from Dastute Technologies. Enterprise cybersecurity, 24/7 protection.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://dastute.co.uk/services/cyber-security",
      },
      { property: "og:site_name", content: "Dastute Technologies Limited" },
      {
        property: "og:image",
        content: "https://dastute.co.uk/images/og-cyber-security.jpg",
      },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Cyber Security Services | Dastute Technologies Limited",
      },
      {
        name: "twitter:description",
        content:
          "VAPT, SOC monitoring, ISO 27001 compliance, and penetration testing from Dastute Technologies. Enterprise cybersecurity, 24/7 protection.",
      },
      { name: "twitter:site", content: "@DastuteTech" },
      {
        name: "twitter:image",
        content: "https://dastute.co.uk/images/og-cyber-security.jpg",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://dastute.co.uk/services/cyber-security",
      },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png" },
      { rel: "icon", href: "/favicon-16x16.png", type: "image/png" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap",
      },
      { rel: "preconnect", href: "https://cdnjs.cloudflare.com" },
      { rel: "dns-prefetch", href: "https://cdnjs.cloudflare.com" },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildServiceJsonLd({
            name: "Cyber Security Services",
            description:
              "Enterprise-grade cybersecurity - VAPT, SOC monitoring, ISO 27001 compliance, penetration testing and secure architecture from Dastute Technologies. Protect your business 24/7.",
            path: "/services/cyber-security",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Technology", path: "/technology" },
            {
              name: "Cyber Security Services",
              path: "/services/cyber-security",
            },
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
      <section className="section-hero-dark">
        <div className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
          <Link to="/technology" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors mb-8">
            <i className="fas fa-arrow-left"></i> Back to Technology Services
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
            / Cyber Security
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-5xl text-white">
            Think Like an Attacker. Defend Like a Professional.
            <br />
            <span className="text-gradient-primary">Test Your True Security Posture.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-slate-300 leading-relaxed">
            Real security requires adversarial thinking. Dastute's Red Team operators simulate nation-state and APT tactics to find what scanners cannot. Our Blue Team analysts detect, respond, and harden — building security operations that catch real threats, not just textbook ones.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Book Free Security Assessment
            </Link>
            <a
              href="#process"
              className="btn-glass inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Our Process
            </a>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { value: "CREST", label: "Certified Operators" },
            { value: "MITRE ATT&CK", label: "Framework Aligned" },
            { value: "24/7", label: "SOC Monitoring" },
            { value: "Purple Team", label: "Collaborative Exercises" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 md:p-8 border-r border-border last:border-r-0 flex flex-col justify-center"
            >
              <div className="text-xl md:text-2xl font-bold text-slate-900">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro & Core Focus Cards */}
      <section className="section-gradient border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              Offensive Insight. Defensive Strength. The Complete Security Picture.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real security is not a checkbox. It requires both offensive testing to find vulnerabilities and defensive operations to detect and stop real attacks. MITRE ATT&CK-aligned threat intelligence translates findings into actionable detection rules. Compliance frameworks (Cyber Essentials, ISO 27001, DORA) are met through strong technical controls, not paperwork.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Red Team Adversary Simulation",
                desc: "MITRE ATT&CK-aligned adversary emulation with defined objectives, stealth tradecraft, and realistic breach scenarios that test your detection AND your incident response.",
                color: "accent-top-rose"
              },
              {
                title: "Blue Team SOC & Detection",
                desc: "24/7 SIEM monitoring (Splunk, Microsoft Sentinel, Elastic), threat hunting, alert triage, IOC enrichment, and playbook-driven incident response.",
                color: "accent-top-blue"
              },
              {
                title: "CREST Penetration Testing",
                desc: "Web app, mobile, API, cloud, and internal network penetration testing by CREST-certified operators using OWASP, PTES, and OSSTMM methodologies.",
                color: "accent-top-violet"
              },
              {
                title: "Social Engineering & Phishing",
                desc: "Targeted phishing campaigns, vishing, physical access testing, and pretexting exercises to quantify your human attack surface.",
                color: "accent-top-amber"
              },
              {
                title: "Purple Team Exercises",
                desc: "Collaborative Red/Blue sessions where attack techniques are run in real-time with Blue Team visibility — accelerating detection rule development and analyst upskilling.",
                color: "accent-top-emerald"
              }
            ].map((card, i) => (
              <article
                key={i}
                className={`glass-card-strong rounded-3xl p-8 ${card.color}`}
              >
                <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600 block mb-4">
              / Detailed Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              Our Red Team & Blue Team Services
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Our Red Team simulates real-world nation-state and advanced persistent threat (APT) actors to uncover weaknesses that automated scanners and standard VAPT engagements cannot find. Using MITRE ATT&CK-aligned tradecraft, we deliver a realistic picture of your true breach risk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column: Offensive Security */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                Red Team — Offensive Security
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Full-Scope Red Team Engagement</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    End-to-end adversary simulation with defined objectives — "exfiltrate customer PII", "access CEO email", "reach finance systems". Tests technical controls, detection capability, and human response simultaneously. MITRE ATT&CK framework throughout.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">CREST Penetration Testing</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Web application, mobile, API, internal network, and cloud infrastructure penetration testing by CREST-certified operators. OWASP, PTES, and OSSTMM methodologies. Detailed CVSS-scored reports with proof-of-concept evidence and prioritised remediation guidance.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Social Engineering & Phishing</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Tailored spear-phishing campaigns, vishing (voice phishing) attacks, and physical intrusion assessments that test both technical controls and human vulnerability — the number one initial access vector for ransomware. Full campaign reporting with click and credential rates.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Assumed Breach Exercise</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Simulating an attacker already inside your network — testing detection capability, lateral movement resistance, privilege escalation paths, and incident response speed. Identifies gaps in your defence that perimeter-focused testing misses entirely.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Smart Contract & Web3 Security Audit</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    CREST-aligned smart contract auditing against OWASP Smart Contract Top 10 and SWC Registry. We have prevented exploits valued at over $50M through pre-deployment auditing. Covers re-entrancy, arithmetic overflow, access control, and economic attack vectors.
                  </p>
                </div>
                <div className="p-5 bg-rose-50 border border-rose-100 rounded-2xl">
                  <h4 className="font-bold text-rose-900 mb-2 flex items-center gap-2">
                    <i className="fas fa-tools text-rose-500"></i> Red Team Tools We Use
                  </h4>
                  <p className="text-sm text-rose-800 leading-relaxed">
                    Cobalt Strike, Sliver C2, Empire, BloodHound, Impacket, Responder, Mimikatz, Metasploit Pro, Burp Suite Pro, Nmap, CrackMapExec — all used ethically within agreed rules of engagement and legal frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Defensive, Purple, Compliance */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                Blue Team — Threat Defence
              </h3>
              <div className="space-y-8 mb-10">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">What We Deliver</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Tangible outputs at every stage of your defensive engagement.
                  </p>
                  <ul className="space-y-6">
                    <li>
                      <strong className="block text-slate-900 mb-1 text-sm">Threat Detection Playbooks</strong>
                      <span className="text-sm text-muted-foreground">Documented SIEM detection rules, incident response playbooks, and threat intelligence integration guides.</span>
                    </li>
                    <li>
                      <strong className="block text-slate-900 mb-1 text-sm">Security Posture Assessment</strong>
                      <span className="text-sm text-muted-foreground">Executive summary, technical findings matrix, remediation roadmap, and compliance gap analysis.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3 pt-6 border-t border-border">
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                Purple Team Collaboration
              </h3>
              <div className="space-y-8 mb-10">
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Joint Red Team/Blue Team exercises where offensive findings directly improve defensive controls in real time. Accelerates security maturity faster than sequential red and blue engagements by creating an immediate feedback loop between attack simulation and defence improvement.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3 pt-6 border-t border-border">
                <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
                UK-Specific Compliance We Support
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-sm">Cyber Essentials & Cyber Essentials Plus</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The NCSC's baseline certification, mandatory for UK government supply chain. We provide gap assessment, remediation, and certification support.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-sm">NCSC Cyber Assessment Framework (CAF)</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    For critical national infrastructure operators (energy, water, transport, financial market infrastructure).
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-sm">DORA (Digital Operational Resilience Act)</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Relevant for UK financial entities with EU operational ties post-Brexit. ICT risk management, incident reporting, and third-party risk requirements.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-sm">ISO 27001:2022, SOC 2 Type II, PCI-DSS, HIPAA</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Full gap analysis, controls implementation, and audit preparation across all major international security frameworks.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Audit, Privacy & Governance */}
      <section className="bg-slate-50 border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600 block mb-4">
              / Audit & Governance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              Data Audits, Privacy & Information Security
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              We provide comprehensive Data Audits, reviewing compliance with Information Security requirements, GDPR, and ICO guidance across various industries. Our structured programs ensure you meet regulatory demands while maintaining robust security governance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
              <i className="fas fa-user-shield text-3xl text-blue-500 mb-6"></i>
              <h3 className="text-xl font-bold text-slate-900 mb-4">GDPR & Privacy Program</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> Data mapping and classification</li>
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> DPIA (Data Protection Impact Assessment)</li>
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> Privacy by Design reviews</li>
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> Records of Processing Activities (RoPA)</li>
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> Data retention and deletion controls</li>
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> Subject Access Request processes</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
              <i className="fas fa-landmark text-3xl text-indigo-500 mb-6"></i>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Security Governance</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> Information Security Management Framework</li>
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> Risk Register creation</li>
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> Security Metrics and Reporting</li>
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> Board-level security reporting</li>
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> Incident response governance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
              <i className="fas fa-network-wired text-3xl text-rose-500 mb-6"></i>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Technical Security Assessment</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> Vulnerability assessment</li>
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> External attack surface review</li>
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> Secure cloud configuration review</li>
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> Endpoint security assessment</li>
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> Identity and Access Management review</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm lg:col-span-2">
              <i className="fas fa-code-branch text-3xl text-violet-500 mb-6"></i>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Product & Application Security</h3>
              <ul className="grid md:grid-cols-2 gap-y-3 gap-x-6 text-sm text-slate-700">
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> Secure SDLC implementation</li>
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> Security architecture reviews</li>
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> Threat modeling</li>
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> Secure coding guidance</li>
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> Security testing strategy</li>
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> Vulnerability management program</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
              <i className="fas fa-shield-alt text-3xl text-amber-500 mb-6"></i>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Incident Response & Resilience</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> Incident response plans</li>
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> Tabletop exercises</li>
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> Breach notification procedures</li>
                <li className="flex items-start gap-2"><i className="fas fa-check text-emerald-500 mt-1"></i> Business continuity support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Blue vs Red Team Comparison */}
      <section className="section-dark">
        <div className="max-w-5xl mx-auto p-6 py-16 md:py-24">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-slate-400 mb-2">Not sure what cybersecurity covers?</p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
              CYBERSECURITY
            </h2>
            <div className="mt-8 relative flex items-center justify-center max-w-2xl mx-auto">
              <div className="w-1/2 h-px bg-blue-500/50"></div>
              <div className="w-1/2 h-px bg-rose-500/50"></div>
              <div className="absolute top-0 w-px h-6 bg-slate-700"></div>
              <div className="absolute top-0 left-0 w-px h-4 bg-blue-500/50"></div>
              <div className="absolute top-0 right-0 w-px h-4 bg-rose-500/50"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
            {/* Blue Team Column */}
            <div>
              <div className="text-center mb-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 block mb-1">Defensive</span>
                <h3 className="text-2xl font-bold text-white">Blue Team</h3>
              </div>
              <div className="space-y-3">
                {[
                  { title: "Incident Response", tags: "Splunk - ELK - ArcSight" },
                  { title: "Threat Hunting", tags: "EDR - YARA - Sigma" },
                  { title: "Malware Analysis", tags: "IDA - Ghidra - Sandbox" },
                  { title: "Cryptography", tags: "PKI - AES - TLS" },
                  { title: "Security Architecture", tags: "Zero Trust - SDLC - IAM" },
                  { title: "Network Security", tags: "Firewalls - IDS/IPS - WAF" },
                ].map((item, i) => (
                  <div key={i} className="glass-card-dark border-l-2 border-l-blue-500/50 rounded-xl p-5 hover:border-l-blue-500 transition-colors">
                    <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-400">{item.tags}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Red Team Column */}
            <div>
              <div className="text-center mb-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-rose-500 block mb-1">Offensive</span>
                <h3 className="text-2xl font-bold text-white">Red Team</h3>
              </div>
              <div className="space-y-3">
                {[
                  { title: "Penetration Testing", tags: "Nmap - Metasploit - Burp Suite" },
                  { title: "Red Teaming", tags: "C2 - Cobalt Strike - Sliver" },
                  { title: "Vulnerability Mgmt", tags: "Nessus - OpenVAS - Qualys" },
                  { title: "Exploit Development", tags: "Reverse Eng - Fuzzing - Pwn" },
                  { title: "Social Engineering", tags: "Phishing - OSINT - Pretext" },
                  { title: "Web App Hacking", tags: "OWASP Top 10 - XSS - SQLi" },
                ].map((item, i) => (
                  <div key={i} className="glass-card-dark border-r-2 border-r-rose-500/50 rounded-xl p-5 text-right hover:border-r-rose-500 transition-colors">
                    <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-400">{item.tags}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Foundation Bottom Card */}
          <div className="mt-8 glass-card-dark border-b-2 border-b-emerald-500/50 rounded-xl p-6 text-center hover:border-b-emerald-500 transition-colors">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 block mb-2">Foundation - Applies to Both</span>
            <h4 className="font-bold text-white text-base mb-1">Governance - Risk - Compliance</h4>
            <p className="text-xs text-slate-400">GDPR - HIPAA - SOC 2 - ISO 27001</p>
          </div>
        </div>
      </section>

      {/* Tools & Frameworks */}
      <section className="section-gradient border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
              Tools & Frameworks We Use
            </h2>
            <p className="text-muted-foreground">
              Industry-standard offensive and defensive security tooling.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "OWASP ZAP", "Burp Suite", "Nmap", "Metasploit", "Nessus", "Wireshark",
              "CREST", "ISO 27001", "HIPAA", "PCI-DSS", "SOC 2", "CrowdStrike", "Splunk",
              "Datadog", "Cobalt Strike", "Sliver", "Empire", "BloodHound", "Impacket",
              "Responder", "Microsoft Sentinel", "Splunk Enterprise Security", "IBM QRadar",
              "CrowdStrike Falcon", "SentinelOne", "Microsoft Defender for Endpoint",
              "MISP", "OpenCTI", "VirusTotal Enterprise", "Recorded Future",
              "Microsoft Sentinel Playbooks", "Splunk SOAR (Phantom)", "Palo Alto XSOAR",
              "Volatility", "Autopsy", "FTK Imager", "Velociraptor",
              "UK Cyber Essentials Plus", "NCSC CAF", "DORA"
            ].map(tool => (
              <span key={tool} className="px-4 py-2 bg-white border border-border rounded-full text-sm font-medium text-slate-700 shadow-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section-dark">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-4">
              / Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Our Red Team & Blue Team Process
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              A structured, responsible methodology with full transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { num: "01", title: "Scoping & Rules of Engagement", desc: "Define objectives, scope, timeframe, get-out-of-jail letter, and emergency contacts." },
              { num: "02", title: "Reconnaissance & Planning", desc: "OSINT, attack path mapping, infrastructure enumeration, and tool preparation." },
              { num: "03", title: "Engagement Execution", desc: "Controlled adversary simulation, finding documentation, real-time communication channel for critical findings." },
              { num: "04", title: "Debrief & Remediation", desc: "Technical report, executive briefing, remediation walkthrough, and 30-day retest included." },
            ].map((step, i) => (
              <div key={i} className="glass-card-dark rounded-3xl p-6 relative overflow-hidden">
                <span className="absolute top-4 right-4 text-4xl font-black text-white/5">{step.num}</span>
                <div className="font-mono text-sm text-blue-400 mb-4">{step.num}</div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm font-mono text-slate-400 bg-white/5 py-4 rounded-xl border border-white/10">
            <span>Penetration Test: 1–4 weeks</span>
            <span className="hidden md:inline">|</span>
            <span>Red Team: 4–12 weeks</span>
            <span className="hidden md:inline">|</span>
            <span>Purple Team: 2–6 weeks</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto p-6 py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Ready to Test Your Defences?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Book a free Red Team scoping call or a Blue Team readiness assessment and find out where your real exposure lies.
          </p>
          <Link
            to="/contact"
            className="btn-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
          >
            Book Free Security Assessment
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}



