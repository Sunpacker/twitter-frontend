import { applyMiddleware, compose, createStore } from 'redux'
import { rootReducer } from './rootReducer'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'
import { Tweets } from './ducks/tweets/state'


declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export interface RootState {
	tweets: Tweets
}

export const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(sagaMiddleware)
))
sagaMiddleware.run(rootSaga)
