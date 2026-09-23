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
  { href: "/rehber/e-smm-nasil-kesilir", ad: "e-Serbest meslek makbuzu nasıl kesilir?", not: "Tahsilat zamanı, stopaj ve sık yapılan hatalar." },
  { href: "/rehber/yazilimci-sahis-sirketi", ad: "Yazılımcı şahıs şirketi açmalı mı?", not: "Maliyet, avantajlar ve doğru zamanlama." },

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
