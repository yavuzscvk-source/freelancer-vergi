import Link from "next/link";
import Kaynaklar from "../../Kaynaklar";
import { sayfa } from "../../../lib/seo";

export const metadata = sayfa({
  baslik: "Upwork'ten Yılda 50.000 Dolar Kazanırsam Ne Kadar Vergi Öderim?",
  aciklama: "Adım adım örnek hesap: 50.000 dolarlık Upwork kazancından komisyon, Bağ-Kur ve vergi düşünce elinize ne kalır? Hizmet ihracatı indirimli ve indirimsiz karşılaştırma.",
  yol: "/rehber/upwork-50-bin-dolar-vergi",
});

export default function Yazi() {
  return (
    <>
      <h1>Upwork'ten yılda 50.000 dolar kazanırsam ne kadar vergi öderim?</h1>
      <p className="lead">Somut bir örnek üzerinden adım adım gidelim: parayı kim kesiyor, geriye ne kalıyor?</p>

      <h2>Senaryonun varsayımları</h2>
      <p>Hesabı adım adım takip edebilmeniz için sabit varsayımlarla ilerliyoruz. Kendi rakamlarınız farklıysa yazının sonundaki araçlarla aynı hesabı yapabilirsiniz.</p>
      <div className="card">
        <div className="row"><span>Yıllık Upwork kazancı</span><span>50.000 USD</span></div>
        <div className="row"><span>Upwork komisyonu</span><span>%10</span></div>
        <div className="row"><span>Para çekme masrafları</span><span>60 USD</span></div>
        <div className="row"><span>USD/TL kuru (varsayım)</span><span>48,00</span></div>
        <div className="row"><span>Yıllık işle ilgili giderler</span><span>120.000 TL</span></div>
        <div className="row"><span>Mükellefiyet</span><span>Şahıs şirketi</span></div>
        <div className="row"><span>Bağ-Kur beyanı</span><span>Alt sınırdan</span></div>


      </div>
      <p className="muted">Kur her gün değişir; buradaki 48,00 yalnızca örnek bir varsayımdır.</p>

      <h2>Adım 1: Platform kesintileri</h2>
      <p>50.000 dolardan %10 komisyon, yani 5.000 dolar kesilir. Para çekme masraflarıyla birlikte elinize geçen tutar yaklaşık 44.940 dolar olur. Varsayılan kurla bu 2.157.120 TL'ye karşılık gelir. Komisyon ve transfer masrafları işle ilgili gider sayılır, yani vergi matrahınızı azaltır.</p>

      <h2>Adım 2: Giderler ve Bağ-Kur</h2>
      <p>Yıllık 120.000 TL işle ilgili gideri düştüğümüzde kazanç 2.037.120 TL kalır. Bağ-Kur primi alt sınırdan ve 5 puan indirimli hesapla aylık 10.156,73 TL, yıllık 121.881 TL tutar. Ödenen primler de matrahtan indirilir ve geriye 1.915.239 TL kalır.</p>

      <h2>Adım 3: Buradan sonrası tek bir şeye bağlı</h2>
      <p>Hizmet ihracatı indirimi şartlarını sağlıyor musunuz? Cevap, ödeyeceğiniz vergiyi tamamen değiştiriyor.</p>

      <h3>Durum A: Şartlar sağlanıyor</h3>
      <p>Yazılım, tasarım veya mühendislik gibi kanunda sayılan bir hizmeti yurt dışındaki müşteriye veriyor, belgeyi ona düzenliyor ve kazancı beyanname tarihine kadar Türkiye'ye getiriyorsanız indirim oranı 2026 itibarıyla %100'dür.</p>
      <div className="card">
        <div className="row"><span>Vergi matrahı</span><span>0 TL</span></div>
        <div className="row"><span>Gelir vergisi</span><span>0 TL</span></div>
        <div className="row total"><span>Yıllık net</span><span>1.915.239 TL</span></div>
        <div className="row"><span>Aylık ortalama</span><span>yaklaşık 159.600 TL</span></div>
      </div>

      <h3>Durum B: Şartlar sağlanmıyor</h3>
      <p>Hizmetiniz kapsam dışıysa veya şartlardan biri eksikse kazanç normal tarifeye tabi olur. 1.915.239 TL matrah için 2026 tarifesine göre hesaplanan vergi yaklaşık 552.834 TL'dir.</p>
      <div className="card">
        <div className="row"><span>Vergi matrahı</span><span>1.915.239 TL</span></div>
        <div className="row"><span>Gelir vergisi</span><span>yaklaşık 552.834 TL</span></div>
        <div className="row total"><span>Yıllık net</span><span>yaklaşık 1.362.405 TL</span></div>
        <div className="row"><span>Aylık ortalama</span><span>yaklaşık 113.500 TL</span></div>
      </div>

      <h2>Aradaki fark: yarım milyon lirayı aşıyor</h2>
      <p>İki senaryo arasındaki fark yaklaşık 553.000 TL. Aynı işi yapan, aynı parayı kazanan iki kişiden biri belge düzenini ve transfer şartını doğru kurduğu için bu tutarı ödemiyor. Yurt dışına çalışan bir freelancer için en kritik konu vergi oranları değil, şartların sağlanıp sağlanmadığıdır. Şart listesini <Link href="/hizmet-ihracati-vergi-indirimi">hizmet ihracatı indirimi</Link> sayfasında bulabilirsiniz.</p>

      <h2>Genç girişimciyseniz</h2>
      <p>29 yaşını doldurmamış ve ilk kez mükellef olduysanız, Durum B'deki matrahtan ayrıca 400.000 TL istisna düşülür. Vergi yaklaşık 412.834 TL'ye iner, yıllık net 1.502.405 TL civarına çıkar. Durum A'da zaten vergi çıkmadığı için istisnanın ek etkisi olmaz. Kendi rakamlarınızla denemek için <Link href="/genc-girisimci-istisnasi">genç girişimci istisnası</Link> aracını kullanabilirsiniz.</p>

      <h2>Bu hesaba dahil olmayanlar</h2>
      <p>Örnek sade tutulmuştur. Gerçek hayatta kur farkları, platformun kendi dönüşüm oranı, KDV yükümlülüğü, yıl içinde ödenen geçici vergi ve kişisel gider yapınız sonucu değiştirir. Ayrıca platform üzerinden çalışıldığında müşterinin kim sayılacağı ve belge düzeni tartışmalı olabilir; bu yüzden durumunuzu mali müşavirinizle teyit edin.</p>

      <h2>Kendi rakamlarınızla hesaplayın</h2>
      <p>Kendi kazancınız, komisyon oranınız ve güncel kurla aynı hesabı <Link href="/upwork-vergi-hesaplama">Upwork vergi hesaplama</Link> aracıyla saniyeler içinde yapabilirsiniz. Aylık sabit maliyetiniz için <Link href="/sahis-sirketi-maliyeti">şahıs şirketi maliyeti</Link>, yıl içindeki ödeme takvimi için <Link href="/rehber/gecici-vergi-nedir">geçici vergi</Link> sayfasına bakın.</p>

      <Kaynaklar sayfa="rehberSenaryo" />
    </>
  );
}
