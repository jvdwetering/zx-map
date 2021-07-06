jQuery(document).ready(function ($) {

    $('a.abstract_more').click(function(event){
        event.preventDefault();
        $(this).parents('div.perEntryDiv').find('div.abstract').toggle();
    });

    $('a.bibdata_more').click(function(event){
        event.preventDefault();
        $(this).parents('div.perEntryDiv').find('div.bibdata').toggle();
    });
});