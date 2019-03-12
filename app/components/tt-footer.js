import Component from '@ember/component'
import HiddenOnSplash from 'tilltax/mixins/hidden-on-splash'

export default Component.extend(HiddenOnSplash, {
  tagName: 'footer',

  classNames: [
    'border-grey',
    'border-t',
    'p-4',
    'pin-b',
    'sm:text-base',
    'text-center',
    'text-grey',
    'text-sm',
    'tt-footer',
    'w-full'
    // Uncomment for testing responsive design:
    // 'bg-pink',
    // 'sm:bg-indigo',
    // 'md:bg-teal',
    // 'lg:bg-yellow',
    // 'xl:bg-red'
  ]
})
