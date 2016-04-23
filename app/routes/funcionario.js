import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let id = Number.parseInt(params.id);

    let appData = this.modelFor('application');

    let funcionario = appData.funcionarios.findBy('id', id);

    let institucion = appData.instituciones[funcionario.institucionCodigo];

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
