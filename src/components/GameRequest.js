import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const GameRequest = ({request}) => (
  <Modal open basic size='small'>
    <Header icon='archive' content='Game Request' />
    <Modal.Content>
      <p>{request.opponent.name} wants to play, accept ?</p>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='red' inverted>
        <Icon name='remove' /> No
      </Button>
      <Button color='green' inverted>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
)

export default GameRequest
