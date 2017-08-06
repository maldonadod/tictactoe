import React, {Component} from 'react'
import Tictactoe from './components/Tictactoe'
import {connect} from 'react-redux'
import UserItem from './components/UserItem'
import GameRequest from './components/GameRequest'
import PlayerList from './components/PlayerList'
import WhoAreYou from './components/WhoAreYou'

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
  register(player) {
    this.props.playerName(player)
  }
  renderGame() {
    const {player,player_list} = this.props
    return (
      <div>
        <PlayerList players={player_list.filter(p => p.name !== player.name)} />
        <Tictactoe />
      </div>
    )
  }
  renderWhoAreYou() {
    return (
      <WhoAreYou onRegister={this.register} />
    )
  }
  render() {
    const {player,game_request,game} = this.props
    return (
      <div>
        {game_request.from && <GameRequest player={player} room={game_request.room} opponent={game_request.from} />}
        {player ? this.renderGame() : this.renderWhoAreYou()}
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    playerName: player => {
      return dispatch({
        type: 'PLAYER_NAME',
        player
      })
    }
  }
}

const mapState = state => {
  return {
    player: state.player
    ,player_list: state.player_list
    ,game_request: state.game_request
    ,game: state.game
  }
}

export default connect(mapState, mapDispatch)(App)
