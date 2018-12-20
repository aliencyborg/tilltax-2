import DS from 'ember-data';
import ENV from 'tilltax/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.DS.host
});
