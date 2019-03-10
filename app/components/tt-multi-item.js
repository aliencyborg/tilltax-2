import Component from '@ember/component'
import { computed } from '@ember/object'

export default Component.extend({
  name: null, // ''
  selected: null, // ['']
  type: 'checkbox', // 'checkbox' | 'radio'
  value: null, // ''

  classNames: ['flex', 'flex-1', 'pb-2', 'tt-multi-item'],

  checked: computed('selected', 'value', function() {
    return this.selected.indexOf(this.value) > -1
  }),

  forId: computed('name', 'value', function() {
    return `${this.name}-${this.value}`
  })
})
