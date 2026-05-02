# Context: Partita Domani a Roma

> **Istruzione per l'AI**: questo file va aggiornato automaticamente ogni volta che cambia qualcosa di degno di nota nel progetto (architettura, comportamenti speciali, decisioni tecniche non ovvie, convenzioni CSS critiche, ecc.).

## Cos'è l'app

Sito/PWA che risponde a un'unica domanda: **"C'è la partita domani a Roma?"**
Mostra SI o NO in base alle partite casalinghe di Roma e Lazio (Serie A).
Pubblico target: romani che non seguono il calcio ma ne subiscono i disagi (traffico, strade chiuse).

URL live: https://vlrprbttst.github.io/partita-domani-a-roma/
Repository: https://github.com/vlrprbttst/partita-domani-a-roma
Branch attivo: `rewrite-modern` (default branch su GitHub)
Branch `master`: legacy, non usato

---

## Stack

- **Vue 3** + **Vite** — Composition API, `<script setup>`
- **Vue Router 4** — `createWebHistory('/partita-domani-a-roma/')` con 404.html SPA redirect trick per GitHub Pages
- **SCSS** — un unico file `src/styles/main.scss`
- **GitHub Actions** — build + fetch dati + deploy su branch `gh-pages`
- **GitHub Pages** — serve il branch `gh-pages`

---

## Architettura dati (importante)

L'app **non chiama mai l'API direttamente dal browser in produzione**.

Il flusso è:
1. GitHub Actions gira ogni 6 ore (cron) + ad ogni push su `rewrite-modern`
2. `scripts/fetch-matches.js` chiama football-data.org con il token segreto
3. Scrive `dist/data/matches.json` con le partite di oggi, domani e la prossima partita futura
4. Il browser legge solo quel JSON statico

In **sviluppo locale** invece l'API viene chiamata tramite proxy Vite (`/football-api/...`) per evitare CORS.

Il token API (`VITE_FOOTBALL_API_TOKEN`) è in `.env` locale e come GitHub Secret — **non finisce mai nel bundle di produzione**.

---

## File chiave

| File | Ruolo |
|---|---|
| `src/App.vue` | Root: stato globale (`loaded`, `menuOpen`), PWA install banner, skip link |
| `src/views/HomeView.vue` | Vista principale: logica match, pull-to-refresh, share, result |
| `src/views/CookiePolicy.vue` | Pagina cookie policy GDPR — niente hamburger menu, testo full-width, barra fissa in basso con "Torna alla home" (giallo, allineato a destra) |
| `src/components/MenuPanel.vue` | Sidebar menu con nav landmarks |
| `src/components/ConsentBanner.vue` | Banner GDPR consenso cookie (GA4 Consent Mode v2) |
| `src/api/football.js` | Fetch dati: proxy in dev, JSON statico in prod |
| `src/utils/analytics.js` | Wrapper `trackEvent()` per GA4 |
| `src/styles/main.scss` | Tutti gli stili dell'app |
| `src/router/index.js` | Route: `/`, `/oggi`, `/si`, `/no`, `/cookie-policy` |
| `src/api/firebase.js` | Init Firebase client, subscribe/unsubscribe notifiche push |
| `scripts/fetch-matches.js` | Script Node.js per GitHub Actions: chiama API, scrive matches.json |
| `scripts/send-notifications.js` | Fetcha matches.json dal URL GitHub Pages deployato, invia FCM push se domani c'è partita |
| `.github/workflows/deploy.yml` | CI/CD: build + fetch + deploy. Trigger: push, cron `0 */6 * * *`, workflow_dispatch |
| `.github/workflows/notify.yml` | Invia notifiche push. Cron `0 10 * * *` (12:00 ora di Roma). Trigger: workflow_dispatch |
| `public/404.html` | Redirect SPA per GitHub Pages (spa-github-pages trick) |
| `public/icons/manifest.json` | PWA manifest |
| `public/sw.js` | Service worker minimale (PWA launcher, no cache) |
| `index.html` | GA4 snippet con Consent Mode v2 default denied, skip link target |

