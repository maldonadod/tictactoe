import { combineReducers } from 'redux'
import matrix from '../reducers/matrix'
import player from '../reducers/player'
import player_list from '../reducers/player_list'

const rootReducer = combineReducers({
  matrix
  ,player
  ,player_list
});

export default rootReducer
