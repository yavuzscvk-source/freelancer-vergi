export const metadata = {
  title: "Serbest Meslek Makbuzu Hesaplama",
  description: "Brüt tutardan stopaj, KDV ve net tutarı hesaplayın.",
};

export default function SerbestMeslekMakbuzu() {
  const brut = 10000;
  const stopaj = brut * 0.20;
  const kdv = brut * 0.20;
  const net = brut - stopaj;
  const tahsilEdilecek = net + kdv;

  return (
    <main>
      <h1>Serbest Meslek Makbuzu Hesaplama</h1>
      <p>Brüt tutar: {brut} TL</p>
      <p>Stopaj (%20): {stopaj} TL</p>
      <p>KDV (%20): {kdv} TL</p>
      <p>Net tutar: {net} TL</p>
      <p>Tahsil edilecek: {tahsilEdilecek} TL</p>
    </main>
  );
}
