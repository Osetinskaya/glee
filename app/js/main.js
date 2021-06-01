$(function() {
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
        arrows: false,
        autoplay: true
    });

    var mixerOne = mixitup('.product__content');
    var mixierTwo = mixitup('.design__content');

    $(function() {
        var mixerOne = mixitup('.product__content', {
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