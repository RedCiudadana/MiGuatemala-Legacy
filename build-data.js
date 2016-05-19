var Tabletop = require('tabletop');
var jsonfile = require('jsonfile');

var spreadsheet = 'https://docs.google.com/spreadsheets/d/1DnOk0jXyC-bGPG1uSUvi94tJ9zJWSBNEZWaVUYtg3LI/pubhtml';

var tabletop = Tabletop.init({
  key: spreadsheet,
  callback: function(sheets, tabletop) {
    var funcionarios = sheets['funcionario'].elements;
    var instituciones = sheets['institucion'].elements;
    var partidos = sheets['partido'].elements;

    var resultObject = {'data': []};

    funcionarios.forEach(function(funcionario) {
      var institucion = instituciones.filter(function(institucion) {
        return institucion.id === funcionario.institucion;
      });

      if (institucion) {
        funcionario.institucion = institucion;
      }

      var partidoPostulante = partidos.filter(function(partido) {
        return partido.id === funcionario.partidoPostulante;
      });

      if (partidoPostulante) {
        funcionario.partidoPostulante = partidoPostulante;
      }

      var partidoActual = partidos.filter(function(partido) {
        return partido.id === funcionario.partidoActual;
      });

      if (partidoActual) {
        funcionario.partidoActual = partidoActual;
      }

      resultObject.data.push(funcionario);
    });

    var file = 'public/data/denormalized-data-congreso.json';
    jsonfile.spaces = 4;
    jsonfile.writeFileSync(file, resultObject);

    return;
  }
});
