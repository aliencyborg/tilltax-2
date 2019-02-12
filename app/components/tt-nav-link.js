import LinkComponent from '@ember/routing/link-component'

export default LinkComponent.extend({
  activeClass: 'bg-black text-white hover:text-white',
  classNames: [
    'block',
    'lg:inline-block',
    'lg:mt-0',
    'mr-4',
    'mt-4',
    'p-6',
    'text-black'
  ]
})
