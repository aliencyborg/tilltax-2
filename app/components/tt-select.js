import Component from '@ember/component'

export default Component.extend({
  for: '',
  form: '',
  options: null, // [{}]
  title: '',
  value: '',

  classNames: ['flex', 'flex-col', 'tt-select']
})
