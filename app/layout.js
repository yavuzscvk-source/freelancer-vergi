import Link from "next/link";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "../lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Freelancer Vergi Hesaplama",
    template: "%s | Freelancer Vergi",
  },
  description: "Serbest çalışanlar için vergi hesaplama araçları.",
  openGraph: {
    siteName: "Freelancer Vergi",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={manrope.variable}>
      <body>
        <header className="header">
          <div className="header-inner">
            <Link href="/" className="logo">
              <span className="logo-mark">₺</span>
              Freelancer Vergi
            </Link>
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
