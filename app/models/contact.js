import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr(),
  name: DS.attr(),
  phone: DS.attr('phone'),

  details: DS.attr('hash', {
    defaultValue: () => ({
      filingRegion: 'MN',
      filingStatus: '',
      filingYears: []
    })
  })
});
