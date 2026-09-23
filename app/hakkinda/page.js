import Link from "next/link";
import { sayfa } from "../../lib/seo";
import { VERGI } from "../../lib/vergi";

export const metadata = sayfa({
  baslik: "Hakkında",
  aciklama: "Freelancer Vergi'yi kim hazırlıyor, hesaplamalar hangi kaynaklara dayanıyor ve sitenin sınırları neler?",
  yol: "/hakkinda",
});

export default function Hakkinda() {
  return (
    <>
      <h1>Hakkında</h1>
      <p className="lead">Freelancer Vergi, Türkiye'de serbest çalışanlar için hazırlanmış ücretsiz vergi hesaplama araçları ve rehberler sunar.</p>

      <h2>Bu site neden var?</h2>
      <p>Türkiye'de freelance çalışmaya başlayan biri ilk gün aynı sorularla karşılaşıyor: ne kadar vergi ödeyeceğim, şirket kurmam gerekir mi, yurt dışından gelen paranın durumu ne? Bu soruların cevabı mevzuatta var, ama mevzuat dili meslek mensupları için yazılıyor. Buradaki amaç aynı bilgiyi serbest çalışanın diline çevirmek ve hesabı saniyeler içinde yapılabilir hale getirmek.</p>

      <h2>Siteyi kim hazırlıyor?</h2>
      <p>Siteyi Selim adında bir kişi hazırlıyor. Mali müşavirlik bürosu ya da kurumsal bir şirket değil; konuyu kendi ihtiyacı için araştırırken Türkçe kaynakların yetersizliğini fark edip bu araçları yapmaya başlamış biri. Hesaplamalar ve içerikler resmi kaynaklar okunarak yazılıyor. Sitede mali müşavir onayı olduğu iddiası yoktur ve kişiye özel danışmanlık verilmez.</p>


      <h2>Hesaplamalar nasıl hazırlanıyor?</h2>
      <p>Her araçta kullanılan oran ve tutarlar, kanun metinleri, Cumhurbaşkanı kararları ve Gelir İdaresi Başkanlığı yayınları esas alınarak belirleniyor. Kullanılan kaynaklar her sayfanın altında bağlantılarıyla birlikte listeleniyor, böylece istediğiniz rakamı kendiniz de doğrulayabilirsiniz. Tüm oranlar tek bir merkezi dosyada tutuluyor; bu sayede mevzuat değiştiğinde tüm araçlar aynı anda güncelleniyor.</p>

      <h2>Ne kadar güncel?</h2>
      <p>Araçlar {VERGI.yil} yılı mevzuatına göre hazırlanmıştır. Son güncelleme: {VERGI.sonGuncelleme}. Vergi tarifeleri ve istisna tutarları her yıl ocak ayında yeniden belirlenir; yeni tutarlar açıklandığında site güncellenir ve sayfalardaki güncelleme tarihi değişir.</p>

      <h2>Sınırlar</h2>
      <p>Hesaplamalar tahminidir ve genel durumu esas alır. Gerçek vergi yükünüz gider yapınıza, mükellefiyet türünüze, istisnalara, geçmiş yıl zararlarına ve özel durumlarınıza göre farklı çıkabilir. Bu site mali müşavirlik veya hukuki danışmanlık hizmeti sunmaz; kararlarınızı almadan önce yetkili bir meslek mensubuna danışmanız gerekir. Ayrıntılar için <Link href="/sorumluluk-reddi">sorumluluk reddi</Link> sayfasına bakabilirsiniz.</p>

      <h2>Gizlilik</h2>
      <p>Hesaplama araçlarına girdiğiniz tutarlar yalnızca kendi tarayıcınızda işlenir. Bu veriler sunucuya gönderilmez, saklanmaz ve üçüncü kişilerle paylaşılmaz. Üyelik veya giriş yapma zorunluluğu yoktur. Ayrıntı için <Link href="/gizlilik-politikasi">gizlilik politikası</Link>.</p>

      <h2>Hata bildirin</h2>
      <p>Bir hesaplamada veya bilgide hata fark ederseniz bildirmenizi önemsiyoruz; bildirilen hatalar kontrol edilip düzeltiliyor ve gerekiyorsa sayfa güncelleniyor. Öneri ve sorularınız için <Link href="/iletisim">iletişim</Link> sayfasını kullanabilirsiniz.</p>

      <h2>Nereden başlamalı?</h2>
      <p>Hesap yapmak için <Link href="/hesaplayicilar">tüm araçlar</Link> sayfasına, konuyu anlamak için <Link href="/rehber">vergi rehberine</Link> göz atabilirsiniz.</p>
    </>
  );
}
