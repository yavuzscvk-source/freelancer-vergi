import Link from "next/link";
import { sayfa } from "../../lib/seo";

export const metadata = sayfa({
  baslik: "Tüm Hesaplama Araçları",
  aciklama: "Freelancer Vergi'deki tüm hesaplayıcılar: makbuz, gelir vergisi, KDV, genç girişimci, şahıs şirketi maliyeti, net gelir, saatlik ücret, Upwork ve Fiverr.",
  yol: "/hesaplayicilar",
});

const GRUPLAR = [
  {
    ad: "Freelancer temel",
    araclar: [
      { href: "/serbest-meslek-makbuzu", ad: "Serbest meslek makbuzu hesaplama", not: "Stopaj, KDV ve tahsil edilecek tutar." },
      { href: "/gelir-vergisi-hesaplama", ad: "Gelir vergisi hesaplama 2026", not: "Dilim dilim vergi ve mahsuplar." },
      { href: "/net-gelir-hesaplama", ad: "Net gelir hesaplama", not: "Vergi ve primden sonra cebinize kalan." },
      { href: "/saatlik-ucret-hesaplama", ad: "Saatlik ücret hesaplama", not: "Hedef gelirinize göre taban saat ücreti." },
      { href: "/kdv-hesaplama", ad: "KDV hesaplama", not: "KDV ekleme ve ayırma." },
  {
    ad: "İçerik üreticileri",
    araclar: [
      { href: "/youtube-vergi-hesaplama", ad: "YouTube gelir vergisi", not: "İstisna, %15 stopaj ve sınır kontrolü." },
      { href: "/instagram-vergi-hesaplama", ad: "Instagram, TikTok, Twitch", not: "Sosyal medya kazancının vergisi." },
    ],
  },

    ],
  },
  {
   ad: "Yurt dışı ve platformlar",
   araclar: [
      { href: "/hizmet-ihracati-vergi-indirimi", ad: "Hizmet ihracatı %100 indirim", not: "Yurt dışına yazılım, tasarım, mühendislik." },
      { href: "/upwork-vergi-hesaplama", ad: "Upwork vergi hesaplama", not: "Komisyon, kur ve vergi sonrası kazanç." },
      { href: "/fiverr-vergi-hesaplama", ad: "Fiverr vergi hesaplama", not: "%20 komisyon sonrası net kazanç." },
    ],
  },
  {
   ad: "Şirket ve maliyet",
   araclar: [
      { href: "/sahis-mi-limited-mi", ad: "Şahıs şirketi mi limited mi?", not: "İki şirket türünün vergi yükü." },
      { href: "/sahis-sirketi-maliyeti", ad: "Şahıs şirketi aylık maliyeti", not: "Bağ-Kur, müşavir ve sabit giderler." },
      { href: "/genc-girisimci-istisnasi", ad: "Genç girişimci istisnası", not: "400.000 TL istisna ve avantajınız." },
    ],
  },
];

export default function Hesaplayicilar() {
  return (
    <>
      <h1>Tüm hesaplama araçları</h1>
      <p className="lead">Serbest çalışanlar için 2026 oranlarıyla hazırlanmış ücretsiz hesaplayıcılar.</p>

      {GRUPLAR.map((g) => (
        <div key={g.ad}>
          <h2>{g.ad}</h2>
          <ul className="tools">
            {g.araclar.map((a) => (
              <li key={a.href}>
                <Link href={a.href}>
                  <strong>{a.ad}</strong>
                  <span>{a.not}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
