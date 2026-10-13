"use client";

import { useState } from "react";

const EPOSTA = "freelancervergi@gmail.com";

const IHTIYACLAR = [
  "Şahıs şirketi kurmak istiyorum",
  "Mevcut şirketim için mali müşavir arıyorum",
  "Yıllık beyanname (serbest meslek, kira, yurt dışı gelir)",
  "Yurt dışı hisse / temettü beyanı",
  "Limited şirkete geçiş",
];

export default function Form() {
  const [ihtiyac, setIhtiyac] = useState(IHTIYACLAR[0]);
  const [sehir, setSehir] = useState("");
  const [is, setIs] = useState("");
  const [gelir, setGelir] = useState("");
  const [not, setNot] = useState("");
  const [onay, setOnay] = useState(false);

  const govde = [
    `İhtiyaç: ${ihtiyac}`,
    `Şehir: ${sehir}`,
    `İş / faaliyet: ${is}`,
    `Tahmini yıllık gelir: ${gelir}`,
    `Not: ${not}`,
    "",
    "Bilgilerimin, bana teklif vermesi için en fazla 2 mali müşavirle paylaşılmasını kabul ediyorum.",
  ].join("\n");
  const link = `mailto:${EPOSTA}?subject=${encodeURIComponent("Mali müşavir talebi: " + ihtiyac)}&body=${encodeURIComponent(govde)}`;

  return (
    <div className="card">
      <label htmlFor="ihtiyac">Neye ihtiyacınız var?</label>
      <select id="ihtiyac" value={ihtiyac} onChange={(e) => setIhtiyac(e.target.value)}>
        {IHTIYACLAR.map((i) => <option key={i}>{i}</option>)}
      </select>

      <div style={{ marginTop: 16 }}>
        <label htmlFor="sehir">Şehir</label>
        <input id="sehir" type="text" value={sehir} onChange={(e) => setSehir(e.target.value)} placeholder="İstanbul" />
      </div>

      <div style={{ marginTop: 16 }}>
        <label htmlFor="is">İşiniz</label>
        <input id="is" type="text" value={is} onChange={(e) => setIs(e.target.value)} placeholder="Yazılım, tasarım, YouTube..." />
      </div>

      <div style={{ marginTop: 16 }}>
        <label htmlFor="gelir">Tahmini yıllık gelir</label>
        <input id="gelir" type="text" value={gelir} onChange={(e) => setGelir(e.target.value)} placeholder="Ör. 1.000.000 TL veya ayda 3.000 $" />
      </div>

      <div style={{ marginTop: 16 }}>
        <label htmlFor="not">Eklemek istedikleriniz</label>
        <input id="not" type="text" value={not} onChange={(e) => setNot(e.target.value)} placeholder="Yurt dışı müşteri, genç girişimci..." />
      </div>

      <label className="check">
        <input type="checkbox" style={{ flexShrink: 0 }} checked={onay} onChange={(e) => setOnay(e.target.checked)} />
        Bilgilerimin, bana teklif vermesi için en fazla 2 mali müşavirle paylaşılmasını kabul ediyorum.
      </label>

      <div style={{ marginTop: 16 }}>
        {onay ? (
          <a className="btn" href={link}>E-posta ile gönder</a>
        ) : (
          <span className="muted">Göndermek için onay kutusunu işaretleyin.</span>
        )}
      </div>
      <p className="muted" style={{ marginTop: 12, marginBottom: 0 }}>
        Buton, bilgilerinizin hazır yazıldığı bir e-posta açar. Bu sayfada hiçbir bilgi kaydedilmez.
      </p>
    </div>
  );
}
