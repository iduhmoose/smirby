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

 $(".trade-container .selected").click(function () {
   alert("You've accepted the trade!");
   $(".select").remove();
 });

 $(".send-container .selected").click(function () {
   alert("You've sent a trade request!");
 });

 $("#decline").click(function () {
   alert("You've declined the trade!");
   $(".select").css("border", "2px solid #F1F1F1");
   $(".select").removeClass("select");
 });

 $("#view").click(function() {
   $("#sendview").css('display','none');
   $(".trade-container").css('display','block');
   $("header img:first").css('display','none');
   $("header img:nth-child(2)").css('display','block');
 });

 $("#sendview .send").click(function() {
   $("#sendview").css('display','none');
   $(".send-container").css('display','block');
   $("header img:first").css('display','none');
   $("header img:nth-child(2)").css('display','block');
 });

 $(".send-container button:nth-child(1)").click(function() {
   $("#sendview").css('display','block');
   $(".send-container").css('display','none');
   $("header img:first").css('display','block');
   $("header img:nth-child(2)").css('display','none');
 });

 $("header img:nth-child(2)").click(function() {
   $("#sendview").css('display','block');
   $(".send-container").css('display','none');
   $(".trade-container").css('display','none');
   $("header img:first").css('display','block');
   $("header img:nth-child(2)").css('display','none');
 });

});
