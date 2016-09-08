(function() {
'use strict';

    angular.module('buscaFilmes.directive', [])

        .directive('buscaFilmes', BuscaFilmesDirective);

        function BuscaFilmesDirective($log, FilmesDAO) {
            return {
                templateUrl: './components/custom-directives/busca-filmes/busca-filmes-directive.html',
                restrict: 'ACEM',
                link: function(scope) {
                    var dao = FilmesDAO;
        
                    scope.buscaAtivada = false;

                    scope.ativarBusca = function () {
                        scope.search = '';
                        scope.buscaAtivada = scope.buscaAtivada ? false : true;
                    }

                    dao.listar().success(function (data) {
                        var filmes = data.results;
                        $log.log(filmes.length + " filmes encontrados");
                        scope.filmes = filmes;
                    }).error(function (statusText) {
                        $log.log(statusText);
                    });
                }
            }
        }
})();