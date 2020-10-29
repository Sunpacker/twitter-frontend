import { Action } from 'redux'
import { Tweets } from './state'


export enum TweetActionsTypes {
	SET_TWEETS = 'tweets/SET_TWEETS'
}

interface SetTweetActions extends Action<TweetActionsTypes> {
	type: TweetActionsTypes.SET_TWEETS
	payload: Tweets['items']
}
export const setTweets = (payload: SetTweetActions['payload']): SetTweetActions => ({
	type: TweetActionsTypes.SET_TWEETS,
	payload
})

export type TweetActions = SetTweetActions
