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
