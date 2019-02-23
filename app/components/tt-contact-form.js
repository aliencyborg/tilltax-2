import Component from '@ember/component'
import { inject as service } from '@ember/service'

export default Component.extend({
  availableRegions: null,
  availableYears: null,
  model: null,

  router: service(),
  tagName: 'form',

  classNames: [
    'bg-white',
    'pb-8',
    'pt-6',
    'px-8',
    'shadow-md',
    'tt-contact-form',
    'w-full'
  ],

  actions: {
    doContact: async function() {
      await this.model.save()
      this.router.transitionTo('thanks')
    }
  }
})
