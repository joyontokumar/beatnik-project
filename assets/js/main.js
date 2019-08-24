/* ================================================================
    Author       : Joyonto Kumar Roy
    Template Name: Team
    Tags: Landing Page, HTML, One Page
    Version      : 1.0.0
=================================================================*/
(function ($) {
    'use strict';
    // scroll to top 
    $('.scrolltotop').fadeOut(1000);
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500) {
            $('.scrolltotop').fadeIn(1000);
        } else {
            $('.scrolltotop').fadeOut(1000);
        }
    });
    $('.scrolltotop').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    // active video popup
    $("a.bla-1").YouTubePopUp();

    $("a.blogyoutube").YouTubePopUp();
    // Active wow animation
    new WOW().init();
    // sticky menu
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 0) {
            $('.header-upper').addClass('sticky');
        } else {
            $('.header-upper').removeClass('sticky');
        }
    });
    // offcanvas search form active start
    $(".offcanvas-btn").on('click', function () {
        $("body").addClass('fix');
        $(".offcanvas-search-inner").addClass('show')
    });
    $(".offcanvas-close,.offcanvas-overlay").on('click', function () {
        $("body").removeClass('fix');
        $(".offcanvas-search-inner").removeClass('show')
    });
    // dropdown menu
    var mobileWidth = 992;
    var navcollapse = $('.navigation li.dropdown');
    $(window).on('resize', function () {
        navcollapse.children('ul').hide();
        navcollapse.children('.megamenu').hide();
    });
    navcollapse.hover(function () {
        if ($(window).innerWidth() >= mobileWidth) {
            $(this).children('ul').stop(true, false, true).slideToggle(500);
            $(this).children('.megamenu').stop(true, false, true).slideToggle(500);
        }
    });
    //Submenu Dropdown Toggle
    if ($('.main-header .navigation li.dropdown ul').length) {
        $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
        //Dropdown Button
        $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
            $(this).prev('ul').slideToggle(500);
            $(this).prev('.megamenu').slideToggle(500);
        });
        //Disable dropdown parent link
        $('.navigation li.dropdown > a').on('click', function (e) {
            e.preventDefault();
        });
    }
    // youtube video popup active
    $("a.bla-1").YouTubePopUp();
    // partnar Owl-carousel active*/
    $(".partnar-wrapper").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 4
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    });
    // Responsive menu 
    $(document).on('click', '.navbar-collapse.show', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });
    // carousel slider 
    $('.slider-start').owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        autoplay: true,
        dots: false,
        smartSpeed: 600
    });
    $(".slider-start").on('translate.owl.carousel', function () {
        $('.slider-img').removeClass('active').hide();
    });
    $(".slider-start").on('translated.owl.carousel', function () {
        $('.slider-img').addClass('fadeInDown animated').show();
    });
    $(".slider-start").on('translate.owl.carousel', function () {
        $('.slider-text h1').removeClass('fadeInUp animated').hide();
    });
    $(".slider-start").on('translated.owl.carousel', function () {
        $('.slider-text h1').addClass('fadeInUp animated').show();
    });
    $(".slider-start").on('translated.owl.carousel', function () {
        $('.slider-text p').addClass('fadeInUp animated').show();
    });
    $(".slider-start").on('translate.owl.carousel', function () {
        $('.slider-text p').removeClass('fadeInUp animated').hide();
    });
    $(".slider-start").on('translated.owl.carousel', function () {
        $('.slider-text a').addClass('fadeInUp animated').show();
    });
    $(".slider-start").on('translate.owl.carousel', function () {
        $('.slider-text a').removeClass('fadeInUp animated').hide();
    });
    $(".slider-start").on('translated.owl.carousel', function () {
        $('.slider-content').addClass('fadeInUp animated').show();
    });
    $(".slider-start").on('translate.owl.carousel', function () {
        $('.slider-content').removeClass('fadeInUp animated').hide();
    });
    // Collapsed menu close on click event
    (function () {
        var navtogglerItemItemVal = $('#navtogglerItemItem');
        // Sync Navbar Links With Section
        $('body').scrollspy({
            target: '#navtogglerItemItem',
            offset: 4
        });
        navtogglerItemItemVal.on('click', '.navbar-collapse', function (e) {
            if ($(e.target).is('a')) {
                $(this).collapse('hide');
            }
        });
    })();
    //* PRELOADER JS Preloader JS
    var prealoaderOption = $(window);
    prealoaderOption.on("load", function () {
        var preloader = jQuery('.preloader');
        var preloaderArea = jQuery('.preloader-area');
        preloader.fadeOut();
        preloaderArea.delay(500).fadeOut('slow');
    });
})(jQuery);