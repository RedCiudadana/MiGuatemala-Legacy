import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  nombre: attr(),
  fotoUrl: attr(),
  profesion: attr(),
  educacion: attr(),
  fechaNacimiento: attr(),

  fotoFuncionario: Ember.computed('fotoUrl', function() {
    if (this.get('fotoUrl')) {
      return this.get('fotoUrl');
    }

    return 'images/magistrados/Congreso/Magistrado.jpg';
  }),

  institucionSelector: 'dude',
  cargoNombreCompleto: 'dude',
  institucionNombreCompleto: 'dude',
  cargoNombreCorto: 'dude',
});
