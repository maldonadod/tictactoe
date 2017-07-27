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
    });
  }

  render() {
    const {matrix} = this.state;
    return (
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
    )
  }
}
