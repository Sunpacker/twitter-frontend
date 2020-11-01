import { Action } from 'redux'
import { Status, ITweets, ITweet, FormStatus } from './state'


export enum TweetActionsTypes {
	SET_TWEETS = 'tweets/SET_TWEETS',
	SET_STATUS = 'tweets/SET_STATUS',
	FETCH_TWEETS = 'tweets/FETCH_TWEETS',
	ADD_TWEET = 'tweets/ADD_TWEET',
	PUSH_TWEET = 'tweets/PUSH_TWEET',
	SET_FORM_STATUS = 'tweets/SET_FORM_STATUS',
}

export interface ISetTweetAction extends Action<TweetActionsTypes> {
	type: TweetActionsTypes.SET_TWEETS
	payload: ITweets['items']
}
export interface ISetTweetStatus extends Action<TweetActionsTypes> {
	type: TweetActionsTypes.SET_STATUS
	payload: Status
}
export interface IFetchTweetsAction extends Action<TweetActionsTypes> {
	type: TweetActionsTypes.FETCH_TWEETS
}
export interface IAddTweetAction extends Action<TweetActionsTypes> {
	type: TweetActionsTypes.ADD_TWEET
	payload: string
}
export interface IPushTweetAction extends Action<TweetActionsTypes> {
	type: TweetActionsTypes.PUSH_TWEET
	payload: ITweet
}
export interface ISetAddFormStatus extends Action<TweetActionsTypes> {
	type: TweetActionsTypes.SET_FORM_STATUS
	payload: FormStatus
}


export const setTweets = (payload: ISetTweetAction['payload']): ISetTweetAction => ({
	type: TweetActionsTypes.SET_TWEETS,
	payload
})
export const setTweetsStatus = (payload: Status): ISetTweetStatus => ({
	type: TweetActionsTypes.SET_STATUS,
	payload
})
export const fetchTweets = (): IFetchTweetsAction => ({
	type: TweetActionsTypes.FETCH_TWEETS
})
export const addTweet = (payload: string): IAddTweetAction => ({
	type: TweetActionsTypes.ADD_TWEET,
	payload
})
export const pushTweet = (payload: ITweet): IPushTweetAction => ({
	type: TweetActionsTypes.PUSH_TWEET,
	payload
})
export const setAddFormStatus = (payload: FormStatus): ISetAddFormStatus => ({
	type: TweetActionsTypes.SET_FORM_STATUS,
	payload
})


export type TweetActions = ISetTweetAction | ISetTweetStatus | IFetchTweetsAction | IAddTweetAction | IPushTweetAction | ISetAddFormStatus
