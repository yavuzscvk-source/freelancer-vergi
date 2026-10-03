"use client";

import { useState } from "react";
import { VERGI } from "../../lib/vergi";
import { sayiyaCevir, tl, eksi, oranYazi } from "../../lib/format";

const PARA_BIRIMLERI = [
  { kod: "USD", ad: "USD" },
  { kod: "EUR", ad: "EUR" },
  { kod: "GBP", ad: "GBP" },
  { kod: "DIGER", ad: "Diğer" },
];
const KDV_ORANLARI = [20, 10, 0];
const STOPAJ_ORANLARI = [0, Math.round(VERGI.serbestMeslekStopaji * 100)];

export default function Hesaplayici() {
  const [tutar, setTutar] = useState("1.000");
  const [para, setPara] = useState("USD");
  const [kur, setKur] = useState("");
  const [kdvOrani, setKdvOrani] = useState(20);
  const [stopajOrani, setStopajOrani] = useState(0);

  const doviz = sayiyaCevir(tutar);
  const kurDegeri = sayiyaCevir(kur);
  const hazir = doviz > 0 && kurDegeri > 0;

  const matrah = doviz * kurDegeri;
  const kdv = matrah * (kdvOrani / 100);
  const toplam = matrah + kdv;
  const stopaj = matrah * (stopajOrani / 100);
  const net = toplam - stopaj;

  const birim = para === "DIGER" ? "birim" : para;
  const dovizYazi = doviz.toLocaleString("tr-TR") + (para === "DIGER" ? "" : " " + para);

  return (
    <div className="card">
      <label htmlFor="doviz-tutar">Fatura tutarı (döviz)</label>
      <input id="doviz-tutar" type="text" inputMode="decimal" value={tutar} onChange={(e) => setTutar(e.target.value)} />

      <div style={{ marginTop: 16 }}>
        <label>Para birimi</label>
        <div className="toggle">
          {PARA_BIRIMLERI.map((p) => (
            <button key={p.kod} type="button" className={para === p.kod ? "active" : ""} onClick={() => setPara(p.kod)}>
              {p.ad}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <label htmlFor="doviz-kur">Kur (1 {birim} kaç TL?)</label>
        <input id="doviz-kur" type="text" inputMode="decimal" placeholder="Örn. 48,00" value={kur} onChange={(e) => setKur(e.target.value)} />
      </div>

      <div style={{ marginTop: 16 }}>
        <label>KDV oranı</label>
        <div className="toggle">
          {KDV_ORANLARI.map((o) => (
            <button key={o} type="button" className={kdvOrani === o ? "active" : ""} onClick={() => setKdvOrani(o)}>
              %{o}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label>Stopaj oranı</label>
        <div className="toggle">
          {STOPAJ_ORANLARI.map((o) => (
            <button key={o} type="button" className={stopajOrani === o ? "active" : ""} onClick={() => setStopajOrani(o)}>
              %{o}
            </button>
          ))}
        </div>
      </div>

      {hazir ? (
        <>
          <div className="results">
            <div className="row"><span>Döviz tutarı</span><span>{dovizYazi}</span></div>
            <div className="row"><span>Kur</span><span>{kurDegeri.toLocaleString("tr-TR", { maximumFractionDigits: 4 })} TL</span></div>
            <div className="row"><span>TL matrah</span><span>{tl(matrah)}</span></div>
            <div className="row"><span>KDV ({oranYazi(kdvOrani / 100)})</span><span>{tl(kdv)}</span></div>
            <div className="row"><span>Fatura toplamı</span><span>{tl(toplam)}</span></div>
            <div className="row"><span>Stopaj ({oranYazi(stopajOrani / 100)})</span><span>{eksi(stopaj)}</span></div>
            <div className="row total"><span>Stopaj sonrası net</span><span>{tl(net)}</span></div>
          </div>

          <details className="nasil">
            <summary>Bu sonuç nasıl çıktı?</summary>
            <ol>
              <li>TL matrah = döviz tutarı × kur: {dovizYazi} × {kurDegeri.toLocaleString("tr-TR", { maximumFractionDigits: 4 })} = <b>{tl(matrah)}</b></li>
              <li>KDV = TL matrah × {oranYazi(kdvOrani / 100)}: <b>{tl(kdv)}</b></li>
              <li>Fatura toplamı = matrah + KDV: {tl(matrah)} + {tl(kdv)} = <b>{tl(toplam)}</b></li>
              <li>Stopaj = TL matrah × {oranYazi(stopajOrani / 100)}: <b>{tl(stopaj)}</b></li>
              <li>Net = fatura toplamı − stopaj: {tl(toplam)} − {tl(stopaj)} = <b>{tl(net)}</b></li>
            </ol>
          </details>
        </>
      ) : (
        <p className="muted" style={{ marginTop: 16 }}>
          Sonucu görmek için kuru girin. Örneğin 1.000 USD için kur 48,00 ise TL matrah 48.000 TL olur.
        </p>
      )}
    </div>
  );
}
