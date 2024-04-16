$(document).ready(function(){

    $('div button').click(function(){
        $('form').slideDown();
    });

    $('.fechar-button').click(function(){
        $('form').slideUp();
    });

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novaLista = $('<li></li>');

        $(`<p>${novaTarefa}</p>`).appendTo(novaLista);
        $('<button class="ok-button" type="button"><img src="./images/ok-icon.png" alt="ok icon"></button>').appendTo(novaLista);
        $(novaLista).appendTo('ul');

    $('.ok-button').click(function(){
        $('ul li p').css('text-decoration', 'line-through');
    });

    });

});
