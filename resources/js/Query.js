$(document).ready(function(){
    
    /*-------For Sticky Navigation-------*/
    
    $('.js--section-features').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        } else{
            $('nav').removeClass('sticky');
        }
    },{
        offset: '60px'
    });
    /*
    var waypoints = $('#handler-first').waypoint(function(direction) {
      notify(this.element.id + ' hit 25% from top of window') 
    }, {
      offset: '25%'
    })
    */
    
    /*-------For Sticky Navigation-------*/
    /*-------Mobile Navigation-------*/
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if (icon.hasClass('ion-ios-menu')){
            icon.addClass('ion-ios-close');
            icon.removeClass('ion-ios-menu');
        } else{
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-ios-close');
        }
    });
    
    /*-------Animation On Scroll-------*/
    
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
});