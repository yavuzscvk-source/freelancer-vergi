"use client";

import { useState } from "react";
import { VERGI } from "../../lib/vergi";
import { sayiyaCevir, tl, eksi, oranYazi } from "../../lib/format";

const T = VERGI.tevkifat;
const STOPAJ = VERGI.serbestMeslekStopaji;
const ORANLAR = VERGI.kdvOranlari;

export default function Hesaplayici() {
  const [tutar, setTutar] = useState("20.000");
  const [oran, setOran] = useState(ORANLAR[0]);
  const [alici, setAlici] = useState(true);
  const [kapsam, setKapsam] = useState(true);
  const [stopajVar, setStopajVar] = useState(true);

  const brut = sayiyaCevir(tutar);
  const kdv = brut * (oran / 100);
  const kdvDahil = brut + kdv;
  const sinirGecti = kdvDahil >= T.sinirKdvDahil;
  const tevkifatVar = alici && kapsam && sinirGecti;
  const tevkif = tevkifatVar ? kdv * T.oran : 0;
  const kdvSize = kdv - tevkif;
  const stopaj = stopajVar ? brut * STOPAJ : 0;
  const tahsil = brut - stopaj + kdvSize;

  return (
    <div className="card">
      <label htmlFor="tutar">Makbuz tutarı, KDV hariç brüt (TL)</label>
      <input id="tutar" type="text" inputMode="decimal" value={tutar} onChange={(e) => setTutar(e.target.value)} />

      <div style={{ marginTop: 16 }}>
        <label>KDV oranı</label>
        <div className="toggle">
          {ORANLAR.map((o) => (
            <button key={o} type="button" className={oran === o ? "active" : ""} onClick={() => setOran(o)}>
              %{o}
            </button>
          ))}
        </div>
      </div>

      <label className="check">
        <input type="checkbox" style={{ flexShrink: 0 }} checked={alici} onChange={(e) => setAlici(e.target.checked)} />
        Müşterim tevkifat uygulayan alıcılardan (kamu kurumu, banka, sigorta şirketi vb.)
      </label>
      <label className="check">
        <input type="checkbox" style={{ flexShrink: 0 }} checked={kapsam} onChange={(e) => setKapsam(e.target.checked)} />
        Hizmetim etüt, plan-proje, danışmanlık veya denetim kapsamında
      </label>
      <label className="check">
        <input type="checkbox" style={{ flexShrink: 0 }} checked={stopajVar} onChange={(e) => setStopajVar(e.target.checked)} />
        Stopaj kesilecek (karşı taraf şirket veya kurum)
      </label>

      <div className="results">
        <div className="row"><span>Brüt tutar (KDV hariç)</span><span>{tl(brut)}</span></div>
        <div className="row"><span>Hesaplanan KDV ({oranYazi(oran / 100)})</span><span>{tl(kdv)}</span></div>
        <div className="row"><span>Alıcının devlete ödeyeceği KDV (9/10)</span><span>{tl(tevkif)}</span></div>
        <div className="row"><span>Size ödenecek KDV</span><span>{tl(kdvSize)}</span></div>
        <div className="row"><span>Stopaj ({oranYazi(STOPAJ)})</span><span>{eksi(stopaj)}</span></div>
        <div className="row total"><span>Hesabınıza geçen</span><span>{tl(tahsil)}</span></div>
      </div>

      {!tevkifatVar && (
        <p className="muted" style={{ marginTop: 12 }}>
          {!alici || !kapsam
            ? "Tevkifat uygulanmadı: tevkifat yalnızca belirlenmiş alıcılara karşı ve kapsamdaki hizmetlerde uygulanır."
            : `Tevkifat uygulanmadı: KDV dahil bedel (${tl(kdvDahil)}) ${tl(T.sinirKdvDahil)} sınırının altında.`}
        </p>
      )}

      <details className="nasil">
        <summary>Bu sonuç nasıl çıktı?</summary>
        <ol>
          <li>KDV = brüt × {oranYazi(oran / 100)}: {tl(brut)} × {(oran / 100).toLocaleString("tr-TR")} = <b>{tl(kdv)}</b></li>
          <li>KDV dahil bedel = brüt + KDV: <b>{tl(kdvDahil)}</b>. Tevkifat sınırı: {tl(T.sinirKdvDahil)}</li>
          <li>{tevkifatVar ? "Tevkif edilen KDV = KDV × 9/10:" : "Tevkifat uygulanmadığı için tevkif edilen KDV:"} <b>{tl(tevkif)}</b></li>
          <li>Size ödenecek KDV = KDV − tevkif edilen: {tl(kdv)} − {tl(tevkif)} = <b>{tl(kdvSize)}</b></li>
          <li>Stopaj = brüt × {oranYazi(STOPAJ)}: <b>{tl(stopaj)}</b></li>
          <li>Hesabınıza geçen = brüt − stopaj + size ödenecek KDV: {tl(brut)} − {tl(stopaj)} + {tl(kdvSize)} = <b>{tl(tahsil)}</b></li>
        </ol>
      </details>
    </div>
  );
}
