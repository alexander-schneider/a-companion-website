# a companion — Website (statisch)

Erste Version der Website für die a companion GbR. Reines HTML/CSS, kein Build,
kein Framework, keine externen Requests (DSGVO-konform, siehe `../KONZEPT.md`).

## Vorschau (lokal)

```bash
cd website
python3 -m http.server 8000
# Browser: http://localhost:8000
```

Ein Doppelklick auf `index.html` funktioniert ebenfalls, aber der lokale Server
bildet das spätere Verhalten (Pfade, Fonts) exakter ab.

## Dateien

```
index.html            Startseite
leistungen.html       Executive Diagnostics · Leadership Development · Transformation
wer-wir-sind.html     Vollprofile beider Partner
kontakt.html          Direkte Kontaktdaten
impressum.html        Pflicht (§ 5 DDG) — enthält [Platzhalter]
datenschutz.html      Pflicht (Art. 13 DSGVO) — enthält [Platzhalter]
robots.txt, sitemap.xml, favicon.svg
assets/css/style.css  komplettes Design-System (Farben, Typografie, Layout)
assets/js/nav.js      einziges Skript (mobiles Menü)
assets/fonts/         Inter + Source Serif 4, selbst gehostet (kein Google-CDN)
assets/img/           Logo (SVG) + Porträts; _originale/ = archivierte Quelldateien
```

## Vor dem Livegang (Kurzfassung — Details in ../KONZEPT.md §8–§10)

1. **Alle `[Platzhalter]`** in `impressum.html` und `datenschutz.html` ausfüllen
   (Anschrift, USt-IdNr, Hosting-Anbieter, Bildrechte).
2. **Gelbe `.todo`-Hinweisboxen** entfernen — sie sind bewusst sichtbar und
   dürfen nicht live gehen. Alle Stellen findet man mit:
   `grep -rn "class=\"todo\"" *.html` sowie `grep -rn "TODO" *.html`.
3. **Textfrage Transformation:** „die erforderlichen **Schritte**" bestätigen
   (Original „Seiten", vermutlich Tippfehler — siehe KONZEPT.md §9).
4. **Hero-Headline** „Begleitung an der *Spitze*." ist ein gestalterischer
   Vorschlag (nicht Original-Kundentext) — der vollständige Kundenclaim steht
   unverändert direkt darunter als Standfirst. Headline bitte freigeben oder
   ändern.
4. Impressum/Datenschutz rechtlich prüfen lassen.
5. Domain `a-companion.com`, TLS, Weiterleitung `www` → Hauptdomain.

## Hosting

Beliebiger Static-Host mit EU-Serverstandort und AV-Vertrag (z. B. Netlify EU,
Uberspace, Hetzner). Einfach den Inhalt des `website/`-Ordners hochladen.
