import React, {Component} from 'react'

export default class Grid extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {matrix=[]} = this.props
    return (<div className="grid">{
      this.props.children()
    }</div>)
  }
}
