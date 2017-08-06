import { combineReducers } from 'redux'
import matrix from '../reducers/matrix'
import player from '../reducers/player'
import player_list from '../reducers/player_list'
import game from '../reducers/game'
import game_request from '../reducers/game_request'

const rootReducer = combineReducers({
  matrix
  ,player
  ,player_list
  ,game_request
  ,game
});

export default rootReducer
