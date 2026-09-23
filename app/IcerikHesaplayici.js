"use client";

import { useState } from "react";
import { VERGI, gelirVergisiHesapla } from "../lib/vergi";
import { sayiyaCevir, tl, oranYazi } from "../lib/format";

const I = VERGI.icerikUretici;
const ISTISNA = VERGI.gencGirisimciIstisnasi;
const sayi = (n) => n.toLocaleString("tr-TR");

export default function IcerikHesaplayici({ platform }) {
  const [hasilat, setHasilat] = useState("1.200.000");
  const [gider, setGider] = useState("200.000");
  const [banka, setBanka] = useState(true);
  const [genc, setGenc] = useState(false);

  const brut = sayiyaCevir(hasilat);
  const giderTutar = sayiyaCevir(gider);
  const stopaj = banka ? brut * I.stopaj : 0;
  const istisnaVar = banka && brut <= I.limit;

  const kazanc = Math.max(0, brut - giderTutar);
  const gencIstisnasi = genc ? Math.min(kazanc, ISTISNA) : 0;
  const matrah = kazanc - gencIstisnasi;
  const tarifeVergisi = gelirVergisiHesapla(matrah).toplam;

  const toplamVergi = istisnaVar ? stopaj : tarifeVergisi;
  const odenecek = istisnaVar ? 0 : Math.max(0, tarifeVergisi - stopaj);
  const net = brut - giderTutar - toplamVergi;

  return (
    <div className="card">
      <label htmlFor="hasilat">Yıllık brüt {platform} hasılatınız (TL)</label>
      <div className="muted">Reklam, sponsorluk, bağış ve üyelik gelirlerinin toplamı.</div>
      <input id="hasilat" type="text" inputMode="decimal" value={hasilat} onChange={(e) => setHasilat(e.target.value)} />

      <div style={{ marginTop: 16 }}>
        <label htmlFor="gider">Yıllık giderleriniz (TL)</label>
        <div className="muted">Yalnızca istisna dışında kalırsanız dikkate alınır.</div>
        <input id="gider" type="text" inputMode="decimal" value={gider} onChange={(e) => setGider(e.target.value)} />
      </div>

      <label className="check">
        <input type="checkbox" style={{ flexShrink: 0 }} checked={banka} onChange={(e) => setBanka(e.target.checked)} />
        Hasılatın tamamı Türkiye'deki özel banka hesabından tahsil ediliyor
      </label>
      <label className="check">
        <input type="checkbox" style={{ flexShrink: 0 }} checked={genc} onChange={(e) => setGenc(e.target.checked)} />
        İstisna dışında kalırsam genç girişimci istisnasından yararlanabilirim
      </label>

      <div className="results">
        <div className="row"><span>Brüt hasılat</span><span>{tl(brut)}</span></div>
        <div className="row">
          <span>Durum</span>
          <span>{istisnaVar ? "İstisna kapsamında" : "Genel hükümlere tabi"}</span>
        </div>
        {istisnaVar ? (
          <>
            <div className="row"><span>Banka stopajı ({oranYazi(I.stopaj)})</span><span>{tl(stopaj)}</span></div>
            <div className="row"><span>Beyanname</span><span>Gerekmiyor</span></div>
            <div className="row total"><span>Elinize kalan</span><span>{tl(brut - stopaj)}</span></div>
          </>
        ) : (
          <>
            <div className="row"><span>Giderler</span><span>{tl(giderTutar)}</span></div>
            {genc && <div className="row"><span>Genç girişimci istisnası</span><span>{tl(gencIstisnasi)}</span></div>}
            <div className="row"><span>Vergi matrahı</span><span>{tl(matrah)}</span></div>
            <div className="row"><span>Hesaplanan gelir vergisi</span><span>{tl(tarifeVergisi)}</span></div>
            <div className="row"><span>Kesilmiş stopaj (mahsup)</span><span>{tl(stopaj)}</span></div>
            <div className="row"><span>Beyannamede ödenecek</span><span>{tl(odenecek)}</span></div>
            <div className="row total"><span>Elinize kalan</span><span>{tl(net)}</span></div>
          </>
        )}
      </div>

      {banka && brut > I.limit && (
        <p className="muted" style={{ marginTop: 12 }}>
          Hasılat {sayi(I.limit)} TL sınırını aştığı için istisna tamamen ortadan kalktı ve gelirin
          tamamı tarifeye göre vergilendirildi. Banka stopajı hesaplanan vergiden mahsup edilir.
        </p>
      )}
      {!banka && (
        <p className="muted" style={{ marginTop: 12 }}>
          İstisnadan yararlanmak için hasılatın tamamının Türkiye'de açılmış özel bir banka
          hesabından tahsil edilmesi şarttır.
        </p>
      )}
    </div>
  );
}
