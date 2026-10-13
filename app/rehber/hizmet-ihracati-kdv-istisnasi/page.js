import Link from "next/link";
import Kaynaklar from "../../Kaynaklar";
import { sayfa } from "../../../lib/seo";

export const metadata = sayfa({
  baslik: "Yurt Dışına Hizmette KDV İstisnası: Yazılımcı ve Tasarımcılar İçin Rehber",
  aciklama: "Yurt dışındaki müşteriye kesilen faturada KDV olur mu? KDV Kanunu 11/1-a hizmet ihracatı istisnasının şartları, faturaya yazılacaklar ve beyanname.",
  yol: "/rehber/hizmet-ihracati-kdv-istisnasi",
});

export default function Yazi() {
  return (
    <>
      <h1>Yurt dışına hizmette KDV istisnası</h1>
      <p className="lead">Yurt dışındaki bir müşteriye verdiğiniz yazılım, tasarım veya danışmanlık hizmeti şartları sağlarsa KDV'siz faturalanır.</p>

      <h2>Hangi hüküm?</h2>
      <p>KDV Kanunu'nun 11/1-a maddesi, ihracat teslimlerini ve hizmet ihracatını KDV'den istisna eder. Bu bir <strong>tam istisnadır</strong>: faturaya KDV eklenmez, ama işle ilgili yüklendiğiniz KDV'yi indirebilir veya iade alabilirsiniz.</p>

      <h2>Şartlar</h2>
      <ul>
        <li><strong>Müşteri yurt dışında olmalı.</strong> İkametgâhı, iş yeri, kanuni merkezi veya iş merkezi yurt dışında olan bir kişi ya da şirket. Türk bir şirketin yurt dışındaki bağımsız şubesi de sayılır.</li>
        <li><strong>Hizmetten yurt dışında yararlanılmalı.</strong> Yazdığınız yazılım veya yaptığınız tasarım yurt dışında kullanılmalı. Hizmetten Türkiye'de yararlanılıyorsa müşteri yurt dışında olsa bile istisna uygulanmaz.</li>
        <li><strong>Fatura yurt dışındaki müşteri adına düzenlenmeli.</strong> Hizmet ihracı bu faturayla belgelenir.</li>
      </ul>

      <h2>Faturaya ne yazılır?</h2>
      <p>Fatura KDV'siz düzenlenir ve istisnanın dayanağı belirtilir, örneğin "3065 sayılı KDV Kanunu 11/1-a maddesi uyarınca KDV'den istisnadır". e-Arşiv veya e-Fatura programlarında istisna türü olarak hizmet ihracatı seçilir; kodu 302'dir. Döviz cinsinden faturada TL karşılığı fatura tarihindeki kurla hesaplanır; bunun için <Link href="/doviz-fatura-tl-karsiligi">döviz faturası TL karşılığı</Link> aracını kullanabilirsiniz.</p>

      <h2>Beyanname tarafı</h2>
      <p>Hizmet ihracatı aylık KDV beyannamesinde tam istisna kapsamındaki işlemler bölümünde gösterilir. Hesaplanan KDV çıkmaz. Aynı ay içinde bilgisayar, yazılım lisansı veya mali müşavir faturası gibi giderlerde ödediğiniz KDV indirilecek KDV olarak yazılır ve devreder ya da şartlarıyla iade alınır. KDV'nin beyan mantığını <Link href="/rehber/hesaplanan-kdv-indirilecek-kdv">hesaplanan ve indirilecek KDV</Link> yazısında anlattık.</p>

      <h2>Gelir vergisi indirimiyle karıştırmayın</h2>
      <p>KDV istisnası ile gelir vergisindeki <Link href="/hizmet-ihracati-vergi-indirimi">hizmet ihracatı kazanç indirimi</Link> ayrı düzenlemelerdir. Kazanç indirimi 2026'dan itibaren %100'dür ve hizmet bedelinin Türkiye'ye getirilmesi gibi kendi şartları vardır. Birinin şartlarını sağlamanız diğerini otomatik olarak getirmez. Banka dekontlarını, sözleşmeleri ve müşteriyle yazışmaları her iki istisna için de saklayın.</p>

      <h2>Platformlar ve gri alanlar</h2>
      <ul>
        <li><strong>Upwork, Fiverr gibi platformlar:</strong> Hizmeti platformdaki müşteriye verirsiniz ama ödeme platformdan gelir. Faturanın kime düzenleneceği ve belgelerin nasıl tutulacağı konusunda mali müşavirinizle netleşin.</li>
        <li><strong>Türkiye'de de kullanılan ürünler:</strong> Geliştirdiğiniz uygulama veya site Türkiye'deki kullanıcılara da hizmet veriyorsa "yurt dışında yararlanma" şartı tartışmalı hale gelebilir.</li>
        <li><strong>Türkiye'deki şirketin yurt dışı adresi:</strong> Müşteri Türkiye'de faaliyet gösteren bir şirketse istisna genellikle uygulanmaz.</li>
      </ul>
      <p>Emin olmadığınız durumlarda Gelir İdaresi'nden özelge istenebilir.</p>

      <Kaynaklar sayfa="rehberKdvIstisna" />
    </>
  );
}
