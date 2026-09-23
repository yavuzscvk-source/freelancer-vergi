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
const MENU = [
  { href: "/hesaplayicilar", ad: "Tüm araçlar" },
  { href: "/rehber", ad: "Rehber" },
  { href: "/serbest-meslek-makbuzu", ad: "Makbuz" },
  { href: "/gelir-vergisi-hesaplama", ad: "Gelir vergisi" },
  { href: "/net-gelir-hesaplama", ad: "Net gelir" },
  { href: "/hizmet-ihracati-vergi-indirimi", ad: "Yurt dışı" },
  { href: "/sahis-mi-limited-mi", ad: "Şahıs / Limited" },
];



const menuKutu = { maxWidth: 680, margin: "0 auto", padding: "0 20px 12px", display: "flex", gap: 18, overflowX: "auto", whiteSpace: "nowrap" };
const menuLink = { color: "var(--muted)", textDecoration: "none", fontWeight: 600, fontSize: "0.92rem" };

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
          <div className="header-inner" style={{ paddingBottom: 10 }}>
            <Link href="/" className="logo">
              <span className="logo-mark">₺</span>
              Freelancer Vergi
            </Link>
          </div>
          <nav style={menuKutu}>
            {MENU.map((m) => (
              <Link key={m.href} href={m.href} style={menuLink}>{m.ad}</Link>
            ))}
          </nav>
        </header>
        <main className="container">{children}</main>
        <footer className="footer">
          <div className="footer-inner">
            <nav style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 8 }}>
                           <Link href="/hakkinda">Hakkında</Link>
              <Link href="/iletisim">İletişim</Link>
              <Link href="/gizlilik-politikasi">Gizlilik</Link>
              <Link href="/cerez-politikasi">Çerez Politikası</Link>
              <Link href="/kullanim-kosullari">Kullanım Koşulları</Link>
              <Link href="/sorumluluk-reddi">Sorumluluk Reddi</Link>

            </nav>
            Bu sitedeki hesaplamalar bilgilendirme amaçlıdır. Kesin sonuç için mali müşavirinize danışın.
          </div>
        </footer>
        <Analytics />
      </body>
          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Freelancer Vergi",
                url: SITE_URL,
                inLanguage: "tr-TR",
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Freelancer Vergi",
                url: SITE_URL,
                logo: SITE_URL + "/icon.svg",
                email: "freelancervergi@gmail.com",
              },
            ]),
          }}
        />

    </html>
  );
}
