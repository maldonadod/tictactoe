import { combineReducers } from 'redux'
import matrix from '../reducers/matrix'
import player from '../reducers/player'

const rootReducer = combineReducers({
  matrix
  ,player
});

export default rootReducer
