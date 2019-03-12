import Component from '@ember/component'
import HiddenOnSplash from 'tilltax/mixins/hidden-on-splash'

export default Component.extend(HiddenOnSplash, {
  ariaRole: 'navigation',
  menuIsHidden: true,
  tagName: 'nav',

  classNames: [
    'flex',
    'flex-wrap',
    'items-center',
    'justify-between',
    'md:pb-0',
    'pb-3',
    'pl-6',
    'tt-navbar'
  ],

  actions: {
    clickMenu() {
      this.set('menuIsHidden', true)
    },

    toggleMenu() {
      this.set('menuIsHidden', !this.menuIsHidden)
    }
  }
})
