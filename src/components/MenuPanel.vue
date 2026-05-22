<script setup>
import { ref, watch } from 'vue'
import { trackEvent } from '../utils/analytics.js'

const props = defineProps({ open: Boolean })
defineEmits(['toggle'])

const showCookiePolicy = ref(false)

watch(() => props.open, (val) => { if (!val) showCookiePolicy.value = false })

function resetConsent() {
  localStorage.removeItem('cookiesChoice')
  trackEvent('consent_reset')
  window.location.reload()
}
</script>

<template>
  <nav id="main-menu" class="menu-cont" :class="{ menu_opened: open }" aria-label="Menu principale" :aria-hidden="(!open).toString()">
    <div class="stripes-top"></div>
    <button class="close" @click="$emit('toggle')" aria-label="Chiudi menu"></button>

    <template v-if="!showCookiePolicy">
      <h1>Perché?</h1>
      <p>
        Questo servizio è dedicato a tutti i romani che non seguono il calcio, ma ne sono vittima
        ogni settimana: <b>traffico</b>, aree di parcheggio <b>transennate</b>, strade
        <b>chiuse con conseguente deviazione del traffico</b>.
      </p>
      <p>
        Chi non segue il calcio spesso <b>scopre troppo tardi</b> lo svolgersi di una partita,
        e si trova a fronteggiare i disagi del caso <b>senza potersi organizzare in anticipo</b>.
      </p>

      <h1>Installalo come app</h1>
      <p>
        Puoi aggiungere questo sito alla schermata Home del tuo telefono e usarlo come una vera app,
        senza barre del browser.
      </p>
      <p>
        <b>Su Android</b>: apri il sito in Chrome, tocca i tre puntini in alto a destra e seleziona
        <b>Aggiungi a schermata Home</b> oppure <b>Installa app</b>.
      </p>
      <p>
        <b>Su iPhone</b>: apri il sito in Safari, tocca l'icona di condivisione
        (il quadrato con la freccia in su) e seleziona <b>Aggiungi a schermata Home</b>.
      </p>

      <h1>Privacy</h1>
      <p><a href="#" @click.prevent="showCookiePolicy = true">Cookie Policy</a></p>

      <h1>Credits</h1>
      <ul>
        <li>
          <p>
            Ideato e realizzato da
            <a href="https://www.linkedin.com/in/valeriopierbattista/" target="_blank" rel="noopener noreferrer">Valerio Pierbattista</a>
          </p>
        </li>
        <li><p>Le immagini di sfondo sono prese da Google</p></li>
        <li>
          <p>
            Il repository del progetto è su
            <a href="https://github.com/vlrprbttst/partita-domani-a-roma/tree/rewrite-modern" target="_blank" rel="noopener noreferrer">Github</a>
          </p>
        </li>
        <li>
          <p>
            Le informazioni sulle partite sono prese da
            <a href="https://www.football-data.org" target="_blank" rel="noopener noreferrer">www.football-data.org</a>
          </p>
        </li>
      </ul>
    </template>

    <div v-else class="menu-policy-wrap">
      <div class="menu-policy-scroll">

      <h1>Cookie Policy</h1>
      <p>
        Informativa estesa ai sensi del Reg. UE 2016/679 (GDPR), del D.Lgs. 196/2003 come modificato
        dal D.Lgs. 101/2018, e delle Linee guida del Garante per la protezione dei dati personali
        del 10 giugno 2021 in materia di cookie e altri strumenti di tracciamento.
      </p>

      <h2>Titolare del trattamento</h2>
      <p>
        Valerio Pierbattista<br>
        Email: <a href="mailto:omegaiori@gmail.com">omegaiori@gmail.com</a><br>
        Sito: <strong>vlrprbttst.github.io/partita-domani-a-roma</strong>
      </p>

      <h2>Cosa sono i cookie</h2>
      <p>
        I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell'utente,
        dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.
        Strumenti analoghi (come il localStorage) operano in modo simile e sono coperti dalla
        presente informativa.
      </p>

      <h2>Cookie e strumenti utilizzati</h2>

      <h3>1. Strumenti tecnici (senza consenso)</h3>
      <p>
        Il sito utilizza il <strong>localStorage</strong> del browser per memorizzare la preferenza
        dell'utente in merito ai cookie analitici. Non si tratta di un cookie ma di un dato locale
        al dispositivo, non trasmesso a terzi, che persiste fino alla cancellazione manuale.
      </p>
      <ul>
        <li>
          <p>
            <strong>cookiesChoice</strong> — localStorage — Scopo: memorizzare la scelta
            accetta/rifiuta cookie analitici — Durata: persistente fino a cancellazione manuale
            — Terze parti: nessuna
          </p>
        </li>
      </ul>

      <h3>2. Cookie analitici (solo con consenso)</h3>
      <p>
        Previa accettazione da parte dell'utente, il sito utilizza <strong>Google Analytics 4</strong>
        (Google LLC, USA) per raccogliere dati statistici anonimi sull'utilizzo del sito.
        Google Analytics opera in modalità <em>Consent Mode v2</em>: in assenza di consenso,
        nessun cookie di profilazione viene impostato e nessun dato personale viene trasmesso.
      </p>
      <ul>
        <li>
          <p>
            <strong>_ga</strong> — Cookie — Scopo: distinguere gli utenti unici —
            Durata: 2 anni — Titolare: Google LLC
          </p>
        </li>
        <li>
          <p>
            <strong>_ga_T02RCCNKG9</strong> — Cookie — Scopo: mantenere lo stato della sessione
            Analytics — Durata: 2 anni — Titolare: Google LLC
          </p>
        </li>
      </ul>
      <p>
        I dati raccolti da Google Analytics includono: tipo di dispositivo e browser, paese di
        accesso, pagine visitate, durata della visita. Nessun dato personale identificativo
        (nome, email, IP completo) viene raccolto o trasmesso.
        Per maggiori informazioni: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy di Google</a>
        e <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">opt-out da Google Analytics</a>.
      </p>

      <h2>Cookie di terze parti</h2>
      <p>
        Questo sito <strong>non utilizza</strong> cookie di social network (Facebook, Instagram,
        X/Twitter, TikTok), cookie pubblicitari né cookie di profilazione di alcun tipo.
      </p>

      <h2>Gestione del consenso</h2>
      <p>
        Al primo accesso viene mostrato un banner che consente di accettare o rifiutare i cookie
        analitici. La scelta può essere modificata in qualsiasi momento tramite il bottone qui sotto.
      </p>
      <button class="reset-btn" @click="resetConsent">Modifica preferenze cookie</button>

      <h2>Gestione tramite browser</h2>
      <p>
        È possibile bloccare, cancellare o limitare i cookie direttamente dalle impostazioni del
        proprio browser. Le istruzioni variano a seconda del browser utilizzato:
      </p>
      <ul>
        <li><p><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></p></li>
        <li><p><a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></p></li>
        <li><p><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></p></li>
        <li><p><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></p></li>
      </ul>
      <p>
        Per informazioni generali sulla gestione dei cookie:
        <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
      </p>

      <h2>Diritti dell'interessato</h2>
      <p>
        Ai sensi degli artt. 15–22 del Reg. UE 2016/679, l'utente ha diritto di:
      </p>
      <ul>
        <li><p><strong>Accesso</strong> (art. 15) — ottenere conferma che siano o meno in corso trattamenti di dati personali che lo riguardano e, in tal caso, ricevere una copia degli stessi.</p></li>
        <li><p><strong>Rettifica</strong> (art. 16) — ottenere la correzione di dati personali inesatti.</p></li>
        <li><p><strong>Cancellazione</strong> (art. 17) — ottenere la cancellazione dei dati personali nei casi previsti dalla norma.</p></li>
        <li><p><strong>Limitazione del trattamento</strong> (art. 18) — ottenere la limitazione del trattamento nei casi previsti dalla norma.</p></li>
        <li><p><strong>Portabilità</strong> (art. 20) — ricevere in formato strutturato i dati forniti consapevolmente e attivamente.</p></li>
        <li><p><strong>Opposizione</strong> (art. 21) — opporsi in qualsiasi momento al trattamento dei dati personali, anche per finalità di marketing diretto.</p></li>
      </ul>
      <p>
        Per esercitare i propri diritti, l'utente può contattare il Titolare all'indirizzo
        <a href="mailto:omegaiori@gmail.com">omegaiori@gmail.com</a>. Ha inoltre diritto di proporre
        reclamo al Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">www.garanteprivacy.it</a>).
      </p>

      <h2>Modifiche alla presente informativa</h2>
      <p>
        Il Titolare si riserva di modificare la presente Cookie Policy in qualsiasi momento.
        Le modifiche hanno efficacia dal momento della pubblicazione sul sito.
        <br><strong>Ultimo aggiornamento: 22 maggio 2026</strong>
      </p>

      </div>
      <div class="menu-policy-bar">
        <button class="back-btn" @click="showCookiePolicy = false">← Indietro</button>
      </div>
    </div>

  </nav>
</template>
