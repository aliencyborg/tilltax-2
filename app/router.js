import EmberRouter from '@ember/routing/router'
import config from './config/environment'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function() {
  this.route('index', { path: '/' })
  this.route('about')
  this.route('contact')
  this.route('disclaimer')
  this.route('home')
  this.route('privacy')
  this.route('thanks')
})

export default Router
