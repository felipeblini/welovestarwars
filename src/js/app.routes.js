(function() {
    'use strict';

    angular.module("minhaapp")
        .config(function($stateProvider, $urlRouterProvider) {
            var homeState = {
                name: "home",
                url: "/home",
                templateUrl: "views/home.html",
                controller: "HomeController",
                controllerAs: "vm"
            };

            var detalhesFilmeState = {
                name: "detalhesFilme",
                url: "/detalhesFilme/:idFilme",
                templateUrl: "views/detalhes-filme.html",
                controller: "DetalhesFilmeController",
                controllerAs: "vm"
            };

            var detalhesPersonagemState = {
                name: "detalhesPersonagem",
                url: "/detalhesPersonagem/:idPersonagem",
                templateUrl: "views/detalhes-personagem.html",
                controller: "DetalhesPersonagemController",
                controllerAs: "vm"
            };

            $stateProvider.state(homeState);
            $stateProvider.state(detalhesFilmeState);
            $stateProvider.state(detalhesPersonagemState);

            $urlRouterProvider.otherwise("/home");
        });
})();