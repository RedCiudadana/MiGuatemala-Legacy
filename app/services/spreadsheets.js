import Ember from 'ember';
import Tabletop from 'tabletop';

var spreadsheet = 'https://docs.google.com/spreadsheets/d/1DnOk0jXyC-bGPG1uSUvi94tJ9zJWSBNEZWaVUYtg3LI/pubhtml';

export default Ember.Service.extend({
  fetch(worksheet) {
    return new Ember.RSVP.Promise(function(resolve) {
      Tabletop.init({
        key: spreadsheet,
        callback: function(data) {
          resolve(data[worksheet].elements);
        }
      });
    });
  }
});
