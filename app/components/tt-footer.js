import Component from '@ember/component'
import { inject as service } from '@ember/service'
import { computed } from '@ember/object'

export default Component.extend({
  router: service(),
  classNameBindings: ['isHidden:hidden'],
  classNames: [
    'border-grey',
    'border-t',
    'p-4',
    'pin-b',
    'text-center',
    'tt-footer',
    'w-full'
  ],
  tagName: 'footer',

  isHidden: computed('router.currentRoute', function() {
    const router = this.get('router')
    const {
      currentRoute: { name }
    } = router

    return name === 'index'
  })
})
