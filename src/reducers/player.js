export default function matrix(state = {}, {type,user}) {
  switch (type) {
    case 'PLAYER_NAME':
      return {user}
      break;
    default:
      return state
  }
}
