import { RootState } from '../..'
import { Status, ITweets } from './state'

export const selectTweets = (state: RootState): ITweets => state.tweets
export const selectStatus = (state: RootState): Status => selectTweets(state).status

export const selectIsTweetsLoading = (state: RootState): boolean => selectStatus(state) === Status.LOADING
export const selectIsTweetsLoaded = (state: RootState): boolean => selectStatus(state) === Status.LOADED
