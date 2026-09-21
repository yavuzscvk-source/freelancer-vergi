import Link from "next/link";
import Hesaplayici from "./Hesaplayici";

export const metadata = {
  title: "Gelir Vergisi Hesaplama 2026 (Serbest Meslek ve Freelancer)",
  description: "2026 gelir vergisi dilimlerine göre serbest meslek ve freelancer kazancınızın vergisini, stopaj mahsubuyla birlikte hesaplayın.",
};

export default function GelirVergisi() {
  return (
    <>
      <h1>Gelir Vergisi Hesaplama 2026</h1>
      <p>Yıllık kazancınızı ve giderlerinizi girin; 2026 gelir vergisi dilimlerine göre ödeyeceğiniz vergiyi dilim dilim görün.</p>

      <Hesaplayici />

      <h2>2026 gelir vergisi dilimleri (ücret dışı gelirler)</h2>
      <p>Serbest meslek kazancı, ticari kazanç ve kira geliri gibi ücret dışı gelirler için 2026 tarifesi:</p>
      <div className="card">
        <div className="row"><span>190.000 TL'ye kadar</span><span>%15</span></div>
        <div className="row"><span>400.000 TL'nin 190.000 TL'si için 28.500 TL, fazlası</span><span>%20</span></div>
        <div className="row"><span>1.000.000 TL'nin 400.000 TL'si için 70.500 TL, fazlası</span><span>%27</span></div>
        <div className="row"><span>5.300.000 TL'nin 1.000.000 TL'si için 232.500 TL, fazlası</span><span>%35</span></div>
        <div className="row"><span>5.300.000 TL'den fazlasının 5.300.000 TL'si için 1.737.500 TL, fazlası</span><span>%40</span></div>
      </div>

      <h2>Gelir vergisi nasıl hesaplanır?</h2>
      <p>Önce yıllık kazançtan giderler düşülerek vergi matrahı bulunur. Matrah dilimlere bölünür ve her dilime kendi oranı uygulanır. Yani kazancınızın tamamı en yüksek orandan vergilendirilmez; sadece o dilime giren kısmı o orandan vergilendirilir.</p>

      <h2>Örnek hesaplama</h2>
      <p>600.000 TL kazanç ve 100.000 TL gider ile matrah 500.000 TL olur. İlk 190.000 TL için 28.500 TL, sonraki 210.000 TL için 42.000 TL, kalan 100.000 TL için %27'den 27.000 TL vergi hesaplanır. Toplam gelir vergisi 97.500 TL, efektif oran yaklaşık %19,5 olur.</p>

      <h2>Kesilen stopaj ne olur?</h2>
      <p>Yıl içinde şirketlerin serbest meslek makbuzlarınızdan kestiği stopaj, yıllık beyannamede hesaplanan vergiden düşülür (mahsup edilir). Makbuz başına stopajı <Link href="/serbest-meslek-makbuzu">serbest meslek makbuzu hesaplama</Link> aracıyla bulabilirsiniz.</p>

      <h2>Beyanname ne zaman verilir?</h2>
      <p>Yıllık gelir vergisi beyannamesi, kazancın elde edildiği yılı izleyen yılın mart ayında verilir. Vergi mart ve temmuz aylarında iki taksitte ödenir.</p>
    </>
  );
}
