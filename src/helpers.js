export const getRefsFromObj = (refs, parent) => {
  return Object.keys(refs)
    .reduce((refsDom, refName) => {
      refsDom[refName] = parent.querySelector(refs[refName])
      return refsDom
    }, {})
}

export const genState = (state, watch, _this) => {
  return new Proxy(state, {
    set: (obj, prop, newValue) => {
      const oldValue = obj[prop]

      if (watch) {
        const watchMethodName = watch[prop]

        if (watchMethodName) {
          _this[watchMethodName](newValue, oldValue)
        }
      }

      obj[prop] = newValue

      _this.render()
      return true
    }
  })
}
