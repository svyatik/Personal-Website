$(document).ready(function() {
    $('.navbar-block').on('mouseenter', function() {
        $(this).find('.navbar-circle-big').addClass('active');
        $(this).find('.navbar-info').addClass('active');
    }).on('mouseleave', function() {
        $(this).find('.navbar-circle-big').removeClass('active');
        $(this).find('.navbar-info').removeClass('active');
    });
});
