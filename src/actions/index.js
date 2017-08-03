const MATRIX_STATE = 'MATRIX_STATE'
const SET_PLAYER_LIST = 'SET_PLAYER_LIST'

const updateMatrix = matrix => ({
  type: MATRIX_STATE,
  matrix
})
const updatePlayerList = players => ({
  type: 'SET_PLAYER_LIST',
  players
})

export {
  MATRIX_STATE
  ,SET_PLAYER_LIST
  ,updateMatrix
  ,updatePlayerList
}
