import Component from '@ember/component'
import HiddenOnSplash from 'tilltax/mixins/hidden-on-splash'

export default Component.extend(HiddenOnSplash, {
  tagName: 'nav',

  classNames: [
    'flex',
    'flex-wrap',
    'items-center',
    'justify-between',
    'pl-6',
    'tt-navbar'
  ]
})