---

## Route

| Path | Comportamento |
|---|---|
| `/` | Partita **domani** (`dayOffset: 1`) |
| `/oggi` | Partita **oggi** (`dayOffset: 0`) |
| `/si` | Test mode: forza risultato SI |
| `/no` | Test mode: forza risultato NO |
| `/cookie-policy` | Pagina cookie policy |

---

## Stato globale (provide/inject)

`App.vue` fa `provide('appState', state)` dove:
- `state.loaded` — controlla l'overlay di caricamento nero
- `state.menuOpen` — apre/chiude il menu laterale

Tutti i componenti figli usano `inject('appState')`.

---

## Google Analytics 4

- ID: `G-T02RCCNKG9`
- Consent Mode v2: default `analytics_storage: 'denied'`
- Si attiva solo se l'utente clicca "Accetta" nel banner
- Escluso da localhost (`if (location.hostname !== 'localhost')`)
- Scelta salvata in `localStorage` → chiave `cookiesChoice` (valori: `'accepted'` | `'refused'`)

---

## PWA

- Icona unica: `public/icons/android-chrome-192x192.png` (usata anche per iOS) e `android-chrome-512x512.png`
- Install prompt: catturato con `beforeinstallprompt` in App.vue, mostrato come banner in cima
- Service worker: `public/sw.js` — network-first per asset; navigazione (`index.html`) fetchata con `cache: 'no-store'` per garantire sempre il bundle JS più recente dopo ogni deploy

---

## Accessibilità (WCAG 2.2 AAA)

Implementato:
- Elementi semantici: `<button>`, `<nav>`, `<main>` al posto di `<div>`
- ARIA: `aria-label`, `aria-expanded`, `aria-live`, `aria-controls`, `role="status"`
- Skip link ("Salta al contenuto")
- Focus visible: outline giallo 3px (`#fcff00`)
- Target size minimo 44×44px su tutti gli elementi interattivi
- `prefers-reduced-motion` disabilita tutte le transizioni CSS e l'animazione confetti
- Contrasto colori: badge `.roma` (`#8C1A2E`) soddisfa 7:1 AAA

---

## Sicurezza

- Nessun secret nel codice o nel bundle
- Token API solo in `.env` (gitignored) e GitHub Secret
- `rel="noopener noreferrer"` su tutti i `target="_blank"`
- `cache: 'no-cache'` sul fetch di `matches.json` per evitare dati stantii nella PWA
- GA4 disabilitato di default (Consent Mode v2)
- Localhost escluso da GA4

## Notifiche Push

Implementate con **Firebase Cloud Messaging (FCM)** + Firestore.

**Flusso utente:**
- In home appare il bottone "Avvisami la prossima volta: Attiva le Notifiche" (solo se non ancora iscritto e notifiche non bloccate)
- Al click → il browser chiede il permesso → se concesso, il token FCM viene salvato su Firestore
- Compare l'icona campanella barrata in alto a destra → cliccandola si disiscrive (token rimosso da Firestore + `deleteToken()`)

**Componenti:**
- `src/api/firebase.js` — init Firebase client, `subscribeToNotifications()` e `unsubscribeFromNotifications()`
- `public/sw.js` — importa Firebase compat via CDN, gestisce `onBackgroundMessage` e `notificationclick`
- `scripts/send-notifications.js` — fetcha `matches.json` dall'URL GitHub Pages deployato (non da filesystem locale); se domani c'è partita, invia FCM a tutti i token; token chunked a 500 (limite FCM); stale token cleanup chunked a 30 (limite Firestore `in`)

**Timing invio:**
- Workflow dedicato `notify.yml`, cron `0 10 * * *` → **12:00 ora di Roma** (CEST = UTC+2)
- Separato da `deploy.yml` che non esegue più notifiche

