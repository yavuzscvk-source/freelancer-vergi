import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata = {
  title: {
    default: "Freelancer Vergi Hesaplama",
    template: "%s | Freelancer Vergi",
  },
  description: "Serbest çalışanlar için vergi hesaplama araçları.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <header className="header">
          <div className="header-inner">
            <Link href="/" className="logo">Freelancer Vergi</Link>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="footer">
          <div className="footer-inner">
            <nav style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 8 }}>
              <Link href="/hakkinda">Hakkında</Link>
              <Link href="/iletisim">İletişim</Link>
              <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link>
            </nav>
            Bu sitedeki hesaplamalar bilgilendirme amaçlıdır. Kesin sonuç için mali müşavirinize danışın.
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
