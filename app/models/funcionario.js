import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  nombre: attr(),
  fotoUrl: attr(),
  profesion: attr(),
  educacion: attr(),
  fechaNacimiento: attr(),
  lugarNacimiento: attr(),
  cargoNombreCompleto: attr(),
  cargoNombreCorto: attr(),

  institucion: belongsTo('institucion'),
  partidoPostulante: attr(),

  fotoFuncionario: Ember.computed('fotoUrl', function() {
    if (this.get('fotoUrl')) {
      return this.get('fotoUrl');
    }

    return 'images/magistrados/Congreso/Magistrado.jpg';
  }),

  institucionSelector: Ember.computed('institucion', function() {
    if (!this.get('institucion')) {
      return;
    }

    return this.get('institucion').get('selector');
  })
});
