import Controller from '@ember/controller'
import { availableRegions, availableYears } from 'tilltax/data'

export default Controller.extend({
  availableRegions,
  availableYears,

  actions: {
    doContact: async function(event) {
      event.preventDefault()
      console.log(this.model)
      try {
        const resp = await this.model.save()
        console.log('model was saved', resp)
      } catch (err) {
        console.error('model could not be saved', err)
      }
    }
  }
})
