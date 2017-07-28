export default function matrix(state = {}, {type,matrix}) {
  switch (type) {
    case 'MATRIX_STATE':
      return {matrix}
      break;
    default:
      return state
  }
}
