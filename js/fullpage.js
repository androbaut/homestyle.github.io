$(document).ready(function() {
    $('#fullpage').fullpage({
      //Scrolling
      autoScrolling:false,
      scrollingSpeed: 2500,
      easing: 'swing',
      fitToSection: false
  });
});

$(window).scroll(function(){
        var scroll = $(window).scrollTop();
            $('#footer').css({'opacity':(( 60-scroll )/60)});
        });

$(document).ready(function(){
  $('#page-top').fadeIn(500);
});

$('#category-tabs li a').click(function(){
    $(this).next('ul').slideToggle('500');
    $(this).find('i').toggleClass('fa-envelope-o fa-times')
});

$('#mail').click(function(){
    $(this).toggleClass('fa-envelope-o fa-times')
});

$(function(){
    $("#mail").click(function(){
        $(".switch").toggle();
    });
});

$('#arrow_switch').click(function(e) {
    //Cancel the link behavior
    e.preventDefault();
    if ($(window).width() > 767)
    {
        // I'm assuming you'd get this dynamically somehow;
        location.href="#about";
        return;
    }
});
