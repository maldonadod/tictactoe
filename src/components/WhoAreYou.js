import React, {Component} from 'react'
import {Input, Header} from 'semantic-ui-react'

class WhoAreYou extends Component {
  constructor(props) {
    super(props)
    this.register = this.register.bind(this)
  }
  register(e) {
    const {onRegister} = this.props
    if(e.keyCode == 13) {
      onRegister({
        name: e.target.value
      })
    }
  }
  render () {
    return (
      <div className="player-register">
         <Header>Who are you ?</Header>
         <Input
           type="text"
           autoFocus
           transparent
           placeholder="Your Name"
           onKeyDown={this.register} />
       </div>
    )
  }
}

export default WhoAreYou
