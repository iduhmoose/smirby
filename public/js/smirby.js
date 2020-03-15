$(document).ready(function() {
  if (window.location.pathname.indexOf('chores') > 0) {
    $(".navbar a:nth-child(3) img").attr("src","/images/chores2.png");
    $(".navbar a:nth-child(3) img").css('filter','invert(0)');
    $(".navbar a:nth-child(3) p").css('color','#77B5AF');
  } else if (window.location.pathname.indexOf('home') > 0) {
    $(".navbar a:nth-child(1) img").attr("src","/images/home2.png");
    $(".navbar a:nth-child(1) img").css('filter','invert(0)');
    $(".navbar a:nth-child(1) p").css('color','#77B5AF');
  } else if (window.location.pathname.indexOf('trade') > 0) {
    $(".navbar a:nth-child(4) img").attr("src","/images/trade2.png");
    $(".navbar a:nth-child(4) img").css('filter','invert(0)');
    $(".navbar a:nth-child(4) p").css('color','#77B5AF');
  } else if (window.location.pathname.indexOf('calendar') > 0) {
    $(".navbar a:nth-child(2) img").attr("src","/images/calendar2.png");
    $(".navbar a:nth-child(2) img").css('filter','invert(0)');
    $(".navbar a:nth-child(2) p").css('color','#77B5AF');
  }
});
