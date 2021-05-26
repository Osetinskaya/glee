$(function() {
    $('.hero__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        fadetime: 700
    });

    var mixit = mixitup('.product__content');
    var mixier = mixitup('.design__content');
});