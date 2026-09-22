import Link from "next/link";
import Hesaplayici from "./Hesaplayici";
import { VERGI, gelirVergisiHesapla } from "../../lib/vergi";
import { oranYazi, yuzde } from "../../lib/format";
import { sayfa } from "../../lib/seo";

const Y = VERGI.yil;
const sayi = (n) => n.toLocaleString("tr-TR");

export const metadata = {
  title: `Gelir Vergisi Hesaplama ${Y} (Serbest Meslek ve Freelancer)`,
  description: `${Y} gelir vergisi dilimlerine göre serbest meslek ve freelancer kazancınızın vergisini, stopaj ve geçici vergi mahsubuyla birlikte hesaplayın.`,
};

function tarifeSatirlari() {
  let alt = 0;
  return VERGI.gelirVergisiDilimleri.map((d, i) => {
    const taban = gelirVergisiHesapla(alt).toplam;
    let metin;
    if (i === 0) metin = `${sayi(d.ust)} TL'ye kadar`;
    else if (d.ust === Infinity) metin = `${sayi(alt)} TL'den fazlasının ${sayi(alt)} TL'si için ${sayi(taban)} TL, fazlası`;
    else metin = `${sayi(d.ust)} TL'nin ${sayi(alt)} TL'si için ${sayi(taban)} TL, fazlası`;
    alt = d.ust;
    return { metin, oran: d.oran };
  });
}

const ornekVergi = gelirVergisiHesapla(500000).toplam;

export default function GelirVergisi() {
  return (
    <>
      <h1>Gelir Vergisi Hesaplama {Y}</h1>
      <p>Yıllık kazancınızı ve giderlerinizi girin; {Y} gelir vergisi dilimlerine göre ödeyeceğiniz vergiyi dilim dilim görün.</p>

      <Hesaplayici />

      <h2>{Y} gelir vergisi dilimleri (ücret dışı gelirler)</h2>
      <p>Serbest meslek kazancı, ticari kazanç ve kira geliri gibi ücret dışı gelirler için {Y} tarifesi:</p>
      <div className="card">
        {tarifeSatirlari().map((s, i) => (
          <div className="row" key={i}><span>{s.metin}</span><span>{oranYazi(s.oran)}</span></div>
        ))}
      </div>

      <h2>Gelir vergisi nasıl hesaplanır?</h2>
      <p>Önce yıllık kazançtan giderler düşülerek vergi matrahı bulunur. Matrah dilimlere bölünür ve her dilime kendi oranı uygulanır. Yani kazancınızın tamamı en yüksek orandan vergilendirilmez; sadece o dilime giren kısmı o orandan vergilendirilir.</p>

      <h2>Örnek hesaplama</h2>
      <p>600.000 TL kazanç ve 100.000 TL gider ile matrah 500.000 TL olur. {Y} tarifesine göre hesaplanan gelir vergisi {sayi(ornekVergi)} TL, efektif oran yaklaşık {yuzde((ornekVergi / 500000) * 100)} olur.</p>

      <h2>Stopaj ve geçici vergi ne olur?</h2>
      <p>Yıl içinde şirketlerin makbuzlarınızdan kestiği stopaj ile 3 aylık dönemlerde ödediğiniz geçici vergi, yıllık beyannamede hesaplanan vergiden düşülür (mahsup edilir). Makbuz başına stopajı <Link href="/serbest-meslek-makbuzu">serbest meslek makbuzu hesaplama</Link> aracıyla bulabilirsiniz.</p>

      <h2>Beyanname ne zaman verilir?</h2>
      <p>Yıllık gelir vergisi beyannamesi, kazancın elde edildiği yılı izleyen yılın mart ayında verilir. Vergi mart ve temmuz aylarında iki taksitte ödenir.</p>
    </>
  );
}
