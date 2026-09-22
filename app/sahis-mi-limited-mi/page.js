import Link from "next/link";
import Hesaplayici from "./Hesaplayici";
import { sayfa } from "../../lib/seo";
import Kaynaklar from "../Kaynaklar";
export const metadata = sayfa({
  baslik: "Şahıs Şirketi mi Limited mi? Vergi Karşılaştırma 2026",
  aciklama: "Yıllık kârınıza göre şahıs şirketi ve limited şirketin toplam vergi yükünü karşılaştırın. 2026 gelir vergisi dilimleri, %25 kurumlar vergisi ve %15 kâr payı stopajı.",
  yol: "/sahis-mi-limited-mi",
});



export default function SahisLimited() {
  return (
    <>
      <h1>Şahıs Şirketi mi Limited mi? 2026 Vergi Karşılaştırması</h1>
      <p>Yıllık kârınızı girin; şahıs şirketi ve limited şirkette ödeyeceğiniz toplam vergiyi yan yana görün.</p>

      <Hesaplayici />

      <h2>Vergi farkı nereden geliyor?</h2>
      <p>Şahıs şirketinde kâr, artan oranlı gelir vergisine tabidir; oran %15'ten başlar ve %40'a kadar çıkar. Limited şirkette ise kâr sabit %25 kurumlar vergisine tabidir. Ancak limited şirketteki para şirketindir; kendi hesabınıza çekmek için kâr dağıtımı yapmanız gerekir ve dağıtılan tutardan ayrıca %15 stopaj kesilir.</p>

      <h2>Hangi kâr seviyesinde limited avantajlı olur?</h2>
      <p>Kârın tamamını kendinize çekecekseniz, limited şirkette toplam vergi yükü yaklaşık %36,25'tir. Bu durumda şahıs şirketi, yıllık yaklaşık 10 milyon TL kâra kadar daha az vergi ödetir. Kâr şirkette kalacak ve yatırıma dönüşecekse yük %25'te kalır; bu durumda limited şirket yaklaşık 1,2 milyon TL yıllık kârın üzerinde avantajlı hale gelir.</p>

      <h2>Genç girişimci istisnası limited şirkette geçerli mi?</h2>
      <p>Hayır. Genç girişimci kazanç istisnası gelir vergisi mükelleflerine yöneliktir ve limited şirket kazancına uygulanmaz. Şartları taşıyorsanız ilk üç yılda şahıs şirketi genellikle çok daha avantajlıdır. Detaylar için <Link href="/genc-girisimci-istisnasi">genç girişimci istisnası hesaplama</Link> sayfasına bakabilirsiniz.</p>

      <h2>Vergi dışındaki farklar</h2>
      <p>Limited şirket kurmak için en az 50.000 TL sermaye gerekir, muhasebe ücretleri daha yüksektir ve şirketi kapatmak aylar süren bir tasfiye süreci ister. Şahıs şirketi ise hızlı açılıp kapanır ama borçlardan şahsen sorumlu olursunuz.</p>

      <h2>Bu hesaplamaya dahil olmayanlar</h2>
      <p>Limited şirketten maaş veya huzur hakkı almak, yüksek tutarlı kâr paylarında yıllık beyanname verilmesi, ihracat kazançlarındaki indirimli oranlar ve kişisel giderler sonucu değiştirebilir. Karar vermeden önce mali müşavirinizle görüşün. Şahıs şirketindeki vergiyi dilim dilim görmek için <Link href="/gelir-vergisi-hesaplama">gelir vergisi hesaplama</Link> aracını kullanabilirsiniz.</p>
      <Kaynaklar sayfa="sirket" />
    </>
  );
}
