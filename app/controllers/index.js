import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  currentPerfiles: computed('model.perfiles', 'searchQuery', function() {
    return this.get('model.perfiles');
  })
});
