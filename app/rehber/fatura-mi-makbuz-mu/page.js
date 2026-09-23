import Link from "next/link";
import Kaynaklar from "../../Kaynaklar";
import { sayfa } from "../../../lib/seo";

export const metadata = sayfa({
  baslik: "Freelancer Fatura mı Makbuz mu Keser?",
  aciklama: "Serbest meslek makbuzu ile fatura arasındaki fark, hangisini kimin düzenlediği, stopaj ve e-belge yükümlülükleri.",
  yol: "/rehber/fatura-mi-makbuz-mu",
});

export default function Yazi() {
  return (
    <>
      <h1>Freelancer fatura mı makbuz mu keser?</h1>
      <p className="lead">Belirleyici olan kazancın türü: serbest meslek kazancı mı, ticari kazanç mı?</p>

      <h2>Serbest meslek kazancı</h2>
      <p>Sermayeden çok kişisel emeğe, bilgiye ve uzmanlığa dayanan, bir işverene bağlı olmaksızın kendi nam ve hesabına yapılan işler serbest meslek faaliyetidir. Yazılım geliştirme, tasarım, çeviri ve danışmanlık genellikle bu kapsamda değerlendirilir. Bu durumda düzenlenen belge <strong>serbest meslek makbuzudur</strong>.</p>

      <h2>Ticari kazanç</h2>
      <p>Faaliyet kişisel emekten çok organizasyona, sermayeye veya ürün satışına dayanıyorsa ticari kazanç söz konusu olur. Ekip çalıştıran ajanslar, hazır ürün veya lisans satanlar buna örnektir. Ticari kazançta düzenlenen belge <strong>faturadır</strong>.</p>
      <p>Sınır her zaman net değildir. Aynı kişi hem serbest meslek hem ticari faaliyet yürütüyor olabilir. Mükellefiyet açarken bu tespiti mali müşavirinizle yapmanız gerekir; belge türü, defter düzeni ve stopaj bu tespite bağlıdır.</p>

      <h2>En önemli fark: stopaj</h2>
      <p>Serbest meslek makbuzunda, karşı taraf vergi kesintisi yapmakla yükümlü bir şirket veya kurumsa brüt tutar üzerinden %20 stopaj keser ve sizin adınıza vergi dairesine yatırır. Faturada böyle bir kesinti yoktur. Bu yüzden aynı tutar için elinize geçen para farklı olur. Hesabı <Link href="/serbest-meslek-makbuzu">serbest meslek makbuzu hesaplama</Link> aracıyla görebilirsiniz.</p>

      <h2>Ne zaman düzenlenir?</h2>
      <p>Serbest meslek makbuzu tahsilat anında düzenlenir; yani parayı aldığınızda. Faturada ise esas olan teslim veya hizmetin yapılmasıdır ve belge genellikle işin tamamlanmasından sonraki süre içinde düzenlenir. Bu fark, gelirin hangi yıla ait sayılacağını da etkiler.</p>

      <h2>Kağıt mı, elektronik mi?</h2>
      <p>Serbest meslek erbabı için elektronik serbest meslek makbuzu (e-SMM) uygulaması yaygınlaşmıştır ve genel olarak zorunludur. Ticari kazanç sahiplerinde ise ciro ve faaliyet türüne göre e-fatura veya e-arşiv fatura yükümlülüğü doğar. Güncel zorunluluk sınırları için mali müşavirinize danışın.</p>

      <h2>KDV her ikisinde de var</h2>
      <p>Belge türü ne olursa olsun, istisna kapsamında değilseniz KDV hesaplanır ve beyan edilir. Tutarı <Link href="/kdv-hesaplama">KDV hesaplama</Link> aracıyla kontrol edebilirsiniz.</p>

      <Kaynaklar sayfa="rehberBelge" />
    </>
  );
}
