import Link from "next/link";
import Hesaplayici from "./Hesaplayici";
import Kaynaklar from "../Kaynaklar";
import { sayfa } from "../../lib/seo";
import { VERGI } from "../../lib/vergi";

const B = VERGI.bagkur;
const sayi = (n) => n.toLocaleString("tr-TR");

export const metadata = sayfa({
  baslik: "Şahıs Şirketi Aylık Maliyet Hesaplama 2026",
  aciklama: "Şahıs şirketinin aylık sabit maliyetini hesaplayın: 2026 Bağ-Kur primi, 5 puan indirimi, mali müşavir ücreti ve diğer giderler.",
  yol: "/sahis-sirketi-maliyeti",
});

export default function SahisMaliyet() {
  return (
    <>
      <h1>Şahıs şirketi aylık maliyeti 2026</h1>
      <p>Şahıs şirketi açtığınızda kazancınızdan bağımsız olarak her ay ödediğiniz sabit giderleri hesaplayın.</p>

      <Hesaplayici />

      <h2>2026 Bağ-Kur primi ne kadar?</h2>
      <p>Bağ-Kur (4/b) primi, beyan ettiğiniz prime esas kazanç ile prim oranının çarpımıdır. 2026 için alt sınır brüt asgari ücret olan {sayi(B.altSinir)} TL, üst sınır bunun dokuz katı olan {sayi(B.ustSinir)} TL'dir. 7566 sayılı Kanun ile malullük, yaşlılık ve ölüm sigortası prim oranı bir puan artmış, toplam oran %35,75'e yükselmiştir. Alt sınırdan beyanda aylık prim 11.808,23 TL olur.</p>

      <h2>5 puanlık indirim nedir?</h2>
      <p>Primlerini yasal süresinde ödeyen ve kendi sigortalılığından kaynaklanan borcu bulunmayan sigortalılarda 5 puanlık kısım Hazine tarafından karşılanır. Bu durumda oran %30,75'e iner ve alt sınırdan aylık prim 10.156,73 TL olur; aradaki fark 1.651,50 TL'dir. Geç ödeme yapıldığında indirim o ay için kaybedilir.</p>

      <h2>Mali müşavir ücreti ne kadar olur?</h2>
      <p>Mali müşavir ücretleri şehre, işin hacmine ve belge sayısına göre değişir; asgari ücret tarifesi her yıl güncellenir. Bu yüzden hesaplayıcıda kendi teklifinizi girmeniz gerekir. Birkaç müşavirden fiyat almanız faydalı olur.</p>

      <h2>Bağ-Kur primi vergiden düşülür mü?</h2>
      <p>Ödenmiş Bağ-Kur primleri, yıllık beyannamede gelir vergisi matrahından indirilebilir. Yani prim hem bir maliyet hem de vergi matrahını azaltan bir kalemdir. Kazancınızın vergisini <Link href="/gelir-vergisi-hesaplama">gelir vergisi hesaplama</Link> aracıyla, şirket türü karşılaştırmasını <Link href="/sahis-mi-limited-mi">şahıs mı limited mi</Link> sayfasında görebilirsiniz.</p>

      <h2>Başka hangi maliyetler var?</h2>
      <p>Beyanname damga vergileri, e-fatura veya e-serbest meslek makbuzu kontör ücretleri, sanal ofis kirası ve banka masrafları da aylık gidere eklenir. Bunları hesaplayıcıdaki diğer giderler kutusuna yazabilirsiniz.</p>

      <Kaynaklar sayfa="maliyet" />
    </>
  );
}
