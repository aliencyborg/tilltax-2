/* eslint no-console:0 */
import Controller from '@ember/controller'
import data from 'tilltax/data'
import { action } from '@ember/object'

const { availableRegions, availableStatuses, availableYears } = data

export default class ContactController extends Controller {
  availableRegions = availableRegions
  availableStatuses = availableStatuses
  availableYears = availableYears

  @action
  async doContact(event) {
    event.preventDefault()
    try {
      const response = await this.model.save()
      console.log('model was saved', response)
      this.transitionToRoute('thanks')
    } catch (err) {
      console.error('model could not be saved', err)
    }
  }
}
