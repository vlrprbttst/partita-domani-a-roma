# C'è la partita domani a Roma?

:it: **ITALIANO**

Come voi forse saprete, lo stadio a Roma è situato in pieno centro, e ad ogni occasione in cui si svolge una gara, tutta l'area intorno allo stadio si paralizza e i disagi si estendono a tutta Roma nord. Per chi come me che non segue il calcio e lavora in zona stadio, arrivare la mattina e trovare tutte le aree di parcheggio transennate costituisce un disagio enorme. Lo stesso vale per il traffico tremendo che provoca una partita ritardando il ritorno a casa.

*"se l'avessi saputo prima sarei venuto con l'autobus"*, ma di cercare su google ogni giorno e decodificare il calendario delle partite non ne avevo voglia così ho deciso di creare questo "servizio" con [Patrizio Munzi](https://www.linkedin.com/in/patriziomunzi) per chi come me vive, lavora o semplicemente transita giornalmente in area stadio.

La web app si appoggia ad un'API che fornisce i dati delle partite, aggiornando il sito in automatico.

www.partitadomaniaroma.com

:uk: **ENGLISH**

This web app tells you if there's a soccer match in Rome the next day (or the same day). This is useful because the Olympic Stadium in Rome is right in the city center, and each time there's a match, a whole part of the city is jammed in traffic. This service is for those who don't follow soccer and don't know when the next match will be but want to get organized in advance or want to get mentally ready for the discomfort that awaits.

This is a collaboration with [Patrizio Munzi](https://www.linkedin.com/in/patriziomunzi).

www.partitadomaniaroma.com

## Requirements

You'll need to have the following items installed before continuing.

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`
  * [Bower](http://bower.io/): Run `[sudo] npm install -g bower`

## Dependencies

The gems used in this project are Sass and Compass, type these in the terminal anywhere:

`gem install sass`

`gem install compass`  

Open the terminal in the root of the project and type `npm install`. Once finished, type `bower install` for the bower dependencies.

Once done, type `grunt` wait for it to end, a browser window will open with your website running and will watch for changes and live reload accordingly.

Run `grunt dist` to rebuild the `_site` folder before uploading to the server manually
