import EmberObject from '@ember/object'
import HiddenOnSplashMixin from 'tilltax/mixins/hidden-on-splash'
import { module, test } from 'qunit'

module('Unit | Mixin | hidden-on-splash', function() {
  // Replace this with your real tests.
  test('it works', function(assert) {
    let HiddenOnSplashObject = EmberObject.extend(HiddenOnSplashMixin)
    let subject = HiddenOnSplashObject.create()
    assert.ok(subject)
  })
})
