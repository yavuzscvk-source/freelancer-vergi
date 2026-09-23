import Link from "next/link";
import { sayfa } from "../lib/seo";

export const metadata = sayfa({
  baslik: "Freelancer Vergi Hesaplama Araçları 2026",
  aciklama: "Serbest çalışanlar için ücretsiz vergi hesaplayıcıları: serbest meslek makbuzu, gelir vergisi, genç girişimci istisnası, KDV, şahıs mı limited mi ve yurt dışı hizmet indirimi.",
  yol: "/",
  mutlak: true,
});

const ARACLAR = [
  { href: "/serbest-meslek-makbuzu", baslik: "Serbest meslek makbuzu hesaplama", aciklama: "Brüt veya net tutardan stopaj, KDV ve tahsil edilecek tutar." },
  { href: "/gelir-vergisi-hesaplama", baslik: "Gelir vergisi hesaplama 2026", aciklama: "Yıllık kazancınızın vergisi, dilim dilim ve stopaj mahsubuyla." },
  { href: "/genc-girisimci-istisnasi", baslik: "Genç girişimci istisnası 2026", aciklama: "400.000 TL istisnayla ödeyeceğiniz vergi ve avantajınız." },
  { href: "/sahis-mi-limited-mi", baslik: "Şahıs şirketi mi limited mi?", aciklama: "Kârınıza göre iki şirket türünün toplam vergi yükü." },
  { href: "/kdv-hesaplama", baslik: "KDV hesaplama", aciklama: "KDV ekleyin veya KDV dahil tutardan ayırın. %1, %10, %20." },
  { href: "/hizmet-ihracati-vergi-indirimi", baslik: "Yurt dışına hizmet: %100 vergi indirimi", aciklama: "2026'da yazılım, tasarım ve mühendislik ihracatında kazanç indirimi." },
  { href: "/sahis-sirketi-maliyeti", baslik: "Şahıs şirketi aylık maliyeti", aciklama: "Bağ-Kur primi, müşavir ve sabit giderlerle aylık gerçek maliyet." },
  { href: "/net-gelir-hesaplama", baslik: "Freelancer net gelir hesaplama", aciklama: "Vergi, Bağ-Kur ve giderlerden sonra cebinize ne kalıyor?" },
  { href: "/saatlik-ucret-hesaplama", baslik: "Freelancer saatlik ücret hesaplama", aciklama: "Hedef net gelirinize göre minimum saat ücretiniz." },
  { href: "/upwork-vergi-hesaplama", baslik: "Upwork vergi hesaplama", aciklama: "Komisyon, kur, Bağ-Kur ve vergiden sonra Upwork kazancınız." },
  { href: "/fiverr-vergi-hesaplama", baslik: "Fiverr vergi hesaplama", aciklama: "%20 komisyon ve vergilerden sonra Fiverr kazancınız." },
  { href: "/youtube-vergi-hesaplama", baslik: "YouTube gelir vergisi hesaplama", aciklama: "İçerik üreticiliği istisnası, %15 stopaj ve 5.300.000 TL sınırı." },
  { href: "/instagram-vergi-hesaplama", baslik: "Instagram, TikTok ve Kick vergisi", aciklama: "Sosyal medya kazancınız istisna kapsamında mı?" },

];


export default function Home() {
  return (
    <>
      <h1>Freelancer vergi hesaplama araçları</h1>
      <p className="lead">Serbest çalışanlar için 2026 oranlarıyla, sade ve ücretsiz hesaplayıcılar. Makbuzunuzu kesmeden önce elinize ne geçeceğini görün.</p>

      <div className="results">
        <strong>Örnek: 10.000 TL'lik serbest meslek makbuzu</strong>
        <div className="row"><span>Brüt tutar</span><span>10.000,00 TL</span></div>
        <div className="row"><span>Stopaj (%20)</span><span>-2.000,00 TL</span></div>
        <div className="row"><span>KDV (%20)</span><span>+2.000,00 TL</span></div>
        <div className="row total"><span>Tahsil edilecek</span><span>10.000,00 TL</span></div>
      </div>
      <Link href="/serbest-meslek-makbuzu" className="btn">Kendi tutarınızı hesaplayın</Link>

      <h2>Tüm araçlar</h2>
      <ul className="tools">
        {ARACLAR.map((a) => (
          <li key={a.href}>
            <Link href={a.href}>
              <strong>{a.baslik}</strong>
              <span>{a.aciklama}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p><Link href="/hesaplayicilar">Tüm hesaplama araçlarını görün</Link></p>
      <p><Link href="/rehber">Vergi rehberindeki soru-cevap yazılarına bakın</Link></p>

    </>
  );
}
