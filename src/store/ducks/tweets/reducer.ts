import produce, { Draft } from 'immer'
import { TweetActions, TweetActionsTypes } from './actionCreators'

import { LoadingState, Tweets } from './state'


const initialTweets: Tweets = {
	items: [],
	status: LoadingState.NEVER
}


export const tweetsReducer = produce((draft: Draft<Tweets>, action: TweetActions) => {
	const { type, payload } = action

	switch(type) {
		case TweetActionsTypes.SET_TWEETS:
			draft.items = payload
			break
		// case TweetActionsTypes.SET_TWEETS:
		// 	draft.items = payload
		// 	break
	}
}, initialTweets)
