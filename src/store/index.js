import { compose, createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import persistState, { mergePersistedState } from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';

const sagaMiddleware = createSagaMiddleware()

const reducer = compose(
  mergePersistedState()
)(rootReducer);

const storage = compose(
)(adapter(window.localStorage));

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  // persistState(storage, 'tictactoe')
);

const store = createStore(reducer, enhancer)
sagaMiddleware.run(rootSaga)

export default store
