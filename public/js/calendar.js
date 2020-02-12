'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  let current_date = new Date();
  let date = current_date.getDate(); // date
  let day = current_date.getDay(); // sun == 0
  let month = current_date.getMonth(); // jan starts at 0

  let td_idx = day + 1;

  let sunday = date - day;

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

})
