# Freelancer vergi hesaplayıcıları (freelancer-vergi)

Türkiye'deki freelancer'lar için Next.js (app router) vergi hesaplayıcı ve rehber sitesi.

## Yapı
- `app/<sayfa>/page.js` + gerekirse `Hesaplayici.js`: gelir vergisi, net gelir, serbest meslek makbuzu, genç girişimci istisnası, hizmet ihracatı indirimi, döviz fatura TL karşılığı, şahıs şirketi maliyeti, KDV rehberi, platform sayfaları (Fiverr, Upwork, YouTube, Instagram).
- `app/sitemap.js` (YOLLAR dizisi): yeni sayfa eklenince buraya da eklenmeli.
- `lib/reklam.js`: `ADSENSE_ID` (aktif), `GOOGLE_ADS_ID` (boş, kampanya kapalı), `ORTAKLAR` (affiliate, şimdilik boş). `public/ads.txt` AdSense için.

## Durum (son güncelleme: 13 Ekim 2026)
- 13 Ekim: 4 yeni rehber: Bağ-Kur primi 2026, vergi takvimi 2027, stopaj iadesi, hizmet ihracatı KDV istisnası. Takvim sayfasındaki tarihler (bayram/hafta sonu kaymaları) yıl değişince elle güncellenmeli.
- 13 Ekim (2): `kira-geliri-vergisi-hesaplama` (VERGI.kira: 58.000 TL istisna, %15 götürü gider) ve `mali-musavir-destegi` (mailto ile başvuru formu; `MusavirKutusu` tüm araç sayfalarında). Gelen başvurular freelancervergi@gmail.com'a düşer; anlaşmalı mali müşavir bulunması kullanıcıda.
- 13 Ekim: ana sayfaya WebSite/Organization şeması ve hisse-beyan linki; sitemap tarihi `VERGI.sonGuncellemeTarihi`'ne bağlandı. Araç/rehber şemaları (WebApplication/Article + Breadcrumb) `Kaynaklar.js` içinde üretiliyor; yeni sayfa `ARACLAR`/`REHBERLER`/`KAYNAKLAR` haritalarına eklenmeli.
- 11 Ekim: AdSense eklendi.
- 3–7 Ekim: KDV rehberi eklendi, sitemap düzenlendi, `sahis-sirketi-maliyet` → `sahis-sirketi-maliyeti` olarak taşındı.

## Kullanıcı ve çalışma şekli
- Kullanıcıyla Türkçe konuş. Saat dilimi: Europe/Istanbul (UTC+3).
- Çoğunlukla telefondan (iOS) çalışıyor. Komutları kısa, tek satırlık parçalar halinde ve sırayla ver; uzun tırnaklı çok satırlı komutlar yarıda kalabiliyor.
- Değişiklikler doğrudan `main` dalına commit'leniyor.
- Kullanıcının diğer depoları: `-ibkr-trading-bot-` (katalizör/haber botu, aktif), `hisse-beyan-` (yurt dışı hisse vergisi sitesi), `freelancer-vergi` (freelancer vergi hesaplayıcıları), `Borsa` (eski bot), `Portfolyo` (demo siteler).
