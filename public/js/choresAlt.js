'use strict';

var choreList;
var time = 0;
var t1;
var t2;
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  $.get("../chores.json", function(data) {
    choreList = data;
    highlightChores(choreList);
  });

  $(".close").click(function() {
    t1 = 0;
  });

  $("#addChoreButton").click(function() {
    $("#addChore").modal("show");
    t1 = new Date().getTime();
  });

  $(".removeChore").click(function () {
    $(this).parent().parent().fadeOut(300);
  });

  $("#add").click(function () {
    let choreName = $("#choreName").val();
    let imageURL = $("input[name='icon']:checked").val();
    console.log(choreName);
    console.log(imageURL);
    let freq = [];
    let assigned = [];
    let id = Object.keys(choreList.chores).length;
    id = "a" + id;
    console.log(id);

    $.each($("input[name='day']:checked"), function() {
      freq.push($(this).val());
    });

    $.each($("input[name='roomie']:checked"), function() {
      assigned.push($(this).val());
    });

    console.log(freq);
    console.log(assigned);

    console.log(choreList);

    var newChore = {
      "name": choreName,
      "id": id,
      "iconURL": imageURL,
      "frequency": freq,
      "assigned": assigned,
      "completed": false
    };

    choreList.chores.push(newChore);
    console.log(choreList);

    $.post("/chores", choreList);

    createChore(newChore);
    highlightChores(choreList);

    $("#addChore").modal("hide");

    t2 = new Date().getTime();
    time = t2 - t1;
    console.log(time);

    gtag('event', 'added chore', {
      'event_category': 'addChore',
      'value': time
    });
  });
});

function createChore(chore) {
  let table = "<table class='table table-borderless' style='margin: 0 0 0 0.5rem;'><tbody><tr><td scope='row'><span>S</span></td><td><span class=''>M</span></td><td><span class=''>T</span></td><td><span class=''>W</span></td><td><span class=''>T</span></td><td><span class=''>F</span></td><td><span>S</span></td></tr></tbody></table>";
  let assign = "<p class='assigned'>Assigned to:<img class='profile-chores' src='/images/profile.png' alt='profile'><img class='profile-chores' src='/images/profile.png' alt='profile'><img class='profile-chores' src='/images/profile.png' alt='profile'><img class='profile-chores' src='/images/profile.png' alt='profile'></p>";

  let element = "<div class='chore'><div class='chore-card-2'><img class='removeChore' src='/images/close.svg' alt='close' width='20'><img class='profile-icon' src='" + chore.iconURL + "' alt='clean'><div id='"+ chore.id +"'><p><strong>"+ chore.name + "</strong></p>"+ table + assign + "</div></div><hr></div>";
  $(".newChore").append(element);
}

function highlightChores(json) {

  for (let idx in json["chores"]) {
    let currentChore = json["chores"][idx];
    let id = currentChore["id"];

    // Iterate through list of assignees to properly highlight the chore page
    for (let i in currentChore["assigned"]) {

      if (currentChore["assigned"][i] == "A") {
        id = "#"+id+" .assigned img:nth-child(1)";
        $(id).addClass("active-icon");
        id = currentChore["id"];
      }

      if (currentChore["assigned"][i] == "B") {
        id = "#"+id+" .assigned img:nth-child(2)";
        $(id).addClass("active-icon");
        id = currentChore["id"];
      }

      if (currentChore["assigned"][i] == "C") {
        id = "#"+id+" .assigned img:nth-child(3)";
        $(id).addClass("active-icon");
        id = currentChore["id"];
      }

      if (currentChore["assigned"][i] == "D") {
        id = "#"+id+" .assigned img:nth-child(4)";
        $(id).addClass("active-icon");
        id = currentChore["id"];
      }
    }

    // Iterate through frequency list to appropriately mark date
    for (let j in currentChore["frequency"]) {
       if (currentChore["frequency"][j] == "Sun") {
         id = "#"+id+" td:nth-child(1) span";
         $(id).addClass("active-date today");
         id = currentChore["id"];
       }
       if (currentChore["frequency"][j] == "Mon") {
         id = "#"+id+" td:nth-child(2) span";
         $(id).addClass("active-date today");
         id = currentChore["id"];
       }
       if (currentChore["frequency"][j] == "Tue") {
         id = "#"+id+" td:nth-child(3) span";
         $(id).addClass("active-date today");
         id = currentChore["id"];
       }
       if (currentChore["frequency"][j] == "Wed") {
         id = "#"+id+" td:nth-child(4) span";
         $(id).addClass("active-date today");
         id = currentChore["id"];
       }
       if (currentChore["frequency"][j] == "Thu") {
         id = "#"+id+" td:nth-child(5) span";
         $(id).addClass("active-date today");
         id = currentChore["id"];
       }
       if (currentChore["frequency"][j] == "Fri") {
         id = "#"+id+" td:nth-child(6) span";
         $(id).addClass("active-date today");
         id = currentChore["id"];
       }
       if (currentChore["frequency"][j] == "Sat") {
         id = "#"+id+" td:nth-child(7) span";
         $(id).addClass("active-date today");
         id = currentChore["id"];
       }
    }
  }
}
