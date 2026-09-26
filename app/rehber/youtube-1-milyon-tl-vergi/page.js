import Link from "next/link";
import Kaynaklar from "../../Kaynaklar";
import { sayfa } from "../../../lib/seo";

export const metadata = sayfa({
  baslik: "YouTube'dan Yılda 1,2 Milyon TL Kazanırsam Ne Kadar Vergi Öderim?",
  aciklama: "Sosyal içerik üreticiliği istisnasıyla YouTube kazancının vergisi: %15 banka stopajı, 5.300.000 TL sınırı ve sınır aşılırsa ne değişir?",
  yol: "/rehber/youtube-1-milyon-tl-vergi",
});

export default function Yazi() {
  return (
    <>
      <h1>YouTube'dan yılda 1,2 milyon TL kazanırsam ne kadar vergi öderim?</h1>
      <p className="lead">İçerik üreticilerinin vergisi diğer freelancer'lardan tamamen farklı çalışıyor. Şartlar sağlanırsa beyanname bile verilmiyor.</p>

      <h2>Senaryo</h2>
      <div className="card">
        <div className="row"><span>Yıllık YouTube hasılatı</span><span>1.200.000 TL</span></div>
        <div className="row"><span>Tahsilat</span><span>Özel banka hesabından</span></div>
        <div className="row"><span>Banka stopajı</span><span>%15</span></div>
      </div>

      <h2>Sonuç: tek kesinti, tek işlem</h2>
      <p>Hasılatın tamamı Türkiye'de açılmış özel bir banka hesabından tahsil edildiği için kazanç gelir vergisinden istisnadır. Banka hasılat üzerinden %15 kesinti yapar ve bu nihai vergidir.</p>
      <div className="card">
        <div className="row"><span>Brüt hasılat</span><span>1.200.000 TL</span></div>
        <div className="row"><span>Banka stopajı (%15)</span><span>180.000 TL</span></div>
        <div className="row"><span>Beyanname</span><span>Gerekmiyor</span></div>
        <div className="row total"><span>Elinize kalan</span><span>1.020.000 TL</span></div>
      </div>
      <p>Bu kapsamda mükellefiyet açtırmak, defter tutmak ve fatura düzenlemek gerekmez. Kazanç ayrıca KDV'den de istisnadır.</p>

      <h2>Karşılaştırma: aynı parayı serbest meslek olarak kazansaydınız</h2>
      <p>Aynı 1.200.000 TL'yi danışmanlık veya yazılım hizmetiyle kazanan bir şahıs şirketi sahibi, giderlerini ve Bağ-Kur primini düştükten sonra kalan tutar üzerinden artan oranlı tarifeye göre vergi öderdi; üstelik KDV ve geçici vergi yükümlülükleri de devam ederdi. İçerik üreticiliği istisnası bu yüzden oldukça avantajlıdır.</p>

      <h2>Sınırı aşarsanız ne olur?</h2>
      <p>İstisna için yıllık hasılatın 2026'da 5.300.000 TL'yi aşmaması gerekir. Sınır aşılırsa istisna kısmen değil, tamamen kaybolur. Örneğin 6.000.000 TL hasılat ve 200.000 TL gider olduğunda matrah 5.800.000 TL olur, hesaplanan vergi yaklaşık 1.937.500 TL'ye çıkar. Banka tarafından kesilen 900.000 TL stopaj bundan mahsup edilir ve beyannamede yaklaşık 1.037.500 TL daha ödenir.</p>

      <h2>Tüm platformlar aynı kefede</h2>
      <p>Sınır her platform için ayrı değil, toplam hasılat üzerinden uygulanır. YouTube, Instagram, TikTok ve Kick gelirlerinizin toplamına bakılır. Hesap için <Link href="/youtube-vergi-hesaplama">YouTube gelir vergisi</Link> veya <Link href="/instagram-vergi-hesaplama">Instagram, TikTok ve Kick</Link> aracını kullanabilirsiniz.</p>

      <h2>En kritik nokta</h2>
      <p>İstisnanın kalbi banka hesabı şartıdır. Hasılatın bir kısmı başka yollarla tahsil edilirse istisna riske girer. Hesabı açarken bankanıza bu kapsamda hesap açtığınızı belirtmeniz gerekir. Sponsorluk gelirleri de bu hesaba yatırılmalıdır.</p>

      <Kaynaklar sayfa="rehberYoutube" />
    </>
  );
}
