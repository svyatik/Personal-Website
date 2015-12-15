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
            // $('#profile').css('display')
            $('#profile').addClass('active');
        }, 500);
        
    });

    $('.close').on('click', function() {
        /*$('.navbar-block').removeClass('active');
        $('.navbar-block').find('.navbar-background').removeClass('active');
        $('.navbar-block').addClass('is_loaded');
        // 
        setTimeout(function(){
            // $('#profile').css('display')
            


        }, 500);*/
        // $('.full-background').css('display', 'block');
        $('.full-background').addClass('active');
        $('.full-background').animate({
            opacity: 1
        }, 300);
        setTimeout(function(){
            $('.navbar-block').removeClass('is_loaded active');
            $('.navbar-block').find('.navbar-circle').removeClass('show_on_mobile');
            
            // $('.navbar-block').addClass('is_loaded');
            
        }, 300);

        setTimeout(function() {
            $('.full-background').removeClass('active');
            $('.full-background').css('opacity', '0')
            $('#profile').removeClass('active');
            openMenu();
        }, 1000);
        setTimeout(function() {
            
        }, 1500);
       /* $('.full-background').animate({
            opacity: 1
        }, 200, function() {*/
            // $('.full-background').css('display', 'none');
            // $('.navbar-block').removeClass('is_loaded active');
            // openMenu();
        // });

    });
});

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