import { Action } from 'redux'
import { Status, Tweets } from './state'


export enum TweetActionsTypes {
	SET_TWEETS = 'tweets/SET_TWEETS',
	SET_STATUS = 'tweets/SET_STATUS',
	FETCH_TWEETS = 'tweets/FETCH_TWEETS',
}

interface ISetTweetActions extends Action<TweetActionsTypes> {
	type: TweetActionsTypes.SET_TWEETS
	payload: Tweets['items']
}
interface ISetTweetStatus extends Action<TweetActionsTypes> {
	type: TweetActionsTypes.SET_STATUS
	payload: Status
}
interface IFetchTweetActions extends Action<TweetActionsTypes> {
	type: TweetActionsTypes.FETCH_TWEETS
}

export const setTweets = (payload: ISetTweetActions['payload']): ISetTweetActions => ({
	type: TweetActionsTypes.SET_TWEETS,
	payload
})
export const setTweetsStatus = (payload: Status): ISetTweetStatus => ({
	type: TweetActionsTypes.SET_STATUS,
	payload
})
export const fetchTweets = (): IFetchTweetActions => ({
	type: TweetActionsTypes.FETCH_TWEETS
})

export type TweetActions = ISetTweetActions | ISetTweetStatus | IFetchTweetActions
