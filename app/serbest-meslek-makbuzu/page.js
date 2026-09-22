import Hesaplayici from "./Hesaplayici";
import { sayfa } from "../../lib/seo";
import Kaynaklar from "../Kaynaklar";

export const metadata = sayfa({
  baslik: "Serbest Meslek Makbuzu Hesaplama 2026",
  aciklama: "Brüt veya net tutardan serbest meslek makbuzu stopajı, KDV ve tahsil edilecek tutarı saniyeler içinde hesaplayın.",
  yol: "/serbest-meslek-makbuzu",
});



export default function SerbestMeslekMakbuzu() {
  return (
    <>
      <h1>Serbest Meslek Makbuzu Hesaplama</h1>
      <p>Brüt ya da elinize geçecek net tutarı girin; stopaj, KDV ve karşı taraftan tahsil edeceğiniz tutar anında hesaplansın.</p>

      <Hesaplayici />

      <h2>Serbest meslek makbuzu nasıl hesaplanır?</h2>
      <p>Serbest meslek makbuzunda üç kalem vardır. Stopaj, brüt tutarın %20'sidir; karşı taraf (şirket veya kurum) bu tutarı sizin adınıza kesip vergi dairesine öder. KDV, brüt tutarın %20'sidir ve karşı taraf size ayrıca öder. Net tutar, brütten stopaj düşüldükten sonra kalan kısımdır.</p>

      <h2>Örnek hesaplama</h2>
      <p>Brüt 10.000 TL'lik bir işte stopaj 2.000 TL, net tutar 8.000 TL, KDV 2.000 TL olur. Karşı taraf size 8.000 + 2.000 = 10.000 TL öder, 2.000 TL stopajı ise vergi dairesine yatırır.</p>

      <h2>Netten brüte nasıl hesaplanır?</h2>
      <p>Elinize belirli bir net tutar geçmesini istiyorsanız, net tutarı 0,80'e bölerek brüt tutarı bulabilirsiniz. Örneğin 8.000 TL net için brüt tutar 10.000 TL'dir.</p>

      <h2>Stopaj her zaman kesilir mi?</h2>
      <p>Hayır. Stopajı, vergi kesintisi yapmakla yükümlü olan şirketler ve kurumlar keser. Bireysel bir müşteriye kestiğiniz makbuzda genellikle stopaj olmaz; bu durumda stopaj kutusunun işaretini kaldırın.</p>

      <h2>Yurt dışındaki müşteriye iş yaparsam?</h2>
      <p>Yurt dışındaki bir firmaya verilen hizmet belirli şartlarla hizmet ihracı sayılabilir ve KDV'den istisna olabilir. Yurt dışındaki firmalar Türkiye'de stopaj da kesmez. Bu durumda iki kutunun işaretini de kaldırarak hesaplayabilirsiniz. Şartları mali müşavirinizle teyit edin.</p>
    </>
  );
}
