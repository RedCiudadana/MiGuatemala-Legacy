import Ember from 'ember';

export default Ember.Route.extend({
  spreadsheets: Ember.inject.service(),

  model(params) {
    const spreadsheet = this.get('spreadsheets');

    const perfil = this.store.peekRecord('perfil', params.id);

    const institucion = perfil.get('institucion');

    const partidoActual = perfil.get('partidoActual');

    return Ember.RSVP.hash({
      perfil: perfil,
      institucion: institucion,
      partidoActual: partidoActual,
      perfilInformacionGeneralConfiguracion: spreadsheet
        .fetch('perfil-informacion-general-configuracion'),
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
  },

  actions: {
    didTransition() {
      window.scrollTo(0, 0);
    }
  }
});
