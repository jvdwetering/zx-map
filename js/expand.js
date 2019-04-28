jQuery(document).ready(function ($) {

    $('a.abstract_more').click(function(event){
        event.preventDefault();
        $(this).parent().find('span.abstract').toggle();
    });

    $('a.bibdata_more').click(function(event){
        event.preventDefault();
        $(this).parent().find('span.bibdata').toggle();
    });
});