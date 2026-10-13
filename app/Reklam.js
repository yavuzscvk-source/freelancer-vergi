import Link from "next/link";
import { ADSENSE_ID, ORTAKLAR } from "../lib/reklam";

export function ReklamAlani() {
  if (!ADSENSE_ID) return null;
  return (
    <div style={{ margin: "28px 0", minHeight: 250 }}>
      <div className="muted" style={{ marginBottom: 4, fontSize: "0.78rem" }}>Reklam</div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_ID}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

export function Ortaklar() {
  if (ORTAKLAR.length === 0) return null;
  return (
    <div className="card">
      <strong>Önerilen hizmetler</strong>
      <ul style={{ margin: "8px 0 0", paddingLeft: 18 }}>
        {ORTAKLAR.map((o) => (
          <li key={o.url}>
            <a href={o.url} target="_blank" rel="sponsored noopener noreferrer">{o.ad}</a>
            {o.not ? <span className="muted"> — {o.not}</span> : null}
          </li>
        ))}
      </ul>
      <p className="muted" style={{ marginTop: 10, marginBottom: 0 }}>
        Bu bağlantılar üzerinden yapılan üyeliklerden komisyon kazanabiliriz. Bu durum sizin için
        ek maliyet oluşturmaz ve içeriklerimizdeki değerlendirmeleri etkilemez.
      </p>
    </div>
  );
}

export function MusavirKutusu() {
  return (
    <div className="card">
      <strong>Mali müşavir mi arıyorsunuz?</strong>
      <p style={{ margin: "6px 0 0" }}>
        Şahıs şirketi kuruluşu, yıllık beyanname veya yurt dışı gelir için freelancer'larla çalışan
        mali müşavirlerden ücretsiz teklif alın.
      </p>
      <Link href="/mali-musavir-destegi" className="btn">Teklif al</Link>
    </div>
  );
}
