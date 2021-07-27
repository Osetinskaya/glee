$(function() {



    $('.header__menu').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.header__menu').on('click', function() {
        $('.header__menu').toggleClass('header__menu--back');
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


    /*   var containerEl1 = document.querySelector('[data-ref="products__content"]');
      var containerEl2 = document.querySelector('[data-ref="design__content"]');



      $(function() {
          var mixer1 = mixitup('.products__content', {
              controls: {
                  scope: 'local'
              }
          });

          var mixer2 = mixitup('.design__content', {
              controls: {
                  scope: 'local'
              }
          });
      });



      var mixer1 = mixitup('.products__content');
      var mixer2 = mixitup('.design__content'); */


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