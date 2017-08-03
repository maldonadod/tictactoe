import React, {Component} from 'react'
import Tictactoe from './components/Tictactoe'
import { connect } from 'react-redux'
import { Container, Input, Header } from 'semantic-ui-react'
import UserItem from './components/UserItem'

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
    const {player,player_list=[]} = this.props
    return (
      <div>
        {
         player
           ? <div>
              {player_list.map((user,i) => user.name !== player.name ? <UserItem user={user} key={i} /> : '')}
              <Tictactoe />
             </div>
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
    ,player_list: state.player_list
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(App)
