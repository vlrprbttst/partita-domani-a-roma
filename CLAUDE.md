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
- `00:00:00Z` da football-data.org = orario TBD → `hasKnownTime()` lo nasconde

## Route alternative (oltre `/` e `/oggi`)

`/si`, `/no`, `/derby` sono test mode (forzano il risultato senza chiamare l'API).

## Notifiche push — punti non-ovvi

Usiamo **raw Web Push** (PushManager + libreria `web-push`), **non `firebase/messaging`/FCM SDK**. Motivo: Android Chrome evicta IndexedDB/localStorage dei PWA ogni 4-6h → il token FCM si rigenera, l'utente appare disiscritto, Firestore accumula token orfani. Le push subscription raw vivono sulla SW registration → sopravvivono all'eviction.

Per Firestore lato client usiamo **REST API diretta** (`firestore.googleapis.com/v1/...?key=APIKEY`), **non l'SDK `firebase/firestore`**. Motivo: bundle — l'SDK pesa ~100KB per fare 3 operazioni (get/patch/delete) sulla collection `subscriptions`. La security profile è identica: è governata da `firestore.rules`, l'API key è pubblica per design (Firebase la tratta come project identifier). `scripts/send-notifications.js` continua a usare `firebase-admin` lato server (necessario per bypassare le rules per `sentNotifications`).

- Doc ID Firestore = `btoa(endpoint)` → stabile attraverso eviction, no churn
- `Notification.permission` è la fonte di verità (sopravvive eviction). `localStorage.notifUnsubscribed='true'` traccia opt-out esplicito; può essere evicted (trade-off: utente ri-iscritto automaticamente, preferibile a disiscritto silenziosamente)
- Dedup invii server: doc `sentNotifications/{YYYY-MM-DD}` — skip se esiste
- Dedup client: SW mostra notifica con `tag: 'partita-domani-a-roma'` + `renotify: true` → se browser+PWA hanno due subscription distinte, la seconda push sostituisce la prima a livello OS (una sola notifica visibile)
- Cron `notify.yml`: `0 10 * * *` UTC = **12:00 estate / 11:00 inverno** ora di Roma
- Test E2E: `notify.yml` accetta input `force_send` (workflow_dispatch) → bypassa check partita + dedup, manda notifica generica a tutti
- iOS: notifiche push solo se PWA installata (iOS 16.4+)
- **Origin condivisa**: tutte le PWA su `vlrprbttst.github.io` (es. `kcalTracker`) condividono il permesso notifiche OS. Se una è disattivata, tutte sono silenziate. Se l'utente è `subscribed` ma non arriva niente → controllare toggle Chrome/Android per `vlrprbttst.github.io`

**Segreti GitHub**: `FIREBASE_SERVICE_ACCOUNT` (Admin SDK legge `subscriptions`), `VAPID_PUBLIC_KEY` (build + sign), `VAPID_PRIVATE_KEY` (solo `notify.yml` per firmare push). Locale: `VITE_VAPID_PUBLIC_KEY` in `.env`. Generate una tantum con `npx web-push generate-vapid-keys`.

**Firestore collections**:
- `subscriptions` — `{ endpoint, keys: { p256dh, auth }, createdAt }`, doc ID = base64 dell'endpoint
- `sentNotifications/{YYYY-MM-DD}` — `{ sentAt, recipientCount }` (server-only, regole bloccano il client)

## Gotcha CSS

- Cookie policy usa classi `.policy-page` / `.policy-content`, **non** `.cookie-*`: i filtri ad blocker (EasyPrivacy/uBlock) nascondono qualsiasi elemento con "cookie" in classe → pagina invisibile su desktop con adblock
- Share + campanella sono in un unico `.controls-wrap` (top: 20px, right: 20px) con flex **row**. I figli `.share-wrap` e `.notify-wrap` non devono avere `position: absolute` — il posizionamento è solo sul wrapper esterno

## Comportamenti speciali

- **Midnight reload**: app si ricarica a mezzanotte per aggiornare la data
- **Pull-to-refresh** su mobile
- **"Prossima partita"** appare sotto NO, **tranne** su `/oggi` se domani c'è già una partita (l'utente clicca "e domani?")
- **Service worker**: `deploy.yml` appende un commento timestamp a `dist/sw.js` ad ogni build → forza re-install del SW (cache busting per aggiornamenti dopo chiudi+riapri PWA). `sw.js` fa fetch con `cache: 'no-store'` (no HTTP cache)

## Sicurezza

- Token API e VAPID privata: solo in `.env` e GitHub Secret, mai nel bundle
- Firebase API key ristretta al dominio `https://vlrprbttst.github.io/*` in Google Cloud Console
- Firestore Security Rules in `firestore.rules` (versionate, deploy con `npx firebase-tools deploy --only firestore:rules`): `subscriptions` aperto in scrittura ma con validazione schema (`hasAll`/`hasOnly`, type check, length limits su tutti i campi), nessun `list`; `sentNotifications` inaccessibile al client
- CSP via `<meta http-equiv>` in `index.html`: `script-src 'self'` + GA4/GTM, niente `unsafe-inline` per script (per questo `analytics-init.js` e `spa-redirect.js` sono file in `public/` invece che inline). `style-src` con `unsafe-inline` resta perché Vue usa `:style` binding

## Google Analytics 4

- ID: `G-T02RCCNKG9`. Consent Mode v2: default `analytics_storage: 'denied'`, attivato solo dopo "Accetta" nel banner
- Escluso da localhost
- Scelta in `localStorage.cookiesChoice` (`'accepted'` | `'refused'`)

## Titolare

Valerio Pierbattista — omegaiori@gmail.com — [LinkedIn](https://www.linkedin.com/in/valeriopierbattista/)
