import Link from "next/link";
import Hesaplayici from "./Hesaplayici";
import Kaynaklar from "../Kaynaklar";
import { sayfa } from "../../lib/seo";

export const metadata = sayfa({
  baslik: "Freelancer Saatlik Ücret Hesaplama 2026",
  aciklama: "Hedeflediğiniz net gelire ulaşmak için saat başına kaç TL almanız gerektiğini hesaplayın. Vergi, Bağ-Kur ve faturalanamayan saatler dahil.",
  yol: "/saatlik-ucret-hesaplama",
});

export default function SaatlikUcret() {
  return (
    <>
      <h1>Freelancer saatlik ücret hesaplama</h1>
      <p>Hedeflediğiniz net geliri girin; vergi, prim, giderler ve faturalanamayan saatler hesaba katılarak minimum saat ücretiniz çıksın.</p>

      <Hesaplayici />

      <h2>Neden maaşı saate bölmek yanlış?</h2>
      <p>Bir çalışan aylık maaşını alırken vergisi, sigortası ve izinli günleri işveren tarafından karşılanır. Freelancer'da bunların hepsi size aittir. Ayrıca çalıştığınız her saati faturalayamazsınız; teklif hazırlama, müşteri görüşmesi, muhasebe ve boş dönemler faturalanmaz. Bu yüzden saatlik ücret, hedef net gelirin çalışma saatine bölünmesinden çok daha yüksektir.</p>

      <h2>Faturalanabilir oran ne demek?</h2>
      <p>Haftada 40 saat çalışıyor olabilirsiniz ama bunun 25-30 saati müşteriye fatura edilebilir. Kalan süre işin kendisini yürütmeye gider. Deneyimli freelancer'larda bu oran genellikle %60 ile %80 arasındadır. Oranı düşürdüğünüzde saat ücretinin nasıl yükseldiğini hesaplayıcıda görebilirsiniz.</p>

      <h2>Bu rakam taban ücret</h2>
      <p>Hesaplanan tutar, hedefinize ulaşmak için gereken en düşük ücrettir. Hastalık, iş bulamadığınız dönemler, ekipman yenileme ve birikim için bunun üzerine pay eklemek gerekir. Aynı hedefe kaç TL gelirle ulaşacağınızı <Link href="/net-gelir-hesaplama">net gelir hesaplama</Link>, aylık sabit maliyetinizi <Link href="/sahis-sirketi-maliyeti">şahıs şirketi maliyeti</Link> sayfasında görebilirsiniz.</p>

      <h2>Müşteriye KDV'yi ayrıca ekleyin</h2>
      <p>Hesaplanan saat ücreti KDV hariçtir. Faturada KDV ayrıca eklenir ve size kalmaz. Tutarı <Link href="/kdv-hesaplama">KDV hesaplama</Link> aracıyla kontrol edebilirsiniz.</p>

      <Kaynaklar sayfa="saatlik" />
    </>
  );
}
