import Component from '@ember/component'
import { computed } from '@ember/object'
import { not } from '@ember/object/computed'

export default Component.extend({
  checked: false,
  for: '',
  id: '',
  name: '',
  placeholder: '',
  type: 'text',
  value: '',

  classNames: ['flex', 'justify-start'],
  classNameBindings: ['isToggleType:mb-2'],

  isToggleType: computed('type', function() {
    return ['checkbox', 'radio'].includes(this.type)
  }),

  inputClass: computed('isToggleType', function() {
    const defaultInputClasses = [
      'appearance-none',
      'flex-shrink',
      'focus:outline-none',
      'focus:shadow-outline',
      'leading-tight',
      'px-3',
      'py-2',
      'text-grey-darker'
    ]

    if (this.isToggleType) {
      return defaultInputClasses.concat(['self-center', 'mr-2']).join(' ')
    }

    return defaultInputClasses.concat(['border', 'shadow', 'w-full']).join(' ')
  }),

  labelFirst: not('isToggleType')
})
