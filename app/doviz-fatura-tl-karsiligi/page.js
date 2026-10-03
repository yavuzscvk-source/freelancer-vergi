import Link from "next/link";
import Hesaplayici from "./Hesaplayici";
import Kaynaklar from "../Kaynaklar";
import { sayfa } from "../../lib/seo";

export const metadata = sayfa({
  baslik: "Döviz Faturası TL Karşılığı Hesaplama 2026",
  aciklama: "USD, EUR ve GBP faturalarının TL karşılığını hesaplayın. Kur, KDV ve stopajı girerek fatura toplamını ve net tutarı görün.",
  yol: "/doviz-fatura-tl-karsiligi",
});

export default function DovizFaturaTlKarsiligi() {
  return (
    <>
      <h1>Döviz faturası TL karşılığı hesaplama 2026</h1>
      <p className="lead">USD, EUR veya GBP faturanızı TL karşılığına çevirin; kur, KDV ve stopajı birlikte görün.</p>

      <Hesaplayici />

      <h2>Döviz faturası TL karşılığı nasıl hesaplanır?</h2>
      <p>Döviz tutarı, işlem için esas alınan kur üzerinden TL matraha çevrilir. Ardından varsa KDV ve stopaj bu TL matrah üzerinden hesaplanır.</p>

      <h2>Örnek hesaplama</h2>
      <p>Yurt içindeki bir şirkete 1.000 USD'lik serbest meslek makbuzu kestiniz ve kur 48,00 olsun. TL matrah 48.000 TL olur. %20 KDV 9.600 TL, makbuz toplamı 57.600 TL'dir. Şirket %20 stopajı, yani 9.600 TL'yi keser ve hesabınıza 48.000 TL geçer. Yurt dışındaki bir müşteriye hizmet ihracatı şartlarıyla kesilen belgede ise KDV ve stopaj uygulanmayabilir; bu durumda matrah ve toplam aynı olur.</p>

      <h2>Hangi kuru kullanmalıyım?</h2>
      <p>Uygulamada çoğunlukla Türkiye Cumhuriyet Merkez Bankası'nın ilgili tarihteki döviz alış kuru esas alınır. Serbest meslek makbuzunda tahsil esası geçerli olduğundan tarih genellikle tahsilat günüdür. Hangi kurun ve hangi tarihin kullanılacağı belge türüne ve işlemin niteliğine göre değişebileceği için mali müşavirinizle teyit edin. Bu araçta kuru siz girersiniz.</p>

      <h2>Yurt dışı müşteriye kesilen belgede KDV</h2>
      <p>Yurt dışına verilen bazı hizmetler belirli şartlarla hizmet ihracı kapsamında KDV'den istisna olabilir. Kazanç tarafındaki avantaj için <Link href="/hizmet-ihracati-vergi-indirimi">hizmet ihracatı indirimi</Link> sayfasına, genel çerçeve için <Link href="/rehber/yurt-disindan-gelen-para">yurt dışından gelen para</Link> yazısına bakabilirsiniz.</p>

      <h2>Platform gelirleri</h2>
      <p>Upwork veya Fiverr gibi platformlardan dolarla ödeme alıyorsanız komisyon, kur ve vergileri birlikte görmek için <Link href="/upwork-vergi-hesaplama">Upwork</Link> ve <Link href="/fiverr-vergi-hesaplama">Fiverr</Link> hesaplayıcılarını kullanabilirsiniz. Yurt içi bir makbuzun stopaj ve KDV hesabı için <Link href="/serbest-meslek-makbuzu">serbest meslek makbuzu hesaplama</Link> aracı var.</p>

      <h2>Önemli not</h2>
      <p>Bu araç yaklaşık hesaplama içindir; kesin muhasebe kaydı için mali müşavirinize danışın.</p>

      <Kaynaklar sayfa="doviz" />
    </>
  );
}
