export const metadata = {
  title: "Freelancer Vergi Hesaplama",
  description: "Serbest çalışanlar için vergi hesaplama araçları.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
