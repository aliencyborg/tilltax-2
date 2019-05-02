import Route from '@ember/routing/route'

export default class ContactRoute extends Route {
  model() {
    return this.store.createRecord('contact')
  }
}
