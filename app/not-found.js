import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>Sayfa bulunamadı</h1>
      <p>Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.</p>
      <Link href="/" className="card tool-link">
        <strong>Anasayfaya dön</strong>
        <div className="muted">Tüm hesaplama araçlarını görün.</div>
      </Link>
    </>
  );
}
