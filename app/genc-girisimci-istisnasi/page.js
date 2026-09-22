import Link from "next/link";
import Hesaplayici from "./Hesaplayici";
import { sayfa } from "../../lib/seo";

export const metadata = sayfa({
  baslik: "Genç Girişimci İstisnası Hesaplama 2026",
  aciklama: "2026 genç girişimci kazanç istisnası (400.000 TL) ile ödeyeceğiniz gelir vergisini ve vergi avantajınızı hesaplayın. Şartlar ve güncel bilgiler.",
  yol: "/genc-girisimci-istisnasi",
});



export default function GencGirisimci() {
  return (
    <>
      <h1>Genç Girişimci İstisnası Hesaplama 2026</h1>
      <p>Yıllık kazancınızı girin; genç girişimci istisnasıyla ne kadar vergi ödeyeceğinizi ve ne kadar avantaj sağladığınızı görün.</p>

      <Hesaplayici />

      <h2>2026 genç girişimci istisnası ne kadar?</h2>
      <p>2026 yılı için istisna tutarı 400.000 TL'dir. Bu tutar, gelir vergisi tarifesinin ikinci dilimine eşittir ve her yıl güncellenir. Yıllık kazancınızın 400.000 TL'ye kadar olan kısmı için gelir vergisi ödemezsiniz. İstisna, işe başladığınız yıldan itibaren 3 vergilendirme dönemi boyunca uygulanır.</p>

      <h2>Kimler yararlanabilir?</h2>
      <p>Ticari, zirai veya serbest meslek faaliyeti nedeniyle adına ilk defa gelir vergisi mükellefiyeti açılan ve işe başladığı tarihte 18 yaşını doldurmuş, 29 yaşını doldurmamış kişiler yararlanabilir. İşte bizzat çalışmanız ya da işi kendiniz yönetmeniz gerekir. Aile yakınlarından devralınan işlerde ve ortaklıklarda ek şartlar vardır; başvurmadan önce mali müşavirinizle teyit edin.</p>

      <h2>Örnek hesaplama</h2>
      <p>600.000 TL kazanç ve 100.000 TL gider ile yıllık kazanç 500.000 TL olur. İstisna olmasaydı 97.500 TL gelir vergisi ödenecekti. 400.000 TL istisna düşüldüğünde matrah 100.000 TL'ye iner ve vergi 15.000 TL olur. Vergi avantajı 82.500 TL'dir.</p>

      <h2>Genç girişimci KDV öder mi?</h2>
      <p>Evet. İstisna sadece gelir vergisini kapsar. Yurt içindeki müşterilere kestiğiniz faturalardaki KDV'yi ödemeye devam edersiniz. Beyanname damga vergisi gibi diğer yükümlülükler de devam eder.</p>

      <h2>Bağ-Kur prim desteği devam ediyor mu?</h2>
      <p>Hayır. Genç girişimcilere ilk 12 ay sağlanan Bağ-Kur prim desteği, 1 Ocak 2026 ve sonrasında faaliyete başlayanlar için kaldırılmıştır. Gelir vergisi istisnası ise devam etmektedir.</p>

      <h2>Stopaj kesilirse ne olur?</h2>
      <p>Şirketlere kestiğiniz serbest meslek makbuzlarında stopaj kesilmeye devam eder. İstisna sayesinde hesaplanan vergi düşük kalacağı için, kesilen stopaj yıllık beyannamede mahsup edilir ve fazlası iade konusu olabilir. Makbuz başına stopajı <Link href="/serbest-meslek-makbuzu">serbest meslek makbuzu hesaplama</Link>, istisnasız vergiyi <Link href="/gelir-vergisi-hesaplama">gelir vergisi hesaplama</Link> aracıyla görebilirsiniz.</p>
    </>
  );
}
