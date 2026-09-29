import Hesaplayici from "./Hesaplayici";
import { sayfa } from "../../lib/seo";

export const metadata = sayfa({
  baslik: "Döviz Faturası TL Karşılığı Hesaplama 2026",
  aciklama:
    "USD, EUR ve GBP faturalarının TL karşılığını hesaplayın. Kur, KDV ve stopajı girerek fatura toplamını ve net tutarı görün.",
  yol: "/doviz-fatura-tl-karsiligi",
});

export default function DovizFaturaTlKarsiligi() {
  return (
    <>
      <h1>Döviz Faturası TL Karşılığı Hesaplama 2026</h1>

      <p className="lead">
        USD, EUR veya GBP faturanızı TL karşılığına çevirin; kur, KDV ve
        stopajı birlikte görün.
      </p>

      <Hesaplayici />

      <h2>Döviz faturası TL karşılığı nasıl hesaplanır?</h2>

      <p>
        Döviz tutarı, işlem için esas alınan kur üzerinden TL matraha
        çevrilir. Ardından varsa KDV ve stopaj bu TL matrah üzerinden
        hesaplanır.
      </p>

      <h2>Hangi kuru kullanmalıyım?</h2>

      <p>
        Bu araçta kuru manuel girersiniz. Uygulanacak kur ve tarih işlemin
        türüne ve muhasebe uygulamasına göre değişebileceğinden mali
        müşavirinizle teyit edin.
      </p>

      <h2>Yurt dışı müşteriye kesilen faturada KDV</h2>

      <p>
        Yurt dışına verilen bazı hizmetler belirli şartlarla hizmet ihracı
        kapsamında KDV'den istisna olabilir. İstisna şartlarını işleminize
        göre teyit edin.
      </p>

      <h2>Önemli not</h2>

      <p>
        Bu araç yaklaşık hesaplama içindir; kesin muhasebe kaydı için mali
        müşavirinize danışın.
      </p>
    </>
  );
}
