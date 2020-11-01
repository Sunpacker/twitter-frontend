import produce, { Draft } from 'immer'
import { TagActions, TagActionsTypes } from './actionCreators'
import { Status, ITags } from './state'


const initialTags: ITags = {
	items: [],
	status: Status.NEVER
}

const tagsReducer = produce((draft: Draft<ITags>, action: TagActions) => {
	switch(action.type) {
		case TagActionsTypes.SET_TAGS:
			draft.items = action.payload
			draft.status = Status.LOADED
			break
			
		case TagActionsTypes.FETCH_TAGS:
			draft.items = []
			draft.status = Status.LOADING
			break
			
		case TagActionsTypes.SET_STATUS:
			draft.status = action.payload
			break

		default:
			break
	}
}, initialTags)


export default tagsReducer
