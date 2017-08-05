const GAME_REQUEST = 'GAME_REQUEST'
const SHOW_CLIENT_GAME_REQUEST = 'SHOW_CLIENT_GAME_REQUEST'

const gameRequest = players => ({
  type: GAME_REQUEST,
  players
})
const showClientGameRequest = game_request => ({
  type: SHOW_CLIENT_GAME_REQUEST,
  game_request
})

export {
  GAME_REQUEST
  ,gameRequest
  ,SHOW_CLIENT_GAME_REQUEST
  ,showClientGameRequest
}
