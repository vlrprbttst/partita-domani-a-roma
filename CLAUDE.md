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
| `scripts/send-notifications.js` | Fetcha matches.json dal URL GitHub Pages deployato, invia Web Push raw a ciascun endpoint se domani c'è partita |
| `.github/workflows/deploy.yml` | CI/CD: build + fetch + deploy. Trigger: push, cron `0 */6 * * *`, workflow_dispatch |
| `.github/workflows/notify.yml` | Invia notifiche push. Cron `0 10 * * *` (12:00 ora di Roma). Trigger: workflow_dispatch |
| `public/404.html` | Redirect SPA per GitHub Pages (spa-github-pages trick) |
| `public/icons/manifest.json` | PWA manifest |
| `public/sw.js` | Service worker minimale (PWA launcher, no cache) |
| `public/analytics-init.js` | Init GA4 (dataLayer, gtag, Consent Mode v2) — estratto da index.html per permettere CSP senza `unsafe-inline` |
| `public/spa-redirect.js` | Decodifica il path dalla redirect di 404.html (spa-github-pages trick) — estratto da index.html per la stessa ragione |
| `index.html` | CSP meta tag, riferimenti a analytics-init.js e spa-redirect.js, skip link target |
| `firestore.rules` | Firestore Security Rules versionate nel repo — deployate con `npx firebase-tools deploy --only firestore:rules` |
| `firebase.json` | Config Firebase CLI (punta a `firestore.rules`) |
| `.firebaserc` | Progetto Firebase default: `partita-domani-a-roma` |

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
- Service worker: `public/sw.js` — tutti i fetch usano `cache: 'no-store'` (nessuna dipendenza dall'HTTP cache). Il workflow di deploy appende un commento timestamp a `dist/sw.js` ad ogni build, forzando il browser a reinstallare il SW e garantire aggiornamenti dopo chiudi+riapri

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
- Firebase API key ristretta al dominio `https://vlrprbttst.github.io/*` in Google Cloud Console
- Firestore Security Rules versionate in `firestore.rules`: `subscriptions` aperto in scrittura ma con validazione schema (blocca spam) — `hasAll`/`hasOnly` sui campi, type check, limiti di lunghezza (`endpoint` ≤500, `p256dh` ≤200, `auth` ≤100, `createdAt` ≤30); nessun `list`; `sentNotifications` inaccessibile al client
- Content Security Policy via `<meta http-equiv>` in `index.html`: `script-src 'self'` + GA4/GTM (niente `unsafe-inline` per script); `style-src` con `unsafe-inline` (necessario per Vue `:style` binding); `connect-src` copre Firebase + GA4

## Notifiche Push

Implementate con **raw Web Push (PushManager + libreria `web-push`)** + Firestore. **Non usiamo più `firebase/messaging`/FCM SDK lato client né `firebase-admin/messaging` lato server.**

**Perché Web Push raw e non FCM**: il SDK FCM mantiene il proprio token in IndexedDB. Android Chrome fa eviction aggressiva di localStorage+IndexedDB sui PWA a bassa engagement (ogni 4-6 ore). Dopo eviction, il SDK FCM rigenera un nuovo token, abbandonando quello in Firestore — l'utente appare disiscritto ad ogni eviction, e Firestore accumula token orfani. Le **push subscription raw vivono sulla SW registration** (non in IndexedDB), sopravvivono all'eviction → l'endpoint resta stabile, niente churn.

**Flusso utente:**
- In alto a destra è sempre visibile il `.controls-wrap`: bottone share (sinistra) + bottone campanella (destra), layout orizzontale, ciascuno con label testuale centrata sotto l'icona
- La campanella mostra stati diversi: bell senza slash = idle; bell-slash + sfondo rosso = denied; bell-slash = subscribed
- Al click su campanella (stato idle) → il browser chiede il permesso → se concesso, `pushManager.subscribe()` viene chiamato con la chiave VAPID pubblica e la subscription (`{endpoint, keys: {p256dh, auth}}`) viene salvata su Firestore → label diventa "disattiva le notifiche"
- Al click su campanella (stato subscribed) → `subscription.unsubscribe()` + doc rimosso da Firestore → label torna "attiva le notifiche"
- Se le notifiche sono bloccate dal browser → label "notifiche bloccate", click → alert con istruzioni

**Componenti:**
- `src/api/firebase.js` — init Firebase Firestore, `subscribeToNotifications()` / `unsubscribeFromNotifications()` / `detectNotificationState()` via `pushManager`
- `public/sw.js` — handler nativo `push` event (no Firebase SDK), mostra notifica con `tag` per dedup
- `scripts/send-notifications.js` — usa libreria `web-push` per inviare a ciascun endpoint, firma con VAPID; cleanup automatico delle subscription scadute (HTTP 404/410)

**Timing invio:**
- Workflow dedicato `notify.yml`, cron `0 10 * * *` UTC → **12:00 ora di Roma** in estate (CEST=UTC+2), **11:00** in inverno (CET=UTC+1)
- Separato da `deploy.yml` che non esegue più notifiche

**Deduplicazione invii (server):** Firestore `sentNotifications/{YYYY-MM-DD}` — se il doc esiste, skip. Evita invii doppi se il workflow gira più volte.

**Deduplicazione notifiche (client):** il SW mostra la notifica con `tag: 'partita-domani-a-roma'` e `renotify: true`. Se più push arrivano per lo stesso device (es. browser + PWA installata, due subscription distinte), la seconda sostituisce la prima a livello sistema → una sola notifica visibile, con suono.

**Test end-to-end manuale:** `notify.yml` accetta input `force_send` (workflow_dispatch) che, se true, imposta `FORCE_SEND=true` e fa partire `send-notifications.js` in modalità test: bypassa il check partita e la dedup, invia una notifica generica ("Test Web Push end-to-end") a tutti gli iscritti.

**Segreti GitHub necessari:**
- `FIREBASE_SERVICE_ACCOUNT` — JSON del service account Firebase (Admin SDK accede a Firestore solo per leggere subscriptions e gestire dedup; NON usa più Messaging)
- `VAPID_PUBLIC_KEY` — chiave pubblica VAPID del nostro key pair (usata da `deploy.yml` nel build, e da `notify.yml` per firmare i push)
- `VAPID_PRIVATE_KEY` — chiave privata VAPID (usata SOLO da `notify.yml` per firmare i push lato server)

**Segreti locali (.env):**
- `VITE_VAPID_PUBLIC_KEY` — stessa chiave pubblica, per il build locale

**Generare le chiavi VAPID:** `npx web-push generate-vapid-keys` (output: publicKey + privateKey base64 url-safe). Le chiavi attuali sono state generate una tantum e configurate nei segreti.

**Firestore collections:**
- `subscriptions` — `{ endpoint, keys: { p256dh, auth }, createdAt }` — doc ID = base64 dell'endpoint URL (stabile attraverso eviction)
- `sentNotifications` — `{ sentAt, recipientCount }` — chiave = data partita (YYYY-MM-DD)

**Rilevamento stato (permission-grounded):** la fonte di verità è **`Notification.permission`** + Firestore. `Notification.permission` vive nelle preferenze del browser, sopravvive all'eviction. Al mount di `HomeView`, `detectNotificationState()` chiama `pushManager.getSubscription()`: se non c'è (eviction profonda) e l'utente non ha esplicitamente disattivato, ne crea una nuova con `pushManager.subscribe()`. La subscription viene salvata su Firestore col doc ID derivato dall'endpoint.

**Auto-recovery:** se un'esistente push subscription è già presente sulla SW registration (caso normale dopo eviction del solo localStorage/IndexedDB), il doc ID è stabile (basato sull'endpoint), `getDoc` lo trova → state `'subscribed'` senza riscrittura. Se la subscription è proprio mancante (eviction estrema della SW registration), ne viene creata una nuova e salvata.

