# C'è la partita domani a Roma?

www.partitadomaniaroma.com

## To Do

- force refresh based on date
- screenshots for add to homescreen in menu

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

Run `grunt dist` to rebuild the `_site` folder before uploading to the server manually or<br>
run `grunt ftp` to rebuild the `_site` folder and to upload the site via `grunt ftppush` directly from the terminal.
