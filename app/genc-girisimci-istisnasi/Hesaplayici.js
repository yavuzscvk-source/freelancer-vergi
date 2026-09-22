"use client";

import { useState } from "react";
import { VERGI, gelirVergisiHesapla } from "../../lib/vergi";
import { sayiyaCevir, tl, eksi } from "../../lib/format";

const ISTISNA = VERGI.gencGirisimciIstisnasi;

export default function Hesaplayici() {
  const [gelir, setGelir] = useState("600.000");
  const [gider, setGider] = useState("100.000");
  const [stopaj, setStopaj] = useState("0");
  const [gecici, setGecici] = useState("0");

  const kazanc = Math.max(0, sayiyaCevir(gelir) - sayiyaCevir(gider));
  const istisnaTutari = Math.min(kazanc, ISTISNA);
  const matrah = kazanc - istisnaTutari;
  const normalVergi = gelirVergisiHesapla(kazanc).toplam;
  const istisnaliVergi = gelirVergisiHesapla(matrah).toplam;
  const tasarruf = normalVergi - istisnaliVergi;
  const mahsup = sayiyaCevir(stopaj) + sayiyaCevir(gecici);
  const fark = istisnaliVergi - mahsup;

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
        <div className="row"><span>Yıllık kazanç</span><span>{tl(kazanc)}</span></div>
        <div className="row"><span>Genç girişimci istisnası</span><span>{eksi(istisnaTutari)}</span></div>
        <div className="row"><span>Vergi matrahı</span><span>{tl(matrah)}</span></div>
        <div className="row"><span>İstisna olmasaydı vergi</span><span>{tl(normalVergi)}</span></div>
        <div className="row"><span>İstisnalı gelir vergisi</span><span>{tl(istisnaliVergi)}</span></div>
        <div className="row" style={{ fontWeight: 700 }}><span>Vergi avantajınız</span><span>{tl(tasarruf)}</span></div>
        <div className="row"><span>Mahsup (stopaj + geçici vergi)</span><span>{eksi(mahsup)}</span></div>
        <div className="row total">
          <span>{fark >= 0 ? "Ödenecek vergi" : "Mahsup / iade edilebilecek"}</span>
          <span>{tl(Math.abs(fark))}</span>
        </div>
      </div>
    </div>
  );
}
