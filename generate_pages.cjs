const fs = require('fs');
const path = require('path');
const srcFile = path.join('e:/Test', 'src/routes/services/managed-it.tsx');
const content = fs.readFileSync(srcFile, 'utf8');

const pages = [
  {
    dest: 'src/routes/services/it-staffing.tsx',
    routePath: '/services/it-staffing',
    title: 'IT Staffing Agency London & Tech Recruitment UK | Dastute',
    desc: 'Expert IT staffing and tech recruitment agency in London and across the UK. Hire top talent for your software development and IT infrastructure needs.',
    label: '/ IT Staffing',
    h1: 'IT Staffing Agency London & Tech Recruitment UK',
    p: 'Scale your team rapidly with pre-vetted top-tier tech talent.',
    jsonLdName: 'IT Staffing & Recruitment'
  },
  {
    dest: 'src/routes/pricing.tsx',
    routePath: '/pricing',
    title: 'Managed IT Services Pricing UK | Dastute Technologies',
    desc: 'Transparent and predictable managed IT services pricing in the UK. Discover flexible plans tailored for small to enterprise businesses.',
    label: '/ Pricing',
    h1: 'Managed IT Services Pricing UK: Transparent & Predictable',
    p: 'No hidden fees, no surprise bills. Just straightforward managed IT pricing for your business.',
    jsonLdName: 'Pricing'
  },
  {
    dest: 'src/routes/industries/healthcare.tsx',
    routePath: '/industries/healthcare',
    title: 'Healthcare IT Solutions UK & Software Development | Dastute',
    desc: 'Custom healthcare software development company providing secure, compliant healthcare IT solutions across the UK.',
    label: '/ Healthcare IT',
    h1: 'Healthcare IT Solutions UK & Software Development Company',
    p: 'Empower patient care with secure, compliant, and scalable healthcare IT solutions.',
    jsonLdName: 'Healthcare IT Solutions'
  },
  {
    dest: 'src/routes/industries/fintech.tsx',
    routePath: '/industries/fintech',
    title: 'Fintech Software Development UK | Dastute Technologies',
    desc: 'Expert fintech software development company in the UK. We build secure, compliant, and innovative financial technology solutions.',
    label: '/ Fintech',
    h1: 'Fintech Software Development UK: Secure & Innovative',
    p: 'Transforming the financial sector with cutting-edge, secure software development.',
    jsonLdName: 'Fintech Software Development'
  }
];

fs.mkdirSync(path.join('e:/Test', 'src/routes/industries'), { recursive: true });

pages.forEach(page => {
  let newContent = content;
  newContent = newContent.replace(/\"\/services\/managed-it\"/g, `\"${page.routePath}\"`);
  newContent = newContent.replace(/Managed IT Services London & UK \| Dastute Technologies/g, page.title);
  newContent = newContent.replace(/24\/7 helpdesk, proactive monitoring, vCIO advisory, and guaranteed SLAs\. Flat-rate managed IT from Dastute Technologies across UK, India, and Singapore\./g, page.desc);
  newContent = newContent.replace(/\/ Managed IT/g, page.label);
  newContent = newContent.replace(/Proactive Managed IT Services London & UK\. We Keep Your Business Running 24\/7\./g, page.h1);
  newContent = newContent.replace(/From helpdesk support to virtual CIO advisory - our managed IT services give you a fully staffed IT department at a predictable flat-rate cost, with an average 3-minute response time and guaranteed SLAs\./g, page.p);
  newContent = newContent.replace(/name: \"Managed IT Services\"/g, `name: \"${page.jsonLdName}\"`);
  newContent = newContent.replace(/description:\s*\"[^\"]+\"/, `description: \"${page.desc}\"`);
  
  fs.writeFileSync(path.join('e:/Test', page.dest), newContent);
});

console.log('Pages created successfully.');
