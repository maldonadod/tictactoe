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
    const {player} = this.props
    return (
      <div className="container">
        {
         player
           ? <div><span>{player.name}</span><Tictactoe /></div>
           :  <div className="ui segment player-register">
                <h2>Who are you ?</h2>
                <div className="ui input focus">
                  <div>
                    <input id="player-name" name='player_name' type='text' onKeyDown={this.register} />
                  </div>
                </div>
              </div>
        }
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

const mapStateToProp = state => {
  return {
    player: state.player
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(App)
