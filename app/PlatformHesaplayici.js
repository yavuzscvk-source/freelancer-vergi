"use client";

import { useState } from "react";
import { VERGI, gelirVergisiHesapla } from "../lib/vergi";
import { sayiyaCevir, tl, yuzde } from "../lib/format";

const B = VERGI.bagkur;
const ISTISNA = VERGI.gencGirisimciIstisnasi;

export default function PlatformHesaplayici({ platform, varsayilanKomisyon }) {
  const [aylikUsd, setAylikUsd] = useState("3.000");
  const [komisyon, setKomisyon] = useState(String(varsayilanKomisyon));
  const [kur, setKur] = useState("40,00");
  const [masraf, setMasraf] = useState("5");
  const [giderTl, setGiderTl] = useState("5.000");
  const [ihracat, setIhracat] = useState(true);
  const [genc, setGenc] = useState(false);
  const [indirim, setIndirim] = useState(true);

  const yillikUsd = sayiyaCevir(aylikUsd) * 12;
  const k = Math.min(100, Math.max(0, sayiyaCevir(komisyon))) / 100;
  const komisyonUsd = yillikUsd * k;
  const masrafUsd = sayiyaCevir(masraf) * 12;
  const netUsd = Math.max(0, yillikUsd - komisyonUsd - masrafUsd);
  const kurDeger = sayiyaCevir(kur);

  const gelirTl = netUsd * kurDeger;
  const yillikGider = sayiyaCevir(giderTl) * 12;
  const kazanc = Math.max(0, gelirTl - yillikGider);

  const yillikPrim = B.altSinir * (indirim ? B.indirimliOran : B.oran) * 12;
  const primSonrasi = Math.max(0, kazanc - yillikPrim);

  const ihracatIndirimi = ihracat ? primSonrasi * VERGI.hizmetIhracatiIndirimi : 0;
  const kalan = primSonrasi - ihracatIndirimi;
  const gencIstisnasi = genc ? Math.min(kalan, ISTISNA) : 0;
  const matrah = kalan - gencIstisnasi;
  const vergi = gelirVergisiHesapla(matrah).toplam;

  const netYillik = kazanc - yillikPrim - vergi;

  return (
    <div className="card">
      <label htmlFor="usd">Aylık ortalama {platform} kazancınız (USD)</label>
      <input id="usd" type="text" inputMode="decimal" value={aylikUsd} onChange={(e) => setAylikUsd(e.target.value)} />

      <div style={{ marginTop: 16 }}>
        <label htmlFor="komisyon">{platform} komisyon oranı (%)</label>
        <input id="komisyon" type="text" inputMode="decimal" value={komisyon} onChange={(e) => setKomisyon(e.target.value)} />
      </div>

      <div style={{ marginTop: 16 }}>
        <label htmlFor="kur">USD/TL kuru</label>
        <div className="muted">Güncel kuru kendiniz girin.</div>
        <input id="kur" type="text" inputMode="decimal" value={kur} onChange={(e) => setKur(e.target.value)} />
      </div>

      <div style={{ marginTop: 16 }}>
        <label htmlFor="masraf">Aylık para çekme ve platform masrafları (USD)</label>
        <input id="masraf" type="text" inputMode="decimal" value={masraf} onChange={(e) => setMasraf(e.target.value)} />
      </div>

      <div style={{ marginTop: 16 }}>
        <label htmlFor="gider">Aylık diğer giderleriniz (TL)</label>
        <div className="muted">Mali müşavir, internet, yazılım, ekipman gibi.</div>
        <input id="gider" type="text" inputMode="decimal" value={giderTl} onChange={(e) => setGiderTl(e.target.value)} />
      </div>

      <label className="check">
        <input type="checkbox" style={{ flexShrink: 0 }} checked={ihracat} onChange={(e) => setIhracat(e.target.checked)} />
        Hizmet ihracatı indirimi şartlarını sağlıyorum
      </label>
      <label className="check">
        <input type="checkbox" style={{ flexShrink: 0 }} checked={genc} onChange={(e) => setGenc(e.target.checked)} />
        Genç girişimci istisnasından yararlanıyorum
      </label>
      <label className="check">
        <input type="checkbox" style={{ flexShrink: 0 }} checked={indirim} onChange={(e) => setIndirim(e.target.checked)} />
        Bağ-Kur primlerimi düzenli ödüyorum (5 puan indirimi)
      </label>

      <div className="results">
        <strong>Yıllık (USD)</strong>
        <div className="row"><span>Brüt kazanç</span><span>${yillikUsd.toLocaleString("tr-TR")}</span></div>
        <div className="row"><span>{platform} komisyonu</span><span>${komisyonUsd.toLocaleString("tr-TR", { maximumFractionDigits: 0 })}</span></div>
        <div className="row"><span>Çekme ve masraflar</span><span>${masrafUsd.toLocaleString("tr-TR")}</span></div>
        <div className="row total"><span>Elinize geçen</span><span>${netUsd.toLocaleString("tr-TR", { maximumFractionDigits: 0 })}</span></div>
      </div>

      <div className="results">
        <strong>Yıllık (TL)</strong>
        <div className="row"><span>TL karşılığı</span><span>{tl(gelirTl)}</span></div>
        <div className="row"><span>Diğer giderler</span><span>{tl(yillikGider)}</span></div>
        <div className="row"><span>Bağ-Kur primi</span><span>{tl(yillikPrim)}</span></div>
        {ihracat && <div className="row"><span>Hizmet ihracatı indirimi</span><span>{tl(ihracatIndirimi)}</span></div>}
        {genc && <div className="row"><span>Genç girişimci istisnası</span><span>{tl(gencIstisnasi)}</span></div>}
        <div className="row"><span>Vergi matrahı</span><span>{tl(matrah)}</span></div>
        <div className="row"><span>Gelir vergisi</span><span>{tl(vergi)}</span></div>
        <div className="row total"><span>Yıllık net</span><span>{tl(netYillik)}</span></div>
        <div className="row"><span>Aylık ortalama net</span><span>{tl(netYillik / 12)}</span></div>
      </div>

      <p className="muted" style={{ marginTop: 12 }}>
        Kur farkları, platformun kendi dönüşüm oranı ve ödeme sağlayıcısı kesintileri sonucu değiştirebilir.
        Bağ-Kur primi alt sınırdan hesaplanmıştır.
      </p>
    </div>
  );
}
