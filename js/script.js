// /// <reference path="../typings/globals/jquery/index.d.ts" />

// const { data } = require("jquery");


$(function () {
  // Header
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });


  // при клике на элемент с классом intro__video-link
  $(".intro__video-link").click(function (event) {
    // убираем стандартное поведение ссылки
    event.preventDefault();

    // скрываем кнопку
    $(this).css("display", "none");
    // воспроизводим видео
    $(".intro__video video").get(0).play();
    // показываем панель управления видео
    $(".intro__video video").attr("controls", "");
  });

  $(".spoiler__header").click(function () {
    if ($(".services__content").hasClass("one")) {
      $(".spoiler__header").not($(this)).removeClass("active");
      $(".spoiler__body").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });


  // Slick slider
  $(".reviews__slider").slick({
    slidesToShow: 2,
    vertical: true,
    verticalSwiping: true,
    swipe: false,

    appendArrows: $(".reviews__arrows"),
  });

  $(".photo__slider").slick({
    slidesToShow: 3,
    centerMode: true,
    asNavFor: ".information__slider",
    infinite: false,
    initialSlide: 1,
    draggable: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 751,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  })

  $(".information__slider").slick({
    slidesToShow: 1,
    vertical: false,
    verticalSwiping: false,
    fade: true,
    draggable: false,
    swipe: false,
    initialSlide: 1,
    asNavFor: ".photo__slider",
    infinite: false,
    adaptiveHeight: true,
  })


  // Fixed header
  var header = $("#header");
  var scrollOffset = $(window).scrollTop();
  var headerHeight = $("#header").innerHeight();

  checkScroll(scrollOffset, headerHeight)

  $(window).on("scroll load resize", function () {
    var scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset, headerHeight)
  })

  function checkScroll(scrollOffset, headerHeight) {
    if (scrollOffset >= headerHeight) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  // Smoth scroll
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    $(".nav__link").removeClass("active");

    var blockId = $(this).data("scroll");
    var blockOffset = $(blockId).offset().top;
    var headerHeight = $("#header").innerHeight();

    $("body").removeClass("lock");

    $(".header__burger,.header__menu").removeClass("active");

    $(this).addClass("active");

    $("html, body").animate({
      scrollTop: blockOffset - headerHeight
    }, 500);
  })
});