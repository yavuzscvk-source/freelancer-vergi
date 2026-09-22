"use client";

import { useState } from "react";
import { VERGI, gelirVergisiHesapla } from "../../lib/vergi";
import { sayiyaCevir, tl, eksi, oranYazi } from "../../lib/format";

const ORAN = VERGI.hizmetIhracatiIndirimi;

export default function Hesaplayici() {
  const [yurtDisi, setYurtDisi] = useState("1.000.000");
  const [yurtIci, setYurtIci] = useState("0");
  const [kapsam, setKapsam] = useState(true);
  const [musteri, setMusteri] = useState(true);
  const [transfer, setTransfer] = useState(true);

  const dis = sayiyaCevir(yurtDisi);
  const ic = sayiyaCevir(yurtIci);
  const sartlar = kapsam && musteri && transfer;
  const indirim = sartlar ? dis * ORAN : 0;
  const matrah = Math.max(0, dis + ic - indirim);

  const indirimsizVergi = gelirVergisiHesapla(dis + ic).toplam;
  const vergi = gelirVergisiHesapla(matrah).toplam;
  const avantaj = indirimsizVergi - vergi;

  return (
    <div className="card">
      <label htmlFor="dis">Yurt dışı müşterilerden yıllık kazanç (gider düşülmüş, TL)</label>
      <input id="dis" type="text" inputMode="decimal" value={yurtDisi} onChange={(e) => setYurtDisi(e.target.value)} />

      <div style={{ marginTop: 16 }}>
        <label htmlFor="ic">Diğer kazançlar (yurt içi, gider düşülmüş, TL)</label>
        <input id="ic" type="text" inputMode="decimal" value={yurtIci} onChange={(e) => setYurtIci(e.target.value)} />
      </div>

      <div style={{ marginTop: 20 }}>
        <strong>Şartlar</strong>
        <div className="muted">İndirim yalnızca üç şartın hepsi sağlanırsa uygulanır.</div>
      </div>

      <label className="check">
        <input type="checkbox" style={{ flexShrink: 0 }} checked={kapsam} onChange={(e) => setKapsam(e.target.checked)} />
        Hizmetim kanunda sayılanlardan (yazılım, tasarım, mühendislik, mimarlık, veri işleme vb.)
      </label>
      <label className="check">
        <input type="checkbox" style={{ flexShrink: 0 }} checked={musteri} onChange={(e) => setMusteri(e.target.checked)} />
        Müşteri yurt dışında yerleşik ve hizmetten yalnızca yurt dışında yararlanıyor
      </label>
      <label className="check">
        <input type="checkbox" style={{ flexShrink: 0 }} checked={transfer} onChange={(e) => setTransfer(e.target.checked)} />
        Bu kazanç beyanname tarihine kadar Türkiye'ye transfer edilecek
      </label>

      <div className="results">
        <div className="row"><span>Toplam kazanç</span><span>{tl(dis + ic)}</span></div>
        <div className="row"><span>Hizmet ihracatı indirimi ({oranYazi(ORAN)})</span><span>{eksi(indirim)}</span></div>
        <div className="row"><span>Vergi matrahı</span><span>{tl(matrah)}</span></div>
        <div className="row"><span>İndirim olmasaydı vergi</span><span>{tl(indirimsizVergi)}</span></div>
        <div className="row" style={{ fontWeight: 700 }}><span>Vergi avantajınız</span><span>{tl(avantaj)}</span></div>
        <div className="row total"><span>Ödenecek gelir vergisi</span><span>{tl(vergi)}</span></div>
      </div>

      {!sartlar && (
        <p className="muted" style={{ marginTop: 12 }}>
          Şartlardan en az biri sağlanmadığı için indirim uygulanmadı.
        </p>
      )}
      <p className="muted" style={{ marginTop: 12 }}>
        İndirim yalnızca gelir vergisine uygulanır. KDV ve diğer yükümlülükler ayrıca değerlendirilir.
      </p>
    </div>
  );
}
