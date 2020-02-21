$(document).ready(function() {

 $(".trade-card").click(function() {
    let color = $(this).css("background-color");
     if ($(this).css("border-left-color") == color) {
      $(this).css("border", "2px solid #04B315");
       console.log("already clicked");
     }
     else {
       $(this).css("border", "2px solid #F1F1F1");
     }
 });
});
