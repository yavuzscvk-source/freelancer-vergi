import Link from "next/link";
import { sayfa } from "../../lib/seo";

export const metadata = sayfa({
  baslik: "Hakkında",
  aciklama: "Freelancer Vergi, serbest çalışanlar için sade, ücretsiz ve güncel vergi hesaplama araçları sunar.",
  yol: "/hakkinda",
});


export default function Hakkinda() {
  return (
    <>
      <h1>Hakkında</h1>
      <p>Freelancer Vergi, Türkiye'de serbest çalışan yazılımcılar, tasarımcılar, çevirmenler ve içerik üreticileri için hazırlanmış ücretsiz bir vergi hesaplama sitesidir.</p>

      <h2>Neden bu site?</h2>
      <p>Vergi bilgileri çoğunlukla mevzuat diliyle ve muhasebecilere yönelik yazılıyor. Buradaki amaç, serbest çalışanların en sık sorduğu soruları sade bir dille cevaplamak ve hesabı saniyeler içinde yapabilecekleri araçlar sunmak.</p>

      <h2>Hesaplamalar ne kadar güncel?</h2>
      <p>Araçlarda kullanılan oran ve tutarlar 2026 yılı mevzuatına göre hazırlanmıştır ve her yıl yeni tarifeler açıklandığında güncellenir.</p>

      <h2>Önemli not</h2>
      <p>Bu sitedeki hesaplamalar bilgilendirme amaçlıdır ve mali müşavirlik hizmeti yerine geçmez. Kendi durumunuz için mutlaka bir mali müşavire danışın.</p>

      <p>Soru, öneri veya hata bildirimi için <Link href="/iletisim">iletişim</Link> sayfasını kullanabilirsiniz.</p>
    </>
  );
}
