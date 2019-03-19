jQuery(document).ready(function ($) {

    $('span.abstract').each(function(event){ /* select all divs with the item class */

        var abstract = $(this).html();
        
        $(this).html('<a href="#" class="abstract_more">Abstract</a>' + '&nbsp;&nbsp;' + 
                     '<span class="abstract_text" style="display:none;">'+ abstract + '</span>'+ '&nbsp;&nbsp;' +
                     '<a href="#" class="read_less" style="display:none;">Collapse</a>'); /* Alter the html to allow the read more functionality */
                     
        $(this).find('a.abstract_more').click(function(event){ /* find the a.read_more element within the new html and bind the following code to it */

            event.preventDefault(); /* prevent the a from changing the url */
            /*$(this).hide(); */ /* hide the read more button */
            /*$(this).parents('span.abstract').find('.short_text').hide();*/
            $(this).parents('span.abstract').find('.abstract_text').show(); /* show the .more_text span */
            $(this).parents('span.abstract').find('a.read_less').show();
        });

        $(this).find('a.read_less').click(function(event){ /* find the a.read_more element within the new html and bind the following code to it */

            event.preventDefault(); /* prevent the a from changing the url */
            $(this).hide(); /* hide the read more button */
            /*$(this).parents('span.abstract').find('.short_text').show();*/
            $(this).parents('span.abstract').find('.abstract_text').hide(); /* show the .more_text span */
            $(this).parents('span.abstract').find('.abstract_more').show();
        });
    });

    $('span.bibdata').each(function(event){ /* select all divs with the item class */

        var bibdata = $(this).html();
        
        $(this).html('<a href="#" class="bibdata_more">Bibdata</a>' + '&nbsp;&nbsp;' + 
                     '<span class="bibdata_text" style="display:none;">'+ bibdata + '</span>'+ '&nbsp;&nbsp;' +
                     '<a href="#" class="read_less" style="display:none;">Collapse</a>'); /* Alter the html to allow the read more functionality */
                     
        $(this).find('a.bibdata_more').click(function(event){ /* find the a.read_more element within the new html and bind the following code to it */

            event.preventDefault(); /* prevent the a from changing the url */
            /*$(this).hide(); */ /* hide the read more button */
            /*$(this).parents('span.abstract').find('.short_text').hide();*/
            $(this).parents('span.bibdata').find('.bibdata_text').show(); /* show the .more_text span */
            $(this).parents('span.bibdata').find('a.read_less').show();
        });

        $(this).find('a.read_less').click(function(event){ /* find the a.read_more element within the new html and bind the following code to it */

            event.preventDefault(); /* prevent the a from changing the url */
            $(this).hide(); /* hide the read more button */
            /*$(this).parents('span.abstract').find('.short_text').show();*/
            $(this).parents('span.bibdata').find('.bibdata_text').hide(); /* show the .more_text span */
            $(this).parents('span.bibdata').find('.bibdata_more').show();
        });
    });
});