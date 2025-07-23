# Moment 4 – Angular II

Detta är en Angular-applikation som visar en lista med kurser för Webbutvecklingsprogrammet vid Mittuniversitetet. Projektet är utvecklat för kursmoment 4 och uppfyller krav på HTTP-anrop, services, datamodeller, sortering och filtrering i Angular.

## Funktioner

- Hämtar kursdata från en lokal JSON-fil (`public/ramschema.json`) med hjälp av en Angular-service och HttpClient.
- Visar kurserna i en tabell med kolumnerna kurskod, kursnamn och progression.
- Sökfält för att filtrera kurser på kurskod eller kursnamn – uppdateras direkt när du skriver.
- Möjlighet att sortera tabellen på kurskod, kursnamn och progression genom att klicka på tabellhuvudena.
- Allt sker med Angulars data binding – sidan laddas aldrig om vid interaktion.
- Grundläggande responsiv design med CSS.

## Teknisk översikt

- **Framework:** Angular (med standalone-komponenter)
- **Service:** En service (`course.service.ts`) för att hämta kursdata via HttpClient.
- **Datamodell:** Ett interface (`course.model.ts`) beskriver kursobjektens struktur.
- **Komponent:** Huvudkomponenten (`app.ts` och `app.html`) hanterar visning, sökning och sortering av kurser.
- **Styling:** CSS i `app.css`

## Så här kör du projektet

1. Klona repot och gå till projektmappen:
   ```
   git clone ...
   cd moment4
   ```
2. Installera beroenden:
   ```
   npm install
   ```
3. Starta utvecklingsservern:
   ```
   ng serve
   ```
4. Öppna [http://localhost:4200](http://localhost:4200) i webbläsaren.

---

Av: Ellen Liden - elli1807@student.miun.se,
VT25, DT208G
