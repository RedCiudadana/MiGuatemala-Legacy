import Ember from 'ember';
import Tabletop from 'tabletop';
import config from '../config/environment';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  spreadsheet: null,

  fetch(worksheet) {

    let processingPromise = () => {
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
    };

    // TODO: Fix waiting stuff to avoid multiple requests to the same URL
    if (!Ember.isNone(this.get('spreadsheet'))) {
      return processingPromise();
    }

    return this.get('ajax')
      .request(
        config.APP.spreadsheetUrl,
        {dataType: 'text'}
      )
      .then((response) => {
        this.set('spreadsheet', response);

        return processingPromise();
      });
  }
});
