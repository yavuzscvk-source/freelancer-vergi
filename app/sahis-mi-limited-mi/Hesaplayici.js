"use client";

import { useState } from "react";
import { VERGI, gelirVergisiHesapla } from "../../lib/vergi";
import { sayiyaCevir, tl, yuzde, oranYazi } from "../../lib/format";

const KV = VERGI.kurumlarVergisi;
const STOPAJ = VERGI.karPayiStopaji;
const GENC = VERGI.gencGirisimciIstisnasi;

export default function Hesaplayici() {
  const [kar, setKar] = useState("1.000.000");
  const [genc, setGenc] = useState(false);
  const [dagitim, setDagitim] = useState(100);

  const k = sayiyaCevir(kar);
  const oran = (v) => (k > 0 ? (v / k) * 100 : 0);

  const sahisMatrah = Math.max(0, k - (genc ? GENC : 0));
  const sahisVergi = gelirVergisiHesapla(sahisMatrah).toplam;
  const sahisNet = k - sahisVergi;

  const kv = k * KV;
  const dagitilan = (k - kv) * (dagitim / 100);
  const stopaj = dagitilan * STOPAJ;
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
        <div className="row"><span>Kurumlar vergisi ({oranYazi(KV)})</span><span>{tl(kv)}</span></div>
        <div className="row"><span>Kâr payı stopajı ({oranYazi(STOPAJ)})</span><span>{tl(stopaj)}</span></div>
        <div className="row"><span>Toplam vergi</span><span>{tl(limitedVergi)}</span></div>
        <div className="row"><span>Efektif vergi oranı</span><span>{yuzde(oran(limitedVergi))}</span></div>
        <div className="row"><span>Cebinize geçen</span><span>{tl(limitedCebe)}</span></div>
        <div className="row"><span>Şirkette kalan</span><span>{tl(sirkette)}</span></div>
      </div>

      {kazanan && (
        <div className="row total" style={{ marginTop: 16 }}>
          <span>{kazanan} daha az vergi</span>
          <span>{tl(fark)}</span>
        </div>
      )}
      <details className="nasil">
        <summary>Bu sonuç nasıl çıktı?</summary>
        <ol>
          <li>Şahıs matrahı = kâr {genc ? `− 400.000 TL istisna: ${tl(k)} − ${tl(Math.min(k, GENC))}` : ""} = <b>{tl(sahisMatrah)}</b></li>
          <li>Matraha 2026 gelir vergisi tarifesi uygulandı: <b>{tl(sahisVergi)}</b></li>
          <li>Kurumlar vergisi = kâr × {oranYazi(KV)}: {tl(k)} × {KV.toLocaleString("tr-TR")} = <b>{tl(kv)}</b></li>
          <li>Dağıtılan kâr = (kâr − kurumlar vergisi) × %{dagitim}: {tl(k - kv)} × {(dagitim / 100).toLocaleString("tr-TR")} = <b>{tl(dagitilan)}</b></li>
          <li>Kâr payı stopajı = dağıtılan × {oranYazi(STOPAJ)}: {tl(dagitilan)} × {STOPAJ.toLocaleString("tr-TR")} = <b>{tl(stopaj)}</b></li>
          <li>Limited toplam vergi = kurumlar vergisi + stopaj: {tl(kv)} + {tl(stopaj)} = <b>{tl(limitedVergi)}</b></li>
          <li>Fark = iki vergi arasındaki tutar: <b>{tl(fark)}</b></li>
        </ol>
      </details>


      <p className="muted" style={{ marginTop: 12 }}>
        Limited şirketten maaş veya huzur hakkı alınması ve yüksek tutarlı kâr paylarının yıllık beyanı bu hesaba dahil değildir.
      </p>
    </div>
  );
}
