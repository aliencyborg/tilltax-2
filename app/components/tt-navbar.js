import Component from '@ember/component'
import { inject as service } from '@ember/service'
import { computed } from '@ember/object'

export default Component.extend({
  router: service(),
  classNameBindings: ['isHidden:hidden:flex'],
  tagName: 'nav',

  classNames: [
    'tt-navbar',
    'flex-wrap',
    'items-center',
    'justify-between',
    'pl-6'
  ],

  isHidden: computed('router.currentRoute', function() {
    const router = this.get('router')
    const {
      currentRoute: { name }
    } = router

    return name === 'index'
  })
})
