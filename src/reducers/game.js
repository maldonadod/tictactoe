import {SHOW_CLIENT_GAME_REQUEST} from '../actions'

export default function game(state = null, {type,game_request}) {
  switch (type) {
    case SHOW_CLIENT_GAME_REQUEST:
      return {...game_request}
      break;
    default:
      return state
  }
}
