import Link from "next/link";
import Kaynaklar from "../../Kaynaklar";
import { sayfa } from "../../../lib/seo";
import { VERGI } from "../../../lib/vergi";
import { tl } from "../../../lib/format";

const B = VERGI.bagkur;
const Y = VERGI.yil;
const sayi = (n) => n.toLocaleString("tr-TR");
const yuzde = (o) => "%" + (o * 100).toLocaleString("tr-TR", { maximumFractionDigits: 2 });

export const metadata = sayfa({
  baslik: `Bağ-Kur Primi ${Y}: En Düşük ve En Yüksek Aylık Prim, 5 Puan İndirim`,
  aciklama: `${Y} Bağ-Kur (4/b) primi ne kadar? Şahıs şirketi açan freelancer için aylık prim, 5 puanlık indirimin şartları, son ödeme günü ve SSK'lı çalışanların durumu.`,
  yol: "/rehber/bag-kur-primi-2026",
});

export default function Yazi() {
  return (
    <>
      <h1>Bağ-Kur primi {Y}: freelancer ne kadar öder?</h1>
      <p className="lead">Şahıs şirketi açtığınız gün Bağ-Kur'lu olursunuz. {Y}'da en düşük aylık prim, indirimle {tl(B.altSinir * B.indirimliOran)}.</p>

      <h2>{Y} aylık Bağ-Kur primi</h2>
      <p>Prim, seçtiğiniz prime esas kazancın {yuzde(B.oran)}'idir. Prime esas kazanç alt sınır ile üst sınır arasında olmak zorundadır. Primlerini zamanında ödeyen ve borcu olmayanlar için oran 5 puan düşerek {yuzde(B.indirimliOran)} olur.</p>
      <div className="card">
        <div className="row"><span>Prime esas kazanç alt sınırı</span><span>{sayi(B.altSinir)} TL</span></div>
        <div className="row"><span>En düşük prim (indirimsiz, {yuzde(B.oran)})</span><span>{tl(B.altSinir * B.oran)}</span></div>
        <div className="row total"><span>En düşük prim (5 puan indirimli, {yuzde(B.indirimliOran)})</span><span>{tl(B.altSinir * B.indirimliOran)}</span></div>
        <div className="row"><span>Prime esas kazanç üst sınırı</span><span>{sayi(B.ustSinir)} TL</span></div>
        <div className="row"><span>En yüksek prim (5 puan indirimli)</span><span>{tl(B.ustSinir * B.indirimliOran)}</span></div>
      </div>
      <p>Freelancerların büyük çoğunluğu alt sınırdan öder. Daha yüksek bir kazanç seçmek emeklilik maaşını artırır ama aylık yükü de büyütür. Oran, 7566 sayılı Kanun ile 1 Ocak 2026'dan itibaren 1 puan artırılmıştır.</p>

      <h2>5 puanlık indirimin şartları</h2>
      <ul>
        <li>Kendi adınıza SGK'ya prim, gecikme zammı veya idari para cezası borcunuz olmamalı.</li>
        <li>O ayın primi, son ödeme gününe kadar ödenmeli.</li>
        <li>Borcunuzu yapılandırdıysanız taksitleri aksatmadığınız sürece indirim devam eder.</li>
      </ul>
      <p>İndirim size para olarak ödenmez; primin 5 puanlık kısmını Hazine karşılar. Bir ay gecikirseniz o ayın primi indirimsiz tahakkuk eder, yani tek bir gecikme bile maliyeti artırır. Otomatik ödeme talimatı vermek en kolay çözümdür.</p>

      <h2>Ne zaman ödenir?</h2>
      <p>Her ayın primi, o ayın son gününe kadar ödenir. Ödeme e-Devlet, banka şubesi veya internet bankacılığından yapılabilir. Son gün hafta sonuna veya resmî tatile denk gelirse süre izleyen ilk iş gününe kayar.</p>

      <h2>Genç girişimci prim desteği bitti mi?</h2>
      <p>Evet. Genç girişimcilerin ilk 12 aylık Bağ-Kur primini Hazine'nin karşıladığı destek, 7566 sayılı Kanun ile kaldırıldı. 1 Ocak 2026 ve sonrasında ilk kez Bağ-Kur'lu olanlar bu destekten yararlanamaz. Gelir vergisi tarafındaki <Link href="/genc-girisimci-istisnasi">genç girişimci istisnası</Link> ise devam ediyor.</p>

      <h2>Hem SSK'lı hem şahıs şirketi sahibiyseniz</h2>
      <p>Bir işverenin yanında tam zamanlı çalışıp sigortanız (4/a) ödeniyorsa, aynı anda şahıs şirketi açtığınızda sigortalılığınız 4/a olarak devam eder. Bu durumda kural olarak ayrıca Bağ-Kur primi ödemezsiniz. İşten ayrıldığınız gün Bağ-Kur'unuz başlar; bunu unutmak birikmiş prim borcu ve indirim kaybı demektir.</p>

      <h2>Bağ-Kur primi vergiden düşülür mü?</h2>
      <p>Evet. Ödediğiniz Bağ-Kur primleri yıllık beyannamede kazancınızdan indirilir, yani gelir vergisi matrahını düşürür. Primin gerçek maliyetini ve elinize kalanı <Link href="/net-gelir-hesaplama">net gelir hesaplama</Link> ve <Link href="/sahis-sirketi-maliyeti">şahıs şirketi maliyeti</Link> araçlarında görebilirsiniz.</p>

      <Kaynaklar sayfa="rehberBagkur" />
    </>
  );
}
