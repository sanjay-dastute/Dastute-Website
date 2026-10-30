/**
 * Digital marketing programme content. Prices are { in, intl }: rupees for India,
 * pounds for the UK and everywhere else (see lib/region.ts). Shared by the Marketing,
 * Marketing Services and Pricing pages so figures stay identical everywhere.
 */

import type { Localised } from "@/lib/region";

/** Starting project fee, used in the hero, "Ideal for" bar and fee card. */
export const FROM_PRICE: Localised = { in: "₹25,000", intl: "£250" };

export const HEADLINE_STATS: { value: Localised; label: string }[] = [
  { value: FROM_PRICE, label: "projects start from" },
  { value: "15+", label: "services under one roof" },
  { value: "1000+", label: "leads delivered for clients" },
];

export const PROOF = [
  { value: "1.1M+", label: "Views generated", note: "Meta ads + organic reels", hue: "#ef4444" },
  { value: "1000+", label: "Leads & enquiries", note: "Meta + Google Ads", hue: "#3b82f6" },
  { value: "₹50", label: "Best cost per lead", note: "Education client · Meta lead ads", hue: "#14b8a6" },
  { value: "10.0%", label: "Google Ads CTR", note: "Hospitality client · ₹2.95 per click", hue: "#6366f1" },
  { value: "56×", label: "Follower growth", note: "Retail client: 50 → 2,849", hue: "#ec4899" },
  { value: "< ₹10", label: "Per WhatsApp chat", note: "Retail client campaigns", hue: "#f59e0b" },
];

export const INDUSTRIES = [
  { name: "Education", detail: "Study-abroad consultancies · education finance" },
  { name: "Hospitality", detail: "Resorts · hotels · serviced apartments" },
  { name: "Retail & Jewellery", detail: "Jewellery showrooms · home décor · fashion" },
  { name: "FinTech & Healthcare", detail: "Payments · disability support · Ayurveda clinics" },
];

export const OBJECTIVES = [
  { title: "Visibility", text: "Be found on Google, Instagram, Facebook and YouTube by people already searching for what you offer." },
  { title: "Engagement", text: "Build an audience that watches, follows and trusts your brand through consistent, quality content." },
  { title: "Leads & sales", text: "Turn attention into calls, WhatsApp chats, form leads, store visits and bookings." },
  { title: "Measurable ROI", text: { in: "Track every rupee of ad spend against leads and cost per lead, reported monthly.", intl: "Track every penny of ad spend against leads and cost per lead, reported monthly." } },
];

export const FUNNEL = [
  { stage: "Awareness", tools: "Reels · Ads · SEO" },
  { stage: "Interest", tools: "Content · Retargeting" },
  { stage: "Enquiry", tools: "Lead forms · WhatsApp · Calls" },
  { stage: "Customer", tools: "Follow-up · Reviews · Repeat" },
];

export const IDEAL_FOR =
  "Schools & consultancies · hotels & stays · jewellery & retail stores · clinics · real estate · D2C brands · local service businesses";

export const SERVICES_16 = [
  { code: "SM", name: "Social Media Management", text: "Instagram, Facebook, LinkedIn, YouTube" },
  { code: "CR", name: "Creative & Content Design", text: "Posts, carousels, festive and offer creatives" },
  { code: "VD", name: "Reels & Video Production", text: "Shoot, script, edit, motion graphics" },
  { code: "MA", name: "Meta Ads", text: "Facebook & Instagram lead, sales and WhatsApp ads" },
  { code: "GA", name: "Google Ads", text: "Search, Display, YouTube and Performance Max" },
  { code: "SE", name: "SEO", text: "On-page, technical, local and off-page SEO" },
  { code: "AI", name: "AEO & GEO", text: "Visibility in AI answers: ChatGPT, Gemini, Google AI" },
  { code: "GB", name: "Google Business Profile", text: "Local listing, posts, reviews, map ranking" },
  { code: "WA", name: "WhatsApp Marketing", text: "Click-to-WhatsApp ads, broadcasts, catalogue" },
  { code: "EM", name: "Email & SMS Marketing", text: "Newsletters, offers and follow-up sequences" },
  { code: "LP", name: "Website & Landing Pages", text: "Lead-focused pages, speed, tracking set-up" },
  { code: "IN", name: "Influencer Marketing", text: "Local creators, collaborations, UGC" },
  { code: "OR", name: "Online Reputation", text: "Review management and response" },
  { code: "BR", name: "Branding Support", text: "Logo refresh, brand kit, print & billboards" },
  { code: "AN", name: "Analytics & Reporting", text: "Pixel, GA4, conversion tracking, monthly reports" },
  { code: "ST", name: "Strategy & Consulting", text: "Market research, competitor study, planning" },
];

