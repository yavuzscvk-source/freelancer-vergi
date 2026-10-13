import Link from "next/link";
import Kaynaklar from "../../Kaynaklar";
import { sayfa } from "../../../lib/seo";

export const metadata = sayfa({
  baslik: "Freelancer Vergi Takvimi 2027: Beyanname ve Ödeme Tarihleri",
  aciklama: "Şahıs şirketi olan freelancer için 2027 vergi takvimi: yıllık gelir vergisi beyannamesi, geçici vergi dönemleri, aylık KDV ve Bağ-Kur ödeme günleri.",
  yol: "/rehber/vergi-takvimi-2027",
});

const YILLIK = [
  ["17 Şubat 2027", "2026 yılı 4. dönem geçici vergi beyanı ve ödemesi (Ekim–Aralık 2026)"],
  ["1–31 Mart 2027", "2026 yılı gelir vergisi beyannamesi"],
  ["31 Mart 2027", "Yıllık gelir vergisinin 1. taksiti"],
  ["20 Mayıs 2027", "2027 yılı 1. dönem geçici vergi (Ocak–Mart). Normal tarih 17 Mayıs, Kurban Bayramı nedeniyle kayar"],
  ["31 Temmuz 2027", "Yıllık gelir vergisinin 2. taksiti. Cumartesiye denk geldiği için ilk iş gününe kayması beklenir"],
  ["17 Ağustos 2027", "2027 yılı 2. dönem geçici vergi (Nisan–Haziran)"],
  ["17 Kasım 2027", "2027 yılı 3. dönem geçici vergi (Temmuz–Eylül)"],
  ["17 Şubat 2028", "2027 yılı 4. dönem geçici vergi (Ekim–Aralık)"],
];

const AYLIK = [
  ["Her ayın 26'sı", "Muhtasar ve prim hizmet beyannamesi (çalışanınız varsa ya da kira stopajı kesiyorsanız)"],
  ["Her ayın 28'i", "Bir önceki ayın KDV beyannamesi ve ödemesi"],
  ["Her ayın son günü", "O ayın Bağ-Kur primi"],
];

function Tablo({ satirlar }) {
  return (
    <div className="card">
      {satirlar.map(([t, a]) => (
        <div className="row" key={t + a}><span><strong>{t}</strong></span><span style={{ textAlign: "left", maxWidth: "62%" }}>{a}</span></div>
      ))}
    </div>
  );
}

export default function Yazi() {
  return (
    <>
      <h1>Freelancer vergi takvimi 2027</h1>
      <p className="lead">Şahıs şirketi olan bir serbest çalışanın 2027'de kaçırmaması gereken beyanname ve ödeme tarihleri.</p>

      <h2>Yıl içindeki büyük tarihler</h2>
      <Tablo satirlar={YILLIK} />
      <p>Dördüncü dönem geçici vergi 2022'de kaldırılmıştı. 7566 sayılı Kanun ile yeniden getirildi; 2026 yılının dördüncü dönemi için ilk beyan Şubat 2027'de verilecek. Geçici verginin nasıl hesaplandığını <Link href="/rehber/gecici-vergi-nedir">geçici vergi nedir</Link> yazısında anlattık.</p>

      <h2>Her ay tekrarlananlar</h2>
      <Tablo satirlar={AYLIK} />
      <p>Serbest meslek makbuzundaki stopajı siz değil, makbuzu kestiğiniz şirket beyan eder. Bu yüzden çalışanı olmayan bir freelancer çoğu ay muhtasar beyanname vermez. KDV beyannamesi ise hiç işlem olmayan aylarda da verilir.</p>

      <h2>Tarih tatile denk gelirse</h2>
      <p>Beyanname veya ödeme süresinin son günü resmî tatile ya da hafta sonuna denk gelirse süre izleyen ilk iş gününün sonunda biter. 2027'de 17 Mayıs Kurban Bayramı'na denk geliyor; bayram 19 Mayıs'ta bittiği için birinci dönem geçici vergi 20 Mayıs'a kayar. Gelir İdaresi bazen ayrıca süre uzatımı da ilan eder. Son günü beklemek yerine işlemi birkaç gün önce yapmak en güvenlisidir.</p>

      <h2>Nakit planı nasıl yapılır?</h2>
      <p>En sık yapılan hata, mart ayında tek seferde büyük bir vergi çıkacağını unutmak ve yıl içindeki geçici vergileri bunun üzerine eklemektir. Her tahsilatın bir kısmını ayrı bir hesapta tutmak işi kolaylaştırır. Ne kadar ayırmanız gerektiğini <Link href="/net-gelir-hesaplama">net gelir hesaplama</Link> ve <Link href="/gelir-vergisi-hesaplama">gelir vergisi hesaplama</Link> araçlarıyla bulabilirsiniz.</p>

      <p className="muted">Tarihler 13 Ekim 2026 itibarıyla geçerli mevzuata göre hazırlanmıştır. Gelir İdaresi'nin süre uzatımı ve tatil düzenlemeleri tarihleri değiştirebilir.</p>

      <Kaynaklar sayfa="rehberTakvim" />
    </>
  );
}
