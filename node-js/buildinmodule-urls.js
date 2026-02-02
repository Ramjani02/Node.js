//builtinmodule_url.js:
// Definition:
// The url module in Node.js provides utilities to parse, format, and resolve URLs. It helps you work with web addresses (URLs) easily.

// Eg: 1 (Parse URL)
const url = require('url');

const myURL = new URL('https://example.com:8080/path/page?name=Ajuu&age=25#top');

console.log("Full URL:", myURL.href);      // https://example.com:8080/path/page?name=Ajuu&age=25#top
console.log("Protocol:", myURL.protocol);  // https:
console.log("Host:", myURL.host);          // example.com:8080
console.log("Hostname:", myURL.hostname);  // example.com
console.log("Port:", myURL.port);          // 8080
console.log("Pathname:", myURL.pathname);  // /path/page
console.log("Search Params:", myURL.search); // ?name=Ajuu&age=25
console.log("Hash:", myURL.hash);          // #top

// Eg: 2 (Format a URL from parts)

const urlObj2 = {
  protocol: 'httpsss',
  hostname: 'examplesss.com',
  port: '8080',
  pathname: '/path/page',
  search: '?name=Ajuu&age=25',
  hash: '#top'
};

const formattedURL = url.format(urlObj2);
console.log("Formatted URL:", formattedURL);
// Output: httpsss://examplesss.com:8080/path/page?name=Ajuu&age=25#top


// Eg: 3 (Resolve relative URLs)

const baseURL = 'https://example.com/path/page/';
const relativeURL = 'newpage.html';

const resolvedURL = new URL(relativeURL, baseURL);
console.log("Resolved URL:", resolvedURL.href);

//✔ ../ is NOT compulsory.
//✔ Use it ONLY when you want to go one folder back
// Output: https://example.com/path/newpage.html