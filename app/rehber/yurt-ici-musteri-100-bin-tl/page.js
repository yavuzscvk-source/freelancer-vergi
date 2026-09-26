import Link from "next/link";
import Kaynaklar from "../../Kaynaklar";
import { sayfa } from "../../../lib/seo";

export const metadata = sayfa({
  baslik: "Türkiye'deki Müşteriye 100.000 TL'lik İş Yaptım, Elime Ne Geçer?",
  aciklama: "Yurt içi müşteriye kesilen 100.000 TL'lik serbest meslek makbuzunda stopaj, KDV ve yıl sonu vergisi nasıl işler? Adım adım örnek.",
  yol: "/rehber/yurt-ici-musteri-100-bin-tl",
});

export default function Yazi() {
  return (
    <>
      <h1>Türkiye'deki müşteriye 100.000 TL'lik iş yaptım, elime ne geçer?</h1>
      <p className="lead">Bu soruda çoğu kişinin kafası karışıyor, çünkü hesabın iki ayrı aşaması var: makbuz anı ve yıl sonu.</p>

      <h2>Aşama 1: Makbuzu kestiğiniz an</h2>
      <p>Müşteriniz bir şirketse brüt tutar üzerinden %20 stopaj keser ve bunu sizin adınıza vergi dairesine yatırır. KDV'yi ise size ayrıca öder; o tutar sizin geliriniz değildir, devlete beyan edersiniz.</p>
      <div className="card">
        <div className="row"><span>Brüt tutar</span><span>100.000,00 TL</span></div>
        <div className="row"><span>Stopaj (%20)</span><span>20.000,00 TL</span></div>
        <div className="row"><span>Net tutar</span><span>80.000,00 TL</span></div>
        <div className="row"><span>KDV (%20)</span><span>20.000,00 TL</span></div>
        <div className="row total"><span>Hesabınıza geçen</span><span>100.000,00 TL</span></div>
      </div>
      <p>Hesabınıza 100.000 TL girer ama bunun 20.000 TL'si KDV'dir ve beyan edip ödersiniz. Gerçek geliriniz 80.000 TL, üstelik 20.000 TL vergiyi peşin ödemiş durumdasınız.</p>

      <h2>Aşama 2: Yıl sonu</h2>
      <p>Stopaj kesin vergi değildir, yıl sonunda hesaplanan gelir vergisinden mahsup edilir. Yıllık kazancınız düşükse fazla ödediğiniz kısım iade konusu olabilir; yüksekse üstüne ödeme yaparsınız.</p>
      <p>Örneğin yıl boyunca bu tarz 10 iş yaptınız: brüt 1.000.000 TL kazanç, 200.000 TL kesilmiş stopaj, 150.000 TL gider ve alt sınırdan Bağ-Kur primi (121.881 TL) olsun. Matrah 728.119 TL, hesaplanan vergi yaklaşık 159.132 TL olur. Kesilen stopaj bundan fazla olduğu için yaklaşık 40.868 TL iade veya mahsup hakkınız doğar.</p>

      <h2>Yurt dışı müşteriden farkı</h2>
      <p>Yurt dışındaki bir firma Türkiye'de stopaj kesmez ve şartlar sağlanırsa kazanç hizmet ihracatı indirimiyle vergiden düşülebilir. Aynı büyüklükteki iş için yurt dışı müşteri, yurt içine göre belirgin şekilde avantajlıdır. Detay için <Link href="/rehber/yurt-disindan-gelen-para">yurt dışından gelen para</Link> yazısına bakın.</p>

      <h2>Bireysel müşteriye keserseniz</h2>
      <p>Müşteriniz şirket değil de bireysel bir kişiyse stopaj kesilmez. Bu durumda 100.000 TL brütün tamamı geliriniz olur, ama vergiyi yıl sonunda toplu ödersiniz. Hesaplamak için <Link href="/serbest-meslek-makbuzu">serbest meslek makbuzu hesaplama</Link> aracındaki stopaj kutusunun işaretini kaldırın.</p>

      <h2>Unutulmaması gerekenler</h2>
      <p>KDV'yi kendi paranız sanmayın; ay sonunda beyan edilir. Yıl içinde geçici vergi ödemeleri de gündeme gelir, ayrıntı için <Link href="/rehber/gecici-vergi-nedir">geçici vergi</Link> yazısına bakabilirsiniz. Yıllık tabloyu görmek için <Link href="/net-gelir-hesaplama">net gelir hesaplama</Link> aracını kullanın.</p>

      <Kaynaklar sayfa="rehberYurtIci" />
    </>
  );
}
