import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

module('Integration | Component | tt-center-page', function(hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{tt-center-page}}`)

    assert.dom(this.element).hasText('')

    // Template block usage:
    await render(hbs`
      {{#tt-center-page}}
        template block text
      {{/tt-center-page}}
    `)

    assert.dom(this.element).hasText('template block text')
  })
})
