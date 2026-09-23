import { SITE_URL } from "../lib/site";

export default function sitemap() {
  return [
    { url: SITE_URL, lastModified: new Date() },
    { url: `${SITE_URL}/serbest-meslek-makbuzu`, lastModified: new Date() },
    { url: `${SITE_URL}/gelir-vergisi-hesaplama`, lastModified: new Date() },
    { url: `${SITE_URL}/genc-girisimci-istisnasi`, lastModified: new Date() },
    { url: `${SITE_URL}/sahis-mi-limited-mi`, lastModified: new Date() },
    { url: `${SITE_URL}/kdv-hesaplama`, lastModified: new Date() },
    { url: `${SITE_URL}/hizmet-ihracati-vergi-indirimi`, lastModified: new Date() },
    { url: `${SITE_URL}/hakkinda`, lastModified: new Date() },
    { url: `${SITE_URL}/iletisim`, lastModified: new Date() },
    { url: `${SITE_URL}/gizlilik-politikasi`, lastModified: new Date() },
    { url: `${SITE_URL}/sahis-sirketi-maliyeti`, lastModified: new Date() },
    { url: `${SITE_URL}/net-gelir-hesaplama`, lastModified: new Date() },
    { url: `${SITE_URL}/saatlik-ucret-hesaplama`, lastModified: new Date() },

  ];
}
