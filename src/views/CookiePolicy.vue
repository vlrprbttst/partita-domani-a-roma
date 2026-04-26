<script setup>
import { inject, onMounted } from 'vue'
import { trackEvent } from '../utils/analytics.js'

const state = inject('appState')
onMounted(() => { state.loaded = true })

function resetConsent() {
  localStorage.removeItem('cookiesChoice')
  trackEvent('consent_reset')
  window.location.reload()
}
</script>

<template>
  <button
    class="menu"
    :aria-label="state.menuOpen ? 'Chiudi menu' : 'Apri menu'"
    :aria-expanded="state.menuOpen.toString()"
    aria-controls="main-menu"
    @click="state.menuOpen = !state.menuOpen"
  ></button>

  <div class="policy-page">
    <div class="policy-content">

      <h1>Cookie Policy</h1>
      <p>
        Informativa estesa ai sensi del Reg. UE 2016/679 (GDPR), del D.Lgs. 196/2003 come modificato
        dal D.Lgs. 101/2018, e delle Linee guida del Garante per la protezione dei dati personali
        del 10 giugno 2021 in materia di cookie e altri strumenti di tracciamento.
      </p>

      <h1>Titolare del trattamento</h1>
      <p>
        Valerio Pierbattista<br>
        Email: <a href="mailto:omegaiori@gmail.com">omegaiori@gmail.com</a><br>
        Sito: <strong>vlrprbttst.github.io/partita-domani-a-roma</strong>
      </p>

      <h1>Cosa sono i cookie</h1>
      <p>
        I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell'utente,
        dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.
        Strumenti analoghi (come il localStorage) operano in modo simile e sono coperti dalla
        presente informativa.
      </p>

      <h1>Cookie e strumenti utilizzati</h1>

      <h1>1. Strumenti tecnici (senza consenso)</h1>
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

      <h1>2. Cookie analitici (solo con consenso)</h1>
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
        Per maggiori informazioni: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Privacy Policy di Google</a>
        e <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">opt-out da Google Analytics</a>.
      </p>

      <h1>Cookie di terze parti</h1>
      <p>
        Questo sito <strong>non utilizza</strong> cookie di social network (Facebook, Instagram,
        X/Twitter, TikTok), cookie pubblicitari né cookie di profilazione di alcun tipo.
      </p>

      <h1>Gestione del consenso</h1>
      <p>
        Al primo accesso viene mostrato un banner che consente di accettare o rifiutare i cookie
        analitici. La scelta può essere modificata in qualsiasi momento tramite il bottone qui sotto.
      </p>
      <button class="reset-btn" @click="resetConsent">Modifica preferenze cookie</button>

      <h1>Gestione tramite browser</h1>
      <p>
        È possibile bloccare, cancellare o limitare i cookie direttamente dalle impostazioni del
        proprio browser. Le istruzioni variano a seconda del browser utilizzato:
      </p>
      <ul>
        <li><p><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">Google Chrome</a></p></li>
        <li><p><a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox" target="_blank" rel="noopener">Mozilla Firefox</a></p></li>
        <li><p><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener">Apple Safari</a></p></li>
        <li><p><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener">Microsoft Edge</a></p></li>
      </ul>
      <p>
        Per informazioni generali sulla gestione dei cookie:
        <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener">www.allaboutcookies.org</a>.
      </p>

      <h1>Modifiche alla presente informativa</h1>
      <p>
        Il Titolare si riserva di modificare la presente Cookie Policy in qualsiasi momento.
        Le modifiche hanno efficacia dal momento della pubblicazione sul sito.
        <br><strong>Ultimo aggiornamento: aprile 2026</strong>
      </p>

      <RouterLink class="back-btn" to="/">← Torna alla home</RouterLink>
    </div>
  </div>
</template>

