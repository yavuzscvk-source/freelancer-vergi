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

      <Link href="/gelir-vergisi-hesaplama" className="card tool-link">
        <strong>Gelir Vergisi Hesaplama 2026</strong>
        <div className="muted">Yıllık kazancınızın vergisini dilim dilim ve stopaj mahsubuyla hesaplayın.</div>
      </Link>

      <div className="card">
        <strong>Yakında</strong>
        <div className="muted">Genç girişimci istisnası hesaplama, şahıs şirketi mi limited mi?</div>
      </div>
    </>
  );
}
