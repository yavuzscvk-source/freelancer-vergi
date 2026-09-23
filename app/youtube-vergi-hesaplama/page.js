import Link from "next/link";
import IcerikHesaplayici from "../IcerikHesaplayici";
import Kaynaklar from "../Kaynaklar";
import { sayfa } from "../../lib/seo";

export const metadata = sayfa({
  baslik: "YouTube Gelir Vergisi Hesaplama 2026",
  aciklama: "YouTube kazancınızın vergisini hesaplayın. 2026 sosyal içerik üreticiliği istisnası, 5.300.000 TL sınırı ve %15 banka stopajı.",
  yol: "/youtube-vergi-hesaplama",
});

export default function Youtube() {
  return (
    <>
      <h1>YouTube gelir vergisi hesaplama 2026</h1>
      <p>Yıllık YouTube hasılatınızı girin; istisna kapsamında mısınız, ne kadar vergi ödeyeceksiniz, elinize ne kalacak görün.</p>

      <IcerikHesaplayici platform="YouTube" />

      <h2>Sosyal içerik üreticiliği istisnası nasıl çalışır?</h2>
      <p>Gelir Vergisi Kanunu'nun mükerrer 20/B maddesine göre, sosyal ağ sağlayıcıları üzerinden içerik üreterek kazanç elde edenler gelir vergisinden istisnadır. Şart, faaliyete ilişkin hasılatın tamamının Türkiye'de kurulu bir bankada açılan özel hesaptan tahsil edilmesidir. Banka bu hesaba yatan hasılat üzerinden %15 gelir vergisi tevkifatı yapar ve bu kesinti nihai vergi olur; ayrıca yıllık beyanname verilmez.</p>

      <h2>2026 sınırı ne kadar?</h2>
      <p>İstisnadan yararlanmak için yıllık hasılatın, gelir vergisi tarifesinin dördüncü gelir dilimindeki tutarı aşmaması gerekir. Bu tutar 2026 için 5.300.000 TL'dir. Sınır aşılırsa istisna tamamen kaybolur, kazancın tamamı yıllık beyannameyle tarifeye tabi olur ve banka tarafından kesilen stopaj hesaplanan vergiden mahsup edilir.</p>

      <h2>Hangi gelirler kapsamda?</h2>
      <p>Reklam gelirleri, kanal üyelikleri, bağış ve benzeri kazançlar ile sponsorluk ve ürün tanıtımı gelirleri bu kapsamda birlikte değerlendirilir. YouTube dışındaki sosyal ağlardan elde edilen kazançlar da aynı sınıra dahil olur.</p>

      <h2>Şirket kurmak gerekir mi? KDV ödenir mi?</h2>
      <p>İstisna kapsamındaysanız mükellefiyet tesis ettirmeniz, defter tutmanız ve fatura düzenlemeniz gerekmez. Bu kazançlar Katma Değer Vergisi Kanunu'nun 17/4-a maddesi kapsamında KDV'den de istisnadır. Sınır aşıldığında ise genel hükümler geçerli olur.</p>

      <h2>Sınırı aşarsam ne yapmalıyım?</h2>
      <p>Bu durumda gelir vergisi mükellefiyeti açtırmanız ve beyanname vermeniz gerekir. Vergi yükünüzü <Link href="/gelir-vergisi-hesaplama">gelir vergisi hesaplama</Link>, şartları sağlıyorsanız avantajınızı <Link href="/genc-girisimci-istisnasi">genç girişimci istisnası</Link> sayfasından görebilirsiniz. Mükellefiyetin aylık maliyeti için <Link href="/sahis-sirketi-maliyeti">şahıs şirketi maliyeti</Link> sayfasına bakın.</p>

      <Kaynaklar sayfa="youtube" />
    </>
  );
}
