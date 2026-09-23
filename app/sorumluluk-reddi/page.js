import Link from "next/link";
import { sayfa } from "../../lib/seo";

export const metadata = sayfa({
  baslik: "Sorumluluk Reddi",
  aciklama: "Freelancer Vergi'deki hesaplamaların ve bilgilerin sınırlamaları hakkında açıklama.",
  yol: "/sorumluluk-reddi",
});

export default function SorumlulukReddi() {
  return (
    <>
      <h1>Sorumluluk Reddi</h1>
      <p className="muted">Son güncelleme: Eylül 2026</p>

      <h2>Bilgiler geneldir</h2>
      <p>Sitedeki tüm içerik ve hesaplama araçları genel bilgilendirme amaçlıdır. Kişiye özel vergi, muhasebe veya hukuki tavsiye niteliği taşımaz.</p>

      <h2>Hesaplamalar tahminidir</h2>
      <p>Araçlar, girdiğiniz verilere ve sitede belirtilen oranlara göre tahmini sonuç üretir. Gerçek vergi yükünüz; gider yapınız, mükellefiyet türünüz, istisnalar, indirimler, geçmiş yıl zararları ve özel durumlarınıza göre farklı çıkabilir.</p>

      <h2>Mevzuat değişir</h2>
      <p>Vergi oranları, tutarlar ve şartlar yıl içinde değişebilir. Sayfalarda kullanılan yıl ve son güncelleme tarihi kaynak bölümünde belirtilir. Güncel durumu resmi kaynaklardan doğrulamanız önerilir.</p>

      <h2>Uzman incelemesi</h2>
      <p>Bu sitedeki içerikler resmi mevzuat ve kurum kaynakları esas alınarak hazırlanır. İçerikler bir mali müşavir tarafından onaylanmış değildir. Kendi durumunuz için mutlaka yetkili bir meslek mensubuna danışın.</p>

      <h2>Hata bildirimi</h2>
      <p>Bir hesaplamada veya bilgide hata olduğunu düşünüyorsanız <Link href="/iletisim">iletişim</Link> sayfasından yazın; inceleyip düzeltiriz.</p>
    </>
  );
}
