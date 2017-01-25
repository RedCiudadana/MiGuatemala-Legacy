import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  spreadsheets: Ember.inject.service(),

  _routing: Ember.inject.service('-routing'),

  ajax: Ember.inject.service(),

  breadCrumb: {
    title: 'application breadcrumb'
  },

  /**
   * Setear la URL del spreadhseet y procesar los campos de información general
   * del perfil
   */
  beforeModel() {
    const spreadsheet = this.get('spreadsheets');

    return this.get('ajax')
      .request(config.APP.spreadsheetUrl, {dataType: 'text'})
      .then((response) => {
        spreadsheet.set('spreadsheet', response);

        return Ember.RSVP.all([
          spreadsheet
            .fetch('perfil-informacion-general-configuracion')
            .then((configuracionData) => {
              let perfilDataArray = Ember.A([]);

              Ember.A(configuracionData).forEach((item) => {
                perfilDataArray.pushObject({
                  field: item.field,
                  label: item.label
                });
              });

              let prefilSerializer = this.store.serializerFor('perfil');

              prefilSerializer.set('informacionGeneralFields', perfilDataArray);
            }),
          spreadsheet
            .fetch('perfil-frente-a-frente-configuracion')
            .then((configuracionData) => {
              let perfilFrenteAFrenteDataArray = Ember.A([]);

              Ember.A(configuracionData).forEach((item) => {
                perfilFrenteAFrenteDataArray.pushObject({
                  field: item.field,
                  label: item.label
                });
              });

              let prefilSerializer = this.store.serializerFor('perfil');

              prefilSerializer.set('fretenAFrenteFields', perfilFrenteAFrenteDataArray);
            })
        ]);
      });
  },

  model() {
    const spreadsheet = this.get('spreadsheets');
    const _routing = this.get('_routing');

    return Ember.RSVP.hash({
      partidos: this.store.findAll('partido'),
      perfiles: this.store.findAll('perfil'),
      config: spreadsheet.fetch('configuracion').then((configuracion) => {
        let configObject = Ember.Object.create();

        Ember.A(configuracion).forEach((item) => {
          configObject.set(item.key, item.value);
        });

        return configObject;
      }),
      navbarLinks: spreadsheet.fetch('navbar-links').then((links) => {
        return Ember.A(links).filter((link) => {
          return _routing.hasRoute(link.route);
        });
      }),
      mainPageLinks: spreadsheet.fetch('main-page-links').then((links) => {
        return Ember.A(links).filter((link) => {
          if (link.link) {
            return true;
          }

          return _routing.hasRoute(link.route);
        });
      }),
      mainPageSliderData: spreadsheet.fetch('main-page-slider-data'),
      institucionData: spreadsheet
        .fetch('institucion-data')
        .then((institucionData) => {
          let institucionDataObject = Ember.Object.create();

          Ember.A(institucionData).forEach((item) => {
            institucionDataObject.set(item.key, item.value);
          });

          return institucionDataObject;
        }),
    });
  },

  setupController(controller, model) {
    this._super(controller, model);

    model.config.navbarLinks = model.navbarLinks;
    model.config.mainPageLinks = model.mainPageLinks;
    model.config.mainPageSliderData = model.mainPageSliderData;
  }
});
