import Ember from 'ember';
import Tabletop from 'tabletop';
import config from '../config/environment';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  spreadsheet: null,

  fetch(worksheet) {
    if (!Ember.isNone(config.APP.staticFilesUrl)) {
      return this.get('ajax')
        .request(config.APP.staticFilesUrl + worksheet + '.json')
        .then((response) => {
          return new Ember.RSVP.Promise((resolve) => {
            resolve(response);
          });
        });
    }

    return new Ember.RSVP.Promise((resolve) => {
      Tabletop.init({
        key: this.get('spreadsheet'),
        callback: (data) => {
          if (Ember.isNone(data[worksheet])) {
            throw new Error(`Got no answer for spreadsheet ${worksheet}`);
          }

          if (Ember.isNone(data[worksheet].elements)) {
            throw new Error(`Got a problem with the elements for spreadsheet ${worksheet}`);
          }

          resolve(data[worksheet].elements);
        }
      });
    });
  }
});
