const self = {
  nestedPropertyExists(obj, ...properties) {
    // I prefer this over !obj since it is more explicit and it prevents weird type coercion bugs
    if(obj === null || obj === undefined) return false;
    let hasCurrentProp = Object.prototype.hasOwnProperty.call(obj, properties[0])
    if(properties.length === 1) return hasCurrentProp;

    return this.nestedPropertyExists(obj[properties[0]], ...properties.slice(1))
  }
}

export default self