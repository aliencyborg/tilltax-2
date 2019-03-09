import Component from '@ember/component'

export default Component.extend({
  tagName: 'button',

  classNames: [
    'bg-blue',
    'font-bold',
    'hover:bg-blue-dark',
    'pb-2',
    'pt-3',
    'px-4',
    'text-white'
  ]
})
