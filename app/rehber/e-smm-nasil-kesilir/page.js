import Link from "next/link";
import Kaynaklar from "../../Kaynaklar";
import { sayfa } from "../../../lib/seo";

export const metadata = sayfa({
  baslik: "E-Serbest Meslek Makbuzu (e-SMM) Nasıl Kesilir?",
  aciklama: "e-SMM nedir, kimler kullanır, nasıl düzenlenir? Stopaj, KDV, tahsilat zamanı ve sık yapılan hatalar.",
  yol: "/rehber/e-smm-nasil-kesilir",
});

export default function Yazi() {
  return (
    <>
      <h1>e-Serbest meslek makbuzu nasıl kesilir?</h1>
      <p className="lead">e-SMM, kağıt makbuzun elektronik hâlidir. İçeriği ve hukuki sonucu aynıdır, sadece dijital ortamda düzenlenir.</p>

      <h2>Ne zaman düzenlenir?</h2>
      <p>Serbest meslek makbuzunda tahsil esası geçerlidir; makbuz parayı aldığınız anda düzenlenir. İşi bitirmeniz tek başına makbuz kesmeyi gerektirmez, ödemeyi almanız gerekir. Bu yüzden ay sonunda tahsil edilmemiş işler o ayın kazancına girmez.</p>

      <h2>Makbuzda neler yer alır?</h2>
      <p>Tarih, sizin ve müşterinizin bilgileri, hizmetin açıklaması, brüt tutar, varsa stopaj, KDV ve tahsil edilen net tutar bulunur. Tutarları <Link href="/serbest-meslek-makbuzu">serbest meslek makbuzu hesaplama</Link> aracıyla önceden hesaplayıp kontrol edebilirsiniz.</p>

      <h2>Stopaj hangi durumda kesilir?</h2>
      <p>Karşı taraf vergi kesintisi yapmakla yükümlü bir şirket veya kurumsa brüt tutar üzerinden %20 stopaj keser ve bunu sizin adınıza vergi dairesine öder. Müşteriniz bireysel bir kişiyse stopaj kesilmez. Yurt dışındaki firmalar da Türkiye'de stopaj yapmaz.</p>

      <h2>Nasıl düzenlenir?</h2>
      <p>e-SMM, GİB portalı üzerinden veya GİB'den izin almış özel entegratör ya da muhasebe yazılımları aracılığıyla düzenlenir. Mali müşaviriniz genellikle hangi yöntemi kullanacağınızı belirler ve ilk kurulumu yapar. Düzenlenen belge müşteriye elektronik olarak iletilir, ayrıca kağıt çıktı şartı yoktur.</p>

      <h2>Sık yapılan hatalar</h2>
      <p>En yaygın hata, net ve brüt tutarın karıştırılmasıdır. Müşteriyle "10.000 TL" diye anlaşıp bunun brüt mü net mi olduğunu konuşmamak, elinize geçen parayı ciddi şekilde değiştirir. İkinci sık hata, tahsilat gerçekleşmeden makbuz düzenlemek; bu, kazancı olduğundan erken beyan etmenize yol açar. Üçüncüsü, KDV'yi kendi geliriniz sanmaktır; o tutarı devlete beyan edersiniz. Ayrıntı için <Link href="/kdv-hesaplama">KDV hesaplama</Link> sayfasına bakın.</p>

      <h2>Fatura mı makbuz mu?</h2>
      <p>Faaliyetiniz ticari kazanç kapsamındaysa makbuz değil fatura düzenlersiniz. Ayrımı <Link href="/rehber/fatura-mi-makbuz-mu">fatura mı makbuz mu</Link> yazısında anlattık.</p>

      <Kaynaklar sayfa="rehberBelge" />
    </>
  );
}
