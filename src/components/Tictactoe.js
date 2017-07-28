import React, {Component} from 'react'
import Cell from './Cell'
import Grid from './Grid/Grid'
import Row from './Row/Row'
import { connect } from 'react-redux'

class Tictactoe extends Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)

    this.state = {
      matrix: []
    }
  }

  onClick(row, cell) {
    this.props.playerMove({
      row,
      cell
    })
  }

  render() {
    const {matrix,won} = this.state;
    return (
      <div>
        {won ? <span>{won} won!</span> : ''}
      <Grid>
        {() => {
          return matrix
            .map((c,row) => (
              <Row key={row}>
                {() => c.map((text,i) => <Cell text={text} onClick={() => this.onClick(row, i)} key={i} />)}
              </Row>
            ))
        }}
      </Grid>
      </div>
    )
  }
}

const mapStateToProp = state => {
  return {
    matrix: state.matrix.matrix
  }
}

const mapDispatchToProps = dispatch => {
  return {
    playerMove: move => {
      return dispatch({
        type: 'PLAYER_MOVE',
        move
      })
    }
  }
}

export default connect(mapStateToProp,mapDispatchToProps)(Tictactoe)
