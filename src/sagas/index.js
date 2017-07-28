import { all } from 'redux-saga/effects'
import player from './player'

export default function *root() {
  yield all([player]);
}
