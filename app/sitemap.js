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
    { url: `${SITE_URL}/upwork-vergi-hesaplama`, lastModified: new Date() },
    { url: `${SITE_URL}/fiverr-vergi-hesaplama`, lastModified: new Date() },
    { url: `${SITE_URL}/hesaplayicilar`, lastModified: new Date() },
    { url: `${SITE_URL}/kullanim-kosullari`, lastModified: new Date() },
    { url: `${SITE_URL}/sorumluluk-reddi`, lastModified: new Date() },
    { url: `${SITE_URL}/cerez-politikasi`, lastModified: new Date() },
    { url: `${SITE_URL}/youtube-vergi-hesaplama`, lastModified: new Date() },
    { url: `${SITE_URL}/instagram-vergi-hesaplama`, lastModified: new Date() },
    { url: `${SITE_URL}/rehber`, lastModified: new Date() },
    { url: `${SITE_URL}/rehber/freelancer-vergi-oder-mi`, lastModified: new Date() },
    { url: `${SITE_URL}/rehber/fatura-mi-makbuz-mu`, lastModified: new Date() },
    { url: `${SITE_URL}/rehber/yurt-disindan-gelen-para`, lastModified: new Date() },

  ];
}
