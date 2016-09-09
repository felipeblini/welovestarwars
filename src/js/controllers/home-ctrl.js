(function() {
    'use strict';

    angular
        .module('minhaapp.controllers')
        .controller('HomeController', function() {
           var vm = this;

           vm.mensagem = "HomeController dizendo: Oi home! Eu sou o seu Controller...";
        });
})()