import Component from '@ember/component'
import { computed } from '@ember/object'

export default Component.extend({
  for: '',
  form: '',
  options: null, // [{}]
  title: '',
  value: '',

  classNames: ['flex', 'flex-col', 'tt-select'],

  selected: computed('value', function() {
    return 'MN'
  }),

  actions: {
    onchange(event) {
      console.log('onchange', event)
    }
  }
})
