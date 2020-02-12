
/*
 * GET home page.
 */
var choreData = require('../chores.json');

exports.view = function(req, res){
  res.render('chores', choreData);
};

/*
for (var idx in choreData["chores"]) {
  currentChore = choreData["chores"][idx];
  id = currentChore["id"];
  console.log(id);

  for (var i in currentChore["assigned"]) {
    console.log(currentChore["assigned"][i]);
    if (currentChore["assigned"][i] == "A") {
      console.log("theres an a!");
      $("#"+id+" .assigned").nth-child(1).addClass("active-icon");
    }
  }
}
*/
