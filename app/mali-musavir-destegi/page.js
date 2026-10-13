import Link from "next/link";
import Form from "./Form";
import { sayfa } from "../../lib/seo";

export const metadata = sayfa({
  baslik: "Freelancer'lar İçin Mali Müşavir Bulma",
  aciklama: "Şahıs şirketi kuruluşu, yıllık beyanname veya yurt dışı gelir için freelancer'larla çalışan mali müşavirlerden ücretsiz teklif alın.",
  yol: "/mali-musavir-destegi",
});

export default function MaliMusavir() {
  return (
    <>
      <h1>Freelancer'lar İçin Mali Müşavir Bulma</h1>
      <p>Şahıs şirketi kurmak, yurt dışı müşteriden gelen parayı doğru beyan etmek veya yıllık beyannamenizi verdirmek için mali müşavir mi arıyorsunuz? Kısa formu doldurun; durumunuza uygun, freelancer'larla çalışan mali müşavirlerden teklif almanıza yardımcı olalım.</p>

      <Form />

      <h2>Nasıl işliyor?</h2>
      <ol>
        <li>Formu doldurup e-postayı gönderirsiniz.</li>
        <li>Talebinizi, freelancer ve yurt dışı hizmet konusunda deneyimli en fazla 2 mali müşavire iletiriz.</li>
        <li>Mali müşavirler sizinle doğrudan iletişime geçer. Teklif almak ücretsizdir, kabul etmek zorunda değilsiniz.</li>
      </ol>

      <h2>Görüşmeden önce</h2>
      <p>Aylık muhasebe ve Bağ-Kur maliyetinizi <Link href="/sahis-sirketi-maliyeti">şahıs şirketi maliyeti</Link>, şirket türünü <Link href="/sahis-mi-limited-mi">şahıs mı limited mi</Link>, istisna hakkınızı <Link href="/genc-girisimci-istisnasi">genç girişimci istisnası</Link> araçlarıyla önceden görebilirsiniz.</p>

      <p className="muted">Freelancer Vergi mali müşavirlik hizmeti vermez; yalnızca talebinizi mali müşavirlere iletir. Paylaştığınız bilgiler yalnızca bu amaçla kullanılır. Ayrıntılar için <Link href="/gizlilik-politikasi">gizlilik politikası</Link>.</p>
    </>
  );
}
