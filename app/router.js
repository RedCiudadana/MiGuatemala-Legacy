import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('perfil', {path: '/perfil/:id'});

  // TODO: Rutas pendiente de completar
  this.route('institucion');
  this.route('perfiles');
  this.route('propuestas');
  this.route('metodologia');
  this.route('contacto');
});

export default Router;
