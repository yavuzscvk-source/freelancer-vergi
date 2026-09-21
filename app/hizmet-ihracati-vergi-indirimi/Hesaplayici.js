"use client";

import { useState } from "react";

// 2026 itibarıyla GVK 89/13 indirim oranı (11257 sayılı CB Kararı)
const INDIRIM_ORANI = 1;

// 2026 ücret dışı gelirler tarifesi (GVK md. 103)
const DILIMLER = [
  { ust: 190000, oran: 0.15 },
  { ust: 400000, oran: 0.2 },
  { ust: 1000000, oran: 0.27 },
  { ust: 5300000, oran: 0.35 },
  { ust: Infinity, oran: 0.4 },
];

function sayiyaCevir(metin) {
  const temiz = metin.replace(/\./g, "").replace(",", ".").trim();
  const sayi = parseFloat(temiz);
  return isNaN(sayi) || sayi < 0 ? 0 : sayi;
}

function tl(sayi) {
  return sayi.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " TL";
}

function vergiHesapla(matrah) {
  let alt = 0;
  let toplam = 0;
  for (const d of DILIMLER) {
    if (matrah <= alt) break;
    toplam += (Math.min(matrah, d.ust) - alt) * d.oran;
    alt = d.ust;
  }
  return toplam;
}

export default function Hesaplayici() {
  const [yurtDisi, setYurtDisi] = useState("1.000.000");
  const [yurtIci, setYurtIci] = useState("0");
  const [transfer, setTransfer] = useState(true);

  const dis = sayiyaCevir(yurtDisi);
  const ic = sayiyaCevir(yurtIci);
  const indirim = transfer ? dis * INDIRIM_ORANI : 0;
  const matrah = Math.max(0, dis + ic - indirim);

  const indirimsizVergi = vergiHesapla(dis + ic);
  const vergi = vergiHesapla(matrah);
  const avantaj = indirimsizVergi - vergi;

  return (
    <div className="card">
      <label htmlFor="dis">Yurt dışı müşterilerden yıllık kazanç (gider düşülmüş, TL)</label>
      <div className="muted">Yalnızca kapsamdaki hizmetlerden (yazılım, tasarım, mühendislik vb.) elde edilen kazanç.</div>
      <input id="dis" type="text" inputMode="decimal" value={yurtDisi} onChange={(e) => setYurtDisi(e.target.value)} />

      <div style={{ marginTop: 16 }}>
        <label htmlFor="ic">Diğer kazançlar (yurt içi, gider düşülmüş, TL)</label>
        <input id="ic" type="text" inputMode="decimal" value={yurtIci} onChange={(e) => setYurtIci(e.target.value)} />
      </div>

      <label className="check">
        <input type="checkbox" checked={transfer} onChange={(e) => setTransfer(e.target.checked)} />
        Yurt dışı kazancın tamamı beyanname tarihine kadar Türkiye'ye transfer edilecek
      </label>

      <div className="results">
        <div className="row"><span>Toplam kazanç</span><span>{tl(dis + ic)}</span></div>
        <div className="row"><span>Hizmet ihracatı indirimi (%100)</span><span>-{tl(indirim)}</span></div>
        <div className="row"><span>Vergi matrahı</span><span>{tl(matrah)}</span></div>
        <div className="row"><span>İndirim olmasaydı vergi</span><span>{tl(indirimsizVergi)}</span></div>
        <div className="row" style={{ color: "#15803d", fontWeight: 700 }}>
          <span>Vergi avantajınız</span><span>{tl(avantaj)}</span>
        </div>
        <div className="row total"><span>Ödenecek gelir vergisi</span><span>{tl(vergi)}</span></div>
      </div>
    </div>
  );
}