**Deduplicazione:** Firestore `sentNotifications/{YYYY-MM-DD}` — se il doc esiste, skip. Evita invii doppi se il workflow gira più volte.

**Segreti GitHub necessari:**
- `FIREBASE_SERVICE_ACCOUNT` — JSON del service account Firebase (per Admin SDK, usato da `notify.yml`)
- `VITE_FIREBASE_VAPID_KEY` — chiave pubblica VAPID da Firebase Console → Cloud Messaging (usata da `deploy.yml` nel build)

**Segreti locali (.env):**
- `VITE_FIREBASE_VAPID_KEY` — stessa chiave, per il build locale

**Firestore collections:**
- `subscriptions` — `{ token, createdAt }` — un doc per iscrizione (deduplicati server-side con `Set`)
- `sentNotifications` — `{ sentAt, recipientCount }` — chiave = data partita (YYYY-MM-DD), previene duplicati

**Rilevamento stato (self-healing):** la fonte di verità dell'iscrizione è **Firestore** (`subscriptions/{token}`), non `localStorage`. Al mount di `HomeView`, `detectNotificationState()` (in `src/api/firebase.js`) chiama `getToken()` e verifica via `getDoc` se il token è registrato; se sì → `subscribed`, se no → `idle`. Su errore di rete restituisce `null` e mantiene lo stato ottimistico iniziale. Questo recupera automaticamente lo stato dopo eviction di `localStorage` (Android Chrome sotto pressione di memoria, Safari ITP 7-day, cancellazione manuale dei dati del sito).

**Auto-recovery:** se al boot `Notification.permission === 'granted'`, `localStorage.notifSubscribed === 'true'` e `getToken()` restituisce un token NON presente in Firestore (caso IndexedDB pulito ma localStorage intatto), il token viene **ri-salvato automaticamente su Firestore**. Risultato: una volta iscritto, l'utente rimane iscritto finché non clicca esplicitamente la campanella o revoca il permesso dal browser.

**Persistenza storage:** `navigator.storage.persist()` viene chiamato al momento della sottoscrizione come best-effort (Chrome lo concede solo a siti con high engagement); la fix vera è il check Firestore al boot.

**localStorage key:** `notifSubscribed` (`'true'`) — non è più la fonte di verità ma solo un **hint UX** per impostare lo stato iniziale ottimistico (evita il flash dell'icona campanella) e per decidere se attivare l'auto-recovery. Documentato nella Cookie Policy.

**Nota iOS**: le notifiche push funzionano solo se l'app è installata come PWA (aggiunta alla schermata home). Su Android e desktop funziona da browser.

---

## Note CSS importanti

- Le classi CSS della pagina cookie policy si chiamano `.policy-page` e `.policy-content` (non `cookie-*`): i filtri degli ad blocker (EasyPrivacy/uBlock) nascondono via CSS qualsiasi elemento con classe contenente "cookie", rendendo la pagina invisibile su desktop con ad blocker attivo.

---

## Squadre supportate

Definite in `scripts/fetch-matches.js` e `src/api/football.js`:
- **Roma** — ID football-data.org: `100`
- **Lazio** — ID football-data.org: `110`

---

## Comportamenti speciali

- **Midnight reload**: l'app si ricarica automaticamente a mezzanotte per aggiornare la data
- **Pull-to-refresh**: su mobile, trascinare verso il basso ricarica i dati
- **"Prossima partita" banner**: appare sotto il NO quando non c'è match. Non appare sulla pagina "oggi" se domani c'è già una partita (l'utente può cliccare "e domani?")
- **Font**: Oswald (titoli) e Roboto (testo) da Google Fonts

---

## Titolare

Valerio Pierbattista — omegaiori@gmail.com
LinkedIn: https://www.linkedin.com/in/valeriopierbattista/
