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

    <h1>Consultazione veloce</h1>
    <p>
      Accedi al sito da mobile e cerca fra le opzioni del browser il tasto
      "<b>Aggiungi a Home</b>" / "<b>Add to Homescreen</b>". L'icona del sito apparirà nella
      schermata Home fra le altre app del cellulare.
    </p>
    <img src="/images/screenshot-android.jpg" alt="screenshot android" class="screen">
    <img src="/images/screen-ios.png"          alt="screenshot iOS"     class="screen">

    <h1>Credits</h1>
    <ul>
      <li>
        <p>
          Ideato e realizzato da
          <a href="http://valeriopierbattista.com" target="_blank">Valerio Pierbattista</a>
          e
          <a href="https://www.linkedin.com/in/patriziomunzi" target="_blank">Patrizio Munzi</a>
        </p>
      </li>
      <li><p>Le immagini di sfondo sono prese da Google</p></li>
      <li>
        <p>
          Il repository del progetto è su
          <a href="https://github.com/vlrprbttst/partita-domani-a-roma" target="_blank">Github</a>
        </p>
      </li>
      <li>
        <p>
          Le informazioni sulle partite sono prese da
          <a href="http://football-data.org" target="_blank">www.football-data.org</a>
        </p>
      </li>
    </ul>

    <h1>Cookies</h1>
    <p>
      Questo sito utilizza cookie di sessione, cookie analytics e cookie di terze parti.
      Per saperne di più <RouterLink to="/cookies">clicca qui</RouterLink>.
    </p>
  </div>
</template>
