import produce, { Draft } from 'immer'
import { TweetActions, TweetActionsTypes } from './actionCreators'
import { Status, ITweets, FormStatus } from './state'


const initialTweets: ITweets = {
	items: [],
	status: Status.NEVER,
	formStatus: FormStatus.NEVER
}

const tweetsReducer = produce((draft: Draft<ITweets>, action: TweetActions) => {
	switch(action.type) {
		case TweetActionsTypes.SET_TWEETS:
			draft.items = action.payload
			draft.status = Status.LOADED
			break
			
		case TweetActionsTypes.SET_STATUS:
			draft.status = action.payload
			break
			
		case TweetActionsTypes.SET_FORM_STATUS:
			draft.formStatus = action.payload
			break
			
		case TweetActionsTypes.FETCH_TWEETS:
			draft.items = []
			draft.status = Status.LOADING
			break
			
		case TweetActionsTypes.ADD_TWEET:
			draft.formStatus = FormStatus.LOADING
			break
			
		case TweetActionsTypes.PUSH_TWEET:
			draft.items.push(action.payload)
			draft.formStatus = FormStatus.ADDED
			break

		default:
			break
	}
}, initialTweets)


export default tweetsReducer
