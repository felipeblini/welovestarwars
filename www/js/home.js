// prepara a view Detalhes ativando a primeira tab
function preparaViewDetalhes(ativarTabId) {
   $("ul.tabs > li:nth-child(1) > a").css('color', '#F8C0C4');
    $('ul.tabs').tabs('select_tab', ativarTabId);
}

// v2: busca dados via ajax
function carregaDadosAPI(idFilme) {
    dataFactory.buscaPersonagens(idFilme, '#listaDePersonagens');
    dataFactory.buscaPlanetas(idFilme, '#listaDePlanetas');
    dataFactory.buscaNaves(idFilme, '#listaDeNaves');

    $("#aba-personagens").click(function(e) {
        e.preventDefault();

        dataFactory.buscaPersonagens(idFilme, '#listaDePersonagens');
    });

    $("#aba-planetas").click(function(e) {
        e.preventDefault();

        dataFactory.buscaPlanetas(idFilme, '#listaDePlanetas');
    });

    $("#aba-naves").click(function(e) {
        e.preventDefault();

        dataFactory.buscaNaves(idFilme, '#listaDeNaves');
    });
}

// v2: altera o titulo na navbar
function insereTituloFilmeNavbar(titulo) {
    $(".brand-logo").html(titulo);
}

// v2: encapsulando function que trata click no filme
function bindClickOnItem() {
    console.log('entrou em bindClickOnItem()');

    // ao clicar em um item da lista
    $("li.collection-item > a").click(function(e) {
        e.preventDefault();

        // desloca a view wrapper pra a esquerda em 100% do tamanho da tela
        $(".views-container").css('transform', 'translateX(-100%)');

        // mostra o botao voltar na navbar
        $("#btnVoltar").removeClass('hide');

        // deixa a view detalhes visivel
        $(".view-detalhes").removeClass('hide');

        preparaViewDetalhes('personagens');

        // insere o titulo do filme na navbar
        var title = $(this).data('title').replace(/\+/g, ' ');
        insereTituloFilmeNavbar(title);

        // carrega dados das tabs (v2)
        var idFilme = $(this).data('id');
        carregaDadosAPI(idFilme);
    });
}

$(document).ready(function() {

    $(".view-detalhes").addClass('hide');

    $("#btnVoltar").addClass('hide');

    preparaViewDetalhes('personagens');

    // desativa a tab Personagens quando clicada nas outras tabs
    $("ul.tabs > li:nth-child(n+2) > a").click(function() {
        $("ul.tabs > li:nth-child(1) > a").css('color', '');
    });
});