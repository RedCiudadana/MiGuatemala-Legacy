import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('funcionario', {path: '/funcionario/:id'});

  // TODO: Ruta pendiente de completar
  this.route('institucion');
});

export default Router;
