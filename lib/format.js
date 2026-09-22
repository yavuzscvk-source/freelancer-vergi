// Sayı okuma ve yazdırma fonksiyonları. Tüm hesaplayıcılar bunları kullanır.

export function sayiyaCevir(metin) {
  const temiz = String(metin).replace(/\./g, "").replace(",", ".").trim();
  const sayi = parseFloat(temiz);
  return isNaN(sayi) || sayi < 0 ? 0 : sayi;
}

export function tl(sayi) {
  return sayi.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " TL";
}

export function yuzde(sayi) {
  return "%" + sayi.toLocaleString("tr-TR", { maximumFractionDigits: 2 });
}

export function oranYazi(oran) {
  return "%" + Math.round(oran * 100);
}
