import Link from "next/link";
import Hesaplayici from "./Hesaplayici";
import Kaynaklar from "../Kaynaklar";
import { sayfa } from "../../lib/seo";
import { VERGI } from "../../lib/vergi";
import { tl } from "../../lib/format";

const SINIR = tl(VERGI.tevkifat.sinirKdvDahil);

export const metadata = sayfa({
  baslik: "KDV Tevkifatı Hesaplama 2026 (Danışmanlık ve Serbest Meslek)",
  aciklama: "KDV tevkifatı nasıl hesaplanır? Serbest meslek makbuzunda 9/10 tevkifat, stopaj ve hesabınıza geçecek tutarı hesaplayın. Tutar sınırı ve kapsam dahil.",
  yol: "/kdv-tevkifati-hesaplama",
});

export default function KdvTevkifati() {
  return (
    <>
      <h1>KDV tevkifatı hesaplama 2026</h1>
      <p className="lead">KDV tevkifatı, KDV'nin bir kısmını sizin yerinize müşterinizin devlete ödemesidir. Serbest meslek makbuzunda hesabınıza geçen tutarı değiştirir.</p>

      <Hesaplayici />

      <h2>KDV tevkifatı nedir?</h2>
      <p>Kısmi tevkifatta hizmeti alan taraf, makbuz veya faturadaki KDV'nin belirli bir oranını satıcıya ödemez; kendisi beyan edip vergi dairesine yatırır. Etüt, plan-proje, danışmanlık, denetim ve benzeri hizmetlerde oran 9/10'dur: hesaplanan KDV'nin onda dokuzunu alıcı öder, size yalnızca onda biri kalır.</p>

      <h2>Hangi durumlarda uygulanır?</h2>
      <p>Tevkifat her müşteri için değil, tebliğde belirlenmiş alıcılar için geçerlidir: kamu kurum ve kuruluşları, döner sermayeli kuruluşlar, kamu kurumu niteliğindeki meslek kuruluşları, bankalar, sigorta ve reasürans şirketleri gibi. Sıradan bir özel şirkete kestiğiniz makbuzda genellikle tevkifat olmaz, ama müşterinizin kapsamda olup olmadığını ona veya mali müşavirinize teyit ettirmelisiniz.</p>
      <p>Hizmetin de etüt, plan-proje, danışmanlık, denetim veya benzeri nitelikte olması gerekir. Yazılım geliştirme gibi hizmetlerin bu kapsamda sayılıp sayılmayacağı işin niteliğine bağlıdır ve tartışmalı olabilir.</p>

      <h2>Tutar sınırı</h2>
      <p>Tevkifat için KDV dahil bedelin belirli bir tutarı aşması gerekir. 2026 için bu tutar KDV dahil {SINIR}'dir. Sınır her yıl yeniden belirlendiği için güncel tutarı Gelir İdaresi Başkanlığı'ndan teyit edin. Sınırın altındaki işlemlerde tevkifat yapılmaz.</p>

      <h2>Örnek hesaplama</h2>
      <p>Bir bankaya KDV hariç 20.000 TL'lik danışmanlık hizmeti verdiniz. Stopaj %20 ile 4.000 TL olur. KDV %20 ile 4.000 TL'dir; bunun 9/10'u olan 3.600 TL'yi banka devlete yatırır, size yalnızca 400 TL KDV öder. Hesabınıza geçen tutar 20.000 − 4.000 + 400 = 16.400 TL olur. Tevkifat olmasaydı 20.000 TL geçecekti.</p>

      <h2>KDV tevkifatı ile stopaj aynı şey mi?</h2>
      <p>Hayır, ikisi sık karıştırılır. Stopaj gelir vergisinin peşin kesilmesidir, brüt tutarın %20'si üzerinden hesaplanır ve yıl sonunda gelir vergisinden mahsup edilir. KDV tevkifatı ise KDV'nin bir kısmının alıcı tarafından ödenmesidir ve gelir vergisi yükünüzü etkilemez. Bir makbuzda ikisi birlikte bulunabilir. Yalnızca stopajı ve KDV'yi görmek için <Link href="/serbest-meslek-makbuzu">serbest meslek makbuzu hesaplama</Link> aracını kullanın.</p>

      <h2>Beyannamede nasıl görünür?</h2>
      <p>Tevkif edilen KDV'yi siz ödemezsiniz; KDV beyannamesinde bu işlemler ayrı bir bölümde gösterilir. Doldurulmasını mali müşavirinize bırakmanız en güvenlisidir. Makbuzun nasıl düzenlendiği için <Link href="/rehber/e-smm-nasil-kesilir">e-SMM nasıl kesilir</Link> yazısına bakabilirsiniz.</p>

      <h2>Yurt dışı müşteriye verilen hizmetler</h2>
      <p>Hizmet ihracatı kapsamında KDV'den istisna olan işlemlerde KDV hiç hesaplanmaz, dolayısıyla tevkifat da söz konusu olmaz. Genel KDV hesabı için <Link href="/kdv-hesaplama">KDV hesaplama</Link> sayfasına bakabilirsiniz.</p>

      <Kaynaklar sayfa="tevkifat" />
    </>
  );
}
