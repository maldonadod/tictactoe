export default function player_list(state = [], {type,players}) {
  switch (type) {
    case 'SET_PLAYER_LIST':
      return [...players]
      break;
    default:
      return state
  }
}
