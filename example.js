import Component from './src/index.js'

class MyComp extends Component {
  constructor (config) {
    super(config)
  }

  init () {
    this.refs.nameInput.oninput = () => this.updateName()
    this.refs.button.onclick = () => this.handleClick()
  }

  render() {
    console.log('RENDER HOOK')
    this.refs.result.innerText = `My name is ${this.state.name}!`
    this.refs.savingStatus.style.display = this.state.savingStatus ? 'block' : 'none'
  }

  updateName () {
    this.state.name = this.refs.nameInput.value
  }

  handleClick () {
    this.state.savingStatus = true

    setTimeout(() => {
      this.state.savingStatus = false
    }, 1000)
  }

  demoWatchMethod (newValue, oldValue) {
    console.log('Hey from watch method!', newValue, oldValue)
  }
}

// Init the comp
new MyComp({
  container: '#app',
  refs: {
    nameInput: '#name',
    result: '.result',
    button: '.my-button',
    savingStatus: '.saving-status'
  },
  state: {
    name: 'Slim Shady',
    savingStatus: false
  },
  watch: {
    savingStatus: 'demoWatchMethod'
  }
})
