$(document).ready(function() {
    // ao clicar em um item da lista
    $(".item > a").click(function(e) {
        e.preventDefault();

        // desloca a view wrapper pra a esquerda em 100% do tamanho da tela
        $(".views-wrapper").css('transform', 'translateX(-100%)');

        // mostra o botao voltar na navbar
        $(".btn-voltar").css('display', 'block');

        // deixa a view detalhes visivel
        $(".view-detalhes").css('display', 'block');
        
        // torna visivel o conteudo que esta fora (overflow) da view wrapper 
        $(".views-wrapper").css('overflow-x', 'visible');

        // ativa a tab Personagens
        $('ul.tabs').tabs('select_tab', 'personagens');
    });

    $(".btn-voltar").click(function(e) {
        e.preventDefault();
        
        // desloca a view wrapper de volta para a posicao original
        $(".views-wrapper").css('transform', 'translateX(0)');
        
        // esconde o botao voltar na navbar
        $(this).css('display', 'none');
        
        // esconde a view detalhes
        $(".view-detalhes").css('display', 'none');
        
        // torna ivisivel o conteudo que esta fora (overflow) da view wrapper 
        $(".views-wrapper").css('overflow-x', 'hidden');
    });
});