import Link from "next/link";
import Kaynaklar from "../../Kaynaklar";
import { sayfa } from "../../../lib/seo";

export const metadata = sayfa({
  baslik: "Freelancer Hangi Harcamaları Gider Yazabilir?",
  aciklama: "Serbest meslek erbabı için gider yazma kuralları: bilgisayar, internet, yazılım, ofis, ulaşım ve belgelendirme şartları.",
  yol: "/rehber/hangi-giderler-yazilabilir",
});

export default function Yazi() {
  return (
    <>
      <h1>Freelancer hangi harcamaları gider yazabilir?</h1>
      <p className="lead">Gider yazmak vergi kaçırmak değildir; kazancı doğru hesaplamaktır. Ama kuralları var.</p>

      <h2>Temel kural</h2>
      <p>Bir harcamanın gider yazılabilmesi için işle ilgili olması, belgelendirilmesi ve ödenmiş olması gerekir. Serbest meslek kazancında esas olan fiilen ödeme yapılmasıdır; fatura alınmış ama ödenmemiş bir harcama o yıla gider yazılamaz.</p>

      <h2>Genellikle gider yazılabilenler</h2>
      <p>İşin yürütülmesi için yapılan harcamalar bu kapsamdadır: mesleki yayın ve eğitim ücretleri, işle ilgili yazılım abonelikleri, mali müşavir ücreti, işyeri kirası, işle ilgili iletişim ve internet giderleri, mesleki sorumluluk sigortası, işle ilgili seyahat ve konaklama, banka masrafları ve platform komisyonları.</p>

      <h2>Bilgisayar ve ekipman</h2>
      <p>Bilgisayar, kamera veya mikrofon gibi uzun süre kullanılan ekipmanlar doğrudan gider yazılmaz; amortisman yoluyla yıllara yayılarak dikkate alınır. Belirli bir tutarın altındaki küçük demirbaşlar ise doğrudan gider yazılabilir. Bu sınır her yıl güncellendiği için mali müşavirinize sormanız gerekir.</p>

      <h2>Evden çalışıyorsanız</h2>
      <p>İkametgahınızı aynı zamanda işyeri olarak kullanıyorsanız, kira ve ısınma gibi giderlerin belirli bir kısmı dikkate alınabilir. Oran ve uygulama detayları duruma göre değişir; bu konuda mutlaka meslek mensubuna danışın.</p>

      <h2>Araç giderleri</h2>
      <p>İşletmeye kayıtlı araçlarda yakıt, bakım ve amortisman giderleri için kanunda belirlenmiş sınırlar vardır. Kişisel aracın işle ilgili kullanımı tartışmalı bir alandır, bu yüzden dikkatli olunması gerekir.</p>

      <h2>Genellikle gider yazılamayanlar</h2>
      <p>Tamamen kişisel harcamalar, aile giderleri, işle ilgisi kurulamayan yemek ve giyim harcamaları, vergi cezaları ve gecikme zamları gider olarak kabul edilmez.</p>

      <h2>Belge olmadan gider olmaz</h2>
      <p>Her harcamanın fatura, fiş veya makbuzla belgelendirilmesi ve bunların saklanması gerekir. Belgesiz harcama, gerçekten yapılmış olsa bile gider yazılamaz. Yurt dışından alınan hizmetlerde belge düzeni ayrıca değerlendirilir.</p>

      <h2>Giderin vergiye etkisi</h2>
      <p>Giderler kazançtan düşüldüğü için doğrudan vergi matrahını azaltır. Kendi gider tutarınızı girerek etkisini <Link href="/gelir-vergisi-hesaplama">gelir vergisi hesaplama</Link> ve <Link href="/net-gelir-hesaplama">net gelir hesaplama</Link> araçlarında görebilirsiniz. Bağ-Kur primleri de ödenmiş olmak şartıyla matrahtan indirilir; aylık tutar için <Link href="/sahis-sirketi-maliyeti">şahıs şirketi maliyeti</Link> sayfasına bakın.</p>

      <Kaynaklar sayfa="rehberGider" />
    </>
  );
}
