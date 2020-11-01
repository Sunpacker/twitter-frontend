import { RootState } from '../..'
import { Status, ITags } from './state'

export const selectTags = (state: RootState): ITags => state.tags
export const selectStatus = (state: RootState): Status => selectTags(state).status

export const selectIsTagsLoading = (state: RootState): boolean => selectStatus(state) === Status.LOADING
export const selectIsTagsLoaded = (state: RootState): boolean => selectStatus(state) === Status.LOADED
