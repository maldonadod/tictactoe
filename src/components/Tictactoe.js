import React, {Component} from 'react'
import Cell from './Cell'
import Grid from './Grid/Grid'
import Row from './Row/Row'

export default class Tictactoe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      matrix: [['','',''],['','',''],['','','']],
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick(row, i) {
    this.setState(prev => {
      let matrix = prev.matrix.map((row_cells,row_index) => {
        return row_cells.map((cell_text, cell_index) => {
          if (row_index === row && cell_index === i) {
            return 'X'
          }
          return cell_text;
        })
      })
      return {matrix}
    }, () => {

      const win = 'XXX'

      const horizontal = this.state.matrix
        .map(row => row.join(''))
        .indexOf(win) !== -1;

      let [[f,ff,fff],[s,ss,sss],[t,tt,ttt]] = this.state.matrix
      const vertical = [[f,s,t],[ff,ss,tt],[fff,sss,ttt]]
        .map(row => row.join(''))
        .indexOf(win) !== -1;

      const diagonal = [[f,ss,ttt],[fff,ss,t]]
        .map(row => row.join(''))
        .indexOf(win) !== -1;

      if (vertical || horizontal || diagonal) {
        this.setState({
          won: 'X'
        })
      }
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
