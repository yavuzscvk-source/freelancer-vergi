import Hesaplayici from "./Hesaplayici";
import { sayfa } from "../../lib/seo";
import Kaynaklar from "../Kaynaklar";

export const metadata = sayfa({
  baslik: "Serbest Meslek Makbuzu Hesaplama 2026 (Netten Brüte Stopaj)",
  aciklama: "Brüt veya net tutardan serbest meslek makbuzu stopajını, KDV'yi ve tahsil edilecek tutarı hesaplayın. Netten brüte stopaj hesaplama dahil.",
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
      <p>Netten brüte stopaj hesaplama, net tutarın 0,80'e bölünmesiyle yapılır. Çünkü brüt tutardan %20 stopaj kesilince geriye %80'i kalır. Örneğin elinize 8.000 TL net geçmesini istiyorsanız brüt tutar 8.000 ÷ 0,80 = 10.000 TL olmalıdır; bu durumda stopaj 2.000 TL olur. Hesaplayıcıda "Netten hesapla" seçeneğine basarak istediğiniz net tutarı girmeniz yeterlidir.</p>

      <h2>SMM'de KDV ve stopaj birlikte nasıl hesaplanır?</h2>
      <p>Serbest meslek makbuzunda (SMM, elektronik hâliyle e-SMM) stopaj ve KDV aynı brüt tutar üzerinden hesaplanır; biri diğerinin üzerine eklenmez. Brüt 10.000 TL için stopaj 2.000 TL, KDV 2.000 TL olur. Karşı taraf brütten stopajı düşüp KDV'yi ekleyerek öder: 10.000 − 2.000 + 2.000 = 10.000 TL. KDV'yi stopaj düşülmüş net tutar üzerinden hesaplamak sık yapılan bir hatadır. Bazı hizmet türlerinde KDV'nin bir kısmını alıcı kendisi beyan eder (KDV tevkifatı); bu durumda tahsil edeceğiniz tutar değişir ve tevkifatlı hesap için <a href="/kdv-tevkifati-hesaplama">KDV tevkifatı hesaplama</a> aracını kullanabilirsiniz.</p>



      <h2>Stopaj her zaman kesilir mi?</h2>
      <p>Hayır. Stopajı, vergi kesintisi yapmakla yükümlü olan şirketler ve kurumlar keser. Bireysel bir müşteriye kestiğiniz makbuzda genellikle stopaj olmaz; bu durumda stopaj kutusunun işaretini kaldırın.</p>

      <h2>Yurt dışındaki müşteriye iş yaparsam?</h2>
      <p>Yurt dışındaki bir firmaya verilen hizmet belirli şartlarla hizmet ihracı sayılabilir ve KDV'den istisna olabilir. Yurt dışındaki firmalar Türkiye'de stopaj da kesmez. Bu durumda iki kutunun işaretini de kaldırarak hesaplayabilirsiniz. Şartları mali müşavirinizle teyit edin.</p>
      <Kaynaklar sayfa="makbuz" />
    </>
  );
}
