import Link from "next/link";
import Hesaplayici from "./Hesaplayici";
import Kaynaklar from "../Kaynaklar";
import { sayfa } from "../../lib/seo";

export const metadata = sayfa({
  baslik: "KDV Hesaplama 2026: KDV Dahil, KDV Hariç ve KDV İçinden Ayırma",
  aciklama: "KDV hariç tutara KDV ekleyin ya da KDV dahil tutardan KDV'yi ayırın (KDV içinde hesaplama). 2026 KDV oranları: %1, %10 ve %20.",
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
      <p>KDV eklemek için KDV hariç tutar oranla çarpılır: 1.000 TL'ye %20 KDV eklenince KDV 200 TL, toplam 1.200 TL olur.</p>

      <h2>KDV içinde hesaplama: KDV dahil tutardan KDV ayırma</h2>
      <p>Elinizdeki tutar KDV dahilse, tutarı oranla çarpmak yanlış sonuç verir. KDV dahil tutar (1 + oran) değerine bölünür: 1.200 TL'yi 1,20'ye böldüğünüzde KDV hariç tutar 1.000 TL, aradaki fark olan 200 TL KDV'dir. Kısa yoldan, %20 KDV'de KDV dahil tutarın altıda biri, %10'da on birde biri, %1'de 101'de biri KDV'dir. Hesaplayıcıda <strong>KDV ayır</strong> seçeneğiyle aynı sonucu görürsünüz.</p>

      <h2>Freelancer'lar hangi oranı uygular?</h2>
      <p>Yazılım, tasarım, danışmanlık ve çeviri gibi serbest meslek hizmetlerinde genellikle %20 genel oran uygulanır. Serbest meslek makbuzundaki KDV'yi stopajla birlikte görmek için <Link href="/serbest-meslek-makbuzu">serbest meslek makbuzu hesaplama</Link> aracını kullanabilirsiniz.</p>

      <h2>Hesaplanan KDV ve indirilecek KDV</h2>
      <p>Müşteriden tahsil ettiğiniz KDV hesaplanan KDV, işiniz için ödediğiniz KDV indirilecek KDV'dir; devlete ödediğiniz tutar ikisinin farkıdır. Örnekli anlatım için <Link href="/rehber/hesaplanan-kdv-indirilecek-kdv">hesaplanan KDV, indirilecek KDV ve ödenecek KDV</Link> yazısına bakın.</p>

      <h2>KDV tevkifatı</h2>
      <p>Müşteriniz kamu kurumu veya banka gibi belirlenmiş bir alıcıysa ve hizmetiniz danışmanlık kapsamındaysa KDV'nin büyük kısmını alıcı öder. Bunu <Link href="/kdv-tevkifati-hesaplama">KDV tevkifatı hesaplama</Link> aracıyla görebilirsiniz.</p>

      <h2>Yurt dışındaki müşteriye KDV uygulanır mı?</h2>
      <p>Yurt dışındaki bir firmaya verilen ve münhasıran yurt dışında yararlanılan hizmetler, şartları sağlaması halinde hizmet ihracı kapsamında KDV'den istisnadır. Şartlar sağlanmıyorsa KDV hesaplanır. Ayrıntı için <Link href="/hizmet-ihracati-vergi-indirimi">hizmet ihracatı indirimi</Link> sayfasına bakın.</p>

      <h2>KDV beyannamesi ne zaman verilir?</h2>
      <p>KDV beyannamesi, dönemi takip eden ayın 28'inci günü sonuna kadar verilir ve vergi aynı süre içinde ödenir.</p>

      <Kaynaklar sayfa="kdv" />
    </>
  );
}
