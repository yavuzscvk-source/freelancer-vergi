import Link from "next/link";
import Hesaplayici from "./Hesaplayici";
import { sayfa } from "../../lib/seo";
import Kaynaklar from "../Kaynaklar";
export const metadata = sayfa({
  baslik: "Kira Geliri Vergisi Hesaplama 2026 (Freelancer'lar İçin)",
  aciklama: "2026 konut kira gelirinizin vergisini hesaplayın: 58.000 TL istisna, %15 götürü gider ve tarife. Serbest meslek kazancı olanlar için kira vergisini ayrıca gösterir.",
  yol: "/kira-geliri-vergisi-hesaplama",
});

export default function KiraGeliri() {
  return (
    <>
      <h1>Kira Geliri Vergisi Hesaplama 2026</h1>
      <p>Yıllık konut kira gelirinizi girin; istisna, götürü gider ve gelir vergisi tarifesine göre ne kadar vergi ödeyeceğinizi görün. Freelancer iseniz kira gelirinizin, serbest meslek kazancınızla birlikte nasıl vergilendiğini de hesaplar.</p>

      <Hesaplayici />

      <h2>2026 kira geliri istisnası ne kadar?</h2>
      <p>2026 yılında elde edilen konut kira gelirleri için istisna tutarı 58.000 TL'dir. Yıllık konut kira geliri bu tutarı aşmayanlar beyanname vermez. Aşanlar ise gelirin tamamını beyan eder ve istisna tutarını düşer. İstisna yalnızca konut kiralarına uygulanır; işyeri kiralarında istisna yoktur.</p>

      <h2>Freelancer'lar kira istisnasından yararlanabilir mi?</h2>
      <p>Hayır. Serbest meslek veya ticari kazancı nedeniyle beyanname vermek zorunda olanlar konut kira istisnasından yararlanamaz. Yani şahıs şirketi olan ya da serbest meslek mükellefi bir freelancer, 1 TL bile konut kira geliri elde etse bu geliri beyan eder. Kira matrahı serbest meslek kazancına eklenir ve üst dilimden vergilenir. Bu yüzden kiranın efektif vergi oranı, aynı kirayı alan ve başka geliri olmayan birine göre çok daha yüksek olabilir. Kanunda ayrıca toplam geliri belirli bir sınırı aşanlar için de istisna kısıtlaması bulunur; güncel sınırı Gelir İdaresi'nden teyit edin.</p>

      <h2>Götürü gider mi, gerçek gider mi?</h2>
      <p>Götürü gider yönteminde, istisna düşüldükten sonra kalan kiranın %15'i belge gerekmeden gider sayılır. Gerçek gider yönteminde ise aidat, onarım, sigorta, amortisman gibi giderler belgeye dayanarak düşülür. Gerçek gider yöntemini seçenler iki yıl geçmeden götürü gidere dönemez. Bu hesaplayıcı götürü gider yöntemini kullanır.</p>

      <h2>Örnek hesaplama</h2>
      <p>Başka geliri olmayan biri 2026'da aylık 20.000 TL, yılda 240.000 TL konut kirası alıyor. 58.000 TL istisna düşülünce 182.000 TL kalır. %15 götürü gider (27.300 TL) düşülünce matrah 154.700 TL olur ve vergi 23.205 TL çıkar.</p>
      <p>Aynı kirayı alan bir freelancer'ın serbest meslek matrahı 500.000 TL ise istisna uygulanmaz. Kira matrahı 204.000 TL olur ve 500.000 TL'nin üzerine eklenir. Toplam vergi 97.500 TL'den 152.580 TL'ye çıkar; yani kira nedeniyle 55.080 TL vergi ödenir.</p>

      <h2>Kira geliri beyannamesi ne zaman verilir?</h2>
      <p>2026 yılı kira gelirleri için yıllık gelir vergisi beyannamesi 1–31 Mart 2027 tarihleri arasında verilir. Vergi iki eşit taksitte, Mart ve Temmuz aylarında ödenir. Serbest meslek kazancınız da varsa iki gelir aynı beyannamede gösterilir. Kendi beyannamenizi hazırlamak için <Link href="/gelir-vergisi-hesaplama">gelir vergisi hesaplama</Link> aracını da kullanabilirsiniz.</p>

      <Kaynaklar sayfa="kira" />
    </>
  );
}
