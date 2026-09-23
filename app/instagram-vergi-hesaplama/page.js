import Link from "next/link";
import IcerikHesaplayici from "../IcerikHesaplayici";
import Kaynaklar from "../Kaynaklar";
import { sayfa } from "../../lib/seo";

export const metadata = sayfa({
  baslik: "Instagram, TikTok ve Kick Gelir Vergisi Hesaplama 2026",
  aciklama: "Instagram, TikTok ve Kick gelirlerinin vergisini hesaplayın. Sosyal içerik üreticiliği istisnası, 5.300.000 TL sınırı ve %15 stopaj.",
  yol: "/instagram-vergi-hesaplama",
});

export default function Instagram() {
  return (
    <>
      <h1>Instagram, TikTok ve Kick gelir vergisi 2026</h1>
      <p>Sosyal medya kazancınızı girin; istisna kapsamında olup olmadığınızı ve ödeyeceğiniz vergiyi görün.</p>

      <IcerikHesaplayici platform="sosyal medya" />

      <h2>Hangi platformlar kapsamda?</h2>
      <p>İstisna, sosyal ağ sağlayıcıları üzerinden içerik üreterek kazanç elde edenleri kapsar. Instagram, TikTok, Kick, YouTube, Facebook ve X gibi platformlardan elde edilen reklam, sponsorluk, bağış ve benzeri kazançlar bu kapsamda değerlendirilir. Mobil uygulama geliştiricilerinin uygulama platformlarından elde ettiği kazançlar da aynı madde kapsamındadır.</p>

      <h2>Reklam veren stopaj keser mi?</h2>
      <p>Bir özelgeye göre, kazancı mükerrer 20/B kapsamında vergilendirilen sosyal içerik üreticisine yapılan reklam ödemesinden ayrıca gelir vergisi stopajı yapılmaz; vergi banka tarafından hasılat üzerinden kesilir. Bu hizmet ayrıca KDV'den de istisnadır.</p>

      <h2>Tüm platformların geliri toplanır</h2>
      <p>Sınır her platform için ayrı ayrı değil, toplam hasılat üzerinden uygulanır. Instagram, TikTok ve YouTube gelirleriniz varsa hepsini toplayıp hesaplamanız gerekir. YouTube'a özel ayrıntılar için <Link href="/youtube-vergi-hesaplama">YouTube gelir vergisi</Link> sayfasına bakabilirsiniz.</p>

      <h2>Banka hesabı şartı</h2>
      <p>İstisnanın en kritik şartı, faaliyete ilişkin tüm hasılatın Türkiye'de açılmış özel bir banka hesabından tahsil edilmesidir. Hasılatın bir kısmının başka yollarla tahsil edilmesi istisnayı riske atar. Hesabı açmadan önce bankanıza istisna kapsamında hesap açtığınızı belirtmeniz gerekir.</p>

      <h2>Yurt dışı müşteriye hizmet verenler</h2>
      <p>Sosyal medya danışmanlığı, reklam ve pazarlama hizmetleri içerik üreticiliğinden farklı değerlendirilir ve genellikle hizmet ihracatı indiriminin kapsamında da sayılmaz. Bu konuda <Link href="/hizmet-ihracati-vergi-indirimi">hizmet ihracatı indirimi</Link> sayfasındaki kapsam listesine bakın ve mali müşavirinize danışın.</p>

      <Kaynaklar sayfa="instagram" />
    </>
  );
}
