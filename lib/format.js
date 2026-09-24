// Sayı okuma ve yazdırma fonksiyonları. Tüm hesaplayıcılar bunları kullanır.

export function sayiyaCevir(metin) {
  let temiz = String(metin).trim().replace(/\s/g, "");
  if (!temiz) return 0;

  const sonVirgul = temiz.lastIndexOf(",");
  const sonNokta = temiz.lastIndexOf(".");

  if (sonVirgul > -1) {
    // Virgül varsa ondalık ayracı odur; noktalar binlik ayracıdır.
    temiz = temiz.replace(/\./g, "").replace(",", ".");
  } else if (sonNokta > -1) {
    const sonrasi = temiz.length - sonNokta - 1;
    const noktaSayisi = (temiz.match(/\./g) || []).length;
    // Tek nokta ve ardından 3 hane yoksa ondalık ayracı sayılır: 10.5 veya 10.0000
    if (noktaSayisi === 1 && sonrasi !== 3) {
      temiz = temiz.replace(".", ".");
    } else {
      temiz = temiz.replace(/\./g, "");
    }
  }

  const sayi = parseFloat(temiz);
  return isNaN(sayi) || sayi < 0 ? 0 : sayi;
}

export function tl(sayi) {
  return sayi.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " TL";
}

export function eksi(sayi) {
  return sayi > 0 ? "-" + tl(sayi) : tl(0);
}

export function yuzde(sayi) {
  return "%" + sayi.toLocaleString("tr-TR", { maximumFractionDigits: 2 });
}

export function oranYazi(oran) {
  return "%" + Math.round(oran * 100);
}
