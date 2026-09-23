import Link from "next/link";
import Hesaplayici from "./Hesaplayici";
import Kaynaklar from "../Kaynaklar";
import { sayfa } from "../../lib/seo";

export const metadata = sayfa({
  baslik: "Freelancer Net Gelir Hesaplama 2026",
  aciklama: "Aylık gelirinizden vergi, Bağ-Kur primi ve giderler düşüldükten sonra cebinize ne kalacağını hesaplayın. 2026 oranlarıyla.",
  yol: "/net-gelir-hesaplama",
});

export default function NetGelir() {
  return (
    <>
      <h1>Freelancer net gelir hesaplama 2026</h1>
      <p>Aylık gelirinizi ve giderlerinizi girin; vergi ve Bağ-Kur priminden sonra gerçekten cebinize ne kaldığını görün.</p>

      <Hesaplayici />

      <h2>Hesap nasıl yapılıyor?</h2>
      <p>Önce aylık gelirden giderler düşülerek yıllık kazanç bulunur. Ödenen Bağ-Kur primleri yıllık beyannamede matrahtan indirilir. Varsa genç girişimci istisnası da düşülür ve kalan tutara gelir vergisi tarifesi uygulanır. Net gelir, yıllık kazançtan prim ve vergi çıkarılarak bulunur.</p>

      <h2>Neden aylık değil yıllık hesaplanıyor?</h2>
      <p>Gelir vergisi artan oranlıdır ve yıllık kazanç üzerinden hesaplanır. Aylık bakıldığında yanıltıcı sonuç çıkar; çünkü yıl ilerledikçe üst dilimlere geçilir. Bu yüzden hesap yıllık yapılır, sonuç aylık ortalamaya bölünür.</p>

      <h2>KDV neden dahil değil?</h2>
      <p>Müşteriden tahsil ettiğiniz KDV sizin geliriniz değildir; devlet adına tahsil edip beyan edersiniz. Bu yüzden gelir kutusuna KDV hariç tutarı yazmalısınız. KDV'yi ayrıştırmak için <Link href="/kdv-hesaplama">KDV hesaplama</Link> aracını kullanabilirsiniz.</p>

      <h2>Stopaj kesiliyorsa ne olur?</h2>
      <p>Şirketlere kestiğiniz makbuzlarda stopaj peşin kesilir ve yıllık beyannamede hesaplanan vergiden mahsup edilir. Yani yıl sonundaki toplam vergi yükü değişmez, sadece ödeme zamanı öne alınmış olur. Makbuz bazında hesap için <Link href="/serbest-meslek-makbuzu">serbest meslek makbuzu hesaplama</Link> sayfasına bakabilirsiniz.</p>

      <h2>Yurt dışına çalışıyorsanız</h2>
      <p>Yurt dışındaki müşterilere verilen yazılım, tasarım ve mühendislik gibi hizmetlerde şartlar sağlanırsa kazancın tamamı vergiden indirilebilir. Bu durumda net geliriniz burada göründüğünden yüksek olur; ayrıntı için <Link href="/hizmet-ihracati-vergi-indirimi">yurt dışına hizmet indirimi</Link> sayfasına bakın.</p>

      <Kaynaklar sayfa="net" />
    </>
  );
}
