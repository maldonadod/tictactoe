import {SET_MATRIX} from '../actions'

export default function matrix(state = {}, {type,matrix}) {
  switch (type) {
    case SET_MATRIX:
      return {matrix}
      break;
    default:
      return state
  }
}
