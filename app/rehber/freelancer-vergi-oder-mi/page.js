import Link from "next/link";
import Kaynaklar from "../../Kaynaklar";
import { sayfa } from "../../../lib/seo";

export const metadata = sayfa({
  baslik: "Freelancer Vergi Öder mi, Şirket Kurmak Zorunda mı?",
  aciklama: "Freelance çalışan vergi ödemek ve şirket kurmak zorunda mı? Arızi kazanç istisnası, süreklilik ölçütü ve mükellefiyet şartları 2026.",
  yol: "/rehber/freelancer-vergi-oder-mi",
});

export default function Yazi() {
  return (
    <>
      <h1>Freelancer vergi öder mi, şirket kurmak zorunda mı?</h1>
      <p className="lead">Kısa cevap: kazanç varsa vergi vardır, ama herkesin mükellefiyet açtırması gerekmez. Ayrım "süreklilik"te.</p>

      <h2>Süreklilik ölçütü</h2>
      <p>Vergi hukukunda belirleyici olan, faaliyetin devamlı mı yoksa arızi mi olduğudur. Yılda bir iki kez, tesadüfen yapılan bir iş arızi sayılabilir. Düzenli müşteri alıyor, iş arıyor, sürekli teslim yapıyorsanız bu devamlı bir faaliyettir ve mükellefiyet tesis ettirilmesi gerekir. Tek bir işten yüksek kazanç elde etmek de, süreklilik belirtisi varsa faaliyeti arızi olmaktan çıkarabilir.</p>

      <h2>Arızi kazançta istisna</h2>
      <p>Arızi olarak yapılan serbest meslek faaliyetlerinden doğan kazançlar için Gelir Vergisi Kanunu'nun 82. maddesinde istisna vardır. Bu tutar 2026 yılı gelirleri için 350.000 TL'dir. Arızi kazanç bu tutarı aşarsa aşan kısım beyan edilir. Ancak bu istisna, devamlı yapılan bir faaliyet için kullanılamaz.</p>

      <h2>Telif kazancı istisnası</h2>
      <p>Eser sahiplerinin, kanunda sayılan eserlerini değerlendirmek suretiyle elde ettikleri kazançlar için ayrı bir istisna vardır. Yıllık net kazanç, tarifenin dördüncü gelir dilimindeki tutarı, yani 2026 için 5.300.000 TL'yi aşmıyorsa beyanname verilmez; bu kapsamdaki ödemelerden yapılan %17 stopaj nihai vergi olur. Her yazılım veya tasarım işi bu kapsama girmez, eser niteliği ayrıca değerlendirilir.</p>

      <h2>Sosyal içerik üreticiliği</h2>
      <p>YouTube, Instagram, TikTok gibi platformlardan kazanç elde edenler için ayrı bir sistem uygulanır. Şartlar sağlanırsa mükellefiyet açmadan, banka stopajıyla vergilendirme mümkündür. Ayrıntılar <Link href="/youtube-vergi-hesaplama">YouTube gelir vergisi</Link> sayfasında.</p>

      <h2>Mükellefiyet açarsam ne olur?</h2>
      <p>Şahıs şirketi açtığınızda Bağ-Kur primi ödemeye başlar, belge düzenler, yıl içinde geçici vergi verir ve mart ayında yıllık beyanname verirsiniz. Bu düzenin aylık maliyetini <Link href="/sahis-sirketi-maliyeti">şahıs şirketi maliyeti</Link>, yıllık vergi yükünü <Link href="/gelir-vergisi-hesaplama">gelir vergisi hesaplama</Link> aracıyla görebilirsiniz. 29 yaşını doldurmamış ve ilk defa mükellef olacaksanız <Link href="/genc-girisimci-istisnasi">genç girişimci istisnası</Link> ciddi avantaj sağlar.</p>

      <h2>Kayıt dışı kalırsam?</h2>
      <p>Banka hareketleri, platform ödemeleri ve müşterilerin gider kayıtları üzerinden tespit mümkündür. Sonradan tespit edilen kazançlarda vergi aslının yanında gecikme faizi ve vergi ziyaı cezası gündeme gelir. Düzenli iş almaya başladığınızda mükellefiyeti geciktirmemek daha ucuz olur.</p>

      <Kaynaklar sayfa="rehberTemel" />
    </>
  );
}
