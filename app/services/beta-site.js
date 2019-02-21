import Service from '@ember/service'
import ENV from 'tilltax/config/environment'

export default Service.extend({
  // TODO: read a ?beta query param as well
  isBeta: ENV.betaSite
})
