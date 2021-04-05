// /modal window/
document.addEventListener('DOMContentLoaded', function () {

    var modalButtons = document.querySelectorAll('.contacts__button'),
        overlay = document.querySelector('.overlay'),
        closeButtons = document.querySelectorAll('.js-modal-close');

    modalButtons.forEach(function (item) {

        item.addEventListener('click', function (e) {

            e.preventDefault();

            var modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

            modalElem.classList.add('active');
            overlay.classList.add('active');
        });
    });

    closeButtons.forEach(function (item) {

        item.addEventListener('click', function (e) {
            var parentModal = this.closest('.modal');
            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });
    });

    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {
            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        }
    }, false);

    overlay.addEventListener('click', function () {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });
});
// /modal window/

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

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});
//up btn//

