$(document).ready(function() {

    $(".view-detalhes").addClass('hide');

    $("#btnVoltar").addClass('hide');

    // ativa a tab Personagens
    $("ul.tabs > li:nth-child(1) > a").css('color', '#F8C0C4');

    // ao clicar em um item da lista
    $("li.collection-item > a").click(function(e) {
        e.preventDefault();

        // desloca a view wrapper pra a esquerda em 100% do tamanho da tela
        $(".views-container").css('transform', 'translateX(-100%)');

        // mostra o botao voltar na navbar
        $("#btnVoltar").removeClass('hide');

        // deixa a view detalhes visivel
        $(".view-detalhes").removeClass('hide');
    });

    // desativa a tab Personagens quando clicada nas outras tabs
    $("ul.tabs > li:nth-child(n+2) > a").click(function() {
        $("ul.tabs > li:nth-child(1) > a").css('color', '');
    });
});