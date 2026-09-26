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
           <details className="nasil">
        <summary>Bu sonuç nasıl çıktı?</summary>
        <ol>
          <li>Kazanç = gelir − giderler: {tl(sayiyaCevir(gelir))} − {tl(sayiyaCevir(gider))} = <b>{tl(kazanc)}</b></li>
          <li>İstisna, kazancı aşamaz. 400.000 TL sınırı ile karşılaştırıldı: <b>{tl(istisnaTutari)}</b></li>
          <li>Matrah = kazanç − istisna: {tl(kazanc)} − {tl(istisnaTutari)} = <b>{tl(matrah)}</b></li>
          <li>Matraha 2026 tarifesi uygulandı: <b>{tl(istisnaliVergi)}</b></li>
          <li>Avantaj = istisnasız vergi − istisnalı vergi: {tl(normalVergi)} − {tl(istisnaliVergi)} = <b>{tl(tasarruf)}</b></li>
          <li>{fark >= 0 ? "Ödenecek" : "İade edilebilecek"} = vergi − mahsup: {tl(istisnaliVergi)} − {tl(mahsup)} = <b>{tl(Math.abs(fark))}</b></li>
        </ol>
      </details>

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
