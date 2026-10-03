import Link from "next/link";
import Kaynaklar from "../../Kaynaklar";
import { sayfa } from "../../../lib/seo";

export const metadata = sayfa({
  baslik: "e-Serbest Meslek Makbuzu (e-SMM) Nasıl Kesilir, Başvuru Nasıl Yapılır?",
  aciklama: "Elektronik serbest meslek makbuzu (e-SMM) nedir, başvurusu nasıl yapılır, nasıl kesilir? GİB portalı, özel entegratör, stopaj, KDV ve sık yapılan hatalar.",
  yol: "/rehber/e-smm-nasil-kesilir",
});

export default function Yazi() {
  return (
    <>
      <h1>e-Serbest meslek makbuzu (e-SMM) nasıl kesilir?</h1>
      <p className="lead">Elektronik serbest meslek makbuzu, kağıt makbuzun elektronik hâlidir. İçeriği ve hukuki sonucu aynıdır, sadece dijital ortamda düzenlenir.</p>

      <h2>e-SMM zorunlu mu?</h2>
      <p>Serbest meslek erbabı için e-SMM uygulamasına geçiş zorunludur; zorunluluk 2020 itibarıyla getirilmiştir. Yeni mükellef olanların faaliyete başladıkları tarihten itibaren üç ay içinde uygulamaya geçmesi gerekir. Güncel süre ve kapsam için GİB'i veya mali müşavirinizi esas alın.</p>

      <h2>e-SMM başvurusu nasıl yapılır?</h2>
      <p>Önce bağlı olduğunuz vergi dairesinde serbest meslek mükellefiyetinin açılmış olması gerekir. Ardından e-SMM'yi kullanmanın üç yolu vardır:</p>
      <ul>
        <li><strong>GİB portalı:</strong> Gelir İdaresi Başkanlığı'nın ücretsiz sunduğu temel sistemdir. Az sayıda makbuz kesenler için uygundur.</li>
        <li><strong>Özel entegratör:</strong> GİB'den izin almış yazılım firmaları üzerinden makbuz kesersiniz. Genellikle ücretlidir, muhasebe ve tahsilat takibi gibi ek özellikler sunar.</li>
        <li><strong>Doğrudan entegrasyon:</strong> Kendi yazılımınızı GİB sistemine bağlarsınız. Daha çok yazılım geliştirme kapasitesi olanlar için uygundur.</li>
      </ul>
      <p>Başvuru, e-imza veya mali mühür kullanılarak yapılır. E-imzası henüz olmayanlar için GİB, İnteraktif Vergi Dairesi'ndeki "Elektronik Serbest Meslek Makbuzu Başvuru Talebi" bölümünden kullanıcı kodu ve şifreyle başvuru imkânı sunmuştur. Başvuru onaylandıktan ve aktivasyon tamamlandıktan sonra makbuz kesmeye başlayabilirsiniz. Yöntemler zamanla değişebileceği için güncel süreci GİB'den veya mali müşavirinizden teyit edin.</p>

      <h2>e-SMM ne zaman düzenlenir?</h2>
      <p>Serbest meslek makbuzunda tahsil esası geçerlidir; makbuz parayı aldığınız anda düzenlenir. İşi bitirmeniz tek başına makbuz kesmeyi gerektirmez, ödemeyi almanız gerekir. Bu yüzden ay sonunda tahsil edilmemiş işler o ayın kazancına girmez.</p>

      <h2>Makbuzda neler yer alır?</h2>
      <p>Tarih, sizin ve müşterinizin bilgileri, hizmetin açıklaması, brüt tutar, varsa stopaj, KDV ve tahsil edilen net tutar bulunur. Tutarları <Link href="/serbest-meslek-makbuzu">serbest meslek makbuzu hesaplama</Link> aracıyla önceden hesaplayıp kontrol edebilirsiniz.</p>

      <h2>Stopaj hangi durumda kesilir?</h2>
      <p>Karşı taraf vergi kesintisi yapmakla yükümlü bir şirket veya kurumsa brüt tutar üzerinden %20 stopaj keser ve bunu sizin adınıza vergi dairesine öder. Müşteriniz bireysel bir kişiyse stopaj kesilmez. Yurt dışındaki firmalar da Türkiye'de stopaj yapmaz.</p>

      <h2>e-SMM nasıl kesilir, adım adım</h2>
      <p>Seçtiğiniz sisteme (GİB portalı veya entegratör) giriş yapıp yeni makbuz oluşturma bölümüne geçersiniz. Müşterinin kimlik veya vergi bilgilerini, hizmet açıklamasını ve brüt tutarı girersiniz. Stopaj ve KDV seçeneklerini müşterinizin durumuna göre işaretlersiniz, sistem tutarları hesaplar. Bilgileri kontrol edip makbuzu onaylarsınız ve müşteriye elektronik olarak iletirsiniz. Ekran adları zamanla değişebilir, sıra ise aynıdır.</p>

      <h2>Sık yapılan hatalar</h2>
      <p>En yaygın hata, net ve brüt tutarın karıştırılmasıdır. Müşteriyle "10.000 TL" diye anlaşıp bunun brüt mü net mi olduğunu konuşmamak, elinize geçen parayı ciddi şekilde değiştirir. İkinci sık hata, tahsilat gerçekleşmeden makbuz düzenlemek; bu, kazancı olduğundan erken beyan etmenize yol açar. Üçüncüsü, KDV'yi kendi geliriniz sanmaktır; o tutarı devlete beyan edersiniz. Ayrıntı için <Link href="/kdv-hesaplama">KDV hesaplama</Link> sayfasına bakın.</p>

      <h2>Fatura mı makbuz mu?</h2>
      <p>Faaliyetiniz ticari kazanç kapsamındaysa makbuz değil fatura düzenlersiniz. Ayrımı <Link href="/rehber/fatura-mi-makbuz-mu">fatura mı makbuz mu</Link> yazısında anlattık.</p>

      <Kaynaklar sayfa="rehberEsmm" />
    </>
  );
}
