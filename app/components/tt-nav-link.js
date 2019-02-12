import LinkComponent from '@ember/routing/link-component'

export default LinkComponent.extend({
  activeClass: 'bg-orange-lighter hover:text-orange-dark',
  classNames: [
    'block',
    'hover:text-white',
    'lg:inline-block',
    'lg:mt-0',
    'mr-4',
    'mt-4',
    'p-6',
    'text-orange-dark'
  ]
})
