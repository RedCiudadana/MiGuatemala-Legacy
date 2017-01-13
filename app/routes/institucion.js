import Ember from 'ember';

// TODO: Pendiente de completar implementación de pantalla de institución
export default Ember.Route.extend({
  spreadsheets: Ember.inject.service(),
  _routing: Ember.inject.service('-routing'),

  model() {
    const spreadsheet = this.get('spreadsheets');
    const _routing = this.get('_routing');

    return Ember.RSVP.hash({
      config: {},
      institucionFuncionalidades: spreadsheet
        .fetch('institucion-funcionalidades')
        .then((links) => {
          return Ember.A(links)
            .filter((link) => {
              if (link.link) {
                return true;
              }

              if (!_routing.hasRoute(link.route)) {
                console.log(
                  'Route not recognized: ' + link.route
                );
              }

              return _routing.hasRoute(link.route);
            })
        })
      //   ,
      // institucionData: spreadsheet
      //   .fetch('institucion-data')
      //   .then((configuracion) => {
      //     console.log(configuracion);
      //   }),
    });
  },

  // afterModel(model) {
  //   this.set('breadCrumb', {
  //     title: model.institucionData.nombre
  //   });
  // },

  setupController(controller, model) {
    this._super(controller, model);

    model.config.institucionFuncionalidades = model.institucionFuncionalidades;
  }
});
