import io from 'socket.io-client';
import { fork, take, call, put, cancel } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { updateMatrix } from '../actions'

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
    socket.on('matrix:state', ({matrix}) => {
      emit(updateMatrix(matrix));
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

function* handleIO(socket) {
  yield fork(read, socket);
  yield fork(playerMove, socket);
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
