// Tüm vergi oranları ve tutarları burada.
// Yeni yıl gelince: YIL_2027 diye yeni bir obje ekle, en alttaki VERGI'yi ona çevir.

const YIL_2026 = {
  yil: 2026,
  sonGuncelleme: "Eylül 2026",

  // GVK md. 103, ücret dışı gelirler tarifesi
  gelirVergisiDilimleri: [
    { ust: 190000, oran: 0.15 },
    { ust: 400000, oran: 0.2 },
    { ust: 1000000, oran: 0.27 },
    { ust: 5300000, oran: 0.35 },
    { ust: Infinity, oran: 0.4 },
  ],

  serbestMeslekStopaji: 0.2, // GVK md. 94
  kdvOranlari: [20, 10, 1],
  kdvGenelOrani: 0.2,
  gencGirisimciIstisnasi: 400000, // GVK mük. md. 20
  kurumlarVergisi: 0.25,
  karPayiStopaji: 0.15, // 9286 sayılı CB Kararı
  hizmetIhracatiIndirimi: 1, // GVK md. 89/13, 11257 sayılı CB Kararı
  
    // 2026 Bağ-Kur (4/b) verileri, 7566 sayılı Kanun sonrası
  bagkur: {
    altSinir: 33030,
    ustSinir: 297270,
    oran: 0.3575,
    indirimliOran: 0.3075,
  },

  // GVK mükerrer 20/B, sosyal içerik üreticiliği istisnası
  icerikUretici: {
    limit: 5300000,
    stopaj: 0.15,
  },


};

export const VERGI = YIL_2026;

export function gelirVergisiHesapla(matrah, dilimler = VERGI.gelirVergisiDilimleri) {
  let alt = 0;
  let toplam = 0;
  const detay = [];
  for (const d of dilimler) {
    if (matrah <= alt) break;
    const tutar = Math.min(matrah, d.ust) - alt;
    const vergi = tutar * d.oran;
    detay.push({ oran: d.oran, tutar, vergi });
    toplam += vergi;
    alt = d.ust;
  }
  return { toplam, detay };
}
