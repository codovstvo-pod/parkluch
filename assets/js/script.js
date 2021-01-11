$(document).ready(function () {

$('.main-block__btn').on('click', function(event) {
    $('html,body').animate({
        scrollTop: $('.description-block').offset().top + "px"
    }, {
        duration: 1E3
    });
})

$('#btn_top').on('click', function(event) {
    $('html,body').animate({
        scrollTop: $('.main-block').offset().top + "px"
    }, {
        duration: 1E3
    });
})
$('#btn_about').on('click', function(event) {
    $('html,body').animate({
        scrollTop: $('.description-block').offset().top + "px"
    }, {
        duration: 1E3
    });
})
$('#btn_subscription').on('click', function(event) {
    $('html,body').animate({
        scrollTop: $('.rent-block').offset().top + "px"
    }, {
        duration: 1E3
    });
})
$('#btn_first').on('click', function(event) {
    $('html,body').animate({
        scrollTop: $('.visit-block').offset().top + "px"
    }, {
        duration: 1E3
    });
})
$('#btn_open').on('click', function (event) {
    $('.ruls-window').toggleClass("active")
})


$('.ruls-window-bg').on('click', function(event) {
    $('.ruls-window').removeClass("active")
})

$('.ruls-overlay-close__btn').on('click', function(event) {
    $('.ruls-window').removeClass("active")
})






})