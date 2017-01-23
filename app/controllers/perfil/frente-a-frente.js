import Ember from 'ember';

export default Ember.Controller.extend({
  model: null,

  perfilUnoId: null,

  perfilDosId: null,

  perfilUno: Ember.computed('perfilUnoId', function() {
    return this.get('model.perfiles').findBy('id', this.get('perfilUnoId'));
  }),

  perfilDos: Ember.computed('perfilDosId', function() {
    return this.get('model.perfiles').findBy('id', this.get('perfilDosId'));
  })
});
