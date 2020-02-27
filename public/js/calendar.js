'use strict';
var elementClicked;
var sunday;
var current_date = new Date();
var date = current_date.getDate(); // date
var day = current_date.getDay(); // sun == 0
var month = current_date.getMonth(); // jan starts at 0

var choreList;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  $.get("../chores.json", function(data) {
    choreList = data["chores"];
    console.log(choreList);

    $(".myChores").find("div, p").remove();
    $(".otherChores").find(".chore-card-2").remove();
    $(".otherChores").find("h3").css('display','none');
    displayChores(day);
  });


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

  $(document).on ("click", ".checkmark", function () {
    $("#completeChore").modal("show");
    elementClicked = this;
  });

  $("#confirm").click(function() {
    $(elementClicked).css({"background-color": "#8e188a", "border-radius": "50%", "filter":"invert()"});
  });

  $(document).on ("click", ".remind", function () {
    if ($(this).hasClass("reminded")) {
      alert("You've already sent a reminder! Please wait 24 hours to send another one.");
    }
    alert("A reminder has been sent!");
    $(this).css("opacity", "0.3");
    $(this).addClass("reminded");
  });
});

$("#calendarRow").find("span").click(function(){
  $("#calendarRow span").removeClass("active-date");
  $(".myChores").find("div, p").remove();
  $(".otherChores").find(".chore-card-2").remove();
  $(".otherChores").find("h3").css('display','none');

  $(this).addClass("active-date");

  if ($(this).hasClass("mon")) {
    displayChores(1);
  } else if ($(this).hasClass("tue")) {
    displayChores(2);
  } else if ($(this).hasClass("wed")) {
    displayChores(3);
  } else if ($(this).hasClass("thu")) {
    displayChores(4);
  } else if ($(this).hasClass("fri")) {
    displayChores(5);
  } else if ($(this).hasClass("sat")) {
    displayChores(6);
  } else if ($(this).hasClass("sun")) {
    displayChores(0);
  }

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

function displayChores(day) {
  let choreExists = 0;
  for (let i in choreList) {
    if (day == 1 && $.inArray("Mon", choreList[i]['frequency']) != -1) {

      choreExists = 1;

      if($.inArray("A", choreList[i]['assigned']) != -1) {
        let div = "<div class='chore-card'><img class='chore-icon' src='" + choreList[i]['iconURL'] + "' alt='icon'><p>" + choreList[i]['name']+"</p><img class='checkmark' style='width: 8vw;' src='/images/unchecked.svg' alt='unchecked'></div>";
        $(".myChores").append(div);
      }

      if ($.inArray("B", choreList[i]['assigned']) != -1) {
        $(".b h3").css('display','block');
        let div = "<div class='chore-card-2'><img class='profile-icon' src='/images/profile.png' alt='profile'><p>" + choreList[i]['name']+"</p><img class='remind' style='width: 8vw;' src='/images/remind.svg' alt='remind'></div>";
        $(".b").append(name);
        $(".b").append(div);
      }

      if ($.inArray("C", choreList[i]['assigned']) != -1) {
        $(".c h3").css('display','block');
        let div = "<div class='chore-card-2'><img class='profile-icon' src='/images/profile.png' alt='profile'><p>" + choreList[i]['name']+"</p><img class='remind' style='width: 8vw;' src='/images/remind.svg' alt='remind'></div>";
        $(".c").append(name);
        $(".c").append(div);
      }

      if ($.inArray("D", choreList[i]['assigned']) != -1) {
        $(".d h3").css('display','block');
        let div = "<div class='chore-card-2'><img class='profile-icon' src='/images/profile.png' alt='profile'><p>" + choreList[i]['name']+"</p><img class='remind' style='width: 8vw;' src='/images/remind.svg' alt='remind'></div>";
        $(".d").append(name);
        $(".d").append(div);
      }
    } else if (day == 2 && $.inArray("Tue",choreList[i]['frequency']) != -1) {
      choreExists = 1;
      if($.inArray("A", choreList[i]['assigned']) != -1) {
        let div = "<div class='chore-card'><img class='chore-icon' src='" + choreList[i]['iconURL'] + "' alt='icon'><p>" + choreList[i]['name']+"</p><img class='checkmark' style='width: 8vw;' src='/images/unchecked.svg' alt='unchecked'></div>";
        $(".myChores").append(div);
      }

      if ($.inArray("B", choreList[i]['assigned']) != -1) {
        $(".b h3").css('display','block');
        let div = "<div class='chore-card-2'><img class='profile-icon' src='/images/profile.png' alt='profile'><p>" + choreList[i]['name']+"</p><img class='remind' style='width: 8vw;' src='/images/remind.svg' alt='remind'></div>";
        $(".b").append(name);
        $(".b").append(div);
      }

      if ($.inArray("C", choreList[i]['assigned']) != -1) {
        $(".c h3").css('display','block');
        let div = "<div class='chore-card-2'><img class='profile-icon' src='/images/profile.png' alt='profile'><p>" + choreList[i]['name']+"</p><img class='remind' style='width: 8vw;' src='/images/remind.svg' alt='remind'></div>";
        $(".c").append(name);
        $(".c").append(div);
      }

      if ($.inArray("D", choreList[i]['assigned']) != -1) {
        $(".d h3").css('display','block');
        let div = "<div class='chore-card-2'><img class='profile-icon' src='/images/profile.png' alt='profile'><p>" + choreList[i]['name']+"</p><img class='remind' style='width: 8vw;' src='/images/remind.svg' alt='remind'></div>";
        $(".d").append(name);
        $(".d").append(div);
      }
    } else if (day == 3 && $.inArray("Wed",choreList[i]['frequency']) != -1) {
      choreExists = 1;
      if($.inArray("A", choreList[i]['assigned']) != -1) {
        let div = "<div class='chore-card'><img class='chore-icon' src='" + choreList[i]['iconURL'] + "' alt='icon'><p>" + choreList[i]['name']+"</p><img class='checkmark' style='width: 8vw;' src='/images/unchecked.svg' alt='unchecked'></div>";
        $(".myChores").append(div);
      }

      if ($.inArray("B", choreList[i]['assigned']) != -1) {
        $(".b h3").css('display','block');
        let div = "<div class='chore-card-2'><img class='profile-icon' src='/images/profile.png' alt='profile'><p>" + choreList[i]['name']+"</p><img class='remind' style='width: 8vw;' src='/images/remind.svg' alt='remind'></div>";
        $(".b").append(name);
        $(".b").append(div);
      }

      if ($.inArray("C", choreList[i]['assigned']) != -1) {
        $(".c h3").css('display','block');
        let div = "<div class='chore-card-2'><img class='profile-icon' src='/images/profile.png' alt='profile'><p>" + choreList[i]['name']+"</p><img class='remind' style='width: 8vw;' src='/images/remind.svg' alt='remind'></div>";
        $(".c").append(name);
        $(".c").append(div);
      }

      if ($.inArray("D", choreList[i]['assigned']) != -1) {
        $(".d h3").css('display','block');
        let div = "<div class='chore-card-2'><img class='profile-icon' src='/images/profile.png' alt='profile'><p>" + choreList[i]['name']+"</p><img class='remind' style='width: 8vw;' src='/images/remind.svg' alt='remind'></div>";
        $(".d").append(name);
        $(".d").append(div);
      }
    } else if (day == 4 && $.inArray("Thu",choreList[i]['frequency']) != -1) {
      choreExists = 1;
      if($.inArray("A", choreList[i]['assigned']) != -1) {
        let div = "<div class='chore-card'><img class='chore-icon' src='" + choreList[i]['iconURL'] + "' alt='icon'><p>" + choreList[i]['name']+"</p><img class='checkmark' style='width: 8vw;' src='/images/unchecked.svg' alt='unchecked'></div>";
        $(".myChores").append(div);
      }
      if ($.inArray("B", choreList[i]['assigned']) != -1) {
        $(".b h3").css('display','block');
        let div = "<div class='chore-card-2'><img class='profile-icon' src='/images/profile.png' alt='profile'><p>" + choreList[i]['name']+"</p><img class='remind' style='width: 8vw;' src='/images/remind.svg' alt='remind'></div>";
        $(".b").append(name);
        $(".b").append(div);
      }

      if ($.inArray("C", choreList[i]['assigned']) != -1) {
        $(".c h3").css('display','block');
        let div = "<div class='chore-card-2'><img class='profile-icon' src='/images/profile.png' alt='profile'><p>" + choreList[i]['name']+"</p><img class='remind' style='width: 8vw;' src='/images/remind.svg' alt='remind'></div>";
        $(".c").append(name);
        $(".c").append(div);
      }

      if ($.inArray("D", choreList[i]['assigned']) != -1) {
        $(".d h3").css('display','block');
        let div = "<div class='chore-card-2'><img class='profile-icon' src='/images/profile.png' alt='profile'><p>" + choreList[i]['name']+"</p><img class='remind' style='width: 8vw;' src='/images/remind.svg' alt='remind'></div>";
        $(".d").append(name);
        $(".d").append(div);
      }
    } else if (day == 5 && $.inArray("Fri",choreList[i]['frequency']) != -1) {
      choreExists = 1;
      if($.inArray("A", choreList[i]['assigned']) != -1) {
        let div = "<div class='chore-card'><img class='chore-icon' src='" + choreList[i]['iconURL'] + "' alt='icon'><p>" + choreList[i]['name']+"</p><img class='checkmark' style='width: 8vw;' src='/images/unchecked.svg' alt='unchecked'></div>";
        $(".myChores").append(div);
      }

      if ($.inArray("B", choreList[i]['assigned']) != -1) {
        $(".b h3").css('display','block');
        let div = "<div class='chore-card-2'><img class='profile-icon' src='/images/profile.png' alt='profile'><p>" + choreList[i]['name']+"</p><img class='remind' style='width: 8vw;' src='/images/remind.svg' alt='remind'></div>";
        $(".b").append(name);
        $(".b").append(div);
      }

      if ($.inArray("C", choreList[i]['assigned']) != -1) {
        $(".c h3").css('display','block');
        let div = "<div class='chore-card-2'><img class='profile-icon' src='/images/profile.png' alt='profile'><p>" + choreList[i]['name']+"</p><img class='remind' style='width: 8vw;' src='/images/remind.svg' alt='remind'></div>";
        $(".c").append(name);
        $(".c").append(div);
      }

      if ($.inArray("D", choreList[i]['assigned']) != -1) {
        $(".d h3").css('display','block');
        let div = "<div class='chore-card-2'><img class='profile-icon' src='/images/profile.png' alt='profile'><p>" + choreList[i]['name']+"</p><img class='remind' style='width: 8vw;' src='/images/remind.svg' alt='remind'></div>";
        $(".d").append(name);
        $(".d").append(div);
      }
    } else if (day == 6 && $.inArray("Sat",choreList[i]['frequency']) != -1) {
      choreExists = 1;
      if($.inArray("A", choreList[i]['assigned']) != -1) {
        let div = "<div class='chore-card'><img class='chore-icon' src='" + choreList[i]['iconURL'] + "' alt='icon'><p>" + choreList[i]['name']+"</p><img class='checkmark' style='width: 8vw;' src='/images/unchecked.svg' alt='unchecked'></div>";
        $(".myChores").append(div);
      }
      if ($.inArray("B", choreList[i]['assigned']) != -1) {
        $(".b h3").css('display','block');
        let div = "<div class='chore-card-2'><img class='profile-icon' src='/images/profile.png' alt='profile'><p>" + choreList[i]['name']+"</p><img class='remind' style='width: 8vw;' src='/images/remind.svg' alt='remind'></div>";
        $(".b").append(name);
        $(".b").append(div);
      }

      if ($.inArray("C", choreList[i]['assigned']) != -1) {
        $(".c h3").css('display','block');
        let div = "<div class='chore-card-2'><img class='profile-icon' src='/images/profile.png' alt='profile'><p>" + choreList[i]['name']+"</p><img class='remind' style='width: 8vw;' src='/images/remind.svg' alt='remind'></div>";
        $(".c").append(name);
        $(".c").append(div);
      }

      if ($.inArray("D", choreList[i]['assigned']) != -1) {
        $(".d h3").css('display','block');
        let div = "<div class='chore-card-2'><img class='profile-icon' src='/images/profile.png' alt='profile'><p>" + choreList[i]['name']+"</p><img class='remind' style='width: 8vw;' src='/images/remind.svg' alt='remind'></div>";
        $(".d").append(name);
        $(".d").append(div);
      }
    } else if (day == 0 && $.inArray("Sun",choreList[i]['frequency']) != -1) {
      choreExists = 1;
      if($.inArray("A", choreList[i]['assigned']) != -1) {
        let div = "<div class='chore-card'><img class='chore-icon' src='" + choreList[i]['iconURL'] + "' alt='icon'><p>" + choreList[i]['name']+"</p><img class='checkmark' style='width: 8vw;' src='/images/unchecked.svg' alt='unchecked'></div>";
        $(".myChores").append(div);
      }

      if ($.inArray("B", choreList[i]['assigned']) != -1) {
        $(".b h3").css('display','block');
        let div = "<div class='chore-card-2'><img class='profile-icon' src='/images/profile.png' alt='profile'><p>" + choreList[i]['name']+"</p><img class='remind' style='width: 8vw;' src='/images/remind.svg' alt='remind'></div>";
        $(".b").append(name);
        $(".b").append(div);
      }

      if ($.inArray("C", choreList[i]['assigned']) != -1) {
        $(".c h3").css('display','block');
        let div = "<div class='chore-card-2'><img class='profile-icon' src='/images/profile.png' alt='profile'><p>" + choreList[i]['name']+"</p><img class='remind' style='width: 8vw;' src='/images/remind.svg' alt='remind'></div>";
        $(".c").append(name);
        $(".c").append(div);
      }

      if ($.inArray("D", choreList[i]['assigned']) != -1) {
        $(".d h3").css('display','block');
        let div = "<div class='chore-card-2'><img class='profile-icon' src='/images/profile.png' alt='profile'><p>" + choreList[i]['name']+"</p><img class='remind' style='width: 8vw;' src='/images/remind.svg' alt='remind'></div>";
        $(".d").append(name);
        $(".d").append(div);
      }
    }
  }
  if (choreExists == 0) {
    $(".myChores").append('<p>Yay! No chores due today.</p>');
  }
}

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
});
