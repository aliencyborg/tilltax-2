import LinkComponent from '@ember/routing/link-component'

export default LinkComponent.extend({
  activeClass: 'bg-black text-white hover:text-white',
  classNames: [
    'block',
    'lg:mr-4',
    'md:inline-block',
    'md:mt-0',
    'md:p-6',
    'p-2',
    'text-black'
  ]
})
