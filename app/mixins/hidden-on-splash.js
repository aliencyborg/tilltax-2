import Mixin from '@ember/object/mixin'
import { computed } from '@ember/object'
import { inject as service } from '@ember/service'
import { not } from '@ember/object/computed'

export default Mixin.create({
  router: service(),
  isVisible: not('isSplashPage'),

  isSplashPage: computed('router.currentRoute', function() {
    return this.router.currentRoute.name === 'index'
  })
})
