import { ImageResponse } from "next/og";

export const alt = "Freelancer Vergi: serbest çalışanlar için vergi hesaplama araçları";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const satir = { display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: "2px solid #e3e8ef" };

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#eef1f5", padding: 64, color: "#14213d", fontSize: 32 }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "55%" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: 72, height: 72, borderRadius: 18, background: "#14213d", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, fontWeight: 700 }}>TL</div>
            <div style={{ fontSize: 44, fontWeight: 700, marginLeft: 20 }}>Freelancer Vergi</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 62, fontWeight: 700, lineHeight: 1.1 }}>Makbuz, gelir vergisi ve KDV hesaplama</div>
            <div style={{ fontSize: 30, color: "#5b6475", marginTop: 24 }}>freelancervergi.com.tr</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "45%", marginLeft: 40, background: "#ffffff", border: "2px solid #d6dce5", borderRadius: 20, padding: 36 }}>
          <div style={{ fontSize: 26, color: "#5b6475", marginBottom: 8 }}>Ornek makbuz</div>
          <div style={satir}><span>Brut tutar</span><span>10.000 TL</span></div>
          <div style={satir}><span>Stopaj</span><span>-2.000 TL</span></div>
          <div style={satir}><span>KDV</span><span>+2.000 TL</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 16, fontWeight: 700, fontSize: 36 }}><span>Tahsil</span><span>10.000 TL</span></div>
          <div style={{ display: "flex", height: 3, background: "#14213d", marginTop: 10 }} />
          <div style={{ display: "flex", height: 3, background: "#14213d", marginTop: 4 }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
