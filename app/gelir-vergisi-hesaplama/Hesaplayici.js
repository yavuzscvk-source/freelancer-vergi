"use client";

import { useState } from "react";

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
  const detay = [];
  for (const d of DILIMLER) {
    if (matrah <= alt) break;
    const tutar = Math.min(matrah, d.ust) - alt;
    const vergi = tutar * d.oran;
    detay.push({ oran: d.oran, tutar, vergi });
    toplam += vergi;
    alt = d.ust;
  }
  return { toplam, detay };
}

export default function Hesaplayici() {
  const [gelir, setGelir] = useState("600.000");
  const [gider, setGider] = useState("100.000");
  const [stopaj, setStopaj] = useState("0");

  const matrah = Math.max(0, sayiyaCevir(gelir) - sayiyaCevir(gider));
  const { toplam, detay } = vergiHesapla(matrah);
  const kesilen = sayiyaCevir(stopaj);
  const fark = toplam - kesilen;
  const efektif = matrah > 0 ? (toplam / matrah) * 100 : 0;

  return (
    <div className="card">
      <label htmlFor="gelir">Yıllık toplam kazanç (TL)</label>
      <input id="gelir" type="text" inputMode="decimal" value={gelir} onChange={(e) => setGelir(e.target.value)} />

      <div style={{ marginTop: 16 }}>
        <label htmlFor="gider">Yıllık giderler (TL)</label>
        <input id="gider" type="text" inputMode="decimal" value={gider} onChange={(e) => setGider(e.target.value)} />
      </div>

      <div style={{ marginTop: 16 }}>
        <label htmlFor="stopaj">Yıl içinde kesilen stopaj (TL)</label>
        <div className="muted">Şirketlerin makbuzlarınızdan kestiği stopaj toplamı. Yoksa 0 bırakın.</div>
        <input id="stopaj" type="text" inputMode="decimal" value={stopaj} onChange={(e) => setStopaj(e.target.value)} />
      </div>

      <div className="results">
        <div className="row"><span>Vergi matrahı</span><span>{tl(matrah)}</span></div>
        <div className="row"><span>Hesaplanan gelir vergisi</span><span>{tl(toplam)}</span></div>
        <div className="row"><span>Efektif vergi oranı</span><span>%{efektif.toLocaleString("tr-TR", { maximumFractionDigits: 2 })}</span></div>
        <div className="row"><span>Kesilen stopaj (mahsup)</span><span>{tl(kesilen)}</span></div>
        <div className="row total">
          <span>{fark >= 0 ? "Ödenecek vergi" : "Mahsup / iade edilebilecek"}</span>
          <span>{tl(Math.abs(fark))}</span>
        </div>
      </div>

      {detay.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <strong>Dilim dilim hesap</strong>
          {detay.map((d, i) => (
            <div className="row" key={i}>
              <span>%{Math.round(d.oran * 100)} × {tl(d.tutar)}</span>
              <span>{tl(d.vergi)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
