'use strict';

var dataFactory = {
    resource: 'http://swapi.co/api/',

    preloader: '<tbody>' +
    '<tr>' +
    '<td>' +
    '<div style="width: 75px; margin: 30px auto;">' +
    '<div class="preloader-wrapper active">' +
    '<div class="spinner-layer spinner-red-only">' +
    '<div class="circle-clipper left">' +
    '<div class="circle"></div>' +
    '</div>' +
    '<div class="gap-patch">' +
    '<div class="circle"></div>' +
    '</div>' +
    '<div class="circle-clipper right">' +
    '<div class="circle"></div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</td>' +
    '</tr>' +
    '</tbody>',

    buscaFilmes: function (uiEl) {
        console.log('buscando filmes...');

        var that = this;

        var uiLista = document.querySelector(uiEl);

        $.ajax({
            url: this.resource + 'films/',
            success: function (resposta, status) {
                console.log('status request buscando filmes: ' + status);

                uiLista.innerHTML = '';

                var filmes = resposta.results;

                console.log('filmes: ' + filmes);

                filmes.forEach(function (item) {
                    if (!item.img) {
                        that.identificaFotoFilme(item);
                    }

                    var title = item.title;

                    var newHtml = '<li class="collection-item avatar">' +
                        '<a data-id=' + item.episode_id + ' data-title=' + title.split(' ').join('+') + ' href="#">' +
                        '<img src="img/' + item.img + '" alt="" class="circle">' +
                        '<span>' + title + '</span>' +
                        '<p>' +
                        '<small>Filme estreiado em: ' + item.release_date.split('-')[0] + '</small><br>' +
                        '<small>Diretor: ' + item.director + '</small>' +
                        '</p>' +
                        '<i class="material-icons secondary-content">&#xE8E4;</i>' +
                        '</a>' +
                        '</li>';

                    uiLista.innerHTML += newHtml;
                }, this);

                Materialize.toast(resposta.count + ' filmes encontrados', 3500);

                // function  criada na home.js
                window.addClickFilme();
            },
            error: function (e) {
                console.log('error:', e);
                Materialize.toast('Erro, tente novamente', 3500);
            }
        });
    },

    identificaFotoFilme: function (item) {
        item.img = 'filme-' + String(item.episode_id) + '-p.jpg';
    },

    buscaPersonagens: function (idFilme, uiEl) {
        console.log('buscando personagens...');
        var uiLista = $(uiEl);

        if (!uiLista.data('loaded')) {
            uiLista.html(this.preloader);

            $.ajax({
                url: this.resource + "films/" + idFilme + "/",
                success: function (resultado) {
                    var personagens = resultado.characters;
                    var length = personagens.length;
                    var itensArray = [];
                    var i = 0;

                    personagens.forEach(function (item) {
                        $.ajax({
                            url: item,
                            success: function (resultado, status) {

                                console.log("Status request personagem: " + status);

                                var newItem = '<tr>' +
                                    '<td>' + resultado.name + '</td>' +
                                    '<td>' + resultado.height + '</td>' +
                                    '<td>' + resultado.mass + '</td>' +
                                    '</tr>';

                                itensArray.push(newItem);

                                i++;

                                if (i == length) {
                                    var tHead = '<thead>' +
                                        '<tr>' +
                                        '<th>Nome</th>' +
                                        '<th>Peso</th>' +
                                        '<th>Massa</th>' +
                                        '</tr>' +
                                        '</thead>';

                                    uiLista.html(tHead + '<tbody>');

                                    uiLista.html(uiLista.html() + itensArray.join('') + '</tbody>');

                                    uiLista.data('loaded', true);

                                    Materialize.toast(length + ' personagen(s) encontrado(s)', 3500);
                                }
                            },
                            error: function (e) {
                                console.log('error no item: ' + item + ":", e);
                            }
                        });
                    }, this);
                },
                error: function (e) {
                    console.log('error:', e);
                    Materialize.toast('Erro, tente novamente', 3500);
                }
            });
        }
    },

    buscaPlanetas: function (idFilme, uiEl) {
        console.log('buscando planetas...');

        var uiLista = $(uiEl);

        if (!uiLista.data('loaded')) {
            uiLista.html(this.preloader);

            $.ajax({
                url: this.resource + "films/" + idFilme + "/",
                success: function (resultado) {
                    var planetas = resultado.planets;
                    var length = planetas.length;
                    var itensArray = [];
                    var i = 0;

                    planetas.forEach(function (item) {
                        $.ajax({
                            url: item,
                            success: function (resultado) {

                                console.log("Status request planeta: " + status);

                                var newItem = '<tr>' +
                                    '<td>' + resultado.name + '</td>' +
                                    '<td>' + resultado.diameter + '</td>' +
                                    '<td>' + resultado.population + '</td>' +
                                    '</tr>';

                                itensArray.push(newItem);

                                i++;

                                if (i == length) {
                                    var tHead = '<thead>' +
                                        '<tr>' +
                                        '<th>Nome</th>' +
                                        '<th>Diâmetro</th>' +
                                        '<th>População</th>' +
                                        '</tr>' +
                                        '</thead>';

                                    uiLista.html(tHead + '<tbody>');

                                    uiLista.html(uiLista.html() + itensArray.join('') + '</tbody>');

                                    uiLista.data('loaded', true);

                                    Materialize.toast(length + ' planeta(s) encontrado(s)', 3500);
                                }
                            },
                            error: function (e) {
                                console.log('error no item: ' + item + ":", e);
                            }
                        });
                    }, this);
                }
            });
        }
    },

    buscaNaves: function (idFilme, uiEl) {
        console.log('buscando naves...');

        var uiLista = $(uiEl);

        if (!uiLista.data('loaded')) {
            uiLista.html(this.preloader);

            $.ajax({
                url: this.resource + "films/" + idFilme + "/",
                success: function (resultado) {
                    var naves = resultado.starships;
                    var length = naves.length;
                    var itensArray = [];
                    var i = 0;

                    naves.forEach(function (item) {
                        $.ajax({
                            url: item,
                            success: function (resultado, status) {

                                console.log("Status request planeta: " + status);

                                var newItem = '<tr>' +
                                    '<td>' + resultado.name + '</td>' +
                                    '<td>' + resultado.model + '</td>' +
                                    '<td>' + resultado.passengers + '</td>' +
                                    '</tr>';

                                itensArray.push(newItem);

                                i++;

                                if (i == length) {
                                    var tHead = '<thead>' +
                                        '<tr>' +
                                        '<th>Nome</th>' +
                                        '<th>Modelo</th>' +
                                        '<th>Passageiros</th>' +
                                        '</tr>' +
                                        '</thead>';

                                    uiLista.html(tHead + '<tbody>');

                                    uiLista.html(uiLista.html() + itensArray.join('') + '</tbody>');

                                    uiLista.data('loaded', true);

                                    Materialize.toast(length + ' nave(s) encontrada(s)', 3500);
                                }
                            },
                            error: function (e) {
                                console.log('error no item: ' + item + ":", e);
                            }
                        });
                    }, this);
                },
                error: function (e) {
                    console.log('error:', e);
                    Materialize.toast('Erro, tente novamente', 3500);
                }
            });
        }
    }
}