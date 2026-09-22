// Her sayfanın başlık, açıklama, canonical ve paylaşım bilgisini üretir.

const GORSEL = "/opengraph-image";

export function sayfa({ baslik, aciklama, yol, mutlak = false }) {
  return {
    title: mutlak ? { absolute: baslik } : baslik,
    description: aciklama,
    alternates: { canonical: yol },
    openGraph: {
      title: baslik,
      description: aciklama,
      url: yol,
      siteName: "Freelancer Vergi",
      locale: "tr_TR",
      type: "website",
      images: [{ url: GORSEL, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: baslik,
      description: aciklama,
      images: [GORSEL],
    },
  };
}
