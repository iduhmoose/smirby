/*
 * GET home page.
 */
 'use strict';
var choreData = require('../chores.json');
/*const fs = require('fs');
let rawdata = fs.readFileSync('../chores.json');
let choreData = JSON.parse(rawdata);
console.log(choreData);*/

exports.view = function(req, res){
  res.render('choresAlt', choreData);
};
