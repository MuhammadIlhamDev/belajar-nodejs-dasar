import { URL } from "url";

const urlObject = new URL("https://www.google.com/search?q=ilham");

console.info(urlObject.toString());
console.info(urlObject.href);
console.info(urlObject.host);
console.info(urlObject.protocol);
console.info(urlObject.pathname);
console.info(urlObject.search);
console.info(urlObject.searchParams);
