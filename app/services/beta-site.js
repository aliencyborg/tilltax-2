import Service from '@ember/service';
import { APP } from 'tilltax/config/environment'

export default class BetaSiteService extends Service {
  // TODO: read a ?beta query param as well
  isBeta: APP.betaSite
}
