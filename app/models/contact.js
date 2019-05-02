import DS from 'ember-data'
const { Model, attr } = DS

export default class ContactModel extends Model {
  @attr email
  @attr name
  @attr('phone') phone

  @attr('hash', {
    defaultValue: () => ({
      filingRegion: 'MN',
      filingStatus: '',
      filingYears: []
    })
  })
  details
}
