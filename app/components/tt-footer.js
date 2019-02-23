import Component from '@ember/component'
import HiddenOnSplash from 'tilltax/mixins/hidden-on-splash'

export default Component.extend(HiddenOnSplash, {
  tagName: 'footer',

  classNames: [
    'border-grey',
    'border-t',
    'p-4',
    'pin-b',
    'text-center',
    'text-grey',
    'tt-footer',
    'w-full'
  ]
})
