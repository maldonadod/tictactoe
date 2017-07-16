import React, {Component} from 'react'
import Column from '../Column/Column'

export default class Grid extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {matrix=[]} = this.props
    return (<div className="grid">{
      matrix.map((c,i) => <Column key={i} items={c}></Column>)
    }</div>)
  }
}
