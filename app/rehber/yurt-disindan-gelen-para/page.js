import Link from "next/link";
import Kaynaklar from "../../Kaynaklar";
import { sayfa } from "../../../lib/seo";

export const metadata = sayfa({
  baslik: "Yurt Dışından Para Gelirse Vergi Ödenir mi?",
  aciklama: "Yurt dışı müşterilerden gelen ödemelerin vergisi, hizmet ihracatı indirimi, KDV istisnası ve Wise, Payoneer gibi hesaplarda bekleyen paralar.",
  yol: "/rehber/yurt-disindan-gelen-para",
});

export default function Yazi() {
  return (
    <>
      <h1>Yurt dışından para gelirse vergi ödenir mi?</h1>
      <p className="lead">Evet, Türkiye'de yerleşikseniz kazancınız nerede doğarsa doğsun Türkiye'de beyana tabidir. Ama ciddi bir avantaj var.</p>

      <h2>Dünya geliri esası</h2>
      <p>Türkiye'de yerleşik gerçek kişiler tam mükelleftir ve hem yurt içinde hem yurt dışında elde ettikleri kazançların tamamı üzerinden vergilendirilir. Müşterinin yabancı olması, ödemenin dolar gelmesi veya paranın yurt dışında durması bu sonucu değiştirmez.</p>

      <h2>Para platformda beklerse ne olur?</h2>
      <p>Upwork, Payoneer veya benzeri bir hesapta bekleyen para "henüz kazanılmamış" sayılmaz. Serbest meslek kazancında tahsil esası geçerlidir ve tutarın tasarrufunuza geçmesi yeterlidir. Parayı Türkiye'ye hiç getirmemek de vergiyi ortadan kaldırmaz.</p>

      <h2>Asıl avantaj: hizmet ihracatı indirimi</h2>
      <p>Yurt dışındaki müşterilere verilen yazılım, tasarım, mühendislik, mimarlık, veri işleme gibi kanunda sayılan hizmetlerden elde edilen kazançta indirim uygulanır. Bu oran 2026 yılından itibaren %100'e çıkarılmıştır; yani şartları sağlayan kazanç için gelir vergisi doğmaz. Şartlar arasında müşterinin yurt dışında yerleşik olması, hizmetten yurt dışında yararlanılması ve kazancın beyanname tarihine kadar Türkiye'ye transfer edilmesi vardır. Hesaplama için <Link href="/hizmet-ihracati-vergi-indirimi">hizmet ihracatı indirimi</Link> sayfasına bakın.</p>

      <h2>Her iş kapsamda değil</h2>
      <p>Kanun hizmet türlerini tek tek sayar. Sosyal medya danışmanlığı, reklam ve pazarlama gibi hizmetler genellikle kapsam dışı değerlendirilir. Kapsam dışındaysanız kazancınız normal tarifeye göre vergilendirilir; bu durumda <Link href="/gelir-vergisi-hesaplama">gelir vergisi hesaplama</Link> aracını kullanabilirsiniz.</p>

      <h2>KDV tarafı</h2>
      <p>Yurt dışındaki müşteriye verilen ve münhasıran yurt dışında yararlanılan hizmetler, şartları sağlaması halinde hizmet ihracı kapsamında KDV'den istisnadır. Şartlar sağlanmıyorsa KDV hesaplanır. Gelir vergisi indirimi ile KDV istisnası ayrı düzenlemelerdir; biri diğerini otomatik getirmez.</p>

      <h2>Kur ve belge düzeni</h2>
      <p>Döviz olarak elde edilen hasılat, belgenin düzenlendiği tarihteki kur üzerinden Türk lirasına çevrilerek kayda alınır. Platform komisyonları ve transfer masrafları gider olarak dikkate alınabilir. Platform üzerinden çalışanlar için <Link href="/upwork-vergi-hesaplama">Upwork</Link> ve <Link href="/fiverr-vergi-hesaplama">Fiverr</Link> hesaplayıcıları bu kalemleri birlikte gösterir.</p>

      <Kaynaklar sayfa="rehberYurtdisi" />
    </>
  );
}
