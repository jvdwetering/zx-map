jQuery(document).ready(function ($) {

    $('p.abstract').each(function(event){ /* select all divs with the item class */
    
        var max_length = 50; /* set the max content length before a read more link will be added */
        
        if($(this).html().length > max_length){ /* check for content length */
            
            var short_content   = $(this).html().substr(0,max_length) +'... '; /* split the content in two parts */
            var long_content    = $(this).html();
            
            $(this).html('<span class="short_text">' + short_content + '</span>' +
                         '<a href="#" class="read_more">More</a>'+
                         '<span class="more_text" style="display:none;">'+long_content+'</span>'+ '&nbsp;&nbsp;' +
                         '<a href="#" class="read_less" style="display:none;">Less</a>'); /* Alter the html to allow the read more functionality */
                         
            $(this).find('a.read_more').click(function(event){ /* find the a.read_more element within the new html and bind the following code to it */
 
                event.preventDefault(); /* prevent the a from changing the url */
                $(this).hide(); /* hide the read more button */
                $(this).parents('p.abstract').find('.short_text').hide();
                $(this).parents('p.abstract').find('.more_text').show(); /* show the .more_text span */
                $(this).parents('p.abstract').find('a.read_less').show();
            });

            $(this).find('a.read_less').click(function(event){ /* find the a.read_more element within the new html and bind the following code to it */
 
                event.preventDefault(); /* prevent the a from changing the url */
                $(this).hide(); /* hide the read more button */
                $(this).parents('p.abstract').find('.short_text').show();
                $(this).parents('p.abstract').find('.more_text').hide(); /* show the .more_text span */
                $(this).parents('p.abstract').find('.read_more').show();
            });
        }
    });
});