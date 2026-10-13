"use client";

import { useState } from "react";
import { VERGI, gelirVergisiHesapla } from "../../lib/vergi";
import { sayiyaCevir, tl, eksi, oranYazi } from "../../lib/format";

const { istisna: ISTISNA, goturuGider: GOTURU } = VERGI.kira;

export default function Hesaplayici() {
  const [kira, setKira] = useState("240.000");
  const [freelancer, setFreelancer] = useState(true);
  const [diger, setDiger] = useState("500.000");

  const kiraGeliri = sayiyaCevir(kira);
  const digerMatrah = freelancer ? sayiyaCevir(diger) : 0;

  const istisna = freelancer ? 0 : Math.min(kiraGeliri, ISTISNA);
  const kalan = kiraGeliri - istisna;
  const gider = kalan * GOTURU;
  const kiraMatrahi = kalan - gider;
  const beyanGerekli = kiraGeliri > 0 && kalan > 0;

  const vergiKirasiz = gelirVergisiHesapla(digerMatrah).toplam;
  const vergiKirali = gelirVergisiHesapla(digerMatrah + kiraMatrahi).toplam;
  const kiraVergisi = vergiKirali - vergiKirasiz;
  const efektif = kiraGeliri > 0 ? kiraVergisi / kiraGeliri : 0;

  return (
    <div className="card">
      <label htmlFor="kira">{VERGI.yil} yılında tahsil ettiğiniz konut kira geliri (TL)</label>
      <div className="muted">Yıl içinde fiilen eline geçen toplam kira. Aylık 20.000 TL ise 240.000 TL yazın.</div>
      <input id="kira" type="text" inputMode="decimal" value={kira} onChange={(e) => setKira(e.target.value)} />

      <label className="check">
        <input type="checkbox" style={{ flexShrink: 0 }} checked={freelancer} onChange={(e) => setFreelancer(e.target.checked)} />
        Serbest meslek veya ticari kazancım için beyanname veriyorum
      </label>

      {freelancer && (
        <div style={{ marginTop: 16 }}>
          <label htmlFor="diger">Serbest meslek / ticari kazancınızın matrahı (TL)</label>
          <div className="muted">Gelir eksi giderler, istisna ve indirimlerden sonra kalan tutar. Kira, bu tutarın üzerine eklenip vergilenir.</div>
          <input id="diger" type="text" inputMode="decimal" value={diger} onChange={(e) => setDiger(e.target.value)} />
        </div>
      )}

      <div className="results">
        <div className="row"><span>Konut kira geliri</span><span>{tl(kiraGeliri)}</span></div>
        <div className="row"><span>Konut kira istisnası</span><span>{eksi(istisna)}</span></div>
        <div className="row"><span>Götürü gider ({oranYazi(GOTURU)})</span><span>{eksi(gider)}</span></div>
        <div className="row"><span>Kira gelirinin matrahı</span><span>{tl(kiraMatrahi)}</span></div>
        {freelancer && (
          <div className="row"><span>Toplam matrah (kazanç + kira)</span><span>{tl(digerMatrah + kiraMatrahi)}</span></div>
        )}
        <div className="row"><span>Beyanname</span><span>{beyanGerekli ? "Gerekli" : "Gerekmiyor"}</span></div>
        <div className="row"><span>Kira gelirinin efektif vergi oranı</span><span>%{(efektif * 100).toLocaleString("tr-TR", { maximumFractionDigits: 1 })}</span></div>
        <div className="row total"><span>Kira geliri nedeniyle ödenecek vergi</span><span>{tl(kiraVergisi)}</span></div>
      </div>

      <details className="nasil">
        <summary>Bu sonuç nasıl çıktı?</summary>
        <ol>
          {freelancer ? (
            <li>Serbest meslek veya ticari kazancı için beyanname verenler {tl(ISTISNA)} konut kira istisnasından yararlanamaz. İstisna: <b>{tl(0)}</b></li>
          ) : (
            <li>İstisna, kira gelirini aşamaz: {tl(ISTISNA)} sınırı ile karşılaştırıldı: <b>{tl(istisna)}</b></li>
          )}
          <li>Götürü gider = (kira − istisna) × {oranYazi(GOTURU)}: {tl(kalan)} × {oranYazi(GOTURU)} = <b>{tl(gider)}</b></li>
          <li>Kira matrahı = {tl(kalan)} − {tl(gider)} = <b>{tl(kiraMatrahi)}</b></li>
          {freelancer ? (
            <li>Kira matrahı diğer kazancınıza eklendi; vergi farkı kira kaynaklı vergidir: {tl(vergiKirali)} − {tl(vergiKirasiz)} = <b>{tl(kiraVergisi)}</b></li>
          ) : (
            <li>Matraha {VERGI.yil} tarifesi uygulandı: <b>{tl(kiraVergisi)}</b></li>
          )}
        </ol>
      </details>
    </div>
  );
}
