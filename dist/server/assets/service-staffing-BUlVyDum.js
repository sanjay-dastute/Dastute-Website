import { I as jsxRuntimeExports } from "./server-DroHzk8b.js";
import { S as SiteLayout } from "./SiteLayout-5K-5dfni.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BhxIqGy1.js";
const pageHtml = `<style>.engagement-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 24px;
      margin-top: 32px;
    }
    .engagement-card {
      background: #fff;
      border: 2px solid rgba(26,86,219,0.1);
      border-radius: 16px;
      padding: 30px 24px;
      box-shadow: 0 8px 24px rgba(15,23,42,0.06);
      transition: transform 0.2s, border-color 0.2s;
      position: relative;
    }
    .engagement-card:hover { transform: translateY(-4px); border-color: var(--secondary); }
    .engagement-card .ec-badge {
      position: absolute; top: -12px; left: 24px;
      background: var(--secondary); color: #fff;
      font-size: 0.75rem; font-weight: 700; padding: 4px 12px; border-radius: 20px;
    }
    .engagement-card h3 { font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 12px; }
    .engagement-card p { font-size: 0.95rem; color: var(--text-light); line-height: 1.7; margin: 0; }
    .disciplines-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-top: 28px;
    }
    .disc-item {
      background: #f8faff;
      border: 1px solid rgba(26,86,219,0.1);
      border-radius: 12px;
      padding: 18px 20px;
      display: flex; align-items: flex-start; gap: 12px;
    }
    .disc-item i { color: var(--secondary); font-size: 1.2rem; margin-top: 2px; flex-shrink: 0; }
    .disc-item div strong { display: block; font-size: 0.95rem; color: var(--primary); margin-bottom: 4px; }
    .disc-item div span { font-size: 0.85rem; color: var(--text-light); }
    .vetting-steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 28px;
    }
    .vetting-step {
      text-align: center;
      padding: 24px 16px;
      background: #fff;
      border-radius: 16px;
      border: 1px solid rgba(26,86,219,0.1);
      box-shadow: 0 4px 16px rgba(15,23,42,0.05);
    }
    .vetting-step .vs-num {
      width: 44px; height: 44px; background: var(--secondary);
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      font-weight: 800; font-size: 1.1rem; color: #fff; margin: 0 auto 14px;
    }
    .vetting-step h4 { font-size: 0.95rem; font-weight: 700; color: var(--primary); margin-bottom: 8px; }
    .vetting-step p { font-size: 0.88rem; color: var(--text-light); margin: 0; line-height: 1.6; }
    .ir35-callout {
      background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
      border-radius: 18px; padding: 36px 40px; margin: 48px 0;
      display: flex; align-items: center; gap: 32px;
    }
    .ir35-callout i { font-size: 3rem; color: #06b6d4; flex-shrink: 0; }
    .ir35-callout h3 { color: #fff; font-size: 1.3rem; margin-bottom: 10px; }
    .ir35-callout p { color: rgba(255,255,255,0.8); font-size: 0.95rem; line-height: 1.7; margin: 0; }
    @media (max-width: 768px) {
      .ir35-callout { flex-direction: column; padding: 28px 20px; gap: 20px; }
    }</style>


<!-- TOP BAR -->
  <div class="topbar">
    <div class="container topbar-inner">
      <div class="topbar-contacts">
        <span><i class="fas fa-phone-alt"></i> UK: +44 7423021644</span>
        <span class="sep">|</span>
        <span><i class="fas fa-phone-alt"></i> India: +91 9940941959</span>
        <span class="sep">|</span>
        <span><i class="fas fa-envelope"></i> contact@dastute.co.uk</span>
      </div>
    </div>
  </div>

  <!-- HEADER -->
  <header class="header" id="header">

    <div class="container header-inner">
      <a href="../index.html#home" class="logo">
        <div class="logo-text-wrap">
          <span class="logo-main">DASTUTE</span>
          <span class="logo-sub">TECHNOLOGIES LIMITED</span>
        </div>
      </a>
      <nav class="nav" id="nav">
        <ul class="nav-list">
          <li><a href="../index.html#home" class="nav-link">Home</a></li>
          <li class="has-dropdown">
            <a href="../index.html#services" class="nav-link">Solutions <i class="fas fa-chevron-down"></i></a>
            <div class="mega-menu">
              <div class="mega-col">
                <h4><i class="fas fa-layer-group"></i> Technology Solutions</h4>
                <a href="service-mobile.html"><i class="fab fa-android"></i> Android Development</a>
                <a href="service-mobile.html"><i class="fab fa-apple"></i> iOS Development</a>
                <a href="service-mobile.html"><i class="fas fa-mobile-alt"></i> Hybrid App Development</a>
                <a href="service-web-development.html"><i class="fas fa-globe"></i> Web Development</a>
                <a href="service-web-development.html"><i class="fas fa-code"></i> Custom Software Development</a>
                <a href="service-blockchain.html"><i class="fas fa-cubes"></i> Blockchain &amp; Web3</a>
                <a href="service-cloud.html"><i class="fas fa-cloud"></i> Cloud Services</a>
                <a href="service-cyber-security.html"><i class="fas fa-shield-alt"></i> Cyber Security</a>
                <a href="service-erp.html"><i class="fas fa-cogs"></i> ERP Solutions</a>
                <a href="service-network.html"><i class="fas fa-network-wired"></i> Network Connectivity</a>
                <a href="service-managed-it.html"><i class="fas fa-server"></i> Managed Services</a>
                <a href="service-consulting.html"><i class="fas fa-lightbulb"></i> IT Consulting &amp; Advisory</a>
                <a href="service-marketing.html"><i class="fas fa-bullhorn"></i> Digital Marketing</a>
                <a href="service-staffing.html"><i class="fas fa-users-cog"></i> IT Staff Resource Supply</a>
                <a href="service-red-blue-team.html"><i class="fas fa-crosshairs"></i> Red Team / Blue Team Security</a>
              </div>
              <div class="mega-col">
                <h4><i class="fas fa-puzzle-piece"></i> Business Challenges</h4>
                <a href="../index.html#why-us"><i class="fas fa-rocket"></i> Digital Transformation</a>
                <a href="../index.html#why-us"><i class="fas fa-lock"></i> Security</a>
                <a href="../index.html#why-us"><i class="fas fa-robot"></i> Automation</a>
                <a href="../index.html#why-us"><i class="fas fa-chart-line"></i> Gaining Efficiency</a>
                <h4 style="margin-top:20px"><i class="fas fa-industry"></i> Industries</h4>
                <a href="../index.html#industries"><i class="fas fa-industry"></i> Manufacturing</a>
                <a href="../index.html#industries"><i class="fas fa-truck"></i> Transportation &amp; Logistics</a>
                <a href="../index.html#industries"><i class="fas fa-heartbeat"></i> Healthcare</a>
                <a href="../index.html#industries"><i class="fas fa-university"></i> Banks &amp; Insurance</a>
                <a href="../index.html#industries"><i class="fas fa-hand-holding-heart"></i> Non-Profit</a>
                <a href="../index.html#industries"><i class="fas fa-coins"></i> Fintech</a>
              </div>
            </div>
          </li>
          <li><a href="products.html" class="nav-link">Products</a></li>
          <li class="has-dropdown">
            <a href="about.html" class="nav-link">Company <i class="fas fa-chevron-down"></i></a>
            <ul class="dropdown">
              <li><a href="about.html"><i class="fas fa-info-circle"></i> About Us</a></li>
              <li><a href="team.html"><i class="fas fa-users"></i> Our Team</a></li>
              <li><a href="careers.html"><i class="fas fa-briefcase"></i> Careers</a></li>
              <li><a href="../index.html#why-us"><i class="fas fa-star"></i> Why Dastute</a></li>
            </ul>
          </li>
          <li><a href="process.html" class="nav-link">Process</a></li>
          <li><a href="../index.html#blog" class="nav-link">Blog</a></li>
        </ul>
      </nav>
      <div class="header-cta">
        <a href="contact.html" class="btn btn-primary"><i class="fas fa-calendar-alt"></i> Free Consultation</a>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

<!-- PAGE HERO -->
<section class="page-hero">
  <div class="ph-particles" id="phParticles"></div>
  <div class="container ph-inner">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <ol class="bc-list">
        <li><a href="../"><i class="fas fa-home"></i> Home</a></li>
        <li><i class="fas fa-chevron-right"></i></li>
        <li><a href="../index.html#services">Solutions</a></li>
        <li><i class="fas fa-chevron-right"></i></li>
        <li aria-current="page">IT Staff Resource Supply</li>
      </ol>
    </nav>
    <div class="ph-tag"><i class="fas fa-users-cog"></i> IT Staff Resource Supply</div>
    <h1>Pre-Vetted IT Talent Deployed in Days, Not Months</h1>
    <p>Contract, permanent, and staff-augmentation placements across software engineering, cloud, cybersecurity, DevOps, data, and IT project management. Dastute sources, technically vets, and manages IT professionals for UK and global businesses - backed by our in-house engineering teams who assess every candidate.</p>
    <div class="ph-actions">
      <a href="contact.html" class="btn btn-primary btn-lg"><i class="fas fa-file-alt"></i> Submit a Staffing Brief</a>
      <a href="#disciplines" class="btn btn-glass btn-lg"><i class="fas fa-users"></i> See Available Profiles</a>
    </div>
  </div>
  <div class="ph-wave"><svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f0f6ff"/></svg></div>
</section>

<!-- OVERVIEW STRIP -->
<section class="overview-strip">
  <div class="container overview-grid">
    <div class="ov-stat">
      <div class="ov-value">5 Days</div>
      <div class="ov-label">Avg. Placement Time - from brief to shortlist</div>
    </div>
    <div class="ov-stat">
      <div class="ov-value">Top 8%</div>
      <div class="ov-label">Candidate Pass Rate - technically vetted by our engineers</div>
    </div>
    <div class="ov-stat">
      <div class="ov-value">15+</div>
      <div class="ov-label">Disciplines Covered - engineering, cloud, security, data</div>
    </div>
    <div class="ov-stat">
      <div class="ov-value">3</div>
      <div class="ov-label">Engagement Types - contract, permanent, augmentation</div>
    </div>
  </div>
</section>

<!-- SERVICE DETAIL -->
<section class="service-detail" data-snippet="">
  <div class="container sd-inner">
    <div class="sd-content">
      <h2>Technology-Led Staffing - Vetted by Engineers, Not Just Recruiters</h2>
      <p>The UK technology skills shortage is at a critical point. According to the UK Digital Strategy, over 1.5 million additional digital workers will be needed by 2030. Hiring cycles for senior engineers, cloud architects, and cybersecurity specialists routinely stretch to 3â€“6 months through traditional recruitment - time most businesses do not have. Dastute closes this gap.</p>
      <p>Unlike traditional staffing agencies, Dastute's resource supply model is technology-led. Every candidate is assessed by our in-house engineering and security teams before being presented to a client. We test for genuine technical competency - not just CV keywords. Our talent pool spans the UK, India, and Singapore, giving clients access to a global supply of pre-vetted professionals at competitive rates, with clear IR35 management for UK contract placements.</p>
      <ul class="sd-features">
        <li>
          <div class="sd-feat-icon s-blue"><i class="fas fa-users"></i></div>
          <div>
            <strong>Staff Augmentation</strong>
            <p>Embed pre-vetted Dastute professionals directly into your team for a defined period. You manage their day-to-day work; we handle contracts, payroll, and HR. Ideal for project scale-ups, parental cover, and skills gaps on active programmes. Minimum 4-week engagement. IR35 assessment and compliant contracts provided for all UK placements.</p>
          </div>
        </li>
        <li>
          <div class="sd-feat-icon s-purple"><i class="fas fa-file-contract"></i></div>
          <div>
            <strong>Contract Placement</strong>
            <p>We source and place independent IT contractors for fixed-term engagements. Our candidates are technically pre-screened, reference-checked, and IR35 status-assessed. Typical turnaround: qualified shortlist within 5 business days of receiving a brief.</p>
          </div>
        </li>
        <li>
          <div class="sd-feat-icon s-teal"><i class="fas fa-briefcase"></i></div>
          <div>
            <strong>Permanent Recruitment</strong>
            <p>Full retained or contingency recruitment for permanent IT roles. We run structured technical assessments, cultural-fit interviews, and reference checks - delivering a qualified shortlist of 3â€“5 candidates within 2â€“3 weeks. UK Right to Work checks included.</p>
          </div>
        </li>
        <li>
          <div class="sd-feat-icon s-orange"><i class="fas fa-layer-group"></i></div>
          <div>
            <strong>Managed Team Supply</strong>
            <p>For clients requiring multiple roles on a project, we supply an entire delivery team: project manager, tech lead, developers, QA engineers, and DevOps - fully managed by Dastute as an extension of your organisation.</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="sd-visual">
      <div class="pv-illustration" style="height:360px;border-radius:20px;width:100%;background:linear-gradient(135deg,#1a56db,#0d9488);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;">
        <div class="pvi-ring r1"></div>
        <div class="pvi-ring r2"></div>
        <div class="pvi-center" style="width:80px;height:80px;border-radius:20px">
          <i class="fas fa-users-cog fa-2x" style="color:white"></i>
        </div>
        <div class="pvi-dot dot-tl"><i class="fas fa-code"></i></div>
        <div class="pvi-dot dot-tr"><i class="fas fa-cloud"></i></div>
        <div class="pvi-dot dot-bl"><i class="fas fa-shield-alt"></i></div>
        <div class="pvi-dot dot-br"><i class="fas fa-database"></i></div>
      </div>
    </div>
  </div>
</section>

<!-- ENGAGEMENT MODELS -->
<section class="section" style="background:#f8faff; padding: 72px 0;">
  <div class="container">
    <div class="section-header">
      <h2>Engagement Models</h2>
      <p>Flexible staffing models built around how your business actually works.</p>
    </div>
    <div class="engagement-grid">
      <div class="engagement-card">
        <span class="ec-badge">Most Popular</span>
        <h3><i class="fas fa-users" style="color:var(--secondary);margin-right:8px"></i>Staff Augmentation</h3>
        <p>Embed vetted professionals directly into your existing team under your management. We supply the talent; you direct the work. Ideal for project scale-ups, parental cover, and filling skills gaps on live programmes. Minimum 4-week engagement. All UK placements are IR35-assessed and fully compliant.</p>
      </div>
      <div class="engagement-card">
        <h3><i class="fas fa-file-contract" style="color:var(--secondary);margin-right:8px"></i>Contract Placement</h3>
        <p>We source independent IT contractors for fixed-term engagements. Pre-screened, reference-checked, and IR35 status-assessed. Shortlist of 3â€“5 qualified candidates within 5 business days of receiving your brief. Contract terms and day rates agreed transparently upfront with no hidden fees.</p>
      </div>
      <div class="engagement-card">
        <h3><i class="fas fa-user-tie" style="color:var(--secondary);margin-right:8px"></i>Permanent Recruitment</h3>
        <p>End-to-end permanent hiring: job brief writing, active and passive candidate sourcing, technical assessments, structured interviews, reference checks, offer management, and onboarding support. UK Right to Work verification included. Replacement guarantee on all permanent placements.</p>
      </div>
      <div class="engagement-card">
        <h3><i class="fas fa-project-diagram" style="color:var(--secondary);margin-right:8px"></i>Managed Team Supply</h3>
        <p>Need an entire project team? We supply, manage, and coordinate multi-disciplinary IT teams as a fully managed service - project manager, tech lead, front-end, back-end, QA, and DevOps - with one point of contact, one contract, and end-to-end Dastute accountability.</p>
      </div>
    </div>
  </div>
</section>

<!-- DISCIPLINES -->
<section class="section" id="disciplines" style="padding: 72px 0;">
  <div class="container">
    <div class="section-header">
      <h2>Disciplines &amp; Roles We Supply</h2>
      <p>Deep talent pools across every technology specialism - from emerging engineers to principal architects.</p>
    </div>
    <div class="disciplines-grid">
      <div class="disc-item">
        <i class="fas fa-code"></i>
        <div>
          <strong>Software Engineering</strong>
          <span>Full-stack, React, Angular, Vue, Node.js, Python, Java, .NET, Go, Rust, PHP, mobile (Flutter, React Native, Swift, Kotlin)</span>
        </div>
      </div>
      <div class="disc-item">
        <i class="fas fa-cloud"></i>
        <div>
          <strong>Cloud &amp; Infrastructure</strong>
          <span>AWS, Azure, GCP architects, DevOps/Platform engineers, Kubernetes, Terraform, FinOps, SRE, cloud migration specialists</span>
        </div>
      </div>
      <div class="disc-item">
        <i class="fas fa-shield-alt"></i>
        <div>
          <strong>Cybersecurity</strong>
          <span>Red Team operators, Blue Team/SOC analysts, penetration testers (CREST/OSCP), CISO advisory, GRC consultants, incident response</span>
        </div>
      </div>
      <div class="disc-item">
        <i class="fas fa-brain"></i>
        <div>
          <strong>Data &amp; AI</strong>
          <span>Data engineers, ML engineers, data scientists, Power BI/Tableau developers, data architects, LLM/GenAI specialists</span>
        </div>
      </div>
      <div class="disc-item">
        <i class="fas fa-tasks"></i>
        <div>
          <strong>IT Project Management</strong>
          <span>Programme managers, Scrum Masters, Product Owners, Agile delivery leads, PMO analysts, Change Managers</span>
        </div>
      </div>
      <div class="disc-item">
        <i class="fas fa-cogs"></i>
        <div>
          <strong>ERP &amp; Enterprise Systems</strong>
          <span>SAP (FICO, SD, MM, HCM), Microsoft Dynamics 365, Oracle ERP, Salesforce architects and admins, ServiceNow</span>
        </div>
      </div>
      <div class="disc-item">
        <i class="fas fa-vial"></i>
        <div>
          <strong>QA &amp; Testing</strong>
          <span>Manual testers, automation engineers (Selenium, Playwright, Cypress, Appium), performance testers, security testers</span>
        </div>
      </div>
      <div class="disc-item">
        <i class="fas fa-network-wired"></i>
        <div>
          <strong>Networking</strong>
          <span>Cisco/Meraki certified engineers, SD-WAN specialists, NOC engineers, network security architects</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- IR35 CALLOUT -->
<section class="section" style="padding: 0 0 72px;">
  <div class="container">
    <div class="ir35-callout">
      <i class="fas fa-balance-scale"></i>
      <div>
        <h3>UK IR35 Compliance - Fully Managed</h3>
        <p>Every UK contract placement includes a written IR35 determination prepared in conjunction with qualified IR35 specialists. We provide fully compliant umbrella and limited company contractor contracts - protecting both the end client and the contractor from HMRC liability. IR35 off-payroll working rules (Chapter 10, ITEPA 2003) are applied correctly on every engagement without exception.</p>
      </div>
    </div>
  </div>
</section>

<!-- OUR TECHNICAL VETTING PROCESS -->
<section class="deliverables-section" style="background:#f8faff;">
  <div class="container">
    <div class="section-header">
      <h2>Our 5-Stage Technical Vetting Process</h2>
      <p>Every candidate passes five rigorous stages before you see their profile. Only the top 8% make it through.</p>
    </div>
    <div class="vetting-steps">
      <div class="vetting-step">
        <div class="vs-num">01</div>
        <h4>CV &amp; Profile Screen</h4>
        <p>Our in-house technical leads review the CV for genuine depth - distinguishing experienced practitioners from CV-keyword matches. Common red flags caught at this stage are filtered immediately.</p>
      </div>
      <div class="vetting-step">
        <div class="vs-num">02</div>
        <h4>Technical Assessment</h4>
        <p>Role-appropriate coding challenge, architecture whiteboard, or hands-on lab exercise. Cybersecurity candidates complete scenario-based offensive/defensive assessments. Results are scored and benchmarked.</p>
      </div>
      <div class="vetting-step">
        <div class="vs-num">03</div>
        <h4>Structured Interview</h4>
        <p>Competency-based interview conducted by a senior Dastute engineer in the relevant domain. Assessed on technical problem-solving, communication, documentation practices, and cultural fit.</p>
      </div>
      <div class="vetting-step">
        <div class="vs-num">04</div>
        <h4>Reference Check</h4>
        <p>Two professional references verified directly by our team. For security-sensitive roles, Disclosure and Barring Service (DBS) checks are available upon request. Certification validation included.</p>
      </div>
      <div class="vetting-step">
        <div class="vs-num">05</div>
        <h4>Compliance Review</h4>
        <p>IR35 assessment for UK contractors, Right to Work verification, professional certification validation, and - where required - right to work checks for international placements.</p>
      </div>
    </div>
  </div>
</section>

<!-- DELIVERABLES -->
<section class="deliverables-section">
  <div class="container">
    <div class="section-header">
      <h2>What We Deliver</h2>
      <p>Transparent outputs at every stage of your staffing engagement.</p>
    </div>
    <div class="deliv-grid">
      <div class="deliv-card">
        <div class="deliv-icon s-blue"><i class="fas fa-user-check"></i></div>
        <h3>Qualified Shortlist</h3>
        <p>3â€“5 pre-vetted candidate profiles with technical assessment scores, CV, Dastute assessment notes, and a recommended ranking - delivered within 5 business days of receiving your brief.</p>
      </div>
      <div class="deliv-card">
        <div class="deliv-icon s-purple"><i class="fas fa-file-invoice"></i></div>
        <h3>IR35 Determination</h3>
        <p>Written IR35 status determination for every UK contractor placement, reviewed by a qualified IR35 specialist. Fully documented and available to share with HMRC if required.</p>
      </div>
      <div class="deliv-card">
        <div class="deliv-icon s-teal"><i class="fas fa-handshake"></i></div>
        <h3>Onboarding Support</h3>
        <p>First-day onboarding checklist, system access checklist, equipment setup guidance, and a dedicated account manager assigned for the duration of the placement.</p>
      </div>
      <div class="deliv-card">
        <div class="deliv-icon s-orange"><i class="fas fa-chart-bar"></i></div>
        <h3>Monthly Utilisation Report</h3>
        <p>For augmentation engagements: hours worked, deliverables completed, upcoming availability, and performance feedback - giving you visibility and control throughout the engagement.</p>
      </div>
    </div>
  </div>
</section>

<!-- TECH / ROLE TAGS -->
<section class="tech-stack-section">
  <div class="container">
    <div class="section-header">
      <h2>Technologies &amp; Frameworks Our Talent Covers</h2>
      <p>Pre-vetted professionals across every major technology stack and platform.</p>
    </div>
    <div class="tech-tags">
      <span class="tech-tag">React</span>
      <span class="tech-tag">Angular</span>
      <span class="tech-tag">Vue.js</span>
      <span class="tech-tag">Node.js</span>
      <span class="tech-tag">Python</span>
      <span class="tech-tag">Java</span>
      <span class="tech-tag">.NET / C#</span>
      <span class="tech-tag">Go</span>
      <span class="tech-tag">Rust</span>
      <span class="tech-tag">Flutter</span>
      <span class="tech-tag">React Native</span>
      <span class="tech-tag">AWS</span>
      <span class="tech-tag">Microsoft Azure</span>
      <span class="tech-tag">Google Cloud</span>
      <span class="tech-tag">Kubernetes</span>
      <span class="tech-tag">Terraform</span>
      <span class="tech-tag">Docker</span>
      <span class="tech-tag">CI/CD</span>
      <span class="tech-tag">CREST / OSCP</span>
      <span class="tech-tag">SAP</span>
      <span class="tech-tag">Dynamics 365</span>
      <span class="tech-tag">Salesforce</span>
      <span class="tech-tag">Power BI</span>
      <span class="tech-tag">Tableau</span>
      <span class="tech-tag">TensorFlow</span>
      <span class="tech-tag">PyTorch</span>
      <span class="tech-tag">LLM / GenAI</span>
      <span class="tech-tag">Blockchain / Solidity</span>
    </div>
  </div>
</section>

<!-- PROCESS MINI -->
<section class="process-mini">
  <div class="container">
    <div class="section-header light">
      <h2>How a Staffing Engagement Works</h2>
      <p>From brief to first day on the job - structured, transparent, and fast.</p>
    </div>
    <div class="pm-steps">
      <div class="pm-step">
        <div class="pm-num">01</div>
        <h3>Submit Your Brief</h3>
        <p>Contact us with your role requirements: skills needed, duration, location (remote/hybrid/on-site), budget range, and start date. The more detail you provide, the faster we can match.</p>
      </div>
      <div class="pm-step">
        <div class="pm-num">02</div>
        <h3>Candidate Matching</h3>
        <p>Our technical team searches active candidates and initiates targeted outreach to passive candidates. Technical assessments and interviews are completed by Dastute before you receive any profile.</p>
      </div>
      <div class="pm-step">
        <div class="pm-num">03</div>
        <h3>Shortlist Delivered</h3>
        <p>You receive 3â€“5 pre-vetted profiles with technical scores, assessment notes, and our recommendation. Most clients select their preferred candidate within 48 hours of receiving the shortlist.</p>
      </div>
      <div class="pm-step">
        <div class="pm-num">04</div>
        <h3>Contracts &amp; On-Boarding</h3>
        <p>Dastute manages contracts, IR35 compliance, right-to-work checks, and onboarding logistics. The candidate starts on your agreed date, with a dedicated account manager supporting throughout.</p>
      </div>
    </div>
    <div class="pm-timeline">Brief to shortlist: 5 business days average</div>
  </div>
</section>

<!-- TESTIMONIALS -->
<section class="testimonials-section">
  <div class="container">
    <div class="section-header">
      <h2>What Our Clients Say</h2>
    </div>
    <div class="testi-grid">
      <div class="testi-card">
        <div class="testi-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        <p>"We needed a senior AWS architect urgently for a migration programme. Dastute had three pre-vetted profiles on my desk in four days. We hired on day five. Absolutely exceptional."</p>
        <div class="testi-author">
          <div class="testi-avatar">TH</div>
          <div>
            <strong>Tom Hargreaves</strong>
            <span>CTO, RetailCloud UK</span>
          </div>
        </div>
      </div>
      <div class="testi-card">
        <div class="testi-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        <p>"The technical vetting Dastute does is far superior to any agency I've used. Every candidate they send has been assessed by engineers - not just keyword-matched against a JD."</p>
        <div class="testi-author">
          <div class="testi-avatar">AK</div>
          <div>
            <strong>Ananya Krishnan</strong>
            <span>VP Engineering, FinStack India</span>
          </div>
        </div>
      </div>
      <div class="testi-card">
        <div class="testi-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        <p>"The IR35 management was handled completely. Zero admin on our side - compliant contracts, DBS checks, everything. It made a complex multi-contractor programme very straightforward."</p>
        <div class="testi-author">
          <div class="testi-avatar">MW</div>
          <div>
            <strong>Mark Williamson</strong>
            <span>Programme Director, GovTech Services</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="faq-section" data-snippet="">
  <div class="container">
    <div class="section-header">
      <h2>Frequently Asked Questions</h2>
    </div>
    <div class="faq-list">

      <div class="faq-item">
        <button class="faq-q">How quickly can you fill a role? <i class="fas fa-chevron-down"></i></button>
        <div class="faq-a"><p>For common roles - mid-to-senior full-stack developers, cloud engineers, DevOps specialists - we deliver a qualified shortlist within 5 business days of receiving a complete brief. Specialist roles such as CREST-certified penetration testers, principal ML architects, or niche SAP consultants typically take 7â€“10 business days. The more detail you give us upfront, the faster we can move.</p></div>
      </div>

      <div class="faq-item">
        <button class="faq-q">How do you handle IR35 compliance for UK contractors? <i class="fas fa-chevron-down"></i></button>
        <div class="faq-a"><p>Every UK contract placement includes a written IR35 assessment prepared in conjunction with our specialist IR35 advisors. We provide fully compliant engagement contracts for both inside and outside IR35 determinations - protecting the end client from HMRC risk under the off-payroll working rules (Chapter 10, ITEPA 2003). All documentation is retained and available for HMRC audit.</p></div>
      </div>

      <div class="faq-item">
        <button class="faq-q">Can you supply staff for projects shorter than one month? <i class="fas fa-chevron-down"></i></button>
        <div class="faq-a"><p>Our standard staff augmentation minimum is 4 weeks. For shorter project sprints or specific deliverable-based engagements, we can discuss a statement of work (SOW) model where Dastute takes responsibility for delivering a defined output - contact us to discuss your specific requirement.</p></div>
      </div>

      <div class="faq-item">
        <button class="faq-q">Do you supply IT professionals outside the UK? <i class="fas fa-chevron-down"></i></button>
        <div class="faq-a"><p>Yes. We have active talent pools in India and Singapore, and place professionals globally. Multi-jurisdiction placements are handled by our legal and compliance team, including local employment law compliance, work permit requirements, and cross-border contracting. Our three-office presence means we have genuine on-the-ground sourcing capability, not just a global job board.</p></div>
      </div>

      <div class="faq-item">
        <button class="faq-q">What happens if a placed candidate doesn't work out? <i class="fas fa-chevron-down"></i></button>
        <div class="faq-a"><p>We offer a replacement guarantee period on all placements. For staff augmentation and contract placements, we will source and deploy a replacement within 5 business days at no additional placement fee if the original candidate is not suitable within the guarantee period. Full details are set out in our service agreement.</p></div>
      </div>

      <div class="faq-item">
        <button class="faq-q">What makes Dastute different from a standard IT recruiter? <i class="fas fa-chevron-down"></i></button>
        <div class="faq-a"><p>The core difference is that Dastute is an IT services and technology company first - not a recruiter who developed a technology practice. Our in-house engineering teams conduct genuine technical assessments of every candidate. We know what good looks like because we build and operate the same systems our candidates will work on. You get talent assessed by practitioners, not just sourced by generalist recruiters.</p></div>
      </div>

    </div>
  </div>
</section>

<!-- RELATED SERVICES -->
<section class="related-services">
  <div class="container">
    <div class="section-header"><h2>Related Services</h2></div>
    <div class="rs-grid">
      <a href="service-consulting.html" class="rs-card">
        <div class="rs-icon"><i class="fas fa-lightbulb"></i></div>
        <div><h4>IT Consulting</h4><p>Strategic workforce planning and technology advisory.</p></div>
      </a>
      <a href="service-managed-it.html" class="rs-card">
        <div class="rs-icon"><i class="fas fa-server"></i></div>
        <div><h4>Managed IT Services</h4><p>Augment your team with fully managed IT operations.</p></div>
      </a>
      <a href="service-cyber-security.html" class="rs-card">
        <div class="rs-icon"><i class="fas fa-shield-alt"></i></div>
        <div><h4>Cyber Security</h4><p>Specialist security talent for SOC, GRC, and penetration testing.</p></div>
      </a>
    </div>
  </div>
</section>
<!-- INNER CTA -->
<section class="inner-cta">
  <div class="container inner-cta-inner">
    <h2>Ready to Find the Right IT Talent?</h2>
    <p>Submit your staffing brief today and receive a pre-vetted shortlist within 5 business days.</p>
    <div class="cta-actions">
      <a href="contact.html" class="btn btn-primary btn-lg"><i class="fas fa-file-alt"></i> Submit Staffing Brief</a>
      <a href="process.html" class="btn btn-glass btn-lg"><i class="fas fa-sitemap"></i> Our Process</a>
    </div>
  </div>
</section>

<!-- FOOTER -->
  <footer class="footer">
    <div class="container footer-top">
      <div class="footer-brand">
        <a href="../index.html#home" class="logo logo-light">
          <div class="logo-text-wrap">
            <span class="logo-main">DASTUTE</span>
            <span class="logo-sub" style="color:rgba(255,255,255,0.6)">TECHNOLOGIES LIMITED</span>
          </div>
        </a>
        <p class="footer-desc"><em>Innovate | Connect | Inspire</em><br />We manage your IT, so you can manage your business. Global IT solutions delivered from India, Singapore, and the UK.</p>
        <div class="footer-social">
          <a href="https://www.linkedin.com/company/dastute-technologies-limited" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin"></i><span class="sr-only">LinkedIn</span></a>
          <a href="https://x.com/DastuteLimited" target="_blank" rel="noopener" aria-label="X / Twitter"><i class="fab fa-twitter"></i><span class="sr-only">X (Twitter)</span></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Solutions</h4>
        <ul>
          <li><a href="service-managed-it.html">Managed IT Services</a></li>
          <li><a href="service-cyber-security.html">Cyber Security</a></li>
          <li><a href="service-cloud.html">Cloud Services</a></li>
          <li><a href="service-web-development.html">Web Development</a></li>
          <li><a href="service-mobile.html">Mobile App Development</a></li>
          <li><a href="service-blockchain.html">Blockchain &amp; Web3</a></li>
          <li><a href="service-erp.html">ERP Solutions</a></li>
          <li><a href="service-consulting.html">IT Consulting</a></li>
          <li><a href="service-marketing.html">Digital Marketing</a></li>
          <li><a href="service-staffing.html">IT Staff Resource Supply</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="team.html">Our Team</a></li>
          <li><a href="../index.html#why-us">Why Dastute</a></li>
          <li><a href="careers.html">Careers</a></li>
          <li><a href="../index.html#blog">DST Blog</a></li>
          <li><a href="contact.html">Client Support</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Industries</h4>
        <ul>
          <li><a href="../index.html#industries">Healthcare</a></li>
          <li><a href="../index.html#industries">Banks &amp; Insurance</a></li>
          <li><a href="../index.html#industries">Manufacturing</a></li>
          <li><a href="../index.html#industries">Transportation</a></li>
          <li><a href="../index.html#industries">Fintech</a></li>
          <li><a href="../index.html#industries">Non-Profit</a></li>
          <li><a href="../index.html#industries">Consulting</a></li>
          <li><a href="../index.html#industries">Social &amp; Consumer Platforms</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul class="footer-contact-list">
          <li><i class="fas fa-envelope"></i><a href="mailto:contact@dastute.co.uk">contact@dastute.co.uk</a></li>
          <li><span>IN</span><a href="tel:+919940941959">+91 9940941959</a></li>
          <li><span>SG</span><a href="tel:+6587722877">+65-87722877</a></li>
          <li><span>UK</span><a href="tel:+447423021644">+44 7423021644</a></li>
        </ul>
        <div class="footer-offices">
          <div><i class="fas fa-map-marker-alt"></i> Coimbatore - Chennai - Bangalore</div>
          <div><i class="fas fa-map-marker-alt"></i> Singapore</div>
          <div><i class="fas fa-map-marker-alt"></i> 128 City Road, London, EC1V 2NX, UK</div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p>&copy; 2025&ndash;2026 Dastute Technologies Limited. All rights reserved. Registered in England &amp; Wales &mdash; Company No. 17019407.</p>
        <div class="footer-bottom-links">
          <a href="privacy-policy.html">Privacy Policy</a>
          <a href="terms-and-conditions.html">Terms and Conditions</a>
          <a href="cookie-policy.html">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>

<button class="back-to-top" id="backToTop"><i class="fas fa-chevron-up"></i></button>


`;
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { dangerouslySetInnerHTML: {
    __html: pageHtml
  } }) });
}
export {
  Page as component
};
