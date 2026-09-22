"use client";

import { useState } from "react";
import { gelirVergisiHesapla } from "../../lib/vergi";
import { sayiyaCevir, tl, eksi, yuzde, oranYazi } from "../../lib/format";

export default function Hesaplayici() {
  const [gelir, setGelir] = useState("600.000");
  const [gider, setGider] = useState("100.000");
  const [stopaj, setStopaj] = useState("0");
  const [gecici, setGecici] = useState("0");

  const matrah = Math.max(0, sayiyaCevir(gelir) - sayiyaCevir(gider));
  const { toplam, detay } = gelirVergisiHesapla(matrah);
  const mahsup = sayiyaCevir(stopaj) + sayiyaCevir(gecici);
  const fark = toplam - mahsup;
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

      <div style={{ marginTop: 16 }}>
        <label htmlFor="gecici">Yıl içinde ödenen geçici vergi (TL)</label>
        <div className="muted">3 aylık dönemlerde ödediğiniz geçici vergi toplamı. Yoksa 0 bırakın.</div>
        <input id="gecici" type="text" inputMode="decimal" value={gecici} onChange={(e) => setGecici(e.target.value)} />
      </div>

      <div className="results">
        <div className="row"><span>Vergi matrahı</span><span>{tl(matrah)}</span></div>
        <div className="row"><span>Hesaplanan gelir vergisi</span><span>{tl(toplam)}</span></div>
        <div className="row"><span>Efektif vergi oranı</span><span>{yuzde(efektif)}</span></div>
        <div className="row"><span>Mahsup (stopaj + geçici vergi)</span><span>{eksi(mahsup)}</span></div>
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
              <span>{oranYazi(d.oran)} × {tl(d.tutar)}</span>
              <span>{tl(d.vergi)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
