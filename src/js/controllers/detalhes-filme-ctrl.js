(function name(params) {
    'use strict';

    angular.module('minhaapp.controllers')
        .controller('DetalhesFilmeController', function($stateParams) {
            var vm = this;

            vm.idFilme = $stateParams.idFilme;
        });
})();