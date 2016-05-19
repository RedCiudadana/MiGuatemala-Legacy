var Tabletop = require('tabletop');
var jsonfile = require('jsonfile');

var spreadsheet = 'https://docs.google.com/spreadsheets/d/1DnOk0jXyC-bGPG1uSUvi94tJ9zJWSBNEZWaVUYtg3LI/pubhtml';

var tabletop = Tabletop.init({
  key: spreadsheet,
  callback: function(sheets, tabletop) {
    var funcionarios = sheets['funcionario'].elements;
    var instituciones = sheets['institucion'].elements;

    var result = {"data": []};



    return;
  }
});
