$(document).ready(function () {

    $('body').on('click', '.sizer', function (e) {
        e.preventDefault();
        var size = $( this ).css( "font-size");
        $('html').css({"font-size": size});
    }).on('click', '.overlay-close', function (e) {
        e.preventDefault();
        $('#overlay').removeClass('open');
        $('#overlay .header_main_nav li').removeClass('open').removeClass('show');
    }).on('click', '#overlay-open', function (e) {
        e.preventDefault();
        $('#overlay').addClass('open');
        $('#overlay .header_main_nav li').removeClass('open').removeClass('show');
    });

    $('#owl-one').owlCarousel({
        smartSpeed:1000, margin:10, autoplay:false, autoplayTimeout:5000,
        autoplayHoverPause:false, nav: false, responsiveClass: true,
        responsive: {
            0: {items: 1, nav: false, loop: true, dots: true},
            400: {items: 1, nav: false, loop: true, dots: true}
        }
        // navText: ['<','>']
    });

    $('#owl-books,#owl-kids-books,#owl-teen-books,#owl-music-books,#owl-movie').owlCarousel({
        smartSpeed:1000, margin:10, autoplay:false, autoplayTimeout:5000,
        autoplayHoverPause:false, nav: false, responsiveClass: true,
        responsive: {
            0: {items: 1, nav: false, loop: true, dots: true},
            600: {items: 2, nav: false, loop: true, dots: true},
            1000: {items: 4, nav: false, loop: true, dots: true}
        }
        // navText: ['<','>']
    });
    $('#owl-digital').owlCarousel({
        smartSpeed:1000, margin:10, autoplay:false, autoplayTimeout:5000,
        autoplayHoverPause:false, nav: false, responsiveClass: true,
        responsive: {
            0: {items: 1, nav: false, loop: true, dots: true},
            700: {items: 2, nav: false, loop: true, dots: true},
            1000: {items: 3, nav: false, loop: true, dots: true},
            1100: {items: 4, nav: false, loop: true, dots: true}
        }
        // navText: ['<','>']
    });

    $('#owl-kids,#owl-teens').owlCarousel({
        smartSpeed:1000, margin:10, autoplay:false, autoplayTimeout:5000,
        autoplayHoverPause:false, nav: false, responsiveClass: true,
        responsive: {
            0: {items: 1, nav: false, loop: true, dots: true},
            1100: {items: 2, nav: false, loop: true, dots: true}
        }
        // navText: ['<','>']
    });

    $('#owl-news').owlCarousel({
        smartSpeed:1000, margin:10, autoplay:false, autoplayTimeout:5000,
        autoplayHoverPause:false, nav: false, responsiveClass: true,
        responsive: {
            0: {items: 1, nav: false, loop: true, dots: true},
            1100: {items: 3, nav: false, loop: true, dots: true}
        }
        // navText: ['<','>']
    });

    $('#owl-explore').owlCarousel({
        smartSpeed:1000, margin:10, autoplay:false, autoplayTimeout:5000,
        autoplayHoverPause:false, nav: false, responsiveClass: true,
        responsive: {
            0: {items: 1, nav: false, loop: true, dots: true},
            600: {items: 2, nav: false, loop: true, dots: true},
            1000: {items: 4, nav: false, loop: true, dots: true}
        }
        // navText: ['<','>']
    });
});