import Route from '@ember/routing/route'

export default Route.extend({
  model() {
    // return this.store.createRecord('contact')
    const contact = this.store.createRecord('contact')
    console.log('route', { contact })
    return contact
  }
})
