import Link from "next/link";
import Kaynaklar from "../../Kaynaklar";
import { sayfa } from "../../../lib/seo";

export const metadata = sayfa({
  baslik: "Geçici Vergi Nedir, Ne Zaman Ödenir? (2026)",
  aciklama: "Serbest meslek erbabı ve şahıs şirketleri için geçici vergi: dönemler, beyan tarihleri, oran ve yıllık beyannamede mahsup.",
  yol: "/rehber/gecici-vergi-nedir",
});

export default function Yazi() {
  return (
    <>
      <h1>Geçici vergi nedir, ne zaman ödenir?</h1>
      <p className="lead">Geçici vergi ayrı bir vergi değil, yıllık gelir vergisinin peşin ödenen kısmıdır. Yıl sonunda hesaplanan vergiden düşülür.</p>

      <h2>Kimler öder?</h2>
      <p>Gerçek usulde vergilendirilen ticari kazanç sahipleri, serbest meslek erbabı ve kurumlar vergisi mükellefleri geçici vergi öder. Yani şahıs şirketi açtıysanız siz de bu kapsamdasınız. Sosyal içerik üreticiliği istisnası gibi beyanname gerektirmeyen durumlarda ise geçici vergi söz konusu olmaz.</p>

      <h2>Nasıl hesaplanır?</h2>
      <p>Kazanç yılbaşından dönem sonuna kadar kümülatif olarak hesaplanır. Gelir vergisi mükelleflerinde tarifenin ilk dilimindeki oran, yani %15 uygulanır. Bulunan tutardan önceki dönemlerde hesaplanan geçici vergi düşülür ve yalnızca fark ödenir. Dönem zararla kapanırsa vergi çıkmaz ama beyanname yine verilir.</p>

      <h2>Dönemler ve tarihler</h2>
      <p>Geçici vergi üçer aylık dönemler halinde beyan edilir. Beyanname, dönemi izleyen ikinci ayın 17'sine kadar verilir ve ödeme aynı süre içinde yapılır. Dördüncü dönem 2022 yılında kaldırılmıştı; ancak 19 Aralık 2025 tarihli Resmî Gazete'de yayımlanan 7566 sayılı Kanun ile yeniden getirilmiştir. Resmî tatile denk gelen tarihler kayabildiği için güncel takvimi mali müşavirinizle teyit edin.</p>

      <h2>Yıl sonunda ne oluyor?</h2>
      <p>Yıl içinde ödenen geçici vergiler, mart ayında verilen yıllık beyannamede hesaplanan vergiden mahsup edilir. Fazla ödeme yaptıysanız kalan tutar diğer vergi borçlarınıza mahsup edilebilir veya iade talep edilebilir. Yani geçici vergi ek bir yük değil, ödemenin öne alınmasıdır. Hesabı <Link href="/gelir-vergisi-hesaplama">gelir vergisi hesaplama</Link> aracındaki geçici vergi kutusuna yazarak görebilirsiniz.</p>

      <h2>Beyan edilip ödenmezse?</h2>
      <p>Tahakkuk ettirilip ödenmeyen geçici vergi yıllık beyannamede mahsup edilemez, terkin edilir; ancak gecikme zammı tahsil edilir. Yani beyan edip ödememek en kötü senaryodur. Nakit planınızı buna göre yapmak önemlidir.</p>

      <h2>Neden önemli?</h2>
      <p>Çoğu freelancer yıl sonunda vergiyi tek seferde ödeyeceğini sanır ve nakit sıkışıklığı yaşar. Oysa yıl içinde üç aylık ödemeler zaten başlar. Aylık net gelirinizi bu yükü de hesaba katarak görmek için <Link href="/net-gelir-hesaplama">net gelir hesaplama</Link> aracını kullanabilirsiniz.</p>

      <Kaynaklar sayfa="rehberGecici" />
    </>
  );
}
