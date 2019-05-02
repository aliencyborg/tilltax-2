import DS from 'ember-data'
const { Transform } = DS

export default class PhoneTransform extends Transform {
  deserialize(serialized) {
    return serialized
  }

  serialize(deserialized = '') {
    // remove anything other than digits
    return deserialized.replace(/\D/g, '')
  }
}
