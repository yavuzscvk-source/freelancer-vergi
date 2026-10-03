import { SITE_URL } from "../lib/site";

const YOLLAR = [
  "",
  "/hesaplayicilar",
  "/serbest-meslek-makbuzu",
  "/gelir-vergisi-hesaplama",
  "/genc-girisimci-istisnasi",
  "/sahis-mi-limited-mi",
  "/kdv-hesaplama",
  "/kdv-tevkifati-hesaplama",
  "/doviz-fatura-tl-karsiligi",
  "/hizmet-ihracati-vergi-indirimi",
  "/sahis-sirketi-maliyeti",
  "/net-gelir-hesaplama",
  "/saatlik-ucret-hesaplama",
  "/upwork-vergi-hesaplama",
  "/fiverr-vergi-hesaplama",
  "/youtube-vergi-hesaplama",
  "/instagram-vergi-hesaplama",
  "/rehber",
  "/rehber/freelancer-vergi-oder-mi",
  "/rehber/fatura-mi-makbuz-mu",
  "/rehber/yurt-disindan-gelen-para",
  "/rehber/gecici-vergi-nedir",
  "/rehber/e-smm-nasil-kesilir",
  "/rehber/yazilimci-sahis-sirketi",
  "/rehber/upwork-50-bin-dolar-vergi",
  "/rehber/fiverr-2000-dolar-vergi",
  "/rehber/youtube-1-milyon-tl-vergi",
  "/rehber/yurt-ici-musteri-100-bin-tl",
  "/rehber/hangi-giderler-yazilabilir",
  "/rehber/hesaplanan-kdv-indirilecek-kdv",
  "/hakkinda",
  "/iletisim",
  "/gizlilik-politikasi",
  "/cerez-politikasi",
  "/kullanim-kosullari",
  "/sorumluluk-reddi",
];

export default function sitemap() {
  return YOLLAR.map((yol) => ({
    url: `${SITE_URL}${yol}`,
    lastModified: new Date(),
  }));
}
