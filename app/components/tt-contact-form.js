import Component from '@ember/component'

export default Component.extend({
  availableRegions: null,
  availableYears: null,
  model: null,
  onsubmit: null,

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
