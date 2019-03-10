import Component from '@ember/component'
import { computed } from '@ember/object'

export default Component.extend({
  form: '',
  name: '',
  options: null, // [{}]
  title: '',
  type: 'checkbox', // 'checkbox' | 'radio'
  value: null, // '' || ['']

  classNames: ['mb-4', 'tt-multi-input'],

  // return an array no matter what
  selected: computed('type', 'value', function() {
    if (!this.value) {
      return []
    }

    if (this.type === 'radio' && this.value) {
      return [this.value]
    }

    return this.value
  }),

  actions: {
    onchange(value, checked) {
      let newValue = value

      if (this.type === 'checkbox') {
        // checkbox
        if (checked) {
          // it was previously checked
          newValue = this.selected.filter(val => val !== value)
        } else {
          // it was previously unchecked
          newValue = this.selected.concat(value)
        }
      }

      this.set('value', newValue)
    }
  }
})
