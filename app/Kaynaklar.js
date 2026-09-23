import Link from "next/link";
import { VERGI } from "../lib/vergi";
import { SITE_URL } from "../lib/site";

const ARACLAR = {
  makbuz: { href: "/serbest-meslek-makbuzu", ad: "Serbest meslek makbuzu hesaplama" },
  gelir: { href: "/gelir-vergisi-hesaplama", ad: "Gelir vergisi hesaplama 2026" },
  genc: { href: "/genc-girisimci-istisnasi", ad: "Genç girişimci istisnası 2026" },
  sirket: { href: "/sahis-mi-limited-mi", ad: "Şahıs şirketi mi limited mi?" },
  kdv: { href: "/kdv-hesaplama", ad: "KDV hesaplama" },
  ihracat: { href: "/hizmet-ihracati-vergi-indirimi", ad: "Yurt dışına hizmet: %100 vergi indirimi" },
  maliyet: { href: "/sahis-sirketi-maliyeti", ad: "Şahıs şirketi aylık maliyeti" },
  net: { href: "/net-gelir-hesaplama", ad: "Freelancer net gelir hesaplama" },
  saatlik: { href: "/saatlik-ucret-hesaplama", ad: "Freelancer saatlik ücret hesaplama" },
  upwork: { href: "/upwork-vergi-hesaplama", ad: "Upwork vergi hesaplama" },
  fiverr: { href: "/fiverr-vergi-hesaplama", ad: "Fiverr vergi hesaplama" },
  youtube: { href: "/youtube-vergi-hesaplama", ad: "YouTube gelir vergisi hesaplama" },
  instagram: { href: "/instagram-vergi-hesaplama", ad: "Instagram, TikTok ve Kick vergisi" },
};

const REHBERLER = {
  rehberTemel: { href: "/rehber/freelancer-vergi-oder-mi", ad: "Freelancer vergi öder mi, şirket kurmak zorunda mı?" },
  rehberBelge: { href: "/rehber/fatura-mi-makbuz-mu", ad: "Freelancer fatura mı makbuz mu keser?" },
  rehberYurtdisi: { href: "/rehber/yurt-disindan-gelen-para", ad: "Yurt dışından para gelirse vergi ödenir mi?" },
};

const GVK = { ad: "193 sayılı Gelir Vergisi Kanunu (GİB)", url: "https://www.gib.gov.tr/mevzuat/kanun/433" };
const TARIFE = { ad: "2026 gelir vergisi tarifesi (GİB)", url: "https://cdn.gib.gov.tr/api/gibportal-file/file/getFileResources?objectKey=arsiv%2Fyardim-kaynaklar%2Fyararli-bilgiler%2Fgelir-vergisi-tarifeleri%2Fgelir-vergisi-tarifesi-2026.pdf" };
const GIB = { ad: "Gelir İdaresi Başkanlığı", url: "https://www.gib.gov.tr" };
const KARAR = { ad: "11257 sayılı Cumhurbaşkanı Kararı (30/4/2026 tarihli Resmî Gazete)", url: "https://www.resmigazete.gov.tr/eskiler/2026/04/20260430-1.pdf" };
const MEVZUAT = { ad: "Gelir Vergisi Kanunu güncel metni (mevzuat.gov.tr)", url: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=193&MevzuatTur=1&MevzuatTertip=4" };
const SGK = { ad: "Sosyal Güvenlik Kurumu", url: "https://www.sgk.gov.tr" };

const KAYNAKLAR = {
  makbuz: [GVK, GIB],
  gelir: [GVK, TARIFE],
  genc: [GVK, MEVZUAT],
  sirket: [GVK, TARIFE],
  kdv: [GIB],
  ihracat: [KARAR, GVK, MEVZUAT],
  maliyet: [SGK, GVK],
  net: [GVK, SGK, TARIFE],
  saatlik: [GVK, SGK],
  upwork: [KARAR, GVK, SGK],
  fiverr: [KARAR, GVK, SGK],
  youtube: [GVK, MEVZUAT, TARIFE],
  instagram: [GVK, MEVZUAT],
  rehberTemel: [GVK, MEVZUAT, TARIFE],
  rehberBelge: [GVK, GIB],
  rehberYurtdisi: [KARAR, GVK, MEVZUAT],
};

function schema(sayfa) {
  const rehberMi = Boolean(REHBERLER[sayfa]);
  const bilgi = REHBERLER[sayfa] || ARACLAR[sayfa];
  if (!bilgi) return null;

  const url = SITE_URL + bilgi.href;
  const ana = rehberMi
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: bilgi.ad,
        url,
        inLanguage: "tr-TR",
        dateModified: VERGI.sonGuncellemeTarihi,
        publisher: { "@type": "Organization", name: "Freelancer Vergi", url: SITE_URL },
      }
    : {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: bilgi.ad,
        url,
        inLanguage: "tr-TR",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
      };

  const yol = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana sayfa", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: rehberMi ? "Vergi rehberi" : "Hesaplayıcılar",
        item: SITE_URL + (rehberMi ? "/rehber" : "/hesaplayicilar"),
      },
      { "@type": "ListItem", position: 3, name: bilgi.ad, item: url },
    ],
  };

  return [ana, yol];
}

export default function Kaynaklar({ sayfa }) {
  const liste = KAYNAKLAR[sayfa] || [];
  const veri = schema(sayfa);
  const digerleri = Object.keys(ARACLAR)
    .filter((k) => k !== sayfa)
    .map((k) => ARACLAR[k])
    .slice(0, 6);

  return (
    <>
      {veri && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(veri) }}
        />
      )}

      <h2>Bunlar da işinize yarayabilir</h2>
      <ul className="tools">
        {digerleri.map((a) => (
          <li key={a.href}>
            <Link href={a.href}><strong>{a.ad}</strong></Link>
          </li>
        ))}
      </ul>
      <p className="muted"><Link href="/hesaplayicilar">Tüm araçlar</Link> · <Link href="/rehber">Vergi rehberi</Link></p>

      <div className="card">
        <strong>Kaynaklar</strong>
        <ul style={{ margin: "8px 0 0", paddingLeft: 18 }}>
          {liste.map((k) => (
            <li key={k.url}>
              <a href={k.url} target="_blank" rel="noopener noreferrer">{k.ad}</a>
            </li>
          ))}
        </ul>
        <p className="muted" style={{ marginTop: 14, marginBottom: 0 }}>
          {VERGI.yil} yılı mevzuatına göre hazırlanmıştır. Son güncelleme: {VERGI.sonGuncelleme}.
          Hesaplamalar bilgilendirme amaçlı tahmini sonuçlardır; kişisel durumunuz, giderleriniz,
          mükellefiyet türünüz ve istisnalar sonucu değiştirebilir. Bu site mali müşavirlik veya
          hukuki danışmanlık hizmeti sunmamaktadır.
        </p>
      </div>
    </>
  );
}
