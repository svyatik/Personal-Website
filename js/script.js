var slider = false, mixItUp = false;

$(window).load(function() {
    // $('.navbar-block').addClass('is_loaded');
    $('.preloader').animate({
        opacity: 0
    }, function() {
        $('.preloader').css('display', 'none');
    });
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
        $('.close').removeClass('off');
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
    $('#contact_block').on('click', function() {
        setTimeout(function(){
            $('#contact').addClass('active');
            // google.maps.event.addDomListener(window, 'load', initialize);
            initialize();
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
            $('#contact').removeClass('active');
            openMenu();
        }, 1000);

        $('.close').addClass('off');
    });

    // $('.soc-circle').on('mouseenter', function() {
    //     $(this).find('.soc-circle-big').addClass('active');
    // });


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
    // 
    // google.maps.event.addDomListener(window, 'load', initialize);
    function initialize() {
    var myLatLng = {lat: 49.841774, lng: 24.031686};

    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: new google.maps.LatLng(49.841774, 24.031686),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }



    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
  }
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