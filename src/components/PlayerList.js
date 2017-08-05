import React, {Component} from 'react'
import UserItem from './UserItem'

class PlayerList extends Component {
  render () {
    const {players} = this.props
    return (
      <ul>
        {players.map((player,i) => {
          return <UserItem key={i} user={player} />
        })}
      </ul>
    )
  }
}

export default PlayerList
