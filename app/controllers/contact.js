import Controller from '@ember/controller'
import { default as data } from 'tilltax/data'

const { availableRegions, availableStatuses, availableYears } = data

export default Controller.extend({
  availableRegions,
  availableStatuses,
  availableYears,

  actions: {
    doContact: async function(event) {
      event.preventDefault()
      try {
        const resp = await this.model.save()
        console.log('model was saved', resp)
      } catch (err) {
        console.error('model could not be saved', err)
      }
    }
  }
})
