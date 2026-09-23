import Link from "next/link";
import { sayfa } from "../../lib/seo";

export const metadata = sayfa({
  baslik: "Kullanım Koşulları",
  aciklama: "Freelancer Vergi kullanım koşulları: hizmetin kapsamı, sorumluluk sınırları ve içerik hakları.",
  yol: "/kullanim-kosullari",
});

export default function KullanimKosullari() {
  return (
    <>
      <h1>Kullanım Koşulları</h1>
      <p className="muted">Son güncelleme: Eylül 2026</p>

      <h2>Hizmetin kapsamı</h2>
      <p>Freelancer Vergi, serbest çalışanlara yönelik ücretsiz vergi hesaplama araçları ve genel bilgilendirme içerikleri sunar. Siteyi kullanarak bu koşulları kabul etmiş sayılırsınız.</p>

      <h2>Danışmanlık hizmeti değildir</h2>
      <p>Bu site mali müşavirlik, muhasebe veya hukuki danışmanlık hizmeti sunmaz. Araçlardaki sonuçlar tahminidir ve kişisel durumunuza göre değişir. Mali kararlarınızı almadan önce yetkili bir mali müşavire danışın.</p>

      <h2>Sorumluluğun sınırı</h2>
      <p>İçerikler yayınlandıkları tarihteki mevzuata göre hazırlanır. Mevzuat değişebilir, hesaplamalarda hata bulunabilir. Sitedeki bilgilere dayanarak alınan kararlardan doğan zararlardan sorumluluk kabul edilmez. Hata fark ederseniz <Link href="/iletisim">iletişim</Link> sayfasından bildirmenizi rica ederiz.</p>

      <h2>Erişim ve kesintiler</h2>
      <p>Sitenin kesintisiz ve hatasız çalışacağı garanti edilmez. İçerikler önceden bildirilmeksizin değiştirilebilir veya kaldırılabilir.</p>

      <h2>Dış bağlantılar</h2>
      <p>Sitede resmi kurumlara ve üçüncü taraf sitelere bağlantı verilebilir. Bu sitelerin içeriğinden Freelancer Vergi sorumlu değildir.</p>

      <h2>İçerik hakları</h2>
      <p>Sitedeki metin, tasarım ve araçların hakları saklıdır. Kaynak göstererek alıntı yapabilirsiniz; içeriğin tamamının izinsiz kopyalanması ve yayınlanması uygun değildir.</p>

      <h2>Değişiklikler</h2>
      <p>Bu koşullar zaman zaman güncellenebilir. Güncel metin her zaman bu sayfada yayınlanır.</p>
    </>
  );
}
