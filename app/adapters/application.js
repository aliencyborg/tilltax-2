import DS from 'ember-data'
import ENV from 'tilltax/config/environment'

export default class ApplicationAdapter extends DS.JSONAPIAdapter {
  host = ENV.DS.host
}
