'use strict';
var elementClicked;
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

jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});
