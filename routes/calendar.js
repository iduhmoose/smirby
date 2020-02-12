
/*
 * GET home page.
 */
var choreData = require('../chores.json');

exports.view = function(req, res){
  console.log(choreData);
  res.render('calendar', choreData);
};