**Trade-off accettato:** il flag `notifUnsubscribed` può essere evicted insieme allo storage. In quel caso, alla prossima apertura l'utente verrebbe ri-iscritto automaticamente. È preferibile a essere disiscritti silenziosamente.

**Persistenza storage:** `navigator.storage.persist()` viene chiamato a ogni page load (in `onMounted` di `HomeView`). Chrome lo concede automaticamente alle PWA installate con permesso notifiche granted.

**Stato 'denied':** la campanella resta visibile con icona bell-slash e sfondo rosso (`notify-btn--denied`) e label "bloccate"; click → alert con istruzioni per riattivare dalle impostazioni del browser.

**Icone campanella:** bell (senza slash) = stato idle; bell-slash (con linea diagonale) = stato subscribed o denied. La label testuale è sempre visibile indipendentemente dallo stato ("attiva" / "disattiva" / "bloccate").

**localStorage key:** `notifUnsubscribed` (`'true'`) — settato in `unsubscribeFromNotifications`, rimosso in `subscribeToNotifications`. Documentato nella Cookie Policy.

**Nota iOS**: le notifiche push funzionano solo se l'app è installata come PWA (aggiunta alla schermata home), iOS 16.4+. Su Android e desktop funziona da browser.

**Gotcha: origin condivisa con altre GitHub Pages PWA.** Tutte le PWA pubblicate su `vlrprbttst.github.io` (es. `kcalTracker`) condividono la stessa origin e di conseguenza lo stesso permesso notifiche a livello OS. Su Android Chrome, la sezione Impostazioni → Notifiche del sito mostra "Gestite da [prima PWA installata]". Se quella PWA ha le notifiche disattivate, **tutte** le PWA sulla stessa origin risultano silenziate — inclusa `partita-domani-a-roma`. Se le notifiche non arrivano pur con lo stato `subscribed`, verificare che il toggle notifiche per `vlrprbttst.github.io` sia ON nelle impostazioni di Chrome/Android.

**Migrazione da FCM**: il primo deploy di questa versione invalida le subscription FCM precedenti (formato `{token}` → `{endpoint, keys}` incompatibile). `send-notifications.js` filtra i doc per presenza di `endpoint` e ignora i vecchi. Gli utenti devono rifare iscrizione una volta. I doc legacy in Firestore possono essere eliminati a mano dalla Console.

---

## Note CSS importanti

- Le classi CSS della pagina cookie policy si chiamano `.policy-page` e `.policy-content` (non `cookie-*`): i filtri degli ad blocker (EasyPrivacy/uBlock) nascondono via CSS qualsiasi elemento con classe contenente "cookie", rendendo la pagina invisibile su desktop con ad blocker attivo.
- I controlli in alto a destra (share + notifiche) sono in un unico `.controls-wrap` assoluto (`top: 20px, right: 20px`), layout **orizzontale** (`flex-direction: row`). Al suo interno: `.share-wrap` (sinistra) e `.notify-wrap` (destra), entrambi flex-column con la label centrata sotto il bottone. Non assegnare `position: absolute` ai due wrap interni — il posizionamento è solo sul wrapper esterno.

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
