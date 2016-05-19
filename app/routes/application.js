import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model() {
    return Ember.RSVP.hash({
      funcionarios: this.store.findAll('funcionario'),
      instituciones: this.store.findAll('institucion')
    });
  }
});
