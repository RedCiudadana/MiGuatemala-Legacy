import Ember from 'ember';

export function getHtmlSafe([object, propertyName, ...rest]) {
  if (Ember.isNone(object)) {
    return '';
  }

  return Ember.String.htmlSafe(Ember.get(object, propertyName));
}

export default Ember.Helper.helper(getHtmlSafe);
