import Component from '@ember/component'
import { alias } from '@ember/object/computed'
import { computed } from '@ember/object'
import { inject as service } from '@ember/service'
import HiddenOnSplash from 'tilltax/mixins/hidden-on-splash'

export default Component.extend(HiddenOnSplash, {
  betaSite: service(),
  classNames: ['w-1/3'],
  elementId: 'tt-sidebar',
  isBeta: alias('betaSite.isBeta'),

  isVisible: computed('isSplashPage', function() {
    if (this.isBeta && !this.isSplashPage) {
      return true
    }
    return false
  })
})
