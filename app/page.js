import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Freelancer Vergi Hesaplama Araçları</h1>
      <p>Serbest çalışanlar, yazılımcılar, tasarımcılar ve içerik üreticileri için sade ve ücretsiz vergi hesaplayıcıları.</p>

      <Link href="/serbest-meslek-makbuzu" className="card tool-link">
        <strong>Serbest Meslek Makbuzu Hesaplama</strong>
        <div className="muted">Brüt veya net tutardan stopaj, KDV ve tahsil edilecek tutarı hesaplayın.</div>
      </Link>

      <div className="card">
        <strong>Yakında</strong>
        <div className="muted">Gelir vergisi dilimi hesaplama, genç girişimci istisnası hesaplama</div>
      </div>
    </>
  );
}
