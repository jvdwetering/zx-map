
// function sizing(windowWidth) {
//     //alert(windowWidth);

//     if(windowWidth <= 480){ // ipad:768, Nexus10:800, 480
//         $('.allshow').hide(); //
//         $('.noshow').show();
//         $('.expandshow').show();
//         $('.collapseshow').hide();
//     } else {
//         $('.allshow').show();
//         $('.noshow').hide();
//         $('.expandshow').hide();
//         $('.collapseshow').hide();
//     }
// }

// jQuery(document).ready(function($) {
//                        var windowWidth = $(window).width();
//                        $(window).resize(function(){
//                                         // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
//                                         if ($(window).width() != windowWidth) {
//                                         windowWidth = $(window).width();
//                                         sizing(windowWidth);
//                                         }
//                                         });
//                        sizing(windowWidth);
//                        });