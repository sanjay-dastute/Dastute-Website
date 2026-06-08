import type {
  BreadcrumbList,
  CollectionPage,
  FAQPage,
  ItemList,
  JobPosting,
  LocalBusiness,
  Organization,
  Service,
  WebPage,
  WithContext,
} from "schema-dts";

const BASE_URL = "https://dastute.co.uk";
const SITE_NAME = "Dastute Technologies Limited";

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface ServiceItem {
  name: string;
  description: string;
}

interface JobPostingItem {
  title: string;
  description: string;
  location: string;
  employmentType?: string;
}

interface StandardPageHeadInput {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  ogDescription?: string;
  ogImage?: string;
}

interface ServiceJsonLdInput {
  name: string;
  description: string;
  path: string;
  serviceType?: string[];
  areaServed?: string[];
}

interface LocalBusinessJsonLdInput {
  path: string;
  name?: string;
  description?: string;
  telephone?: string;
  email?: string;
  openingHours?: string;
  streetAddress?: string;
  city?: string;
  postalCode?: string;
  countryCode?: string;
  latitude?: number;
  longitude?: number;
}

interface CollectionPageJsonLdInput {
  path: string;
  name: string;
  description: string;
}

interface WebPageJsonLdInput {
  path: string;
  name: string;
  description: string;
}

const ORGANIZATION_SCHEMA: Organization = {
  "@type": "Organization",
  name: SITE_NAME,
  url: BASE_URL,
};

function absoluteUrl(path: string): string {
  return `${BASE_URL}${path}`;
}

export function buildStandardPageHead(input: StandardPageHeadInput) {
  const url = absoluteUrl(input.path);

  return {
    meta: [
      { title: input.title },
      { name: "description", content: input.description },
      input.keywords ? { name: "keywords", content: input.keywords } : null,
      { property: "og:title", content: input.title },
      {
        property: "og:description",
        content: input.ogDescription ?? input.description,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:site_name", content: SITE_NAME },
      input.ogImage ? { property: "og:image", content: input.ogImage } : null,
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: input.title },
      {
        name: "twitter:description",
        content: input.ogDescription ?? input.description,
      },
      input.ogImage ? { name: "twitter:image", content: input.ogImage } : null,
    ].filter(Boolean),
    links: [{ rel: "canonical", href: url }],
  };
}

export function buildServiceJsonLd(
  input: ServiceJsonLdInput,
): WithContext<Service> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    provider: ORGANIZATION_SCHEMA,
    areaServed: input.areaServed ?? ["United Kingdom", "India", "Singapore"],
    url: absoluteUrl(input.path),
    ...(input.serviceType ? { serviceType: input.serviceType } : {}),
  };
}

export function buildLocalBusinessJsonLd(
  input: LocalBusinessJsonLdInput,
): WithContext<LocalBusiness> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: input.name ?? SITE_NAME,
    description: input.description,
    url: absoluteUrl(input.path),
    telephone: input.telephone,
    email: input.email,
    openingHours: input.openingHours,
    address: {
      "@type": "PostalAddress",
      streetAddress: input.streetAddress,
      addressLocality: input.city,
      postalCode: input.postalCode,
      addressCountry: input.countryCode ?? "GB",
    },
    ...(input.latitude && input.longitude
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: input.latitude,
            longitude: input.longitude,
          },
        }
      : {}),
  };
}

export function buildCollectionPageJsonLd(
  input: CollectionPageJsonLdInput,
): WithContext<CollectionPage> {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
  };
}

export function buildWebPageJsonLd(
  input: WebPageJsonLdInput,
): WithContext<WebPage> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    inLanguage: "en-GB",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: BASE_URL,
    },
    publisher: ORGANIZATION_SCHEMA,
  };
}

export function buildBreadcrumbJsonLd(
  items: BreadcrumbItem[],
): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildFaqJsonLd(
  idPath: string,
  items: FaqItem[],
): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": absoluteUrl(idPath),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildServiceListJsonLd(
  pagePath: string,
  services: ServiceItem[],
): WithContext<ItemList> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: services.length,
    url: absoluteUrl(pagePath),
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: ORGANIZATION_SCHEMA,
      },
    })),
  };
}

export function buildJobPostingListJsonLd(
  pagePath: string,
  jobs: JobPostingItem[],
): WithContext<JobPosting>[] {
  return jobs.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: new Date().toISOString().slice(0, 10),
    hiringOrganization: {
      "@type": "Organization",
      name: "Dastute Technologies Limited",
      sameAs: BASE_URL,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location,
      },
    },
    employmentType: job.employmentType ?? "FULL_TIME",
    applicantLocationRequirements: {
      "@type": "Country",
      name: "UK, India, Singapore",
    },
    url: absoluteUrl(pagePath),
  }));
}
