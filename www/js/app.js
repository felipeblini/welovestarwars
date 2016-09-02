'use strict';

var app = {
    // Application Constructor
    initialize: function() {
        console.log('inicializando app');
        this.bindEvents();
    },

    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        console.log('adicionando manipulador do evento deviceready');
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log('device está pronto');
        app.receivedEvent('deviceready');

        // navigator.splashscreen.show();
        // window.setTimeout(function () {
        //     navigator.splashscreen.hide();
        // }, splashDuration - fadeDuration);

        // setTimeout(function() {
        //     navigator.splashscreen.hide();
        // }, 2000);
    },
    // Busca filmes quando o device esta pronto e o white list foi carregado
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
        this.buscaFilmes();
    },
    // buscar a lista de filmes com um request na api
    // feito no objeto data factory
    buscaFilmes: function () {
        console.log('Solicitando lista de filmes ao data factory');
        dataFactory.buscaFilmes('#listaDeFilmes');
    }
};

// chama a metodo initialize do objeto app
app.initialize();