import { applyMiddleware, compose, createStore } from 'redux'
import { rootReducer } from './rootReducer'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'
import { ITweets } from './ducks/tweets/state'
import { ITags } from './ducks/tags/state'


declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}
export interface RootState {
	tweets: ITweets,
	tags: ITags,
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(sagaMiddleware)
))
sagaMiddleware.run(rootSaga)
