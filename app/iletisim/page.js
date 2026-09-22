import { sayfa } from "../../lib/seo";

export const metadata = sayfa({
  baslik: "İletişim",
  aciklama: "Freelancer Vergi ile iletişime geçin: soru, öneri ve hata bildirimleri.",
  yol: "/iletisim",
});



export default function Iletisim() {
  return (
    <>
      <h1>İletişim</h1>
      <p>Soru, öneri, hata bildirimi veya iş birliği teklifleri için e-posta ile ulaşabilirsiniz.</p>

      <div className="card">
        <strong>E-posta</strong>
        <div><a href="mailto:freelancervergi@gmail.com">freelancervergi@gmail.com</a></div>
      </div>

      <p className="muted">Kişisel vergi durumunuzla ilgili danışmanlık veremiyoruz; bu tür sorular için bir mali müşavire başvurmanızı öneririz. Hesaplamalarda bir hata fark ederseniz ise mutlaka yazın, en kısa sürede düzeltiriz.</p>
    </>
  );
}
