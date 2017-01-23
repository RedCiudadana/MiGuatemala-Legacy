import Ember from 'ember';

export default Ember.Route.extend({
  breadCrumb: null,

  model() {
    return this.modelFor('perfil');
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('perfilUnoId', model.perfil.get('id'));
  },

  actions: {
  }
});
