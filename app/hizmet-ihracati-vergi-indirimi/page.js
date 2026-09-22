import Link from "next/link";
import Hesaplayici from "./Hesaplayici";
import { sayfa } from "../../lib/seo";
import Kaynaklar from "../Kaynaklar";
export const metadata = sayfa({
  baslik: "Yurt Dışına Hizmet Veren Freelancer Vergisi 2026 (%100 İndirim)",
  aciklama: "2026'da yurt dışı müşterilere verilen yazılım, tasarım ve mühendislik hizmetlerinde kazanç indirimi %100 oldu. Şartları okuyun, vergi avantajınızı hesaplayın.",
  yol: "/hizmet-ihracati-vergi-indirimi",
});



export default function HizmetIhracati() {
  return (
    <>
      <h1>Yurt dışına hizmet veren freelancer vergisi 2026</h1>
      <p>Yurt dışındaki müşterilere yazılım, tasarım veya mühendislik hizmeti veriyorsanız, 2026 kazancınızın tamamını vergiden düşebilirsiniz. Kazancınızı girin, avantajınızı görün.</p>

      <Hesaplayici />

      <h2>2026'da ne değişti?</h2>
      <p>Gelir Vergisi Kanunu'nun 89/13 maddesindeki hizmet ihracatı kazanç indirimi, 30 Nisan 2026 tarihli Resmî Gazete'de yayımlanan 11257 sayılı Cumhurbaşkanı Kararı ile %80'den %100'e çıkarıldı. Yeni oran, 1 Ocak 2026'dan itibaren elde edilen kazançlara uygulanır. Şartları sağlayan kazancın tamamı yıllık beyannamede vergi matrahından indirilir.</p>

      <h2>Hangi hizmetler kapsamda?</h2>
      <p>Kanunda sayılan hizmetler şunlardır: mimarlık, mühendislik, tasarım, yazılım, tıbbi raporlama, muhasebe kaydı tutma, çağrı merkezi, ürün testi, sertifikasyon, veri saklama, veri işleme ve veri analizi ile belirli mesleki eğitim, eğitim ve sağlık hizmetleri.</p>
      <p>Bu listede olmayan hizmetler indirimden yararlanamaz. Örneğin sosyal medya yönetimi, reklam ve pazarlama danışmanlığı genellikle kapsam dışı değerlendirilir.</p>

      <h2>Şartlar nelerdir?</h2>
      <p>İndirimden yararlanmak için şu şartların hepsi birlikte sağlanmalıdır: müşteri Türkiye'de yerleşik olmamalı, hizmet Türkiye'den verilmeli ve münhasıran yurt dışında yararlanılmalı, fatura veya makbuz yurt dışındaki müşteri adına düzenlenmeli ve bu kazancın tamamı yıllık beyanname verme tarihine kadar Türkiye'ye transfer edilmelidir.</p>

      <h2>Örnek hesaplama</h2>
      <p>Yurt dışındaki müşterilere yazılım geliştirerek 1.000.000 TL kazanç elde eden ve şartları sağlayan bir freelancer, bu kazancın tamamını indirir ve gelir vergisi ödemez. İndirim olmasaydı 2026 tarifesine göre 232.500 TL vergi hesaplanacaktı.</p>

      <h2>KDV ne olur?</h2>
      <p>Gelir vergisindeki bu indirimden ayrı olarak, yurt dışına verilen hizmetler belirli şartlarla KDV'den de istisna olabilir. Detaylar için <Link href="/kdv-hesaplama">KDV hesaplama</Link> sayfasına bakabilirsiniz.</p>

      <h2>Önemli not</h2>
      <p>Hizmetinizin kapsamda olup olmadığı, Upwork veya Fiverr gibi platformlar üzerinden yapılan işlerde müşterinin kim sayılacağı ve belge düzeni gibi konular duruma göre değişir. Beyannamenizden önce mutlaka bir mali müşavire danışın. Yurt içi kazancınızın vergisini ayrıca <Link href="/gelir-vergisi-hesaplama">gelir vergisi hesaplama</Link> aracıyla görebilirsiniz.</p>
      <Kaynaklar sayfa="ihracat" />
    </>
  );
}
