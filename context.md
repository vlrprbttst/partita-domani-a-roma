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

**Test end-to-end manuale:** `notify.yml` accetta input `force_send` (workflow_dispatch) che, se true, imposta `FORCE_SEND=true` e fa partire `send-notifications.js` in modalità test: bypassa il check partita e la dedup, invia una notifica generica ("Test FCM end-to-end") a tutti gli iscritti. Utile per verificare la catena Firestore→FCM→Service Worker senza aspettare una partita reale.

**Segreti GitHub necessari:**
- `FIREBASE_SERVICE_ACCOUNT` — JSON del service account Firebase (per Admin SDK, usato da `notify.yml`)
- `VITE_FIREBASE_VAPID_KEY` — chiave pubblica VAPID da Firebase Console → Cloud Messaging (usata da `deploy.yml` nel build)

**Segreti locali (.env):**
- `VITE_FIREBASE_VAPID_KEY` — stessa chiave, per il build locale

**Firestore collections:**
- `subscriptions` — `{ token, createdAt }` — un doc per iscrizione (deduplicati server-side con `Set`)
- `sentNotifications` — `{ sentAt, recipientCount }` — chiave = data partita (YYYY-MM-DD), previene duplicati

**Rilevamento stato (permission-grounded):** la fonte di verità dell'iscrizione è **`Notification.permission`** + Firestore (`subscriptions/{token}`), MAI `localStorage`. Motivo: Android Chrome fa eviction aggressiva (localStorage + IndexedDB combinata) sui PWA con bassa engagement, ogni 4-6 ore — quindi qualsiasi cosa salvata nello storage del sito è inaffidabile come segnale durevole. `Notification.permission`, invece, vive nelle preferenze del browser e sopravvive all'eviction.

**Auto-recovery:** al mount di `HomeView`, `detectNotificationState()` chiama `getToken()` e verifica con `getDoc` se il token è in Firestore. Se NON c'è e l'utente non ha esplicitamente disattivato (`localStorage.notifUnsubscribed !== 'true'`), il token viene **ri-salvato automaticamente** in Firestore. Quindi: se hai concesso il permesso una volta, rimani iscritto finché non clicchi esplicitamente la campanella o revochi il permesso dal browser, anche dopo eviction dello storage.

**Trade-off accettato:** il flag `notifUnsubscribed` può essere evicted insieme allo storage. In quel caso, alla prossima apertura l'utente verrebbe ri-iscritto automaticamente (perché il segnale "non voglio notifiche" è perso ma `Notification.permission === 'granted'` è ancora vivo). È preferibile a essere disiscritti silenziosamente ogni 4-6 ore.

**Persistenza storage:** `navigator.storage.persist()` viene chiamato a ogni page load (in `onMounted` di `HomeView`), non solo al subscribe. Chrome lo concede automaticamente alle PWA installate con permesso notifiche granted; chiamarlo spesso massimizza la chance di concessione e riduce frequenza di eviction.

**Stato 'denied':** la campanella resta visibile con icona sbarrata e label "notifiche bloccate"; click → alert con istruzioni per riattivare dalle impostazioni del browser. (Prima era nascosta del tutto, generando confusione quando Android auto-revocava il permesso.)

**localStorage key:** `notifUnsubscribed` (`'true'`) — settato in `unsubscribeFromNotifications`, rimosso in `subscribeToNotifications`. Documentato nella Cookie Policy.

**Nota iOS**: le notifiche push funzionano solo se l'app è installata come PWA (aggiunta alla schermata home). Su Android e desktop funziona da browser.

**Display notifica (single notification):** quando il payload FCM contiene il campo `notification`, il browser web SDK auto-mostra la notifica E chiama `onBackgroundMessage` nel SW — questo produceva una notifica doppia. Fix: `webpush.notification.icon` e `webpush.notification.tag` configurati lato admin SDK in `send-notifications.js` (così l'auto-display usa l'icona corretta); `onBackgroundMessage` nel SW è un no-op. L'auto-display è l'unica sorgente di visualizzazione. Il `tag` previene anche duplicati quando lo stesso utente è iscritto da più token (browser + PWA installata).

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
