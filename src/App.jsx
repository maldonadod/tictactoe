import React, {Component} from 'react'
import Tictactoe from './components/Tictactoe'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)
    this.register = this.register.bind(this)
  }
  register(e) {
    if(e.keyCode == 13) {
      const name = e.target.value;
      this.props.playerName({name})
    }
  }
  render() {
    return (
      <div>
        <Tictactoe />
        <input name='player_name' type='text' onKeyDown={this.register} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    playerName: player => {
      return dispatch({
        type: 'PLAYER_NAME',
        player
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(App)
