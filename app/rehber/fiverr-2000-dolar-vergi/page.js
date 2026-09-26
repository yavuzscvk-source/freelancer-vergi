import Link from "next/link";
import Kaynaklar from "../../Kaynaklar";
import { sayfa } from "../../../lib/seo";

export const metadata = sayfa({
  baslik: "Fiverr'dan Ayda 2.000 Dolar Kazanırsam Ne Kadar Vergi Öderim?",
  aciklama: "Adım adım örnek: Fiverr'da ayda 2.000 dolar kazanan bir freelancer komisyon, Bağ-Kur ve vergiden sonra ne kadar para alır?",
  yol: "/rehber/fiverr-2000-dolar-vergi",
});

export default function Yazi() {
  return (
    <>
      <h1>Fiverr'dan ayda 2.000 dolar kazanırsam ne kadar vergi öderim?</h1>
      <p className="lead">Fiverr'ın %20 komisyonu, Bağ-Kur ve gelir vergisi düşünce geriye ne kalıyor? Adım adım bakalım.</p>

      <h2>Varsayımlar</h2>
      <div className="card">
        <div className="row"><span>Aylık Fiverr kazancı</span><span>2.000 USD</span></div>
        <div className="row"><span>Yıllık brüt</span><span>24.000 USD</span></div>
        <div className="row"><span>Fiverr komisyonu</span><span>%20</span></div>
        <div className="row"><span>Para çekme masrafları</span><span>36 USD</span></div>
        <div className="row"><span>USD/TL kuru (varsayım)</span><span>48,00</span></div>
        <div className="row"><span>Yıllık giderler</span><span>60.000 TL</span></div>
        <div className="row"><span>Mükellefiyet</span><span>Şahıs şirketi</span></div>
        <div className="row"><span>Bağ-Kur beyanı</span><span>Alt sınırdan</span></div>
      </div>

      <h2>Adım 1: Fiverr komisyonu</h2>
      <p>Fiverr her siparişten sabit %20 alır; tutar ne olursa olsun oran değişmez. 24.000 dolarlık yıllık hacimde komisyon 4.800 dolar eder. Para çekme ücretleriyle birlikte elinize geçen tutar yaklaşık 19.164 dolar olur. Varsayılan kurla bu 919.872 TL'dir.</p>

      <h2>Adım 2: Giderler ve Bağ-Kur</h2>
      <p>Yıllık 60.000 TL gider düşüldüğünde kazanç 859.872 TL kalır. Bağ-Kur primi alt sınırdan ve 5 puan indirimli hesapla yıllık 121.881 TL tutar ve matrahtan indirilir. Geriye 737.991 TL kalır.</p>

      <h2>Adım 3: İki senaryo</h2>

      <h3>Durum A: Hizmet ihracatı şartları sağlanıyor</h3>
      <div className="card">
        <div className="row"><span>Gelir vergisi</span><span>0 TL</span></div>
        <div className="row total"><span>Yıllık net</span><span>737.991 TL</span></div>
        <div className="row"><span>Aylık ortalama</span><span>yaklaşık 61.500 TL</span></div>
      </div>

      <h3>Durum B: Şartlar sağlanmıyor</h3>
      <div className="card">
        <div className="row"><span>Vergi matrahı</span><span>737.991 TL</span></div>
        <div className="row"><span>Gelir vergisi</span><span>yaklaşık 161.758 TL</span></div>
        <div className="row total"><span>Yıllık net</span><span>yaklaşık 576.233 TL</span></div>
        <div className="row"><span>Aylık ortalama</span><span>yaklaşık 48.000 TL</span></div>
      </div>

      <h2>Genç girişimciyseniz</h2>
      <p>Durum B'de 400.000 TL istisna düşülürse vergi yaklaşık 58.098 TL'ye iner ve yıllık net 679.893 TL'ye çıkar. Yani genç girişimci istisnası bu gelir seviyesinde yaklaşık 103.660 TL fark yaratır. Kendi rakamlarınızla <Link href="/genc-girisimci-istisnasi">genç girişimci istisnası</Link> aracından bakabilirsiniz.</p>

      <h2>Fiverr ile Upwork arasındaki fark</h2>
      <p>Vergi kuralları ikisinde de aynıdır; tek fark komisyondur. Fiverr sabit %20 keserken Upwork'te oran sözleşmeye göre %0 ile %15 arasında değişir. Aynı brüt kazançta Fiverr'da eline daha az para geçer. Karşılaştırma için <Link href="/rehber/upwork-50-bin-dolar-vergi">Upwork senaryosuna</Link> bakabilirsiniz.</p>

      <h2>Dikkat edilmesi gerekenler</h2>
      <p>Bu hesap sadeleştirilmiştir: kur farkları, KDV yükümlülüğü, yıl içinde ödenen geçici vergi ve kişisel gider yapınız sonucu değiştirir. Platform üzerinden çalışmada müşterinin kim sayılacağı tartışmalı olabileceği için mali müşavirinize danışın. Kendi rakamlarınızla hesap için <Link href="/fiverr-vergi-hesaplama">Fiverr vergi hesaplama</Link> aracını kullanın.</p>

      <Kaynaklar sayfa="rehberFiverr" />
    </>
  );
}
