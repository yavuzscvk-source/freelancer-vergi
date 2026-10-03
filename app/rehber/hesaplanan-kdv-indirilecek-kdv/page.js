import Link from "next/link";
import Kaynaklar from "../../Kaynaklar";
import { sayfa } from "../../../lib/seo";

export const metadata = sayfa({
  baslik: "Hesaplanan KDV, İndirilecek KDV ve Ödenecek KDV Nedir?",
  aciklama: "Hesaplanan KDV nedir, indirilecek KDV nedir, ödenecek KDV nasıl bulunur? Şahıs şirketi olan freelancer için örnekli anlatım, devreden KDV ve beyan tarihi.",
  yol: "/rehber/hesaplanan-kdv-indirilecek-kdv",
});

export default function Yazi() {
  return (
    <>
      <h1>Hesaplanan KDV, indirilecek KDV ve ödenecek KDV nedir?</h1>
      <p className="lead">Üç kavram aslında tek bir çıkarma işlemidir: sattığınız hizmette topladığınız KDV'den, iş için ödediğiniz KDV'yi düşersiniz, farkı devlete ödersiniz.</p>

      <h2>Hesaplanan KDV nedir?</h2>
      <p>Verdiğiniz hizmetin bedeli üzerinden hesapladığınız ve müşteriden tahsil ettiğiniz KDV'dir; makbuz veya faturadaki KDV satırıdır. KDV hariç 100.000 TL'lik bir iş için %20 ile 20.000 TL hesaplanan KDV doğar. Bu para sizin değildir; devlet adına topladığınız tutardır.</p>

      <h2>İndirilecek KDV nedir?</h2>
      <p>İşinizle ilgili yaptığınız harcamalarda, satıcının faturasında ödediğiniz KDV'dir. Mali müşavir ücreti, ortak ofis üyeliği, internet ve telefon gibi giderlerin faturasındaki KDV bu kapsamdadır. Bu tutarı hesaplanan KDV'den düşebilirsiniz.</p>

      <h2>Hangi KDV indirilebilir?</h2>
      <p>İndirim için harcamanın işle ilgili olması ve KDV'yi gösteren fatura veya belgeyle belgelendirilmesi gerekir. Kişisel harcamalara ve kanunen kabul edilmeyen giderlere ait KDV indirilemez; bazı kalemlerde ek kısıtlamalar da vardır. Hangi harcamanın gider yazılabileceğini <Link href="/rehber/hangi-giderler-yazilabilir">gider rehberinde</Link> anlattık, kesin durum için mali müşavirinize danışın.</p>

      <h2>Ödenecek KDV nasıl bulunur?</h2>
      <p>Formül basittir: ödenecek KDV = hesaplanan KDV − indirilecek KDV. Örnek bir ay:</p>
      <div className="card">
        <div className="row"><span>Verilen hizmet (KDV hariç)</span><span>100.000 TL</span></div>
        <div className="row"><span>Hesaplanan KDV (%20)</span><span>20.000 TL</span></div>
        <div className="row"><span>Mali müşavir faturası KDV'si (3.000 TL + KDV)</span><span>600 TL</span></div>
        <div className="row"><span>Ortak ofis faturası KDV'si (8.000 TL + KDV)</span><span>1.600 TL</span></div>
        <div className="row"><span>İnternet faturası KDV'si (1.500 TL + KDV)</span><span>300 TL</span></div>
        <div className="row"><span>Toplam indirilecek KDV</span><span>2.500 TL</span></div>
        <div className="row total"><span>Ödenecek KDV</span><span>17.500 TL</span></div>
      </div>

      <h2>İndirilecek KDV fazla çıkarsa?</h2>
      <p>İndirilecek KDV hesaplanan KDV'den büyükse ödeme çıkmaz, fark sonraki döneme devreder; buna devreden KDV denir. Örneğin hesaplanan KDV 4.000 TL, indirilecek KDV 6.000 TL ise 2.000 TL devreden KDV oluşur ve gelecek ayın hesabında düşülür. Hizmet ihracatı gibi KDV'den istisna işlemlerde devreden KDV'nin iadesi ayrı şartlara bağlıdır, bu konuda mali müşavirinize danışın.</p>

      <h2>KDV beyannamesi ne zaman verilir?</h2>
      <p>KDV dönemi genellikle aylıktır. Beyanname, dönemi izleyen ayın 28'inci günü sonuna kadar verilir ve ödenecek vergi aynı süre içinde yatırılır. İstisnai durumlarda dönem farklı olabileceği için kendi dönemlerinizi mali müşavirinizden teyit edin.</p>

      <h2>Freelancer için pratik uyarılar</h2>
      <p>Tahsil ettiğiniz KDV'yi kendi geliriniz saymayın; her ay devlete ödeyeceğiniz tutarın içinde olduğunu unutmayın. Makbuzdaki tutarı brüt ve KDV olarak ayırmak için <Link href="/kdv-hesaplama">KDV hesaplama</Link>, stopajla birlikte görmek için <Link href="/serbest-meslek-makbuzu">serbest meslek makbuzu hesaplama</Link> aracını kullanabilirsiniz. Müşteriniz kamu kurumu veya banka gibi bir alıcıysa KDV'nin bir kısmını kendisi öder; bunun için <Link href="/kdv-tevkifati-hesaplama">KDV tevkifatı hesaplama</Link> sayfasına bakın.</p>

      <Kaynaklar sayfa="rehberKdv" />
    </>
  );
}
