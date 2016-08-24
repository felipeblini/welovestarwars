var dataFactory = {
    resource: 'http://swapi.co/api/',

    spinner: '<tbody>' +
                '<tr>' +
                    '<td>' +
                        '<div class="preloader-wrapper-custom">' +
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
        let that = this;

        let uiLista = document.querySelector(uiEl);

        $.get(this.resource + 'films/', function (resposta, status) {
            console.log(status);

            uiLista.innerHTML = '';

            let filmes = resposta.results;

            console.log(filmes);

            filmes.forEach(function (item) {
                if(!item.img) {
                    that.identificaFotoFilme(item);
                }

                let title = item.title;
            
                let newHtml = '<div class="item">' +
                    '<a data-id=' + item.episode_id + ' data-title=' + title.split(' ').join('+') + ' href="#" class="white-text">' +
                    '<img src="img/' + item.img + '" alt="">' +
                    '<span>' + title + '</span>' +
                    '<small>Filme estreiado em: ' + item.release_date.split('-')[0] + '</small>' +
                    '<small>Diretor: ' + item.director + '</small>' +
                    '</a>' +
                '</div>';

                uiLista.innerHTML += newHtml;
            }, this);

            Materialize.toast(resposta.count + ' filmes encontrados', 3500);

            window.bindClickOnItem();
        });
    },

    identificaFotoFilme: function (item) {
        switch (String(item.episode_id)) {
            case '1':
                item.img = 'filme-1-p.jpg';
                break;
            case '2':
                item.img = 'filme-2-p.jpg';
                break;
            case '3':
                item.img = 'filme-3-p.jpg';
                break;
            case '4':
                item.img = 'filme-4-p.jpg';
                break;
            case '5':
                item.img = 'filme-5-p.jpg';
                break;
            case '6':
                item.img = 'filme-6-p.jpg';
                break;
            case '7':
                item.img = 'filme-7-p.jpg';
                break;
            default:
                item.img = 'no-pic-p.jpg'
                break;
        }
    },

    buscaPersonagens: function(idFilme, uiEl) {
        console.log('buscando personagens...');
        let uiLista = $(uiEl);
        
        if(!uiLista.data('loaded')) {        
            uiLista.html(this.spinner);

            $.ajax({
                url: this.resource + "films/" + idFilme + "/",
                success: function(resultado) {
                    let personagens = resultado.characters;
                    let length = personagens.length;
                    let itensArray = []; 
                    let i = 0;

                    personagens.forEach(function(item) {
                        $.get(item, function(resultado) {

                            let newItem = '<tr>' +
                                                '<td>' + resultado.name + '</td>' +
                                                '<td>' + resultado.height + '</td>' +
                                                '<td>' + resultado.mass + '</td>' +
                                        '</tr>';

                            itensArray.push(newItem);

                            i++;

                            if(i == length) {
                                let tHead = '<thead>' +
                                    '<tr>' +
                                        '<th>Nome</th>' +
                                        '<th>Peso</th>' +
                                        '<th>Massa</th>' +
                                    '</tr>' +
                                '</thead>';

                                uiLista.html(tHead + '<tbody>');

                                uiLista.html(uiLista.html() + itensArray.join('') + '</tbody>');

                                uiLista.data('loaded', true);

                                Materialize.toast(length + ' personagens encontrados', 3500);
                            }
                        });
                    }, this);
                }
            });
        }
    },

    buscaPlanetas: function(idFilme, uiEl) {
        let uiLista = $(uiEl);
        
        if(!uiLista.data('loaded')) {        
            uiLista.html(this.spinner);
        
            $.ajax({
                url: this.resource + "films/" + idFilme + "/",
                success: function(resultado) {
                    let planetas = resultado.planets;
                    let length = planetas.length;
                    let itensArray = []; 
                    let i = 0;

                    planetas.forEach(function(item) {
                        $.get(item, function(resultado) {

                            let newItem = '<tr>' +
                                                '<td>' + resultado.name + '</td>' +
                                                '<td>' + resultado.diameter + '</td>' +
                                                '<td>' + resultado.population  + '</td>' +
                                        '</tr>';

                            itensArray.push(newItem);

                            i++;

                            if(i == length) {
                                let tHead = '<thead>' +
                                    '<tr>' +
                                        '<th>Nome</th>' +
                                        '<th>Diâmetro</th>' +
                                        '<th>População</th>' +
                                    '</tr>' +
                                '</thead>';

                                uiLista.html(tHead + '<tbody>');

                                uiLista.html(uiLista.html() + itensArray.join('') + '</tbody>');

                                uiLista.data('loaded', true);

                                Materialize.toast(length + ' planetas encontrados', 3500);
                            }
                        });
                    }, this);
                }
            });
        }
    },

    buscaNaves: function(idFilme, uiEl) {
        let uiLista = $(uiEl);

        if(!uiLista.data('loaded')) {        
            uiLista.html(this.spinner);

            $.ajax({
                url: this.resource + "films/" + idFilme + "/",
                success: function(resultado) {
                    let naves = resultado.starships;
                    let length = naves.length;
                    let itensArray = []; 
                    let i = 0;

                    naves.forEach(function(item) {
                        $.get(item, function(resultado) {

                            let newItem = '<tr>' +
                                                '<td>' + resultado.name + '</td>' +
                                                '<td>' + resultado.model + '</td>' +
                                                '<td>' + resultado.passengers + '</td>' +
                                        '</tr>';

                            itensArray.push(newItem);

                            i++;

                            if(i == length) {
                                let tHead = '<thead>' +
                                    '<tr>' +
                                        '<th>Nome</th>' +
                                        '<th>Modelo</th>' +
                                        '<th>Passageiros</th>' +
                                    '</tr>' +
                                '</thead>';

                                uiLista.html(tHead + '<tbody>');

                                uiLista.html(uiLista.html() + itensArray.join('') + '</tbody>');

                                uiLista.data('loaded', true);

                                Materialize.toast(length + ' naves encontrados', 3500);
                            }
                        });
                    }, this);
                }
            });
        }
    }
}