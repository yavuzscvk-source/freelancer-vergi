import Link from "next/link";
import { sayfa } from "../../lib/seo";

export const metadata = sayfa({
  baslik: "Gizlilik Politikası",
  aciklama: "Freelancer Vergi gizlilik politikası: hangi verilerin toplandığı ve nasıl kullanıldığı.",
  yol: "/gizlilik-politikasi",
});



export default function Gizlilik() {
  return (
    <>
      <h1>Gizlilik Politikası</h1>
      <p className="muted">Son güncelleme: Eylül 2026</p>

      <h2>Hesaplamalarda girdiğiniz bilgiler</h2>
      <p>Hesaplama araçlarına girdiğiniz tutarlar yalnızca kendi tarayıcınızda işlenir. Bu bilgiler sunucularımıza gönderilmez ve saklanmaz.</p>

      <h2>Ziyaret istatistikleri</h2>
      <p>Sitenin nasıl kullanıldığını anlamak için Vercel Web Analytics kullanıyoruz. Bu hizmet çerez kullanmaz ve sizi kişisel olarak tanımlayacak bilgi toplamaz. Yalnızca hangi sayfaların ziyaret edildiği, ülke, cihaz ve tarayıcı türü gibi toplu bilgiler görülür.</p>

      <h2>Barındırma ve sunucu kayıtları</h2>
      <p>Site Vercel altyapısında barındırılmaktadır. Güvenlik ve hizmetin çalışması için IP adresi ve tarayıcı bilgisi gibi teknik kayıtlar sınırlı süreyle tutulabilir.</p>

      <h2>Çerezler ve reklamlar</h2>
      <p>Şu anda sitede reklam veya takip amaçlı çerez kullanılmamaktadır. İleride reklam gösterilmeye başlanırsa bu politika güncellenecek ve gerekli bilgilendirme yapılacaktır.</p>

      <h2>E-posta ile iletişim</h2>
      <p>Bize e-posta gönderirseniz, adresiniz ve mesajınız yalnızca size cevap vermek için kullanılır ve üçüncü kişilerle paylaşılmaz.</p>

      <h2>Haklarınız</h2>
      <p>6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamındaki talepleriniz için <a href="mailto:freelancervergi@gmail.com">freelancervergi@gmail.com</a> adresine yazabilirsiniz. Diğer konular için <Link href="/iletisim">iletişim</Link> sayfasını kullanabilirsiniz.</p>
    </>
  );
}
