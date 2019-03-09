import DS from 'ember-data'

export default DS.Transform.extend({
  deserialize(serialized) {
    return serialized
  },

  serialize(deserialized = '') {
    // remove anything other than digits
    return deserialized.replace(/\D/g, '')
  }
})
