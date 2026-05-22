# Context: Partita Domani a Roma

> **Istruzione AI**: aggiornare questo file ogni volta che cambia qualcosa di non-ovvio (architettura, gotcha, decisioni tecniche). Non duplicare info ricavabili dal codice (struttura file, route, convenzioni di codice).

## Cos'è

PWA che risponde a "C'è la partita domani a Roma?". Mostra SI/NO in base alle partite casalinghe di Roma (ID football-data.org `100`) e Lazio (`110`) in Serie A. Target: romani che subiscono i disagi (traffico, strade chiuse) senza seguire il calcio.

- Live: https://vlrprbttst.github.io/partita-domani-a-roma/
- Branch attivo: `rewrite-modern` (default su GitHub). `master` è legacy, non usato.
- Stack: Vue 3 (`<script setup>`) + Vite + Vue Router 4 + SCSS singolo + GitHub Actions/Pages

## Architettura dati (importante)

L'app **non chiama l'API direttamente dal browser in produzione**.

- `scripts/fetch-matches.js` gira in GitHub Actions (cron 6h + ad ogni push) → scrive `dist/data/matches.json` con oggi, domani, prossima futura
- Il browser legge solo quel JSON statico (`cache: 'no-cache'` per evitare dati stantii)
- In dev: proxy Vite `/football-api/...` per evitare CORS
- Token API (`VITE_FOOTBALL_API_TOKEN`): in `.env` locale e GitHub Secret — mai nel bundle
- `00:00:00Z` da football-data.org = orario TBD → `hasKnownTime()` lo nasconde (in `MatchTicket.vue` mostra `TBD`)
- `matches.json` include `competition` (es. `"Serie A"`, `"UEFA Champions League"`) usato come subtitle da `MatchTicket.vue`

## Route (complete)

- `/` e `/domani`: partita di domani (`dayOffset: 1`). `/domani` ha `preventRedirect: true` — non rimbalza su `/oggi` se domani è vuoto
- `/oggi`: partita di oggi (`dayOffset: 0`)
- `/si`, `/si-lazio`, `/no`, `/derby`: test mode (forzano il risultato senza chiamare l'API)
- `/next-roma`, `/next-lazio`, `/next-derby`, `/next-tbd`: forzano lo stato "nessuna partita oggi/domani + prossima futura" per testare le varianti di `MatchTicket.vue` (data +10gg, 18:30 o 00:00Z per TBD)
- `/cookie-policy`: pagina policy
- Tutto il resto → redirect a `/`

## Gotcha CSS

- Cookie policy usa classi `.policy-page` / `.policy-content`, **non** `.cookie-*`: i filtri ad blocker (EasyPrivacy/uBlock) nascondono qualsiasi elemento con "cookie" in classe → pagina invisibile su desktop con adblock
- `.share-wrap` è dentro `.controls-wrap` (top: 20px, right: 20px); il posizionamento è solo sul wrapper esterno, non sul figlio
- `.center` (HomeView) è posizionato con `top: 100px; bottom: 80px; left: 0; right: 0` invece di `top:50%; transform: translate(-50%, -50%)`. Motivo: con Page Zoom Safari o caratteri di sistema grandi (accessibilità), un blocco centrato via transform cresce in altezza e si sovrappone ai bottoni agli angoli (menu, share, switch "e oggi?"). L'absolute con top/bottom espliciti confina il contenuto a una zona sicura — se il testo trabocca viene tagliato dentro questa zona, mai sopra i controlli

## Comportamenti speciali

- **Midnight reload**: app si ricarica a mezzanotte per aggiornare la data
- **Pull-to-refresh** su mobile
- **"Prossima partita"** appare sotto NO, **tranne** su `/oggi` se domani c'è già una partita (l'utente clicca "e domani?")
- **Service worker**: `deploy.yml` appende un commento timestamp a `dist/sw.js` ad ogni build → forza re-install del SW (cache busting per aggiornamenti dopo chiudi+riapri PWA). `sw.js` fa fetch con `cache: 'no-store'` (no HTTP cache)

## Sicurezza

- Token API: solo in `.env` e GitHub Secret, mai nel bundle
- CSP via `<meta http-equiv>` in `index.html`: `script-src 'self'` + GA4/GTM, niente `unsafe-inline` per script (per questo `analytics-init.js` e `spa-redirect.js` sono file in `public/` invece che inline). `style-src` con `unsafe-inline` resta perché Vue usa `:style` binding

## Google Analytics 4

- ID: `G-T02RCCNKG9`. Consent Mode v2: default `analytics_storage: 'denied'`, attivato solo dopo "Accetta" nel banner
- Escluso da localhost
- Scelta in `localStorage.cookiesChoice` (`'accepted'` | `'refused'`)

## Titolare

Valerio Pierbattista — omegaiori@gmail.com — [LinkedIn](https://www.linkedin.com/in/valeriopierbattista/)
