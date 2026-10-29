/** Open roles, shared by the Careers listing, the application form and the JobPosting schema. */

/** When the current roles were advertised and when the listings close (ISO dates). */
export const ROLES_POSTED = "2026-10-29";
export const ROLES_CLOSE = "2027-01-31";

export interface OpenRole {
  id: string;
  practice: string;
  title: string;
  /** Shown on the Careers page */
  location: string;
  type: string;
  description: string;
  /** Offices the role is based at (ISO 3166-1 alpha-2 country codes) */
  offices: { city: string; country: string }[];
  /** Countries remote applicants may work from; omit for office-only roles */
  remote?: string[];
  responsibilities: string[];
}

export const OPEN_ROLES: OpenRole[] = [
  {
    id: "tech-01",
    practice: "Technology",
    title: "Senior Full-Stack Engineer",
    location: "Coimbatore / Chennai / Remote",
    type: "Full-time",
    description:
      "Design and implement production-grade web platforms and custom integrations. Experience with Next.js, Node.js, React and cloud databases.",
    offices: [
      { city: "Coimbatore", country: "IN" },
      { city: "Chennai", country: "IN" },
    ],
    remote: ["IN"],
    responsibilities: [
      "Design, build and maintain production-grade web platforms for UK and international clients",
      "Develop custom integrations and APIs with Node.js",
      "Build modern front ends with React and Next.js",
      "Model and optimise cloud databases",
      "Review code and help raise engineering standards across the team",
    ],
  },
  {
    id: "tech-02",
    practice: "Technology",
    title: "Senior Cybersecurity Specialist",
    location: "London / Remote (UK)",
    type: "Full-time",
    description:
      "Lead threat modeling, penetration testing, SIEM/SOC operations and Cyber Essentials / ISO 27001 readiness for global clients.",
    offices: [{ city: "London", country: "GB" }],
    remote: ["GB"],
    responsibilities: [
      "Lead threat modelling and penetration testing engagements",
      "Run and improve SIEM and SOC operations",
      "Guide clients through Cyber Essentials and ISO 27001 readiness",
      "Report findings and remediation plans to technical and executive audiences",
    ],
  },
  {
    id: "tech-03",
    practice: "Technology",
    title: "Cloud & DevOps Architect",
    location: "London / Singapore / Remote",
    type: "Full-time",
    description:
      "Design secure, scalable hybrid-cloud architectures on AWS and GCP. Implement infrastructure-as-code and FinOps cost optimisations.",
    offices: [
      { city: "London", country: "GB" },
      { city: "Singapore", country: "SG" },
    ],
    remote: ["GB", "SG"],
    responsibilities: [
      "Design secure, scalable hybrid-cloud architectures on AWS and GCP",
      "Implement and maintain infrastructure-as-code and CI/CD pipelines",
      "Deliver FinOps reviews and cloud cost optimisations",
      "Advise clients on migration strategy and resilience",
    ],
  },
  {
    id: "mkt-01",
    practice: "Marketing",
    title: "Digital Marketing Specialist",
    location: "London / Remote",
    type: "Full-time",
    description:
      "Execute full-funnel digital campaigns including SEO, PPC, social media advertising and marketing automation for enterprise accounts.",
    offices: [{ city: "London", country: "GB" }],
    remote: ["GB"],
    responsibilities: [
      "Plan and run full-funnel campaigns for enterprise accounts",
      "Manage SEO and PPC programmes",
      "Run social media advertising",
      "Build and optimise marketing automation journeys",
      "Report on performance and recommend improvements",
    ],
  },
];

/** URL-friendly role name, e.g. "Cloud & DevOps Architect" -> "cloud-devops-architect". */
export const roleSlug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
