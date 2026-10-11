import Link from "next/link";
import { sayfa } from "../../lib/seo";

export const metadata = sayfa({
  baslik: "Çerez Politikası",
  aciklama: "Freelancer Vergi'de çerez kullanımı hakkında bilgilendirme.",
  yol: "/cerez-politikasi",
});

export default function CerezPolitikasi() {
  return (
    <>
      <h1>Çerez Politikası</h1>
      <p className="muted">Son güncelleme: Ekim 2026</p>

      <h2>Şu anda çerez kullanılıyor mu?</h2>
      <p>Evet. Sitede Google AdSense ile reklam gösterilmektedir. Google ve reklam iş ortakları, reklamları göstermek, kişiselleştirmek ve performansını ölçmek için çerez ve benzeri teknolojiler kullanabilir. Hesaplama araçlarına girdiğiniz tutarlar ise yalnızca tarayıcınızda işlenir; sunucuya gönderilmez ve saklanmaz.</p>

      <h2>Reklam çerezleri</h2>
      <p>Reklam çerezleri, size daha uygun reklamlar göstermek ve aynı reklamı tekrar tekrar göstermemek gibi amaçlarla kullanılır. Google'ın, iş ortaklarının sitelerini kullandığınızda verileri nasıl kullandığı hakkındaki bilgiyi <a href="https://policies.google.com/technologies/partner-sites?hl=tr" target="_blank" rel="noopener noreferrer">Google'ın ilgili sayfasından</a> okuyabilirsiniz.</p>

      <h2>Ziyaret istatistikleri</h2>
      <p>Sitenin nasıl kullanıldığını anlamak için Vercel Web Analytics kullanılır. Bu hizmet çerez kullanmaz ve sizi kişisel olarak tanımlayacak bilgi toplamaz; yalnızca sayfa görüntüleme, ülke ve cihaz türü gibi toplu veriler görülür.</p>

      <h2>Zorunlu teknik kayıtlar</h2>
      <p>Site Vercel altyapısında barındırılır. Güvenlik ve hizmetin çalışması için IP adresi gibi teknik kayıtlar sınırlı süreyle tutulabilir. Bunlar çerez değildir.</p>

      <h2>Tercihlerinizi yönetmek</h2>
      <p>Kişiselleştirilmiş reklamları <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Google Reklam Ayarları</a> sayfasından kapatabilirsiniz. Tarayıcınızın ayarlarından çerezleri her zaman engelleyebilir veya silebilirsiniz. Avrupa Ekonomik Alanı, Birleşik Krallık ve İsviçre'den gelen ziyaretçilere Google'ın sağladığı onay mesajı gösterilebilir. Ayrıntılar için <Link href="/gizlilik-politikasi">gizlilik politikası</Link> sayfasına bakabilirsiniz.</p>
    </>
  );
}
