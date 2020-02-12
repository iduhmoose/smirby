'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
 $.getJSON("https://api.myjson.com/bins/1fuk44", function(json) {

   console.log(json);

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
 });
})
