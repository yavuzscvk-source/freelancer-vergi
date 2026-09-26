"use client";

import { useState } from "react";
import { VERGI } from "../../lib/vergi";
import { sayiyaCevir, tl, yuzde } from "../../lib/format";

const B = VERGI.bagkur;
const sayi = (n) => n.toLocaleString("tr-TR");

export default function Hesaplayici() {
  const [kazanc, setKazanc] = useState(sayi(B.altSinir));
  const [indirim, setIndirim] = useState(true);
  const [musavir, setMusavir] = useState("3.000");
  const [diger, setDiger] = useState("0");

  const girilen = sayiyaCevir(kazanc);
  const beyan = Math.min(Math.max(girilen, B.altSinir), B.ustSinir);
  const oran = indirim ? B.indirimliOran : B.oran;
  const prim = beyan * oran;
  const musavirTutar = sayiyaCevir(musavir);
  const digerTutar = sayiyaCevir(diger);
  const aylik = prim + musavirTutar + digerTutar;

  return (
    <div className="card">
      <label htmlFor="kazanc">Beyan edeceğiniz prime esas kazanç (aylık, TL)</label>
      <div className="muted">Alt sınır {sayi(B.altSinir)} TL, üst sınır {sayi(B.ustSinir)} TL.</div>
      <input id="kazanc" type="text" inputMode="decimal" value={kazanc} onChange={(e) => setKazanc(e.target.value)} />

      <label className="check">
        <input type="checkbox" style={{ flexShrink: 0 }} checked={indirim} onChange={(e) => setIndirim(e.target.checked)} />
        Primlerimi düzenli ödüyorum, SGK borcum yok (5 puan indirimi)
      </label>

      <div style={{ marginTop: 16 }}>
        <label htmlFor="musavir">Aylık mali müşavir ücreti (TL)</label>
        <input id="musavir" type="text" inputMode="decimal" value={musavir} onChange={(e) => setMusavir(e.target.value)} />
      </div>

      <div style={{ marginTop: 16 }}>
        <label htmlFor="diger">Diğer aylık sabit giderler (TL)</label>
        <div className="muted">Sanal ofis, e-belge kontörü, banka masrafları gibi.</div>
        <input id="diger" type="text" inputMode="decimal" value={diger} onChange={(e) => setDiger(e.target.value)} />
      </div>

      <div className="results">
        <div className="row"><span>Prime esas kazanç</span><span>{tl(beyan)}</span></div>
        <div className="row"><span>Bağ-Kur primi ({yuzde(oran * 100)})</span><span>{tl(prim)}</span></div>
        <div className="row"><span>Mali müşavir</span><span>{tl(musavirTutar)}</span></div>
        <div className="row"><span>Diğer giderler</span><span>{tl(digerTutar)}</span></div>
        <div className="row total"><span>Aylık toplam</span><span>{tl(aylik)}</span></div>
        <div className="row"><span>Yıllık toplam</span><span>{tl(aylik * 12)}</span></div>
      </div>
      <details className="nasil">
        <summary>Bu sonuç nasıl çıktı?</summary>
        <ol>
          <li>Prime esas kazanç, alt ve üst sınır arasına yerleştirildi: <b>{tl(beyan)}</b></li>
          <li>Bağ-Kur primi = prime esas kazanç × {yuzde(oran * 100)}: {tl(beyan)} × {oran.toLocaleString("tr-TR")} = <b>{tl(prim)}</b></li>
          <li>Aylık toplam = prim + müşavir + diğer: {tl(prim)} + {tl(musavirTutar)} + {tl(digerTutar)} = <b>{tl(aylik)}</b></li>
          <li>Yıllık toplam = aylık × 12: {tl(aylik)} × 12 = <b>{tl(aylik * 12)}</b></li>
        </ol>
      </details>


      {girilen !== beyan && (
        <p className="muted" style={{ marginTop: 12 }}>
          Girdiğiniz tutar sınırların dışında olduğu için hesap {tl(beyan)} üzerinden yapıldı.
        </p>
      )}
      <p className="muted" style={{ marginTop: 12 }}>
        Bu tutara gelir vergisi ve KDV dahil değildir; onlar kazancınıza göre ayrıca hesaplanır.
      </p>
    </div>
  );
}
