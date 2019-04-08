import { getRefsFromObj, genState } from './helpers'

export default class Component {
  constructor ({ container, refs, state, watch }) {
    this.containerDom = document.querySelector(container)
    this.refs = getRefsFromObj(refs, this.containerDom)
    this.state = genState(state, watch, this)

    this.init()
    this.render()
  }

  init () {

  }

  render () {

  }
}
