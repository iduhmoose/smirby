/*
 * GET home page.
 */
var choreData = require('../chores.json');

exports.view = function(req, res){
  res.render('trade', choreData);
};
