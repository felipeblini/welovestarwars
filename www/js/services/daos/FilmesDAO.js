(function() {
    'use strict';

    angular
        .module('minhaapp.services', [])
        .constant('APISW', "http://swapi.co/api")
        .service('FilmesDAO', function($http, $log, APISW) {
            var _apiurl = APISW;

            this.listar = _listarFn;

            function _listarFn() {
                $log.log('buscando filmes em ' + APISW);

                return $http.get(_apiurl + '/films/');
            }
        });
})();