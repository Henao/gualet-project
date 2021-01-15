/*
----------------------------------------------------------------------------------------------
* Template Name    : DevMac - Creative Landing Page Agency Template                          * 
* Author           : BullTheme                                                               *
* Author URI:      : https://themeforest.net/user/bull-theme                                 *
* Author Website   : http://bulltheme.com                                                    *
* Version          : 1.0.0                                                                   *
* Created          : January 2020                                                            *
* File Description : Main JS file of the template                                            * 
----------------------------------------------------------------------------------------------
*/

/*====================================
[ JS TABLE CONTENT ]
------------------------------------
    1. Show Navbar background on scroll
    2. Clients Slider
    3. Testimonials Slider
    4. Smooth Scroll
    5. Counter Up
    6. Form Validator
-------------------------------------
[ END JS TABLE CONTENT ]
=====================================*/


(function($) {
"use strict";

    $(window).scroll(function(){

        /* =============================================
            1 - Show Navbar background on scroll
        ============================================= */

        var top = $(window).scrollTop();
        if(top>=100){
            $('.navbar').css('background','linear-gradient(135deg, rgba(59, 36, 114, 1) 0%, rgba(113, 64, 145, 1) 100%)'); 
        }
        else 
            if($('.navbar').css('background','linear-gradient(135deg, rgba(22, 37, 43, 1) 0%, rgba(22, 37, 43, 1) 100%)')){
                $('.navbar').css('background','linear-gradient(135deg, rgba(44, 51, 56, 0) 0%, rgba(44, 51, 56, 0) 100%)'); 
            }
    });


    $(document).ready(function(){

        /* =============================================
            2 - Clients Slider
        ============================================= */
        var owl = $('.clients-slider');
        owl.owlCarousel({
            items: 2,
            loop: true,
            nav: true,
            dots: false,
            margin: 15,
            responsive:{
                1200: {
                    items: 5
                },
                992: {
                    items: 4
                },
                768: {
                    items: 3
                },
                576: {
                    items: 2
                },
            }
        });
        owl.on('mousewheel', '.owl-stage', function (e) {
            if (e.deltaY>0) {
                owl.trigger('next.owl');
            } else {
                owl.trigger('prev.owl');
            }
            e.preventDefault();
        });


        /* =============================================
            3 - Testimonials Slider
        ============================================= */
        var owl = $('.testimonials-slider');
        owl.owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: false,
        });
        owl.on('mousewheel', '.owl-stage', function (e) {
            if (e.deltaY>0) {
                owl.trigger('next.owl');
            } else {
                owl.trigger('prev.owl');
            }
            e.preventDefault();
        });


        /* =============================================
            4 - Smooth Scroll
        ============================================= */
        $('html').smoothScroll(800);


        /* =============================================
            5 - Counter Up
        ============================================= */
        $('.counter').counterUp({delay: 10, time: 3000});


        /* =============================================
            6 - Form Validator
        ============================================= */
        $(function () {
            $('.needs-validation').validator();
            $('.needs-validation').on('submit', function (e) {
                if (!e.isDefaultPrevented()) {
                    var url = "php/contact.php";
                    $.ajax({
                        type: "POST",
                        url: url,
                        data: $(this).serialize(),
                        success: function (data)
                        {
                            var messageAlert = 'alert-' + data.type;
                            var messageText = data.message;
                            var alertBox = '<div class="alert mb-20 '+messageAlert+' alert-dismissible fade show" role="alert">'+ messageText +'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
                            if (messageAlert && messageText) {
                                $('.needs-validation').find('.messages').hide().html(alertBox).fadeIn('slow');
                                $('.needs-validation')[0].reset();
                            }
                        }
                    });
                    return false;
                }
            })
        });

    });

}(jQuery));