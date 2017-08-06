import {
  SHOW_CLIENT_GAME_REQUEST
  ,ACCEPT_GAME_REQUEST
  ,REJECT_GAME_REQUEST
} from '../actions'

export default function game_request(state = {}, {type,request}) {
  switch (type) {
      case SHOW_CLIENT_GAME_REQUEST:
      return {...request}
    break;
      case ACCEPT_GAME_REQUEST:
      return {}
    break;
      case REJECT_GAME_REQUEST:
      return {}
    break;
    default:
      return state
  }
}
