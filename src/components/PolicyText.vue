<script setup>
import { resetConsent } from '../utils/analytics.js'
</script>

<template>
  <h1>Cookie Policy</h1>
  <p>
    Informativa ai sensi degli artt. 13 e 122 del Reg. UE 2016/679 (GDPR), del D.Lgs. 196/2003
    come modificato dal D.Lgs. 101/2018, e delle Linee guida del Garante per la protezione dei
    dati personali del 10 giugno 2021 in materia di cookie e altri strumenti di tracciamento.
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
    Strumenti strettamente necessari al funzionamento del sito, che non richiedono consenso.
    Restano sul dispositivo e non vengono trasmessi al Titolare né a terzi.
  </p>
  <ul>
    <li>
      <p>
        <strong>cookiesChoice</strong> — localStorage — Scopo: memorizzare la scelta
        accetta/rifiuta cookie analitici — Durata: fino a revoca o cancellazione manuale
      </p>
    </li>
    <li>
      <p>
        <strong>Service worker</strong> — Scopo: consentire l'installazione del sito come app
        (PWA) — Non memorizza dati personali
      </p>
    </li>
  </ul>

  <h3>2. Cookie analitici di terze parti (solo con consenso)</h3>
  <p>
    Solo se l'utente accetta, il sito utilizza <strong>Google Analytics 4</strong>, fornito da
    Google Ireland Limited (Gordon House, Barrow Street, Dublino 4, Irlanda), per statistiche
    aggregate sull'utilizzo del sito. <strong>Prima del consenso, o in caso di rifiuto, il sito non
    carica Google Analytics e non invia alcuna richiesta ai server di Google.</strong>
  </p>
  <ul>
    <li>
      <p>
        <strong>_ga</strong> — Cookie — Scopo: distinguere gli utenti tramite un identificativo
        pseudonimo casuale — Durata: 2 anni — Fornitore: Google
      </p>
    </li>
    <li>
      <p>
        <strong>_ga_T02RCCNKG9</strong> — Cookie — Scopo: mantenere lo stato della sessione
        Analytics — Durata: 2 anni — Fornitore: Google
      </p>
    </li>
  </ul>
  <p>
    Dati trattati: identificativo pseudonimo del cookie, tipo di dispositivo e browser, lingua,
    posizione geografica approssimativa (paese/città, ricavata dall'indirizzo IP, che Google
    dichiara di non memorizzare), pagine visitate e durata della visita. Google Signals e la
    personalizzazione degli annunci sono disattivati: i dati non vengono usati per pubblicità
    né incrociati con altri servizi. In Google Analytics i dati degli eventi sono conservati per
    2 mesi; i dati a livello di utente per 14 mesi, termine che si rinnova a ogni nuova visita.
  </p>
  <p>
    <strong>Base giuridica:</strong> consenso dell'utente (art. 6, par. 1, lett. a GDPR e art. 122
    D.Lgs. 196/2003). Il consenso è facoltativo: rifiutarlo non limita in alcun modo l'uso del sito.
  </p>
  <p>
    <strong>Trasferimento extra UE:</strong> i dati possono essere trasferiti negli Stati Uniti a
    Google LLC, certificata nell'ambito dell'EU-US Data Privacy Framework (decisione di
    adeguatezza della Commissione europea del 10 luglio 2023).
  </p>
  <p>
    Per maggiori informazioni: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy di Google</a>
    e <a href="https://business.safety.google/privacy/" target="_blank" rel="noopener noreferrer">Google e il GDPR</a>.
  </p>

  <h2>Altri servizi</h2>
  <p>
    Il sito non utilizza cookie di social network, cookie pubblicitari né cookie di profilazione.
    I caratteri tipografici sono ospitati direttamente sul sito, senza richieste a servizi esterni.
    Il sito è ospitato su GitHub Pages (GitHub Inc.), che per ragioni di sicurezza può registrare
    l'indirizzo IP dei visitatori nei log del server; il Titolare non ha accesso a questi dati
    (<a href="https://docs.github.com/it/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">Privacy Statement di GitHub</a>).
  </p>

  <h2>Gestione e revoca del consenso</h2>
  <p>
    Al primo accesso un banner consente di accettare o rifiutare i cookie analitici, con due
    pulsanti equivalenti. In caso di rifiuto il banner non viene riproposto. La scelta può essere
    modificata o il consenso revocato in qualsiasi momento con il pulsante qui sotto: la revoca
    cancella i cookie di Google Analytics dal dispositivo.
  </p>
  <button class="reset-btn" @click="resetConsent">Modifica preferenze cookie</button>

  <h2>Gestione tramite browser</h2>
  <p>
    È possibile bloccare, cancellare o limitare i cookie direttamente dalle impostazioni del
    proprio browser:
  </p>
  <ul>
    <li><p><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></p></li>
    <li><p><a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></p></li>
    <li><p><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></p></li>
    <li><p><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></p></li>
  </ul>

  <h2>Diritti dell'interessato</h2>
  <p>
    Ai sensi degli artt. 15–22 del Reg. UE 2016/679, l'utente ha diritto di:
  </p>
  <ul>
    <li><p><strong>Revoca del consenso</strong> (art. 7, par. 3) — revocare in qualsiasi momento il consenso, senza pregiudicare la liceità del trattamento basata sul consenso prima della revoca.</p></li>
    <li><p><strong>Accesso</strong> (art. 15) — ottenere conferma che siano o meno in corso trattamenti di dati personali che lo riguardano e, in tal caso, ricevere una copia degli stessi.</p></li>
    <li><p><strong>Rettifica</strong> (art. 16) — ottenere la correzione di dati personali inesatti.</p></li>
    <li><p><strong>Cancellazione</strong> (art. 17) — ottenere la cancellazione dei dati personali nei casi previsti dalla norma.</p></li>
    <li><p><strong>Limitazione del trattamento</strong> (art. 18) — ottenere la limitazione del trattamento nei casi previsti dalla norma.</p></li>
    <li><p><strong>Portabilità</strong> (art. 20) — ricevere in formato strutturato i dati forniti consapevolmente e attivamente.</p></li>
    <li><p><strong>Opposizione</strong> (art. 21) — opporsi in qualsiasi momento al trattamento dei dati personali.</p></li>
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
    <br><strong>Ultimo aggiornamento: 30 settembre 2026</strong>
  </p>
</template>
