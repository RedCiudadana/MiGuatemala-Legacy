import Ember from 'ember';

export default Ember.Route.extend({
  spreadsheets: Ember.inject.service(),
  routeRecognizer: Ember.inject.service('-routing'),

  model() {
    const spreadsheet = this.get('spreadsheets');
    const routeRecognizer = this.get('routeRecognizer');

    return Ember.RSVP.hash({
      funcionarios: this.store.findAll('perfil'),
      instituciones: this.store.findAll('institucion'),
      partidos: this.store.findAll('partido'),
      config: spreadsheet.fetch('configuracion').then((configuracion) => {
        let configObject = Ember.Object.create();

        Ember.A(configuracion).forEach((item) => {
          configObject.set(item.key, item.value);
        });

        return configObject;
      }),
      navbarLinks: spreadsheet.fetch('navbar-links').then((links) => {
        return Ember.A(links).filter((link) => {
          return routeRecognizer.hasRoute(link.route);
        });
      }),
      mainPageLinks: spreadsheet.fetch('main-page-links').then((links) => {
        return Ember.A(links).filter((link) => {
          if (link.link) {
            return true;
          }

          return routeRecognizer.hasRoute(link.route);
        });
      }),
      mainPageSliderData: spreadsheet.fetch('main-page-slider-data')
    });
  },

  setupController(controller, model) {
    this._super(controller, model);

    model.config.navbarLinks = model.navbarLinks;
    model.config.mainPageLinks = model.mainPageLinks;
    model.config.mainPageSliderData = model.mainPageSliderData;
  }
});
