import io from 'socket.io-client';
import { fork, take, call, put, cancel } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {
  SET_MATRIX
  ,SET_PLAYER_LIST
  ,GAME_REQUEST
  ,SHOW_CLIENT_GAME_REQUEST
} from '../actions'
import {
  setPlayerList
  ,setMatrix
  ,showClientGameRequest
} from '../actions'

function connect() {
  const socket = io();
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
}

function subscribe(socket) {
  return eventChannel(emit => {
    socket.on('matrix:state', ({matrix,players}) => {
      if (matrix) {
        emit(setMatrix(matrix));
      }
      if (players) {
        emit(setPlayerList(players));
      }
    });
    socket.on('duel:state', ({duel}) => {
      console.log('duel: ',duel)
    });
    socket.on('client:game:request', ({opponent}) => {
      const game_request = {
        opponent
      }
      emit(showClientGameRequest({game_request}))
    });
    socket.on('disconnect', e => {
      // TODO: handle
    });
    return () => {};
  });
}

function* read(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

function* playerMove(socket) {
  while (true) {
    const { move } = yield take('PLAYER_MOVE');
    socket.emit('player:move', move);
  }
}

function* handleGameRequest(socket) {
  while (true) {
    const { players } = yield take(GAME_REQUEST);
    socket.emit('game:request', players);
  }
}

function* handleIO(socket) {
  yield fork(read, socket);
  yield fork(playerMove, socket);
  yield fork(handleGameRequest, socket);
}

function* flow() {
  while (true) {
    let { player } = yield take('PLAYER_NAME');

    const socket = yield call(connect);
    socket.emit('player:register', player);

    yield fork(handleIO, socket);
  }
}

export default [
  fork(flow)
]
