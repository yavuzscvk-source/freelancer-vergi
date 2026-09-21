"use client";

import { useState } from "react";

const KURUMLAR_VERGISI = 0.25;
const KAR_PAYI_STOPAJI = 0.15;
const GENC_GIRISIMCI_ISTISNASI = 400000;

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

function yuzde(sayi) {
  return "%" + sayi.toLocaleString("tr-TR", { maximumFractionDigits: 2 });
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
  const [kar, setKar] = useState("1.000.000");
  const [genc, setGenc] = useState(false);
  const [dagitim, setDagitim] = useState(100);

  const k = sayiyaCevir(kar);
  const oran = (v) => (k > 0 ? (v / k) * 100 : 0);

  const sahisMatrah = Math.max(0, k - (genc ? GENC_GIRISIMCI_ISTISNASI : 0));
  const sahisVergi = vergiHesapla(sahisMatrah);
  const sahisNet = k - sahisVergi;

  const kv = k * KURUMLAR_VERGISI;
  const dagitilan = (k - kv) * (dagitim / 100);
  const stopaj = dagitilan * KAR_PAYI_STOPAJI;
  const limitedVergi = kv + stopaj;
  const limitedCebe = dagitilan - stopaj;
  const sirkette = k - kv - dagitilan;

  const fark = Math.abs(sahisVergi - limitedVergi);
  const kazanan = sahisVergi < limitedVergi ? "Şahıs şirketi" : sahisVergi > limitedVergi ? "Limited şirket" : null;

  return (
    <div className="card">
      <label htmlFor="kar">Yıllık kâr (gelir eksi gider, TL)</label>
      <input id="kar" type="text" inputMode="decimal" value={kar} onChange={(e) => setKar(e.target.value)} />

      <label className="check">
        <input type="checkbox" checked={genc} onChange={(e) => setGenc(e.target.checked)} />
        Şahıs şirketinde genç girişimci istisnasından yararlanabilirim
      </label>

      <div style={{ marginTop: 16 }}>
        <label>Limited şirkette kârın ne kadarını kendinize çekeceksiniz?</label>
        <div className="toggle">
          {[100, 50, 0].map((o) => (
            <button key={o} type="button" className={dagitim === o ? "active" : ""} onClick={() => setDagitim(o)}>
              %{o}
            </button>
          ))}
        </div>
      </div>

      <div className="results">
        <strong>Şahıs şirketi</strong>
        <div className="row"><span>Gelir vergisi</span><span>{tl(sahisVergi)}</span></div>
        <div className="row"><span>Efektif vergi oranı</span><span>{yuzde(oran(sahisVergi))}</span></div>
        <div className="row"><span>Elinize kalan</span><span>{tl(sahisNet)}</span></div>
      </div>

      <div className="results">
        <strong>Limited şirket</strong>
        <div className="row"><span>Kurumlar vergisi (%25)</span><span>{tl(kv)}</span></div>
        <div className="row"><span>Kâr payı stopajı (%15)</span><span>{tl(stopaj)}</span></div>
        <div className="row"><span>Toplam vergi</span><span>{tl(limitedVergi)}</span></div>
        <div className="row"><span>Efektif vergi oranı</span><span>{yuzde(oran(limitedVergi))}</span></div>
        <div className="row"><span>Cebinize geçen</span><span>{tl(limitedCebe)}</span></div>
        <div className="row"><span>Şirkette kalan</span><span>{tl(sirkette)}</span></div>
      </div>

      {kazanan && (
        <div className="row total" style={{ marginTop: 16, color: "#15803d" }}>
          <span>{kazanan} daha az vergi</span>
          <span>{tl(fark)}</span>
        </div>
      )}
    </div>
  );
}
