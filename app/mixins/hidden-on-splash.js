import Mixin from '@ember/object/mixin'
import { computed } from '@ember/object'
import { inject as service } from '@ember/service'
import { not } from '@ember/object/computed'

export default Mixin.create({
  router: service(),
  isVisible: not('isSplashPage'),

  isSplashPage: computed('router.currentRoute', function() {
    const router = this.get('router')
    const {
      currentRoute: { name }
    } = router

    return name === 'index'
  })
})
