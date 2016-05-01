import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  codigo: attr(),
  nombreCompleto: attr(),
  nombreCorto: attr(),
  fb: attr(),
  tw: attr(),

  funcionarios: hasMany('funcionario'),

  selector: Ember.computed('codigo', function() {
    return 'pf-' + this.get('codigo');
  })
});
