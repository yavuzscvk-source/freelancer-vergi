import Link from "next/link";
import Hesaplayici from "./Hesaplayici";
import { sayfa } from "../../lib/seo";
import Kaynaklar from "../Kaynaklar";
export const metadata = sayfa({
  baslik: "KDV Hesaplama 2026 (KDV Dahil ve Hariç)",
  aciklama: "KDV hariç tutara KDV ekleyin ya da KDV dahil tutardan KDV'yi ayırın. 2026 KDV oranları: %1, %10 ve %20.",
  yol: "/kdv-hesaplama",
});



export default function KdvHesaplama() {
  return (
    <>
      <h1>KDV Hesaplama 2026</h1>
      <p>Tutarı girin, oranı seçin; KDV'yi ekleyin ya da KDV dahil tutardan ayırın.</p>

      <Hesaplayici />

      <h2>2026 KDV oranları</h2>
      <p>Türkiye'de üç KDV oranı uygulanır. Genel oran %20'dir ve çoğu mal ve hizmet bu orana tabidir. Yeme-içme ve konaklama gibi bazı hizmetlerde %10, ekmek ve temel gıda gibi ürünlerde %1 uygulanır.</p>

      <h2>KDV nasıl hesaplanır?</h2>
      <p>KDV eklemek için KDV hariç tutar oranla çarpılır: 1.000 TL'ye %20 KDV eklenince KDV 200 TL, toplam 1.200 TL olur. KDV ayırmak için KDV dahil tutar (1 + oran) değerine bölünür: 1.200 TL'yi 1,20'ye böldüğünüzde KDV hariç tutar 1.000 TL çıkar.</p>

      <h2>Freelancer'lar hangi oranı uygular?</h2>
      <p>Yazılım, tasarım, danışmanlık ve çeviri gibi serbest meslek hizmetlerinde genellikle %20 genel oran uygulanır. Serbest meslek makbuzundaki KDV'yi stopajla birlikte görmek için <Link href="/serbest-meslek-makbuzu">serbest meslek makbuzu hesaplama</Link> aracını kullanabilirsiniz.</p>

      <h2>Yurt dışındaki müşteriye KDV uygulanır mı?</h2>
      <p>Yurt dışındaki bir firmaya verilen ve yurt dışında yararlanılan hizmetler, belirli şartlarla hizmet ihracı sayılır ve KDV'den istisna olabilir. Şartları sağlayıp sağlamadığınızı mali müşavirinizle teyit edin.</p>

      <h2>KDV beyannamesi ne zaman verilir?</h2>
      <p>KDV beyannamesi, dönemi takip eden ayın 28'inci günü sonuna kadar verilir ve vergi aynı süre içinde ödenir.</p>
      <Kaynaklar sayfa="kdv" />
    </>
  );
}
