import Link from "next/link";
import { VERGI } from "../lib/vergi";

const ARACLAR = {
  makbuz: { href: "/serbest-meslek-makbuzu", ad: "Serbest meslek makbuzu hesaplama" },
  gelir: { href: "/gelir-vergisi-hesaplama", ad: "Gelir vergisi hesaplama 2026" },
  genc: { href: "/genc-girisimci-istisnasi", ad: "Genç girişimci istisnası 2026" },
  sirket: { href: "/sahis-mi-limited-mi", ad: "Şahıs şirketi mi limited mi?" },
  kdv: { href: "/kdv-hesaplama", ad: "KDV hesaplama" },
  ihracat: { href: "/hizmet-ihracati-vergi-indirimi", ad: "Yurt dışına hizmet: %100 vergi indirimi" },
  maliyet: { href: "/sahis-sirketi-maliyeti", ad: "Şahıs şirketi aylık maliyeti" },
  net: { href: "/net-gelir-hesaplama", ad: "Freelancer net gelir hesaplama" },

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

};

export default function Kaynaklar({ sayfa }) {
  const liste = KAYNAKLAR[sayfa] || [];
  const digerleri = Object.keys(ARACLAR).filter((k) => k !== sayfa).map((k) => ARACLAR[k]);

  return (
    <>
      <h2>Bunlar da işinize yarayabilir</h2>
      <ul className="tools">
        {digerleri.map((a) => (
          <li key={a.href}>
            <Link href={a.href}><strong>{a.ad}</strong></Link>
          </li>
        ))}
      </ul>

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
