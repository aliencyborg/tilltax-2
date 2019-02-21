import Component from '@ember/component'
import { inject as service } from '@ember/service'
import { computed } from '@ember/object'

export default Component.extend({
  router: service(),
  classNames: ['flex', 'flex-1', 'flex-col'],
  elementId: 'tt-frame',

  showElements: computed('router.currentRoute', function() {
    const router = this.get('router')
    const {
      currentRoute: { name }
    } = router

    return name !== 'index'
  })
})
