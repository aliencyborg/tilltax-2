import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

module('Integration | Component | tt-sidebar', function(hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{tt-sidebar}}`)

    assert.dom(this.element).hasText('')

    // Template block usage:
    await render(hbs`
      {{#tt-sidebar}}
        template block text
      {{/tt-sidebar}}
    `)

    assert.dom(this.element).hasText('template block text')
  })
})
