<script setup>
import { ref, watch } from 'vue'
import PolicyText from './PolicyText.vue'

const props = defineProps({ open: Boolean })
defineEmits(['toggle'])

const showCookiePolicy = ref(false)

watch(() => props.open, (val) => { if (!val) showCookiePolicy.value = false })
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

      <PolicyText />

      </div>
      <div class="menu-policy-bar">
        <button class="back-btn" @click="showCookiePolicy = false">← Indietro</button>
      </div>
    </div>

  </nav>
</template>
