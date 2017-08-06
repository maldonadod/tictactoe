import React, {Component} from 'react'
import Cell from './Cell'
import Grid from './Grid/Grid'
import Row from './Row/Row'
import { connect } from 'react-redux'

class Tictactoe extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick(row, cell) {
    const {room} = this.props.game
    const move = {
      row,
      cell
    }
    this.props.playerMove({
      move
      ,room
    })
  }

  render() {
    const {matrix} = this.props.game;
    return (
      <div>
      <Grid>
        {() => (matrix ? matrix
          .map((c,row) => (
            <Row key={row}>
              {() => c.map((text,i) => <Cell text={text} onClick={() => this.onClick(row, i)} key={i} />)}
            </Row>
          )) : "")}
      </Grid>
      </div>
    )
  }
}

const mapStateToProp = state => {
  return {
    matrix: state.matrix.matrix
    ,game: state.game
  }
}

const mapDispatchToProps = dispatch => {
  return {
    playerMove: move_request => {
      return dispatch({
        type: 'PLAYER_MOVE'
        ,move_request
      })
    }
  }
}

export default connect(mapStateToProp,mapDispatchToProps)(Tictactoe)
