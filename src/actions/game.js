const GAME_REQUEST = 'GAME_REQUEST'
const SHOW_CLIENT_GAME_REQUEST = 'SHOW_CLIENT_GAME_REQUEST'
const ACCEPT_GAME_REQUEST = 'ACCEPT_GAME_REQUEST'
const REJECT_GAME_REQUEST = 'REJECT_GAME_REQUEST'
const GAME_START = 'GAME_START'

const gameRequest = user => ({
  type: GAME_REQUEST,
  user
})
const showClientGameRequest = opponent => ({
  type: SHOW_CLIENT_GAME_REQUEST,
  request: {
    opponent
  }
})
const acceptGameRequest = player => ({
  type: ACCEPT_GAME_REQUEST,
  player
})
const rejectGameRequest = game_request => ({
  type: REJECT_GAME_REQUEST,
  game_request
})
const handleGameStart = game => ({
  type: GAME_START,
  game
})

export {
  GAME_REQUEST
  ,gameRequest
  ,SHOW_CLIENT_GAME_REQUEST
  ,showClientGameRequest
  ,ACCEPT_GAME_REQUEST
  ,acceptGameRequest
  ,REJECT_GAME_REQUEST
  ,rejectGameRequest
  ,GAME_START
  ,handleGameStart
}
