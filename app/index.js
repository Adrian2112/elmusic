// var Rx = require('rx');

// bring in our Elm application through webpack!
var Elm = require('elm/App.elm');

function init() {
  console.log('embedding our Elm application!');
  var elmApp = Elm.embed(Elm.HelloWorld, document.getElementById('elm-app'));
}

init();
