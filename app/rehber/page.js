import Link from "next/link";
import { sayfa } from "../../lib/seo";

export const metadata = sayfa({
  baslik: "Freelancer Vergi Rehberi",
  aciklama: "Serbest çalışanların en çok sorduğu vergi sorularına sade cevaplar: şirket kurmak gerekir mi, fatura mı makbuz mu, yurt dışından gelen para nasıl vergilendirilir?",
  yol: "/rehber",
});

const YAZILAR = [
  { href: "/rehber/freelancer-vergi-oder-mi", ad: "Freelancer vergi öder mi, şirket kurmak zorunda mı?", not: "Arızi kazanç, süreklilik ölçütü ve mükellefiyet." },
  { href: "/rehber/fatura-mi-makbuz-mu", ad: "Freelancer fatura mı makbuz mu keser?", not: "Serbest meslek makbuzu ile fatura arasındaki fark." },
  { href: "/rehber/yurt-disindan-gelen-para", ad: "Yurt dışından para gelirse vergi ödenir mi?", not: "Dünya geliri, hizmet ihracatı ve KDV istisnası." },
  { href: "/rehber/gecici-vergi-nedir", ad: "Geçici vergi nedir, ne zaman ödenir?", not: "Dönemler, oran ve yıllık beyannamede mahsup." },
  { href: "/rehber/e-smm-nasil-kesilir", ad: "e-Serbest meslek makbuzu nasıl kesilir?", not: "Başvuru, tahsilat zamanı, stopaj ve sık yapılan hatalar." },
  { href: "/rehber/yazilimci-sahis-sirketi", ad: "Yazılımcı şahıs şirketi açmalı mı?", not: "Maliyet, avantajlar ve doğru zamanlama." },
  { href: "/rehber/hesaplanan-kdv-indirilecek-kdv", ad: "Hesaplanan KDV, indirilecek KDV ve ödenecek KDV nedir?", not: "KDV'nin beyan mantığı, örnek hesap ve devreden KDV." },
  { href: "/rehber/upwork-50-bin-dolar-vergi", ad: "Upwork'ten 50.000 dolar kazanırsam ne kadar vergi öderim?", not: "Adım adım örnek hesap ve iki farklı senaryo." },
  { href: "/rehber/fiverr-2000-dolar-vergi", ad: "Fiverr'dan ayda 2.000 dolar kazanırsam ne kadar vergi öderim?", not: "%20 komisyon sonrası adım adım hesap." },
  { href: "/rehber/youtube-1-milyon-tl-vergi", ad: "YouTube'dan yılda 1,2 milyon TL kazanırsam?", not: "İçerik üreticiliği istisnası ve sınır aşılırsa ne olur?" },
  { href: "/rehber/yurt-ici-musteri-100-bin-tl", ad: "Yurt içi müşteriye 100.000 TL'lik iş yaptım, elime ne geçer?", not: "Stopaj, KDV ve yıl sonu mahsubu." },
  { href: "/rehber/hangi-giderler-yazilabilir", ad: "Freelancer hangi harcamaları gider yazabilir?", not: "Gider yazma kuralları ve belgelendirme." },
];

export default function Rehber() {
  return (
    <>
      <h1>Freelancer vergi rehberi</h1>
      <p className="lead">Serbest çalışanların en sık sorduğu vergi sorularına, mevzuata dayalı ve sade cevaplar.</p>

      <ul className="tools">
        {YAZILAR.map((y) => (
          <li key={y.href}>
            <Link href={y.href}>
              <strong>{y.ad}</strong>
              <span>{y.not}</span>
            </Link>
          </li>
        ))}
      </ul>

      <p className="muted">Rehber yeni yazılarla genişletiliyor. Hesaplama yapmak için <Link href="/hesaplayicilar">araçlar sayfasına</Link> göz atabilirsiniz.</p>
    </>
  );
}
