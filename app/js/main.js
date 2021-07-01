$(function() {


    $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.menu__btn').on('click', function() {
        $('.menu__btn').toggleClass('menu__btn--back');
    });

    $('.hero__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        fadetime: 700
    });
    $('.sponsors__list').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    });

    var mixerOne = mixitup('.products__content');
    var mixierTwo = mixitup('.design__content');




    $(function() {
        var mixerOne = mixitup('.products__content', {
            controls: {
                scope: 'local'
            }
        });

        var mixerTwo = mixitup('.design__content', {
            controls: {
                scope: 'local'
            }
        });
    });




});