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
            // .forEach((link) => {
              // let currentState = _routing.get('currentState');

              // console.log(_routing.isActiveForRoute(
              //   [],
              //   [],
              //   link.route,
              //   currentState
              // ));
            // });
        })
    });
  },

  setupController(controller, model) {
    this._super(controller, model);

    model.config.institucionFuncionalidades = model.institucionFuncionalidades;
  }
});
