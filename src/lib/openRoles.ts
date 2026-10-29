/** Open roles, shared by the Careers listing and the application form. */
export const OPEN_ROLES = [
  {
    id: "tech-01",
    practice: "Technology",
    title: "Senior Full-Stack Engineer",
    location: "Coimbatore / Chennai / Remote",
    type: "Full-time",
    description:
      "Design and implement production-grade web platforms and custom integrations. Experience with Next.js, Node.js, React and cloud databases.",
  },
  {
    id: "tech-02",
    practice: "Technology",
    title: "Senior Cybersecurity Specialist",
    location: "London / Remote (UK)",
    type: "Full-time",
    description:
      "Lead threat modeling, penetration testing, SIEM/SOC operations and Cyber Essentials / ISO 27001 readiness for global clients.",
  },
  {
    id: "tech-03",
    practice: "Technology",
    title: "Cloud & DevOps Architect",
    location: "London / Singapore / Remote",
    type: "Full-time",
    description:
      "Design secure, scalable hybrid-cloud architectures on AWS and GCP. Implement infrastructure-as-code and FinOps cost optimisations.",
  },
  {
    id: "mkt-01",
    practice: "Marketing",
    title: "Digital Marketing Specialist",
    location: "London / Remote",
    type: "Full-time",
    description:
      "Execute full-funnel digital campaigns including SEO, PPC, social media advertising and marketing automation for enterprise accounts.",
  },
];

/** URL-friendly role name, e.g. "Cloud & DevOps Architect" -> "cloud-devops-architect". */
export const roleSlug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
