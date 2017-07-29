export default function matrix(state = null, {type,player}) {
  switch (type) {
    case 'PLAYER_NAME':
      return player ? {...player} : player
      break;
    default:
      return state
  }
}