export const SCOPE = [
  {
    title: "Content, social media & creative",
    groups: [
      {
        code: "SM",
        name: "Social Media Management",
        items: [
          "Monthly content calendar, approved before posting",
          "Posting and scheduling on all agreed platforms",
          "Captions, hashtags and Tamil/English copy",
          "Profile optimisation: bio, highlights, links",
          "Comment and DM monitoring with your team",
          "Festival, offer and topical posts",
        ],
      },
      {
        code: "CR",
        name: "Creative & Content Design",
        items: [
          "Static posts, carousels and stories",
          "Ad creatives in multiple sizes for testing",
          "Offer banners, posters and flyers",
          "Brand-consistent templates",
          "Creative refresh when ads fatigue",
          "Source files shared on request",
        ],
      },
      {
        code: "VD",
        name: "Reels & Video Production",
        items: [
          "Reel concepts and scripts",
          { in: "On-location shoot (Coimbatore; outstation extra)", intl: "On-location shoots" },
          "Editing, subtitles, music, motion graphics",
          "Testimonial and founder-led videos",
          "Product demos and walkthroughs",
          "YouTube Shorts adaptation",
        ],
      },
    ],
  },
  {
    title: "Paid advertising & lead generation",
    groups: [
      {
        code: "MA",
        name: "Meta Ads (Facebook & Instagram)",
        items: [
          "Ad account and Business Manager set-up",
          "Pixel / Conversions API installation",
          "Audience research and targeting",
          "Lead form, WhatsApp, traffic and sales campaigns",
          "A/B testing of creatives and audiences",
          "Daily monitoring and budget optimisation",
          "Retargeting of visitors and engagers",
        ],
      },
      {
        code: "GA",
        name: "Google Ads",
        items: [
          "Keyword research and campaign structure",
          "Search ads with call and location assets",
          "Display, YouTube and Performance Max",
          "Conversion tracking via GA4 / Tag Manager",
          "Negative keyword and bid management",
          "Landing page recommendations",
        ],
      },
      {
        code: "WA",
        name: "WhatsApp, Email & SMS",
        items: [
          "Click-to-WhatsApp ad campaigns",
          "WhatsApp Business profile and catalogue set-up",
          "Broadcast message templates",
          "Email newsletters and offer campaigns",
          "Lead follow-up sequences",
          "Lead sheet / CRM hand-off to your sales team",
        ],
      },
    ],
  },
  {
    title: "Search, website, reputation & reporting",
    groups: [
      {
        code: "SE",
        name: "SEO, AEO & GEO",
        items: [
          "Website SEO audit and keyword plan",
          "On-page optimisation of key pages",
          "SEO blog articles each month",
          "Local SEO and citations",
          "Backlinks and off-page activity",
          "FAQ and schema for AI-search visibility",
        ],
      },
      {
        code: "GB",
        name: "Google Business Profile & Reputation",
        items: [
          "Profile set-up and verification support",
          "Weekly posts, photos and offers",
          "Review requests and response drafting",
          "Q&A and listing accuracy checks",
          "Map-ranking improvement for local searches",
        ],
      },
      {
        code: "AN",
        name: "Analytics, Reporting & Strategy",
        items: [
          "Monthly performance report with charts",
          "Leads, cost per lead, reach and ROI tracking",
          "Monthly review call with recommendations",
          "Competitor and market tracking",
          "Quarterly strategy refresh",
          "Dedicated account manager",
        ],
      },
    ],
  },
];

export const LAUNCH_PLAN = [
  { when: "Week 1", title: "Discover & set up", text: "Brand study, competitor research, account access, pixel and tracking set-up." },
  { when: "Week 2", title: "Plan & create", text: "Strategy, content calendar, first batch of creatives and reels for approval." },
  { when: "Weeks 3–4", title: "Launch & test", text: "Content goes live; ads launch with small test budgets on 2–3 creatives." },
  { when: "Month 2", title: "Optimise & scale", text: "Shift budget to winning ads, refine audiences, add retargeting." },
  { when: "Monthly", title: "Report & improve", text: "Performance report, review call and next month's plan." },
];

export const PROMISES = [
  { title: "One point of contact", text: "A dedicated account manager coordinates design, video, ads and SEO for you." },
  { title: "Approval before posting", text: "Every calendar, creative and ad is shared with you for approval first." },
  { title: "Full transparency", text: { in: "Ad accounts stay in your name. You can see every rupee of spend at any time.", intl: "Ad accounts stay in your name. You can see every penny of spend at any time." } },
];

export const PLANS = [
  { name: "Starter", price: { in: "₹25,000", intl: "£250" }, unit: "per project / month · starting price" },
  { name: "Growth", price: { in: "₹40,000", intl: "£400" }, unit: "per project / month · starting price", popular: true },
  { name: "Premium", price: "Custom" as Localised, unit: "quoted on scope" },
];

