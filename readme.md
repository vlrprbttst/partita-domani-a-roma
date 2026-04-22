# C'è la partita domani a Roma?

:it: **ITALIANO**

Lo stadio Olimpico di Roma si trova in pieno centro città, e ogni volta che si gioca una partita l'area circostante si paralizza: parcheggi transennati, strade chiuse, traffico esteso a tutta Roma nord. Per chi non segue il calcio e vive, lavora o transita in quella zona, scoprirlo all'ultimo momento è un disagio concreto.

*"Se l'avessi saputo prima sarei venuto con l'autobus"* — questo sito nasce da quella frustrazione. Una risposta semplice a una domanda semplice: c'è la partita domani?

I dati vengono aggiornati automaticamente tramite [football-data.org](http://football-data.org).

:uk: **ENGLISH**

A simple web app that answers one question: is there a football match in Rome tomorrow?

Rome's Olympic Stadium sits in the middle of the city. Every match day, the surrounding area grinds to a halt — parking lots get cordoned off, roads close, and traffic backs up across the whole north side of the city. For people who don't follow football but live or work nearby, finding out too late is a real problem.

This app gives you a heads-up so you can plan accordingly. Match data is fetched automatically from [football-data.org](http://football-data.org) and updated every few hours.

## Live

[vlrprbttst.github.io/partita-domani-a-roma](https://vlrprbttst.github.io/partita-domani-a-roma/)

## Development

Built with Vue 3 + Vite. Clone the repo and install dependencies:

```bash
npm install
```

Add a `.env` file at the root with your [football-data.org](https://www.football-data.org) API token:

```
VITE_FOOTBALL_API_TOKEN=your_token_here
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Deployment to GitHub Pages is handled automatically via GitHub Actions on every push to `rewrite-modern`.

## Credits

Made by [Valerio Pierbattista](http://valeriopierbattista.com) and [Claude.ai](https://claude.ai).
