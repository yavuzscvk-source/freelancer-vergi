import { SITE_URL } from "../lib/site";

export default function sitemap() {
  return [
    { url: SITE_URL, lastModified: new Date() },
    { url: `${SITE_URL}/serbest-meslek-makbuzu`, lastModified: new Date() },
    { url: `${SITE_URL}/gelir-vergisi-hesaplama`, lastModified: new Date() },
    { url: `${SITE_URL}/genc-girisimci-istisnasi`, lastModified: new Date() },
    { url: `${SITE_URL}/sahis-mi-limited-mi`, lastModified: new Date() },
  ];
}
