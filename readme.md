# C'è la partita domani a Roma?

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

Open the terminal in the root of the project and type `npm install --save-dev`. Once finished, type `bower install` for the bower dependencies.

Once done, type `grunt` wait for it to end, a browser window will open with your website running and will watch for changes and live reload accordingly.

## Instructions

The build folder is `_site`, that's the folder to upload on your server. All the source files are in the root of the project. Paths are relative to the `_site` folder. The website will automatically live reload everytime you change and save a `.scss`, `.html` or `.js` file. No need to refresh the browser manually!
