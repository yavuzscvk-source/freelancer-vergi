"use client";

import { useState } from "react";
import { VERGI } from "../../lib/vergi";
import { sayiyaCevir, tl } from "../../lib/format";

const ORANLAR = VERGI.kdvOranlari;

export default function Hesaplayici() {
  const [mod, setMod] = useState("ekle");
  const [oran, setOran] = useState(ORANLAR[0]);
  const [tutar, setTutar] = useState("10.000");

  const girilen = sayiyaCevir(tutar);
  const r = oran / 100;
  const haric = mod === "ekle" ? girilen : girilen / (1 + r);
  const kdv = haric * r;
  const dahil = haric + kdv;

  return (
    <div className="card">
      <div className="toggle">
        <button type="button" className={mod === "ekle" ? "active" : ""} onClick={() => setMod("ekle")}>KDV ekle</button>
        <button type="button" className={mod === "ayir" ? "active" : ""} onClick={() => setMod("ayir")}>KDV ayır</button>
      </div>

      <label htmlFor="tutar">{mod === "ekle" ? "KDV hariç tutar (TL)" : "KDV dahil tutar (TL)"}</label>
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

      <div className="results">
        <div className="row"><span>KDV hariç tutar</span><span>{tl(haric)}</span></div>
        <div className="row"><span>KDV (%{oran})</span><span>{tl(kdv)}</span></div>
        <div className="row total"><span>KDV dahil tutar</span><span>{tl(dahil)}</span></div>
      </div>
    </div>
  );
}
