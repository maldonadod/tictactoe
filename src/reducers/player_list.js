import {SET_PLAYER_LIST} from '../actions'

export default function player_list(state = [], {type,players}) {
  switch (type) {
    case SET_PLAYER_LIST:
      return [...players]
      break;
    default:
      return state
  }
}
