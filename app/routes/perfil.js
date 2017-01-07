import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {

    let id = Number.parseInt(params.id);

    let funcionario = this.store.peekRecord('funcionario', id);

    let institucion = funcionario.get('institucion');

    let partidoActual = funcionario.get('partidoActual');

    return Ember.RSVP.hash({
      funcionario: funcionario,
      institucion: institucion,
      partidoActual: partidoActual
    });
  },

  actions: {
    didTransition() {
      window.scrollTo(0, 0);
    }
  }
});
