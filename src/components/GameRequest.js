import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import {acceptGameRequest,rejectGameRequest} from '../actions'

class GameRequest extends Component {

  constructor(props) {
    super(props)
    this.reject = this.reject.bind(this)
    this.accept = this.accept.bind(this)
    this.state = {
      open: true
    }
  }

  closeModal() {
    this.setState(state => {
      return {...state, open: false}
    })
  }

  reject() {
    this.closeModal()
    this.props.reject([this.props.player, this.props.request.opponent])

  }

  accept() {
    this.closeModal()
    this.props.accept(this.props.opponent)
  }

  render() {
    const {opponent} = this.props
    const {open} = this.state
    return (
      <Modal open={open} basic size='small'>
        <Header icon='archive' content='Game Request' />
        <Modal.Content>
          <p>{opponent.name} wants to play, accept ?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.reject} basic color='red' inverted>
            <Icon name='remove' /> No
          </Button>
          <Button onClick={this.accept} color='green' inverted>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    accept: opponent => dispatch(acceptGameRequest(opponent)),
    reject: opponent => dispatch(rejectGameRequest(opponent))
  }
}

export default connect(null,mapDispatch)(GameRequest)
