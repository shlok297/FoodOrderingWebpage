

$(document).ready(function () {

    var waypoints = $('.js-section-features').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky')
        }
        else {
            $('nav').removeClass('sticky')
        }
    })


    $('.js-pricing-section').click(function () {
        $('html,body').animate({scrollTop: $('.pricing-section').offset().top} , 1000)
    })

    $('.js-feature-section').click(function () {
        $('html,body').animate({scrollTop: $('.features-section').offset().top} , 500)
    })

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop':  parseInt($target.offset().top,10)
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
    
    
    $('.js-nav-button').click(function () {
        var nav = $('.nav-menus');
        nav.slideToggle(200);
        var navIcon = $('.js-nav-button i')
        if(navIcon.hasClass('ion-md-menu')){
            navIcon.addClass('ion-md-close');
            navIcon.removeClass('ion-md-menu');
        }
        else{
            navIcon.removeClass('ion-md-close');
            navIcon.addClass('ion-md-menu')
        }
    })


})




