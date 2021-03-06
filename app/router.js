import EmberRouter from '@ember/routing/router'
import config from './config/environment'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function() {
  this.route('index', { path: '/' })
  this.route('about')
  this.route('home')
  this.route('contact')
  this.route('privacy')
  this.route('disclaimer')
  this.route('thanks')
})

export default Router
