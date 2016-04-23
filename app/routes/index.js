import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.modelFor('application');
  },

  setupController(controller, model) {
    this._super(controller, model);

    Ember.run.scheduleOnce('afterRender', this, function() {
      var $container = Ember.$('#portfolio');

      Ember.$(window).resize(function() {
        $container.isotope('layout');
      });
    });
  },

  actions: {
    applyFilter(selector) {

      var $container = Ember.$('#portfolio');

      Ember.$('#portfolio-filter li').removeClass('activeFilter');

      Ember.$('#' + selector).addClass('activeFilter');

      var isotopeSelector = 'pf-todos' === selector ? '*' : '.' + selector;

      $container.isotope({transitionDuration: '0.65s'});

      $container.isotope({filter: isotopeSelector});

      return false;
    },

    applyShuffle() {
      var $container = Ember.$('#portfolio');

      $container.isotope({transitionDuration: '0.65s'});

      $container.isotope('updateSortData').isotope({
        sortBy: 'random'
      });
    }
  }
});
