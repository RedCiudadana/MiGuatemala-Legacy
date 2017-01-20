import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalize(modelClass, resourceHash) {
    return this._super(modelClass, resourceHash);
  }
});
