import React, {Component} from 'react'
import Tictactoe from './components/Tictactoe'
import { connect } from 'react-redux'
import { Container, Input, Header } from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props)
    this.register = this.register.bind(this)
  }
  componentDidMount() {
    if (this.props.player) {
      this.props.playerName(this.props.player)
    }
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
      <div>
        {
         player
           ? <div><span>{player.name}</span><Tictactoe /></div>
           :  <div className="player-register">
                <Header>Who are you ?</Header>
                <Input
                  autoFocus
                  transparent
                  placeholder="Your Name"
                  onKeyDown={this.register} />
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
