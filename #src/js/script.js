$(document).ready(function() {
    // инициализируем fullpage через Jquery
    $('.fullpage').fullpage({
        // если содержимое страницы привышает размер экрана появляется прокрутка
        scrollOverflow: true,
        scrollOverflowOptions: {click: false},
        // инициализируем меню по экранам
        menu: '.nav',
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'singPage', 'lastPage'],
        // количества слайдеров
        afterRender: function () {
            $('.work__count-last').html($('.work__slider').length);
        },
        // номер текущего слайдера
        afterSlideLoad: function (section, origin, destination) {
            $('.work__count-first').html(++destination.index);
        }
    });

    // вешаем события на кнопку скрольте ниже
    $(document).on('click', '.pagination__scroll', function () {
        fullpage_api.moveSectionDown();
    });

    // вызвать меню
    $(document).on('click', '.fixed__menu', openMenu);

    function openMenu(event) {
        $('.menu').addClass('menu--active');
    }

    // закрыть меню
    $(document).on('click', '.menu__btn', closeMenu);

    function closeMenu(event) {
        $('.menu').removeClass('menu--active');
    }

    // Галерея
    $(document).on('click', '.gallery__mini a', changeImg);

    function changeImg(event) {
        event.preventDefault();
        $('.gallery__big img').attr('src', $(this).attr('data-src'));
    }

    // Расчет площади
    $(document).on('input', '.form', changeInput);

    function changeInput(event) {
        event.preventDefault();
        $(this).find('.form__range output').val($(this).find('.form__range input').val());
    }

});