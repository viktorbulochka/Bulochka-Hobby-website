//pop-up header//
$(function () {
    var $menu_popup = $('.menu__popup');

    $(".menu__trigger, .menu__close").click(function () {
        $menu_popup.slideToggle(300, function () {
            if ($menu_popup.is(':hidden')) {
                $('body').removeClass('body_pointer');
            } else {
                $('body').addClass('body_pointer');
            }
        });
        return false;
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.header-mobile__menu').length) {
            $('body').removeClass('body_pointer');
            $menu_popup.slideUp(300);
        }
    });
});
//pop-up header//

//slick-slider//
$('.slider-for.one').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav.one',
    touchMove: true,
});
$('.slider-nav.one').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for.one',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
})

$('.slider-for.two').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav.two',
    touchMove: true,
});
$('.slider-nav.two').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for.two',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
})

$('.slider-for.three').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav.three',
    touchMove: true,
});
$('.slider-nav.three').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for.three',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
})
//slick-slider//

//up btn//
var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, '300');
});
//up btn//




