import Link from "next/link";
import Kaynaklar from "../../Kaynaklar";
import { sayfa } from "../../../lib/seo";
import { VERGI, gelirVergisiHesapla } from "../../../lib/vergi";
import { tl } from "../../../lib/format";

const Y = VERGI.yil;
const ORAN = VERGI.serbestMeslekStopaji;

// Örnek 1: yüksek gider, stopaj hesaplanan vergiyi aşıyor
const brut1 = 400000;
const gider1 = 100000;
const stopaj1 = brut1 * ORAN;
const vergi1 = gelirVergisiHesapla(brut1 - gider1).toplam;

// Örnek 2: genç girişimci istisnası, vergi hiç çıkmıyor
const brut2 = 300000;
const gider2 = 50000;
const stopaj2 = brut2 * ORAN;
const matrah2 = Math.max(0, brut2 - gider2 - VERGI.gencGirisimciIstisnasi);
const vergi2 = gelirVergisiHesapla(matrah2).toplam;

export const metadata = sayfa({
  baslik: `Stopaj İadesi Nasıl Alınır? Serbest Meslek Makbuzu Stopajı (${Y})`,
  aciklama: "Makbuzlardan kesilen %20 stopaj yıllık vergiden fazlaysa ne olur? Mahsup, nakden iade, gereken belgeler ve örnek hesap.",
  yol: "/rehber/stopaj-iadesi",
});

export default function Yazi() {
  return (
    <>
      <h1>Stopaj iadesi nasıl alınır?</h1>
      <p className="lead">Yıl içinde makbuzlarınızdan kesilen stopaj, yıl sonunda hesaplanan vergiden fazlaysa aradaki fark size geri döner.</p>

      <h2>Stopaj neden fazla çıkar?</h2>
      <p>Yurt içindeki şirketler, kestiğiniz serbest meslek makbuzunun brüt tutarı üzerinden %{ORAN * 100} stopaj keser ve sizin adınıza vergi dairesine öder. Bu, yıllık verginizin peşin ödenen kısmıdır. Ama stopaj brüt tutar üzerinden hesaplanır; giderlerinizi, Bağ-Kur primlerinizi ve istisnaları dikkate almaz. Bu yüzden özellikle şu durumlarda kesilen stopaj gerçek vergiden fazla olur:</p>
      <ul>
        <li>Giderleriniz yüksekse (ekipman, ofis, yazılım aboneliği)</li>
        <li><Link href="/genc-girisimci-istisnasi">Genç girişimci istisnasından</Link> yararlanıyorsanız</li>
        <li>Kazancınız düşük dilimlerde kalıyorsa (ilk dilim %15, stopaj %20)</li>
      </ul>

      <h2>Örnek 1: giderleri yüksek bir freelancer</h2>
      <div className="card">
        <div className="row"><span>Yıl boyunca kesilen makbuzlar (brüt)</span><span>{tl(brut1)}</span></div>
        <div className="row"><span>Kesilen stopaj (%{ORAN * 100})</span><span>{tl(stopaj1)}</span></div>
        <div className="row"><span>Giderler ve Bağ-Kur primleri</span><span>{tl(gider1)}</span></div>
        <div className="row"><span>{Y} tarifesine göre hesaplanan gelir vergisi</span><span>{tl(vergi1)}</span></div>
        <div className="row total"><span>İade veya mahsup edilecek fark</span><span>{tl(stopaj1 - vergi1)}</span></div>
      </div>

      <h2>Örnek 2: genç girişimci istisnası</h2>
      <div className="card">
        <div className="row"><span>Yıl boyunca kesilen makbuzlar (brüt)</span><span>{tl(brut2)}</span></div>
        <div className="row"><span>Kesilen stopaj (%{ORAN * 100})</span><span>{tl(stopaj2)}</span></div>
        <div className="row"><span>Giderler</span><span>{tl(gider2)}</span></div>
        <div className="row"><span>Genç girişimci istisnası</span><span>{tl(VERGI.gencGirisimciIstisnasi)}</span></div>
        <div className="row"><span>Hesaplanan gelir vergisi</span><span>{tl(vergi2)}</span></div>
        <div className="row total"><span>İade veya mahsup edilecek fark</span><span>{tl(stopaj2 - vergi2)}</span></div>
      </div>
      <p className="muted">Örnekler sadeleştirilmiştir; geçici vergi ödemeleri ve damga vergisi gösterilmemiştir. Geçici vergi ödediyseniz o da hesaplanan vergiden düşülür ve iade edilecek tutarı artırır.</p>

      <h2>İade nasıl talep edilir?</h2>
      <ol>
        <li><strong>Yıllık beyanname:</strong> Mart ayında verdiğiniz gelir vergisi beyannamesinde yıl içinde kesilen stopajlar mahsup edilecek vergiler bölümüne yazılır. Hesaplanan vergiyi aşan kısım beyannamede iade edilecek tutar olarak görünür.</li>
        <li><strong>Stopaj listesi:</strong> Stopaj kesen şirketlerin unvanı, vergi kimlik numarası ve kesilen tutarlar beyannameye eklenir. e-SMM kullanıyorsanız makbuzlar bu listeyi hazırlamayı kolaylaştırır.</li>
        <li><strong>Mahsup veya nakit:</strong> Fazla tutarı başka vergi borçlarınıza mahsup ettirebilir ya da nakden iade isteyebilirsiniz. Talep, internet vergi dairesi veya bağlı olduğunuz vergi dairesine verilecek iade dilekçesiyle yapılır.</li>
      </ol>

      <h2>Ne zaman ve ne kadar sürede gelir?</h2>
      <p>Belirli bir tutara kadar olan stopaj iadeleri vergi inceleme raporu ve teminat aranmadan yapılır. Bu sınır her yıl yeniden değerleme oranında artırılır ve bireysel freelancer iadelerinin büyük çoğunluğu sınırın altında kalır. Sınırı aşan tutarlarda yeminli mali müşavir raporu veya vergi incelemesi istenir. Vergi dairesi, kesilen stopajların şirketler tarafından muhtasar beyannameyle gerçekten beyan edildiğini kontrol eder; bu yüzden iade genelde birkaç hafta ile birkaç ay arasında sonuçlanır.</p>

      <h2>Sık yapılan hatalar</h2>
      <ul>
        <li><strong>Stopajları beyannameye yazmamak:</strong> Mahsup edilmeyen stopaj kendiliğinden iade edilmez.</li>
        <li><strong>Şirketin stopajı beyan etmemesi:</strong> Makbuzu kestiğiniz şirket stopajı muhtasarla bildirmediyse iade gecikir. Makbuzlarınızı ve ödeme dekontlarınızı saklayın.</li>
        <li><strong>Nakit iadeyi beklemek yerine mahsup etmemek:</strong> Yakında ödeyeceğiniz bir vergi borcu varsa mahsup çoğu zaman daha hızlıdır.</li>
      </ul>
      <p>Makbuz başına kesilecek stopajı <Link href="/serbest-meslek-makbuzu">serbest meslek makbuzu hesaplama</Link>, yıllık vergiyi <Link href="/gelir-vergisi-hesaplama">gelir vergisi hesaplama</Link> aracıyla görebilirsiniz.</p>

      <Kaynaklar sayfa="rehberStopaj" />
    </>
  );
}
