import https from 'https';

const API_KEY = '1452bcaa58554d9e986e3b6f86773e32';
const HOST = 'dastute.co.uk';
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

async function fetchSitemap() {
  return new Promise((resolve, reject) => {
    https.get(SITEMAP_URL, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function submitToIndexNow(urls) {
  const payload = JSON.stringify({
    host: HOST,
    key: API_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls
  });

  const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/IndexNow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let responseBody = '';
      res.on('data', chunk => responseBody += chunk);
      res.on('end', () => {
        resolve({ statusCode: res.statusCode, body: responseBody });
      });
    });

    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

async function run() {
  try {
    console.log(`Fetching sitemap from ${SITEMAP_URL}...`);
    const sitemapXml = await fetchSitemap();
    
    // Simple regex to extract URLs from <loc> tags
    const locRegex = /<loc>(.*?)<\/loc>/g;
    const urls = [];
    let match;
    while ((match = locRegex.exec(sitemapXml)) !== null) {
      if (match[1].startsWith(`https://${HOST}`)) {
        urls.push(match[1]);
      }
    }

    console.log(`Found ${urls.length} URLs in sitemap.`);
    if (urls.length === 0) {
      console.log('No URLs found. Adding manual fallbacks.');
      urls.push(`https://${HOST}/`);
      urls.push(`https://${HOST}/about`);
      urls.push(`https://${HOST}/services`);
      urls.push(`https://${HOST}/contact`);
      urls.push(`https://${HOST}/project-estimator`);
      urls.push(`https://${HOST}/request-audit`);
    }

    console.log(`Submitting ${urls.length} URLs to IndexNow...`);
    const result = await submitToIndexNow(urls);
    
    console.log(`Response Code: ${result.statusCode}`);
    if (result.statusCode === 200 || result.statusCode === 202) {
      console.log('Successfully submitted to IndexNow!');
    } else {
      console.log(`Submission failed. Response: ${result.body}`);
    }

  } catch (error) {
    console.error('Error during submission:', error);
  }
}

run();
