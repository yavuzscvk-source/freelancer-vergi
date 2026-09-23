import Link from "next/link";
import PlatformHesaplayici from "../PlatformHesaplayici";
import Kaynaklar from "../Kaynaklar";
import { sayfa } from "../../lib/seo";

export const metadata = sayfa({
  baslik: "Upwork Vergi Hesaplama 2026 (Türkiye)",
  aciklama: "Upwork gelirinizden komisyon, Bağ-Kur ve vergi düşüldükten sonra elinize ne geçtiğini hesaplayın. Hizmet ihracatı indirimi dahil.",
  yol: "/upwork-vergi-hesaplama",
});

export default function Upwork() {
  return (
    <>
      <h1>Upwork vergi hesaplama 2026</h1>
      <p>Upwork kazancınızı girin; komisyon, kur, Bağ-Kur ve gelir vergisinden sonra cebinize kalanı görün.</p>

      <PlatformHesaplayici platform="Upwork" varsayilanKomisyon={10} />

      <h2>Upwork komisyonu ne kadar?</h2>
      <p>Upwork, 1 Mayıs 2025'ten itibaren eski kademeli sistemi kaldırdı ve sözleşme başına değişen %0 ile %15 arasında bir hizmet ücreti uygulamaya başladı. Oran teklif gönderildiği anda belirleniyor ve çoğu freelancer için yaklaşık %10 seviyesinde. Buna ek olarak teklif göndermek için kullanılan Connects ve para çekme masrafları da maliyete eklenir.</p>

      <h2>Upwork geliri Türkiye'de vergilendirilir mi?</h2>
      <p>Evet. Türkiye'de yerleşik iseniz, nerede kazanırsanız kazanın dünya genelindeki geliriniz Türkiye'de beyana tabidir. Süreklilik arz eden bir faaliyet yürütüyorsanız mükellefiyet açtırmanız gerekir. Paranın Upwork hesabında beklemesi veya Payoneer'de durması vergiyi doğurmadığı anlamına gelmez.</p>

      <h2>Komisyon gider yazılabilir mi?</h2>
      <p>Platformun kestiği komisyon ve para çekme masrafları, işle ilgili olduğu için genellikle gider olarak dikkate alınabilir. Belgelendirme şartları için mali müşavirinize danışın; hesaplayıcı komisyonu gider gibi değerlendirir.</p>

      <h2>Hizmet ihracatı indirimi Upwork için geçerli mi?</h2>
      <p>Yazılım, tasarım, mühendislik gibi kanunda sayılan hizmetleri yurt dışındaki müşterilere veriyorsanız, şartları sağlamanız halinde kazancın tamamı vergiden indirilebilir. Ancak platform üzerinden çalışıldığında müşterinin kim sayılacağı ve belge düzeni tartışmalı olabilir; bu yüzden durumunuzu mutlaka mali müşavirinizle teyit edin. Ayrıntılar için <Link href="/hizmet-ihracati-vergi-indirimi">hizmet ihracatı indirimi</Link> sayfasına bakın.</p>

      <h2>KDV ödenir mi?</h2>
      <p>Yurt dışındaki müşteriye verilen ve yurt dışında yararlanılan hizmetler belirli şartlarla hizmet ihracı sayılır ve KDV'den istisna olabilir. Bu şartlar sağlanmıyorsa KDV doğar. <Link href="/kdv-hesaplama">KDV hesaplama</Link> sayfası işinize yarayabilir.</p>

      <Kaynaklar sayfa="upwork" />
    </>
  );
}
