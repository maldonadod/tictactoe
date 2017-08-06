import {
  GAME_START
} from '../actions'

export default function game(state = {}, {type,game}) {
  switch (type) {
    case GAME_START:
      return {...game}
      break;
    default:
      return state
  }
}
