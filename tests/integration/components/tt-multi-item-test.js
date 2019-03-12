import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

module('Integration | Component | tt-multi-item', function(hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{tt-multi-item}}`)

    assert.equal(this.element.textContent.trim(), '')

    // Template block usage:
    await render(hbs`
      {{#tt-multi-item}}
        template block text
      {{/tt-multi-item}}
    `)

    assert.equal(this.element.textContent.trim(), 'template block text')
  })
})
