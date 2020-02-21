$(document).ready(function() {

 $(".trade-card").click(function() {
    let color = $(this).css("background-color");
     if ($(this).css("border-left-color") == color) {
      $(this).css("border", "2px solid #04B315");
       console.log("already clicked");
       $(this).addClass("select");
     }
     else {
       $(this).css("border", "2px solid #F1F1F1");
       $(this).removeClass("select");
     }
 });

 $("#selected").click(function () {
   alert("You've accepted the trade!");
   $(".select").remove();
 });

 $("#decline").click(function () {
   alert("You've declined the trade!");
   $(".select").css("border", "2px solid #F1F1F1");
   $(".select").removeClass("select");
 });
});
