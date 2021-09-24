$(function() {

    $('.price__input').ionRangeSlider({
        type: "number",
        prefix: "$",
        step = '0.01',
        value = '0.00',
        prettify_separator: ","

    })

    $(".card__stars").rateYo({
        readOnly: true,
        starWidth: "15px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00"
    });

    $(".recent__stars").rateYo({
        starWidth: "12px",
        readOnly: true,
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00"
    });


    /*  КНОПКИ HEADER */

    $('.header__menu').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active');
    });
    $('.header__menu').on('click', function() {
        $('.header__menu').toggleClass('header__menu--back');
    });

    /* КНОПКИ ДОБАВЛЕНИЯ В КОРЗИНУ "ADD TO CARD" */

    $('.buttons__add').on('click', function() {
        $('.buttons__add').toggleClass('buttons__add--done');
    });
    $('.buttons__add').on('click', function() {
        $('.buttons__append').toggleClass('buttons__append--add');
    });

    $('.buttons__add').on('click', function() {
        $('.buttons__card').toggleClass('buttons__card--change');
    });
    /* КНОПКИ ОТКРЫТИЯ ФИЛЬТРОВ */
    $('.shop__menu').on('click', function() {
        $('.filters').toggleClass('filters--active');
    });
    $('.shop__menu').on('click', function() {
        $('.shop__menu').toggleClass('shop__menu--back');
    });

    /* КНОПКИ СМЕНЫ ПРЕДСТАВЛЕНИЯ ТОВАРОВ */
    $('.sorting__btn--grid').on('click', function() {
        $('.grid').addClass('grid--active')
        $('.grid__card').removeClass('grid__card--list');
        $('.grid-card').removeClass('grid-card--list')
        $('.grid-card__body').removeClass('grid-card__body--list')
        $('.card__info').removeClass('card__info--list')
        $('.grid-card__img').removeClass('grid-card__img--list')
        $('.grid-card__text').removeClass('grid-card__text--list')
        $('.grid-card__stars').removeClass('grid-card__stars--list')
        $('.grid-card__discription').removeClass('grid-card__discription--list')
        $('.grid-card__tool').removeClass('grid-card__tool--list')
        $('.buttons').removeClass('buttons--list')

    });
    $('.sorting__btn--line').on('click', function() {
        $('.grid').removeClass('grid--active');
        $('.grid__card').addClass('grid__card--list')
        $('.grid-card').addClass('grid-card--list')
        $('.grid-card__body').addClass('grid-card__body--list')
        $('.card__info').addClass('card__info--list')
        $('.grid-card__img').addClass('grid-card__img--list')
        $('.grid-card__text').addClass('grid-card__text--list')
        $('.grid-card__stars').addClass('grid-card__stars--list')
        $('.grid-card__discription').addClass('grid-card__discription--list')
        $('.grid-card__tool').addClass('grid-card__tool--list')
        $('.buttons').addClass('buttons--list')
    });

    $(".menu a").on("click", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('main,html').animate({ scrollTop: top }, 150);
    });
    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(document).scrollTop() > 100) {
                $(".header").addClass('fixed');
            } else {
                $(".header").removeClass('fixed');
            }
        });
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
        autoplay: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    var containerEl1 = document.querySelector('[data-ref="products__gallery"]');
    var containerEl2 = document.querySelector('[data-ref="design__gallery"]');

    var config = {
        controls: {
            scope: 'local'
        }
    };

    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);
});