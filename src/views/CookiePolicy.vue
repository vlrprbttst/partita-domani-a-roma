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

  <div class="cookie-cont">
    <div class="cookie-inner">

      <h1>Cookie Policy</h1>
      <p>
        Ai sensi del Reg. UE 2016/679 (GDPR) e del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018,
        questa pagina descrive come il sito
        <strong>vlrprbttst.github.io/partita-domani-a-roma</strong>
        utilizza i cookie.
      </p>

      <h1>Cosa sono i cookie</h1>
      <p>
        I cookie sono piccoli file di testo salvati sul dispositivo dell'utente quando visita un sito web.
        Vengono ritrasmessi al sito ad ogni visita successiva per ricordare preferenze e comportamenti.
      </p>

      <h1>Cookie utilizzati da questo sito</h1>
      <ul>
        <li>
          <p>
            <strong>Cookie tecnici</strong>: utilizzati esclusivamente per memorizzare la scelta
            dell'utente in merito ai cookie analitici (accetta/rifiuta). Non raccolgono dati personali
            e non richiedono consenso.
          </p>
        </li>
        <li>
          <p>
            <strong>Cookie analitici — Google Analytics 4</strong> (solo con consenso): se l'utente
            accetta, vengono attivati cookie di Google Analytics per raccogliere dati statistici anonimi
            sull'utilizzo del sito (pagine visitate, durata, dispositivo). I dati vengono trattati
            da Google LLC secondo la propria
            <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a>.
            Nessun dato personale identificativo viene raccolto o trasmesso.
          </p>
        </li>
      </ul>

      <h1>Gestione del consenso</h1>
      <p>
        Al primo accesso viene mostrato un banner che consente di accettare o rifiutare i cookie analitici.
        È possibile modificare la propria scelta in qualsiasi momento cliccando il bottone qui sotto:
        il banner verrà nuovamente mostrato al ricaricamento della pagina.
      </p>
      <button class="reset-btn" @click="resetConsent">Modifica preferenze cookie</button>

      <h1>Cookie di terze parti</h1>
      <p>
        Questo sito non utilizza cookie di social network (Facebook, Instagram, X/Twitter) né
        cookie di profilazione pubblicitaria di alcun tipo.
      </p>

      <h1>Come eliminare i cookie dal browser</h1>
      <p>
        È possibile bloccare o cancellare i cookie in qualsiasi momento attraverso le impostazioni
        del proprio browser. Per istruzioni dettagliate:
        <a href="https://www.allaboutcookies.org" target="_blank">www.allaboutcookies.org</a>.
      </p>

      <RouterLink class="back-btn" to="/">← Torna alla home</RouterLink>
    </div>
  </div>
</template>
