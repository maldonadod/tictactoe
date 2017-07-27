import React, {Component} from 'react'

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.props.onClick();
  }

  render() {
    return (
      <span onClick={this.onClick}>
        {this.props.text}
      </span>
    )
  }
}
