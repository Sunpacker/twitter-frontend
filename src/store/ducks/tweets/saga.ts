import { SagaIterator } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'
import { TweetsApi } from '../../../api/tweets'
import { setTweets, setTweetsStatus, TweetActionsTypes, IAddTweetAction, pushTweet, setAddFormStatus } from './actionCreators'
import { FormStatus, ITweet, Status } from './state'

export function* fetchTweets() {
   try {
		 const data = yield call(TweetsApi.fetchTweets)
		 yield put(setTweets(data))
   } catch (e) {
		 yield put(setTweetsStatus(Status.ERROR))
   }
}
export function* addTweet({ payload }: IAddTweetAction) {
   try {
		 const tweet: ITweet = {
			 _id: '123',
			 text: payload,
			 user: {
				 fullname: '123',
				 username: '123',
				 avatarUrl: '123'
			 }
		 }
		 const data = yield call(TweetsApi.addTweet, tweet)
		 yield put(pushTweet(data))
   } catch (e) {
		 yield put(setAddFormStatus(FormStatus.ERROR))
   }
}

export function* tweetsSaga(): SagaIterator {
	yield takeEvery(TweetActionsTypes.FETCH_TWEETS, fetchTweets)
	yield takeEvery(TweetActionsTypes.ADD_TWEET, addTweet)
}
