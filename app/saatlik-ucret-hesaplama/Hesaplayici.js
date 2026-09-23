"use client";

import { useState } from "react";
import { VERGI, gelirVergisiHesapla } from "../../lib/vergi";
import { sayiyaCevir, tl, yuzde } from "../../lib/format";

const B = VERGI.bagkur;
const ISTISNA = VERGI.gencGirisimciIstisnasi;

export default function Hesaplayici() {
  const [hedef, setHedef] = useState("50.000");
  const [saat, setSaat] = useState("40");
  const [izin, setIzin] = useState("4");
  const [oran, setOran] = useState("70");
  const [gider, setGider] = useState("5.000");
  const [genc, setGenc] = useState(false);
  const [indirim, setIndirim] = useState(true);

  const hedefYillik = sayiyaCevir(hedef) * 12;
  const yillikGider = sayiyaCevir(gider) * 12;
  const yillikPrim = B.altSinir * (indirim ? B.indirimliOran : B.oran) * 12;

  const haftalikSaat = sayiyaCevir(saat);
  const calisilanHafta = Math.max(0, 52 - sayiyaCevir(izin));
  const faturaOrani = Math.min(100, Math.max(1, sayiyaCevir(oran))) / 100;
  const yillikSaat = haftalikSaat * calisilanHafta * faturaOrani;

  function net(gelir) {
    const kazanc = Math.max(0, gelir - yillikGider);
    const primSonrasi = Math.max(0, kazanc - yillikPrim);
    const istisna = genc ? Math.min(primSonrasi, ISTISNA) : 0;
    const vergi = gelirVergisiHesapla(primSonrasi - istisna).toplam;
    return kazanc - yillikPrim - vergi;
  }

  let alt = 0;
  let ust = hedefYillik * 5 + yillikGider + yillikPrim + 100000;
  for (let i = 0; i < 80; i++) {
    const orta = (alt + ust) / 2;
    if (net(orta) < hedefYillik) alt = orta;
    else ust = orta;
  }
  const gerekliCiro = ust;
  const saatlik = yillikSaat > 0 ? gerekliCiro / yillikSaat : 0;

  return (
    <div className="card">
      <label htmlFor="hedef">Hedeflediğiniz aylık net gelir (TL)</label>
      <input id="hedef" type="text" inputMode="decimal" value={hedef} onChange={(e) => setHedef(e.target.value)} />

      <div style={{ marginTop: 16 }}>
        <label htmlFor="saat">Haftalık çalışma süreniz (saat)</label>
        <input id="saat" type="text" inputMode="decimal" value={saat} onChange={(e) => setSaat(e.target.value)} />
      </div>

      <div style={{ marginTop: 16 }}>
        <label htmlFor="izin">Yıllık izin ve boş dönem (hafta)</label>
        <input id="izin" type="text" inputMode="decimal" value={izin} onChange={(e) => setIzin(e.target.value)} />
      </div>

      <div style={{ marginTop: 16 }}>
        <label htmlFor="oran">Faturalanabilir çalışma oranı (%)</label>
        <div className="muted">Müşteri arama, teklif yazma, muhasebe gibi işler faturalanmaz. Genelde %60-80 arasıdır.</div>
        <input id="oran" type="text" inputMode="decimal" value={oran} onChange={(e) => setOran(e.target.value)} />
      </div>

      <div style={{ marginTop: 16 }}>
        <label htmlFor="gider">Aylık giderleriniz (TL)</label>
        <input id="gider" type="text" inputMode="decimal" value={gider} onChange={(e) => setGider(e.target.value)} />
      </div>

      <label className="check">
        <input type="checkbox" style={{ flexShrink: 0 }} checked={genc} onChange={(e) => setGenc(e.target.checked)} />
        Genç girişimci istisnasından yararlanıyorum
      </label>
      <label className="check">
        <input type="checkbox" style={{ flexShrink: 0 }} checked={indirim} onChange={(e) => setIndirim(e.target.checked)} />
        Bağ-Kur primlerimi düzenli ödüyorum (5 puan indirimi)
      </label>

      <div className="results">
        <div className="row"><span>Yıllık hedef net</span><span>{tl(hedefYillik)}</span></div>
        <div className="row"><span>Gerekli yıllık ciro (KDV hariç)</span><span>{tl(gerekliCiro)}</span></div>
        <div className="row"><span>Faturalanabilir saat (yıllık)</span><span>{Math.round(yillikSaat).toLocaleString("tr-TR")} saat</span></div>
        <div className="row total"><span>Minimum saatlik ücret</span><span>{tl(saatlik)}</span></div>
        <div className="row"><span>Günlük (8 saat)</span><span>{tl(saatlik * 8)}</span></div>
      </div>

      <p className="muted" style={{ marginTop: 12 }}>
        Bağ-Kur primi alt sınırdan hesaplanmıştır. Bu rakam taban ücrettir; kâr payı, birikim ve
        beklenmeyen giderler için üzerine eklemek mantıklıdır.
      </p>
    </div>
  );
}
