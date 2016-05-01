import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {

    let id = Number.parseInt(params.id);

    let funcionario = this.store.peekRecord('funcionario', id);

    let institucion = funcionario.get('institucion');

    return {
      funcionario: funcionario,
      institucion: institucion
    };
  },

  actions: {
    didTransition() {
      window.scrollTo(0, 0);
    }
  }
});
