var slider = false, mixItUp = false;

$(window).load(function() {
    // $('.navbar-block').addClass('is_loaded');
    openMenu();
});

$(document).ready(function() {
    // $('#profile').addClass('active');
    // $('.navbar-block').find('.navbar-background').addClass('active');
    

    $('.navbar-block').on('mouseenter', function() {
        if (! ($('.navbar-block').hasClass('active'))) {
            $(this).find('.navbar-background').addClass('active');
        }
        $(this).find('.navbar-circle-big').addClass('active');
        $(this).find('.navbar-info').addClass('active');
    }).on('mouseleave', function() {
        if (! ($('.navbar-block').hasClass('active'))) {
            $(this).find('.navbar-background').removeClass('active');
        }
        $(this).find('.navbar-circle-big').removeClass('active');
        $(this).find('.navbar-info').removeClass('active');
    }).on('click', function() {
        $('.navbar-block').removeClass('is_loaded');
        $(this).addClass('is_loaded active');
        $(this).find('.navbar-background').addClass('active');
        $(this).find('.navbar-circle').addClass('show_on_mobile');
    });

    $('#profile_block').on('click', function() {
        setTimeout(function(){
            $('#profile').addClass('active');
        }, 500);
    });
    $('#resume_block').on('click', function() {
        setTimeout(function(){
            $('#resume').addClass('active');
        }, 500);
    });
    $('#portfolio_block').on('click', function() {
        setTimeout(function(){
            $('#portfolio').addClass('active');
            initSlider();
            initMixItUp();
        }, 500);
    });

    $('.close').on('click', function() {
        $('.full-background').addClass('active');
        $('.full-background').animate({
            opacity: 1
        }, 300);
        setTimeout(function(){
            $('.navbar-block').removeClass('is_loaded active');
            $('.navbar-block').find('.navbar-circle').removeClass('show_on_mobile');
        }, 300);

        setTimeout(function() {
            $('.full-background').removeClass('active');
            $('.full-background').css('opacity', '0');

            $('#profile').removeClass('active');
            $('#resume').removeClass('active');
            $('#portfolio').removeClass('active');
            openMenu();
        }, 1000);
    });


    $('.circle').circliful({
        dimension: 165,
        width: 38,
        border: 'inline',
        bordersize: 20,
        fgcolor: '#404148',
        bgcolor: '#fff'
    });

    // $('#Container').mixItUp();
    // console.log($("#Container"));
    


    // $('.portfolio-button').find('button').on('click', function () {
    //     $('.portfolio-button').find('button').removeClass('active');
    //     $(this).addClass('active');
    // });

});

function initSlider() {
    if(!slider) {
        $("#lightSlider").lightSlider({
            controls: false,
            adaptiveHeight: true,
            mode: "slide",
            item: 1,
            enableTouch: true,
            enableDrag: true,
            freeMove:true,
        });
        slider = true;
    }
}

function initMixItUp() {
    // on('#portfolio').ready(function() {
        // console.log($(".portfolio-button"));
        if(!mixItUp) {
            $('#Container').mixItUp();
            mixItUp = true;
        }
    // });
}

function openMenu() {
    $('#profile_block').addClass('is_loaded');
    setTimeout(function(){
        $('#resume_block').addClass('is_loaded');
    }, 200);
    setTimeout(function(){
        $('#portfolio_block').addClass('is_loaded');
    }, 400);
    setTimeout(function(){
        $('#contact_block').addClass('is_loaded');
    }, 600);
}