/** Plan comparison rows: [feature, starter, growth, premium]. true = included, false = not included. */
export const PLAN_ROWS: [string, string | boolean, string | boolean, string | boolean][] = [
  ["Social media management", "2 platforms", "3–4 platforms", "All platforms"],
  ["Creative posts & stories / month", "12", "20", "30+"],
  ["Reels / videos / month", "4", "8", "12+"],
  ["Meta Ads management", true, true, true],
  ["Google Ads management", false, true, true],
  ["WhatsApp marketing set-up", true, true, true],
  ["Google Business Profile", true, true, true],
  ["SEO / AEO / GEO", "Basic on-page", "On-page + 2 blogs", "Full SEO + 4 blogs"],
  ["Email / SMS campaigns", false, true, true],
  ["Landing page", false, "1 page", "As required"],
  ["Influencer coordination", false, false, true],
  ["Reporting", "Monthly report", "Report + review call", "Report + fortnightly call"],
];

export const PLAN_NOTE =
  "Fees cover our services only. Paid promotion (ad spend) on Meta, Google and other platforms is paid by the client directly and is not included. Taxes as applicable. Final price depends on the scope agreed for your project.";

export const AD_BUDGET = [
  { goal: "Brand awareness", detail: "& reach", budget: { in: "₹5,000 – ₹10,000", intl: "£50 – £100" } },
  { goal: "Lead generation", detail: "(forms, WhatsApp)", budget: { in: "₹10,000 – ₹25,000", intl: "£100 – £250" } },
  { goal: "Google Search", detail: "(calls, bookings)", budget: { in: "₹10,000 – ₹30,000", intl: "£100 – £300" } },
  { goal: "Full-funnel", detail: "(Meta + Google)", budget: { in: "₹25,000+", intl: "£250+" } },
];

export const AD_HOW_IT_WORKS: Localised[] = [
  "Ad accounts are created or kept in your business name",
  "You add your own card or prepaid balance to Meta / Google",
  { in: "Platforms bill you directly and issue GST invoices to you", intl: "Platforms bill you directly and issue tax invoices to you" },
  "We plan, run and optimise the budget, and never mark it up",
  "You approve the monthly ad budget before campaigns go live",
];

export const AD_REFERENCE: Localised = {
  in: "₹10,896 of Meta ad spend brought one of our education clients 217 leads (₹50 each). Results vary by industry, offer and location.",
  intl: "₹10,896 (about £100) of Meta ad spend brought one of our education clients in India 217 leads (₹50, under £0.50, each). Results vary by industry, offer and location.",
};

export const SCOPE_CLARITY = {
  included: [
    "Strategy and monthly content calendar",
    "Creative design and copywriting",
    "Reels editing and agreed shoots",
    "Ad campaign set-up, management and optimisation",
    "Tracking set-up (Pixel, GA4, conversions)",
    "SEO, Google Business Profile and listings",
    "Monthly report and review call",
  ],
  excluded: [
    "Paid promotion / ad spend on any platform",
    "Influencer and celebrity fees",
    "Paid stock images, music or premium tools",
    "Outstation shoots, travel and models",
    "Printing of flyers, banners and billboards",
    "Website development (separate quote)",
    "Paid PR or media placements",
  ],
  fromYou: [
    "Admin access to social pages and ad accounts",
    "Logo, brand guidelines and product details",
    "Timely approvals (within 48 hours)",
    "Availability for shoots and testimonials",
    "Current offers, prices and updates",
    "Quick follow-up on leads we generate",
    "A single point of contact on your side",
  ],
};

export const TERMS = [
  { title: "Engagement", text: "Project basis, with a minimum commitment of 3 months so campaigns have time to learn and improve." },
  { title: "Payment", text: "50% advance to start the project; balance before the start of the next cycle. Taxes as applicable." },
  { title: "Ad spend", text: "Paid by the client directly to the advertising platforms. Not part of our fee." },
  { title: "Revisions", text: "Up to 2 rounds of revisions per creative. Further changes are treated as new work." },
  { title: "Ownership", text: "Final creatives and ad accounts belong to the client once payments are cleared." },
  { title: "Results", text: "We commit to best practice and full transparency; leads and sales depend on market, offer and budget, so no fixed outcome is guaranteed." },
  { title: "Notice", text: "Either party may end the engagement with 30 days' written notice after the minimum period." },
  { title: "Validity", text: "Quoted prices are valid for 30 days from the date of issue." },
];

export const NEXT_STEPS = [
  "Confirm your package & scope",
  "Share access & brand assets",
  "Kick-off call: live within 2 weeks",
];
