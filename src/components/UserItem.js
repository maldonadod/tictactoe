import React, {Component} from 'react'
import {connect} from 'react-redux'
import {gameRequest} from '../actions'

class UserItem extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }
  onClick() {
    const {user} = this.props
    this.props.gameRequest(user)
  }
  render() {
    return (
      <li onClick={this.onClick}>{this.props.user.name}</li>
    )
  }
}

const mapState = state => {
  return {
    player: state.player
  }
}
const mapDispatch = dispatch => {
  return {
    gameRequest: player => dispatch(gameRequest(player))
  }
}

export default connect(mapState,mapDispatch)(UserItem)
