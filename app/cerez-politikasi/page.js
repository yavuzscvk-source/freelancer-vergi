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
      <p className="muted">Son güncelleme: Eylül 2026</p>

      <h2>Şu anda çerez kullanılıyor mu?</h2>
      <p>Hayır. Bu sitede reklam, profilleme veya takip amaçlı çerez kullanılmamaktadır. Hesaplama araçlarına girdiğiniz veriler yalnızca tarayıcınızda işlenir, saklanmaz ve sunucuya gönderilmez.</p>

      <h2>Ziyaret istatistikleri</h2>
      <p>Sitenin nasıl kullanıldığını anlamak için Vercel Web Analytics kullanılır. Bu hizmet çerez kullanmaz ve sizi kişisel olarak tanımlayacak bilgi toplamaz; yalnızca sayfa görüntüleme, ülke ve cihaz türü gibi toplu veriler görülür.</p>

      <h2>Zorunlu teknik kayıtlar</h2>
      <p>Site Vercel altyapısında barındırılır. Güvenlik ve hizmetin çalışması için IP adresi gibi teknik kayıtlar sınırlı süreyle tutulabilir. Bunlar çerez değildir.</p>

      <h2>İleride reklam eklenirse</h2>
      <p>Sitede ileride reklam yayınlanmaya başlanırsa reklam ağları çerez kullanabilir. Böyle bir durumda bu sayfa güncellenecek ve gerekli bilgilendirme ile onay mekanizması eklenecektir.</p>

      <h2>Çerezleri yönetmek</h2>
      <p>Tarayıcınızın ayarlarından çerezleri her zaman engelleyebilir veya silebilirsiniz. Ayrıntılar için <Link href="/gizlilik-politikasi">gizlilik politikası</Link> sayfasına bakabilirsiniz.</p>
    </>
  );
}

