'use strict';
var elementClicked;
var sunday;
var current_date = new Date();
var date = current_date.getDate(); // date
var day = current_date.getDay(); // sun == 0
var month = current_date.getMonth(); // jan starts at 0

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {


  let td_idx = day + 1;

  sunday = date - day;

  for (let i = 1; i < 8; i++) {
    let id = "#calendarRow td:nth-child("+ i +") span";
    $(id).text(sunday);

    if (sunday == date) {
      $(id).addClass("today active-date");
    }
    sunday = sunday + 1;
    console.log(sunday);
  }

  if (month == 0) {
    $("#month").text("JANUARY");
  } else if (month == 1) {
    $("#month").text("FEBRUARY");
  } else if (month == 2) {
    $("#month").text("MARCH");
  } else if (month == 3) {
    $("#month").text("APRIL");
  }
  sunday = date - day;
})

$("#calendarRow").find("span").click(function(){
  $("#calendarRow span").removeClass("active-date");
  $(this).addClass("active-date");
});

$(".chore-card .checkmark").click(function() {
  $("#completeChore").modal("show");
  elementClicked = this;
});

$("#confirm").click(function() {
  $(elementClicked).css({"background-color": "#8e188a", "border-radius": "50%", "filter":"invert()"});
});

$(".remind").click(function() {
  if ($(this).hasClass("reminded")) {
    alert("You've already sent a reminder! Please wait 24 hours to send another one.");
  }
  $(this).css("opacity", "0.3");
  $(this).addClass("reminded");
});

$("#nextWeek").click(function() {
  $("#calendarRow span").removeClass("today");

  let nextWeek = $("#calendarRow td:nth-child(1) span").text();
  nextWeek = parseInt(nextWeek) + 7;

  for (let i = 1; i < 8; i++) {
    let id = "#calendarRow td:nth-child("+ i +") span";
    $(id).text(nextWeek);

    if (nextWeek == date) {
      $(id).addClass("today");
    }

    nextWeek++;
  }
});

$("#prevWeek").click(function () {
  $("#calendarRow span").removeClass("today");

  let nextWeek = $("#calendarRow td:nth-child(1) span").text();
  nextWeek = parseInt(nextWeek) - 7;

  for (let i = 1; i < 8; i++) {
    let id = "#calendarRow td:nth-child("+ i +") span";
    $(id).text(nextWeek);

    if (nextWeek == date) {
      $(id).addClass("today");
    }
    nextWeek++;
  }
})
