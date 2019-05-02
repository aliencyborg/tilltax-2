import DS from 'ember-data'
const { Transform } = DS

export default class HashTransform extends Transform {
  deserialize(serialized) {
    return serialized
  }

  serialize(deserialized) {
    return JSON.stringify(deserialized)
  }
}
