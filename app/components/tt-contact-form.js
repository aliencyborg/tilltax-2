import Component from '@ember/component'
import { alias } from '@ember/object/computed'

export default Component.extend({
  availableRegions: null, // [{}]
  availableStatuses: null, // [{}]
  availableYears: null, // [{}]
  model: null, // Model

  details: alias('model.details'),
  formId: alias('id'),
  tagName: 'form',

  classNames: [
    'bg-white',
    'pb-8',
    'pt-6',
    'px-8',
    'shadow-md',
    'tt-contact-form',
    'w-full'
  ]
})
