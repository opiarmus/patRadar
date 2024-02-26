# Arbeitsjournal
Hier werden die Arbeiten am Projekt "PatRadar" festgehalten.

## 06.02.2024
Stunden: 6

Tätigkeiten:

- Aufgabenstellung des "TechRadar" Projekts inklusive Anforderungen  gelesen
- Ansatz für die Umsetzung des Problems überlegt und mögliche Technologien recherchiert
- Dokumentationen einzelner Technologien konsultiert und Machbarkeit im Projekt überprüft (Node.js, Vuetify, Pinia, MongoDB, Jest, Vitest)
- Repository für das Frontend und die Dokumentationen erstellt und Vue.js App initialisiert
- Arbeitsjournal aufgesetzt
- Projektbeschreibung aufgesetzt und geschrieben
- Diese Markdowns erstellt, sodass die Dokumentationen ebenfalls unter Versionskontrolle stehen

## 23.02.2024
Stunden: 12

Tätigkeiten:
- Angular projekt erstellt und initialisiert.
- TailwindCSS installiert und experimentiert
- Navigationsleiste (Header) mit Router Optionen erstellt
- Routing eingerichtet für die Pages
- Types und Dummy-Objekte für Technologien und Benutzer erstellt
- Firebase Konto erstellt und eine neue Applikation für dieses Projekt eingerichtet.
Firebase Modul in Projekt hinzugefügt und initialisiert.
- Dotenv installiert und experimentiert. Leider ist der Versuch fehlgeschlagen.
Dotenv vorläufig wieder deinstalliert, da der Guide auf der offiziellen Seite davon ausging, 
dass auf Vercel deployt wird. Dies verlangte danach, einen ganz anderen Builder zu 
verwenden. Mein Projekt kompilierte dann nicht mehr also hab ich aus Zeitgründen vorerst 
alles wieder rückgängig gemacht. Komme darauf zurück.
Grund für die Verwendung war der API-Key von Firebase, den ich nicht im Repo haben wollte.
- Formular für neue Technologien erstellt und styled. Nur HTML-Template steht.
Das Backend und die DB kommen erst noch.
- IntelliJ Spell-Check konfiguriert, sodass Deutsch nicht als Tippfehler angezeigt wird

## 24.02.2024
Stunden: 12

Tätigkeiten:
- Page für den Viewer hinzugefügt
- Detailansicht für die Technologien hinzugefügt
- Custom Pipe erstellt für die Anzeige von Daten
- Snackbar-Komponente erstellt, um dem Benutzer Feedback zu geben.
Z.B. wird nach dem erfolgreichen Erstellen einer neuen Technologie 
eine entsprechende Meldung angezeigt. Snackbar musste eigens erstellt werden, 
da ich nicht mit Angular Material arbeiten will.
- Komponente zum Publizieren von unpublizierten Technologien erstellt
- Diverse Modernisierungen im Design (z.B. Header und Navigation)
- Technologie-Detailansicht umgeschrieben, sodass direkt auf eine Detailansicht 
geroutet werden kann. Da ich die Details in einem Dialog anzeige und keine separate 
Page dafür habe, musste ich hier eine Lösung finden.
- Technologien in Viewer nach Kategorien strukturiert und nach Maturität sortiert

## 25.02.2024
Stunden: 12

Tätigkeiten:
- Node.js Webserver mit Express erstellt für das Backend.
Dafür ein Repo aufgesetzt. Dann die Struktur aufgebaut und dabei cors, body-parser, etc. eingerichtet.
- MongoDb Account erstellt, Projekt erstellt, DB erstellt. Konfiguriert, sodass zugegriffen werden kann. 
Dummy Objekte übertragen in die DB.
- "dotenv" installiert, um Credentials (u.a. für MongoDB) nicht im Repository zu enthalten.
- REST API auf Webserver eingerichtet, sodass Technologien abgefragt, erstellt und editiert werden können.
- In Frontend die Dummy-Objekte entfernt und alles umgestellt, sodass jetzt Daten live vom Webserver empfangen werden.
- Visuelle Verbesserungen wie z.B. Kürzen von zu langen Texten in der Übersicht mittels Pipes gelöst.
- Code aufgeräumt, um diverse Warnungen zu beseitigen
- Komponente für das Editieren von Technologien im Adminbereich erstellt. 
Dabei wird eine Liste alles Technologien angezeigt. Diese kann per Suchbegriff gefiltert werden. 
Ebenfalls können nur die unpublizierten Technologien angezeigt werden (per Checkbox). 
Die Liste ist aufgebaut einer weiteren separaten Komponente, welche alle nötigen Kontrollelemente für das 
Bearbeiten bietet.
- Den Admin Bereich übersichtlicher gestaltet, indem die Bereiche "Create Technology" und 
"Edit Technology" jeweils ausklappbar gemacht wurden, um die Seite nicht zu überladen
- Fontawesome installiert, um Icons anzuzeigen (da Angular Material nicht verwendet wird)
- Buttons für das Publizieren und Speichern der editierten Technologien disabled, wenn die notwendigen Informationen 
nicht angegeben wurden.
- Wird eine neue Technologie erstellt, dann wird sie nun direkt in die Liste für das Editieren der Technologien überführt.
Dadurch ist kein weiterer API-Call notwendig, um die Technologien in der anderen Komponente zu aktualisieren. 
Dies wurde u.a. mit der "@ViewChild" Funktionalität umgesetzt.

## 26.02.2024
Stunden: 8

Tätigkeiten:
- Disable der "Publish" und "Save" Buttons repariert



## Total
Stunden: 40
