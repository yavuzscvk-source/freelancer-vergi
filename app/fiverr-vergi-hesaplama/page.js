import Link from "next/link";
import PlatformHesaplayici from "../PlatformHesaplayici";
import Kaynaklar from "../Kaynaklar";
import { sayfa } from "../../lib/seo";

export const metadata = sayfa({
  baslik: "Fiverr Vergi Hesaplama 2026 (Türkiye)",
  aciklama: "Fiverr gelirinizden %20 komisyon, Bağ-Kur ve vergi düşüldükten sonra elinize ne geçtiğini hesaplayın. Hizmet ihracatı indirimi dahil.",
  yol: "/fiverr-vergi-hesaplama",
});

export default function Fiverr() {
  return (
    <>
      <h1>Fiverr vergi hesaplama 2026</h1>
      <p>Fiverr kazancınızı girin; komisyon, kur, Bağ-Kur ve gelir vergisinden sonra cebinize kalanı görün.</p>

      <PlatformHesaplayici platform="Fiverr" varsayilanKomisyon={20} />

      <h2>Fiverr komisyonu ne kadar?</h2>
      <p>Fiverr her siparişten sabit %20 komisyon alır; sipariş tutarı ne olursa olsun oran değişmez ve kademeli indirim yoktur. Yani 100 dolarlık siparişte hesabınıza 80 dolar geçer. Ayrıca kazanç teslimden sonra 14 gün bekletilir ve para çekerken yönteme göre 1-3 dolar arası ücret alınır.</p>

      <h2>Fiverr geliri Türkiye'de beyan edilir mi?</h2>
      <p>Evet. Türkiye'de yerleşikseniz yurt dışından elde ettiğiniz gelirler de Türkiye'de beyana tabidir. Süreklilik arz eden bir faaliyet varsa mükellefiyet açılması gerekir.</p>

      <h2>Komisyon ve masraflar gider yazılabilir mi?</h2>
      <p>Fiverr komisyonu ve para çekme ücretleri işle ilgili giderlerdir ve genellikle dikkate alınabilir. Belgelendirme konusunda mali müşavirinize danışın.</p>

      <h2>Hizmet ihracatı indirimi Fiverr için geçerli mi?</h2>
      <p>Kanunda sayılan hizmet türlerinde ve şartlar sağlandığında kazancın tamamı indirilebilir. Fiverr gibi platformlarda alıcının kim olduğu ve belge düzeni önem taşır; kesin durum için mali müşavirinize danışın. Ayrıntı: <Link href="/hizmet-ihracati-vergi-indirimi">hizmet ihracatı indirimi</Link>.</p>

      <h2>Upwork ile farkı nedir?</h2>
      <p>Vergi açısından ikisi de aynı kurallara tabidir; fark komisyon oranındadır. Fiverr'da sabit %20 kesilirken Upwork'te oran sözleşmeye göre %0 ile %15 arasında değişir. Karşılaştırmak için <Link href="/upwork-vergi-hesaplama">Upwork vergi hesaplama</Link> sayfasını kullanabilirsiniz.</p>

      <Kaynaklar sayfa="fiverr" />
    </>
  );
}
