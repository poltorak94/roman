$(document).ready(function () {
    $(".input-tel").mask("+7 (999) 999-99-99");

    //открытие модального окна
    $(".modal").on("open.modal", function () {
        let modal = $(this);
        modal.removeClass("modal--hidden");
        modal.arcticmodal({
            afterClose: function () {
                modal.addClass("modal--hidden");
            },
        });
    });

    //закрытие модального окна
    $(".modal").on("close.modal", function () {
        let modal = $(this);
        modal.arcticmodal("close");
    });

    $(".btn-consult").on("click", function (e) {
        e.preventDefault();
        $(".modal-main").trigger("open.modal");
    });

    $(".modal-form").on("submit", function (e) {
        e.preventDefault();
        let data = $(this).serialize();
        let form = $(this);
        let parent = form.closest(".modal");
        $.ajax({
            type: "POST",
            url: "email.php",
            data: data,
            success: function () {
                parent.addClass("modal-from--success");
            },
            error: function () {
                alert("Ошибка сервера, попробуйте еще раз");
            },
        });
    });

    $(".consult__form").on("submit", function (e) {
        e.preventDefault();
        let data = $(this).serialize();
        let form = $(this);
        $.ajax({
            type: "POST",
            url: "email-2.php",
            data: data,
            success: function () {
                $(".modal-thanks").trigger("open.modal");
            },
            error: function () {
                alert("Ошибка сервера, попробуйте еще раз");
            },
        });
    });

    $(".faq__item-title").on("click", function () {
        let container = $(this).closest(".faq__item");
        container.find(".faq__item-answer").slideToggle();

        $(this).toggleClass("faq__item-title--active");
    });

    $(".play-video").on("click", function (e) {
        e.preventDefault();
        $(this).hide();
        $(this).closest(".main-info__video").find("iframe").show();
        $(this).closest(".main-info__video").find(".video-holder").hide();
    });

    var slider1 = new Swiper(".reviews__slider", {
        spaceBetween: 20,
        pagination: {
            el: ".pagination",
            clickable: true,
        },
    });

    var slider2 = new Swiper(".certificates__slider", {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".certificates .next",
            prevEl: ".certificates .prev",
        },
    });
    var slider3 = new Swiper(".diploma__slider", {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".diploma .next",
            prevEl: ".diploma .prev",
        },
    });

    // $(".consult__form-note a", ".footer-politic").on("click", function (e) {
    //     e.preventDefault();
    //     $(".modal-politic").trigger("open.modal");
    // });

    $(".consult__form-note a, .footer-politic, .modal__note a").on(
        "click",
        function (e) {
            e.preventDefault();
            $(".modal-politic").trigger("open.modal");
        }
    );

    Fancybox.bind("[data-fancybox]", {
        //
    });
});
