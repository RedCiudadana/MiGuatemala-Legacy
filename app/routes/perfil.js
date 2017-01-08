import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {

    let id = Number.parseInt(params.id);

    let perfil = this.store.peekRecord('perfil', id);

    let institucion = perfil.get('institucion');

    let partidoActual = perfil.get('partidoActual');

    return Ember.RSVP.hash({
      perfil: perfil,
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
