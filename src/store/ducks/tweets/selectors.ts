import { RootState } from '../..'
import { Status, Tweets } from './state'

export const selectTweets = (state: RootState): Tweets => state.tweets
export const selectStatus = (state: RootState): Status => selectTweets(state).status

export const selectIsTweetsLoading = (state: RootState): boolean => selectStatus(state) === Status.LOADING
export const selectIsTweetsLoaded = (state: RootState): boolean => selectStatus(state) === Status.LOADED
