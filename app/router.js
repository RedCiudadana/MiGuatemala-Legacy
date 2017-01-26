import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('institucion', function() {
    this.route('frente-a-frente');
  });

  // TODO: Rutas pendiente de completar
  this.route('perfil', {path: '/perfil/:id'}, function() {
    this.route('frente-a-frente');
    this.route('propuestas');
  });
  this.route('perfiles');
  this.route('propuestas');
  this.route('metodologia');
  this.route('contacto');
  this.route('resultados');
});

export default Router;
