import produce, { Draft } from 'immer'
import { TweetActions, TweetActionsTypes } from './actionCreators'
import { Status, Tweets } from './state'


const initialTweets: Tweets = {
	items: [],
	status: Status.NEVER
}


export const tweetsReducer = produce((draft: Draft<Tweets>, action: TweetActions) => {
	switch(action.type) {
		case TweetActionsTypes.SET_TWEETS:
			draft.items = action.payload
			draft.status = Status.LOADED
			break
			
		case TweetActionsTypes.FETCH_TWEETS:
			draft.items = []
			draft.status = Status.LOADING
			break
			
		case TweetActionsTypes.SET_STATUS:
			draft.status = action.payload
			break

		default:
			break
	}
}, initialTweets)
