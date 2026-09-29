"use client";

import { useState } from "react";
import { sayiyaCevir, tl, oranYazi } from "../../lib/format";

export default function Hesaplayici() {
  const [tutar, setTutar] = useState("1.000");
  const [paraBirimi, setParaBirimi] = useState("USD");
  const [kur, setKur] = useState("");
  const [kdv, setKdv] = useState("0.20");
  const [stopaj, setStopaj] = useState("0");

  const yabanciTutar = sayiyaCevir(tutar);
  const kurDegeri = sayiyaCevir(kur);

  const matrah = yabanciTutar * kurDegeri;
  const kdvTutar = matrah * Number(kdv);
  const stopajTutar = matrah * Number(stopaj);
  const toplam = matrah + kdvTutar;
  const net = toplam - stopajTutar;

  return (
    <div className="card">
      <label htmlFor="doviz-tutar">Fatura tutarı</label>
      <input
        id="doviz-tutar"
        type="text"
        inputMode="decimal"
        value={tutar}
        onChange={(e) => setTutar(e.target.value)}
      />

      <label htmlFor="para-birimi">Para birimi</label>
      <select
        id="para-birimi"
        value={paraBirimi}
        onChange={(e) => setParaBirimi(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="DIGER">Diğer</option>
      </select>

      <label htmlFor="kur">
        Kur (1 {paraBirimi === "DIGER" ? "birim" : paraBirimi} = TL)
      </label>
      <input
        id="kur"
        type="text"
        inputMode="decimal"
        placeholder="Örn. 41,50"
        value={kur}
        onChange={(e) => setKur(e.target.value)}
      />

      <label htmlFor="doviz-kdv">KDV oranı</label>
      <select
        id="doviz-kdv"
        value={kdv}
        onChange={(e) => setKdv(e.target.value)}
      >
        <option value="0">%0</option>
        <option value="0.10">%10</option>
        <option value="0.20">%20</option>
      </select>

      <label htmlFor="doviz-stopaj">Stopaj oranı</label>
      <select
        id="doviz-stopaj"
        value={stopaj}
        onChange={(e) => setStopaj(e.target.value)}
      >
        <option value="0">%0</option>
        <option value="0.20">%20</option>
      </select>

      <div className="results">
        <div className="row">
          <span>Döviz tutarı</span>
          <span>
            {yabanciTutar.toLocaleString("tr-TR")}{" "}
            {paraBirimi === "DIGER" ? "" : paraBirimi}
          </span>
        </div>

        <div className="row">
          <span>TL matrah</span>
          <span>{tl(matrah)}</span>
        </div>

        <div className="row">
          <span>KDV ({oranYazi(Number(kdv))})</span>
          <span>{tl(kdvTutar)}</span>
        </div>

        <div className="row">
          <span>Stopaj ({oranYazi(Number(stopaj))})</span>
          <span>{tl(stopajTutar)}</span>
        </div>

        <div className="row">
          <span>Fatura toplamı</span>
          <span>{tl(toplam)}</span>
        </div>

        <div className="row total">
          <span>Stopaj sonrası net</span>
          <span>{tl(net)}</span>
        </div>
      </div>

      <details className="nasil">
        <summary>Bu sonuç nasıl çıktı?</summary>

        <ol>
          <li>
            TL matrahı = döviz tutarı × kur = <b>{tl(matrah)}</b>
          </li>
          <li>
            KDV = TL matrah × {oranYazi(Number(kdv))} ={" "}
            <b>{tl(kdvTutar)}</b>
          </li>
          <li>
            Stopaj = TL matrah × {oranYazi(Number(stopaj))} ={" "}
            <b>{tl(stopajTutar)}</b>
          </li>
        </ol>
      </details>
    </div>
  );
}
