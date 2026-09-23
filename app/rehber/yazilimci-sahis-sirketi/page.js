import Link from "next/link";
import Kaynaklar from "../../Kaynaklar";
import { sayfa } from "../../../lib/seo";

export const metadata = sayfa({
  baslik: "Yazılımcı Şahıs Şirketi Açmalı mı? (2026)",
  aciklama: "Yazılımcılar için şahıs şirketi: ne zaman gerekir, aylık maliyeti nedir, hangi avantajlar var? Genç girişimci ve hizmet ihracatı indirimi dahil.",
  yol: "/rehber/yazilimci-sahis-sirketi",
});

export default function Yazi() {
  return (
    <>
      <h1>Yazılımcı şahıs şirketi açmalı mı?</h1>
      <p className="lead">Karar, kazancın büyüklüğünden çok işin sürekliliğine ve müşterinin kim olduğuna bağlı.</p>

      <h2>Ne zaman gerekir?</h2>
      <p>Düzenli olarak proje alıyor, müşterilerinize belge düzenlemeniz gerekiyorsa mükellefiyet açtırmanız gerekir. Kurumsal müşteriler zaten fatura veya makbuz ister, çünkü ödemeyi gider yazmak zorundadırlar. Yılda bir iki arızi iş yapan biri için ise durum farklıdır; ayrıntıyı <Link href="/rehber/freelancer-vergi-oder-mi">freelancer vergi öder mi</Link> yazısında anlattık.</p>

      <h2>Aylık maliyeti nedir?</h2>
      <p>Şahıs şirketinin sabit maliyeti kazançtan bağımsızdır: Bağ-Kur primi, mali müşavir ücreti ve e-belge gibi küçük kalemler. Kendi rakamlarınızla görmek için <Link href="/sahis-sirketi-maliyeti">şahıs şirketi maliyeti</Link> aracını kullanın. Bu maliyet, aylık kazancınız düşükken orantısız ağır gelir; bu yüzden düzenli iş akışı oluşmadan şirket açmak genelde erken bir karardır.</p>

      <h2>Yazılımcıya özel iki büyük avantaj</h2>
      <p>Birincisi, yurt dışındaki müşterilere verilen yazılım hizmetlerinde kazanç indirimi 2026'dan itibaren %100'e çıkarıldı. Şartları sağlıyorsanız bu kazanç için gelir vergisi doğmaz; hesap için <Link href="/hizmet-ihracati-vergi-indirimi">hizmet ihracatı indirimi</Link> sayfasına bakın. İkincisi, 29 yaşını doldurmamış ve ilk kez mükellef olacaksanız genç girişimci istisnası ilk üç yıl için önemli bir avantaj sağlar; <Link href="/genc-girisimci-istisnasi">genç girişimci istisnası</Link> aracıyla görebilirsiniz.</p>

      <h2>Şahıs mı limited mi?</h2>
      <p>Başlangıçta şahıs şirketi neredeyse her zaman daha mantıklıdır: hızlı açılır, ucuzdur, kapanması kolaydır. Limited şirket asgari sermaye, daha yüksek muhasebe maliyeti ve uzun tasfiye süreci getirir. Kâr yükseldiğinde ve para şirkette kalacaksa tablo değişir; karşılaştırmayı <Link href="/sahis-mi-limited-mi">şahıs mı limited mi</Link> sayfasında yapabilirsiniz.</p>

      <h2>Şirket açtıktan sonra ne değişir?</h2>
      <p>Her ay Bağ-Kur primi, üçer aylık dönemlerde geçici vergi, aylık KDV beyanı ve mart ayında yıllık beyanname gündeminize girer. Bunları bilmek nakit planınızı kurtarır; <Link href="/rehber/gecici-vergi-nedir">geçici vergi</Link> yazısı bu konuda yardımcı olur.</p>

      <h2>Gider yazabilecekleriniz</h2>
      <p>İşle ilgili ve belgelendirilmiş harcamalar kazançtan düşülebilir: bilgisayar ve ekipman, yazılım abonelikleri, internet, işle ilgili ulaşım, mali müşavir ücreti gibi. Hangi harcamanın ne ölçüde gider yazılabileceği kişisel kullanım payına göre değişir, bu yüzden mali müşavirinizle konuşun.</p>

      <Kaynaklar sayfa="rehberSirket" />
    </>
  );
}
