<script setup>
defineProps({ open: Boolean })
defineEmits(['toggle'])
</script>

<template>
  <div class="menu-cont" :class="{ menu_opened: open }">
    <div class="stripes-top"></div>
    <div class="close" @click="$emit('toggle')"></div>

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

    <h1>Credits</h1>
    <ul>
      <li>
        <p>
          Ideato e realizzato da
          <a href="http://valeriopierbattista.com" target="_blank">Valerio Pierbattista</a>
          e <a href="https://claude.ai" target="_blank">Claude.ai</a>
        </p>
      </li>
      <li><p>Le immagini di sfondo sono prese da Google</p></li>
      <li>
        <p>
          Il repository del progetto è su
          <a href="https://github.com/vlrprbttst/partita-domani-a-roma/tree/rewrite-modern" target="_blank">Github</a>
        </p>
      </li>
      <li>
        <p>
          Le informazioni sulle partite sono prese da
          <a href="http://football-data.org" target="_blank">www.football-data.org</a>
        </p>
      </li>
    </ul>

  </div>
</template>
