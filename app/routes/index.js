import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.modelFor('application');
  },

  setupController(controller, model) {
    this._super(controller, model);

    // TODO: Pendiente de re-habilitar: esta sección habilita por primera vez la animación
    // de Isotope para organizar y filtrar funcionarios
    Ember.run.scheduleOnce('afterRender', this, function() {
      var $container = Ember.$('#portfolio');

      Ember.$(window).resize(function() {
        $container.isotope('layout');
      });
    });
  },

  actions: {

    // TODO: Pendiente de re-habilitar: esta función aplica un selector para el
    // filtro de funcionarios
    applyFilter(selector) {

      var $container = Ember.$('#portfolio');

      Ember.$('#portfolio-filter li').removeClass('activeFilter');

      Ember.$('#' + selector).addClass('activeFilter');

      var isotopeSelector = 'pf-todos' === selector ? '*' : '.' + selector;

      $container.isotope({transitionDuration: '0.65s'});

      $container.isotope({filter: isotopeSelector});

      return false;
    },

    // TODO: Pendiente de re-habilitar: esta función aplica un shuffle a los items
    // manejados por Isotope
    applyShuffle() {
      var $container = Ember.$('#portfolio');

      $container.isotope({transitionDuration: '0.65s'});

      $container.isotope('updateSortData').isotope({
        sortBy: 'random'
      });
    }
  }
});
