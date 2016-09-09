(function name(params) {
    'use strict';

    angular.module('minhaapp.controllers')
        .controller('DetalhesPersonagemController', function($stateParams) {
            var vm = this;

            vm.idPersonagem = $stateParams.idPersonagem;
        });
})();