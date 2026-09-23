"use client";

import { useState } from "react";
import { VERGI, gelirVergisiHesapla } from "../../lib/vergi";
import { sayiyaCevir, tl, yuzde } from "../../lib/format";

const B = VERGI.bagkur;
const ISTISNA = VERGI.gencGirisimciIstisnasi;

export default function Hesaplayici() {
  const [gelir, setGelir] = useState("50.000");
  const [gider, setGider] = useState("5.000");
  const [genc, setGenc] = useState(false);
  const [indirim, setIndirim] = useState(true);

  const aylikGelir = sayiyaCevir(gelir);
  const aylikGider = sayiyaCevir(gider);

  const yillikKazanc = Math.max(0, (aylikGelir - aylikGider) * 12);
  const aylikPrim = B.altSinir * (indirim ? B.indirimliOran : B.oran);
  const yillikPrim = aylikPrim * 12;

  const primSonrasi = Math.max(0, yillikKazanc - yillikPrim);
  const istisna = genc ? Math.min(primSonrasi, ISTISNA) : 0;
  const matrah = primSonrasi - istisna;
  const vergi = gelirVergisiHesapla(matrah).toplam;

  const yillikNet = yillikKazanc - yillikPrim - vergi;
  const aylikNet = yillikNet / 12;
  const yuk = aylikGelir > 0 ? ((aylikGelir * 12 - yillikNet) / (aylikGelir * 12)) * 100 : 0;

  return (
    <div className="card">
      <label htmlFor="gelir">Aylık ortalama geliriniz (KDV hariç, TL)</label>
      <input id="gelir" type="text" inputMode="decimal" value={gelir} onChange={(e) => setGelir(e.target.value)} />

      <div style={{ marginTop: 16 }}>
        <label htmlFor="gider">Aylık giderleriniz (TL)</label>
        <div className="muted">Mali müşavir, internet, yazılım, ofis gibi işle ilgili giderler.</div>
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
        <strong>Yıllık</strong>
        <div className="row"><span>Gelir</span><span>{tl(aylikGelir * 12)}</span></div>
        <div className="row"><span>Giderler</span><span>{tl(aylikGider * 12)}</span></div>
        <div className="row"><span>Bağ-Kur primi</span><span>{tl(yillikPrim)}</span></div>
        {genc && <div className="row"><span>Genç girişimci istisnası</span><span>{tl(istisna)}</span></div>}
        <div className="row"><span>Vergi matrahı</span><span>{tl(matrah)}</span></div>
        <div className="row"><span>Gelir vergisi</span><span>{tl(vergi)}</span></div>
        <div className="row total"><span>Yıllık net</span><span>{tl(yillikNet)}</span></div>
      </div>

      <div className="results">
        <strong>Aylık ortalama</strong>
        <div className="row"><span>Cebinize kalan</span><span>{tl(aylikNet)}</span></div>
        <div className="row"><span>Toplam yük (gider + prim + vergi)</span><span>{yuzde(yuk)}</span></div>
      </div>

      <p className="muted" style={{ marginTop: 12 }}>
        Bağ-Kur primi alt sınırdan (asgari ücret üzerinden) hesaplanmıştır. Daha yüksek kazanç
        beyan ederseniz prim de artar.
      </p>
    </div>
  );
}
