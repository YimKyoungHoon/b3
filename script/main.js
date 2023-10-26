$(document).ready(function () {
    //gnb
    $("#gnb > li").on("mouseenter", function () {
        $(this).find("ul.sub").stop().slideDown();
    })
    $("#gnb > li").on("mouseleave", function () {
        $(this).find("ul.sub").stop().slideUp();
    })
    //popup
    $("#notice > ul > li").on("click", function () {
        $("#popupBg").css({ "display": "block" });
    })
    $("#close").on("click", function () {
        $("#popupBg").css({ "display": "none" })
    })
    //slide
    setInterval(function () {
        $('.frame').animate({ "top": "-100%" }, 1000, function () {
            $('.frame > li').eq(0).appendTo('.frame');
            $('.frame').css({ "top": "0px" })
        })
    }, 3000);
})