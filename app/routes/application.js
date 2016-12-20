import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      funcionarios: this.store.findAll('funcionario'),
      instituciones: this.store.findAll('institucion'),
      partidos: this.store.findAll('partido')
    });
  }
});
