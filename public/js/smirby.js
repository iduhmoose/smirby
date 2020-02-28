$(document).ready(function() {
  if (window.location.pathname.indexOf('chores') > 0) {
    $(".navbar a:nth-child(3) img").addClass('active-icon');
    $(".navbar a:nth-child(3) p").css('color','black');
  } else if (window.location.pathname.indexOf('home') > 0) {
    $(".navbar a:nth-child(1) img").addClass('active-icon');
    $(".navbar a:nth-child(1) p").css('color','black');
  } else if (window.location.pathname.indexOf('trade') > 0) {
    $(".navbar a:nth-child(4) img").addClass('active-icon');
    $(".navbar a:nth-child(4) p").css('color','black');
  } else if (window.location.pathname.indexOf('calendar') > 0) {
    $(".navbar a:nth-child(2) img").addClass('active-icon');
    $(".navbar a:nth-child(2) p").css('color','black');
  }
});
