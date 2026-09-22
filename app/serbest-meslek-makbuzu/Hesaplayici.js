"use client";

import { useState } from "react";
import { VERGI } from "../../lib/vergi";
import { sayiyaCevir, tl, oranYazi } from "../../lib/format";

const STOPAJ_ORANI = VERGI.serbestMeslekStopaji;
const KDV_ORANI = VERGI.kdvGenelOrani;

export default function Hesaplayici() {
  const [mod, setMod] = useState("brut");
  const [tutar, setTutar] = useState("10.000");
  const [stopajVar, setStopajVar] = useState(true);
  const [kdvVar, setKdvVar] = useState(true);

  const girilen = sayiyaCevir(tutar);
  const stopajOrani = stopajVar ? STOPAJ_ORANI : 0;
  const brut = mod === "brut" ? girilen : girilen / (1 - stopajOrani);
  const stopaj = brut * stopajOrani;
  const net = brut - stopaj;
  const kdv = kdvVar ? brut * KDV_ORANI : 0;
  const tahsil = net + kdv;

  return (
    <div className="card">
      <div className="toggle">
        <button type="button" className={mod === "brut" ? "active" : ""} onClick={() => setMod("brut")}>Brütten hesapla</button>
        <button type="button" className={mod === "net" ? "active" : ""} onClick={() => setMod("net")}>Netten hesapla</button>
      </div>

      <label htmlFor="tutar">{mod === "brut" ? "Brüt tutar (TL)" : "Elinize geçecek net tutar (TL)"}</label>
      <input id="tutar" type="text" inputMode="decimal" value={tutar} onChange={(e) => setTutar(e.target.value)} />

      <label className="check">
        <input type="checkbox" checked={stopajVar} onChange={(e) => setStopajVar(e.target.checked)} />
        Stopaj kesilecek (karşı taraf şirket veya kurum)
      </label>
      <label className="check">
        <input type="checkbox" checked={kdvVar} onChange={(e) => setKdvVar(e.target.checked)} />
        KDV uygulanacak
      </label>

      <div className="results">
        <div className="row"><span>Brüt tutar</span><span>{tl(brut)}</span></div>
        <div className="row"><span>Stopaj ({oranYazi(STOPAJ_ORANI)})</span><span>{tl(stopaj)}</span></div>
        <div className="row"><span>Net tutar</span><span>{tl(net)}</span></div>
        <div className="row"><span>KDV ({oranYazi(KDV_ORANI)})</span><span>{tl(kdv)}</span></div>
        <div className="row total"><span>Tahsil edilecek</span><span>{tl(tahsil)}</span></div>
      </div>
    </div>
  );
}
