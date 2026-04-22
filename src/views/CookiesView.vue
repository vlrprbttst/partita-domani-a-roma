<script setup>
import { inject, onMounted } from 'vue'

const state = inject('appState')
onMounted(() => { state.loaded = true })
</script>

<template>
  <div class="menu" @click="state.menuOpen = !state.menuOpen"></div>

  <div class="cookie-cont">
    <div class="cookie-inner">
      <h1>Cookie Policy: Informativa estesa sui cookie</h1>
      <p>
        Ai sensi dell'art. 13 del D.Lgs. n. 196/03, la presente informativa spiega cosa sono i cookie
        e illustra le varie tipologie di cookie presenti nel sito
        <a href="http://www.partitadomaniaroma.com">www.partitadomaniaroma.com</a>.
      </p>
      <p>
        I cookie sono piccoli file di testo che i siti visitati dall'utente inviano e registrano sul
        suo computer o dispositivo mobile, per essere poi ritrasmessi agli stessi siti alla successiva
        visita. Grazie ai cookie, il sito ricorda le azioni e preferenze dell'utente in modo che non
        debbano essere indicate nuovamente quando l'utente torni a visitare il sito.
      </p>
      <h1>Nel dettaglio, i cookie presenti nel sito sono:</h1>
      <ul>
        <li>
          <p><strong>Cookie di navigazione o sessione</strong>: strettamente necessari per il
          funzionamento del sito o per consentire all'utente di usufruire dei contenuti e dei servizi
          da questi richiesti.</p>
        </li>
        <li>
          <p><strong>Cookie analytics</strong>: consentono di comprendere come il sito viene
          utilizzato dagli utenti. Non vengono raccolte informazioni sull'identità dell'utente,
          né alcun dato personale.</p>
        </li>
        <li>
          <p><strong>Cookie di terze parti</strong>: relativi a cookie di siti o web server diversi
          dal sito, utilizzati per finalità proprie di dette parti terze (Facebook, Twitter).</p>
        </li>
      </ul>
      <h1>Come esprimere le preferenze:</h1>
      <p>
        È possibile bloccare o cancellare i cookie attraverso le specifiche funzioni del proprio
        browser. Maggiori informazioni sono disponibili su
        <a href="http://www.AllAboutCookies.org" target="_blank">www.AllAboutCookies.org</a>.
      </p>
      <p>Abbandonando la presente pagina, l'utente dichiara di aver preso visione delle informazioni
      sui cookie sopra riportate.</p>
      <RouterLink class="back-btn" to="/">Ho capito</RouterLink>
    </div>
  </div>
</template>
