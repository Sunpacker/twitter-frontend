import { call, put, takeEvery } from 'redux-saga/effects'
import { TweetsApi } from '../../../api/tweets'
import { setTweets, setTweetsStatus, TweetActionsTypes } from './actionCreators'
import { Status } from './state'

export function* fetchTweets() {
   try {
		 const data = yield call(TweetsApi.fetchTweets)
		 yield put(setTweets(data))
   } catch (e) {
		 yield put(setTweetsStatus(Status.ERROR))
   }
}

export function* tweetsSaga() {
	yield takeEvery(TweetActionsTypes.FETCH_TWEETS, fetchTweets)
}
