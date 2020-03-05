$(document).ready(function() {
  $("#intro > button.signUp").click(function() {
    $("#intro").css('display', 'none');
    $("#login").css('display', 'block');
  })

  $("#intro > button:nth-child(2)").click(function() {
    $("#intro").css('display', 'none');
    $("#signup").css('display', 'block');
  })

  $(".nevermind").click(function() {
    $("#intro").css('display', 'block');
    $("#signup").css('display', 'none');
    $("#login").css('display', 'none');
  })
});
