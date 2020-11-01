import { Action } from 'redux'
import { Status, ITags } from './state'


export enum TagActionsTypes {
	SET_TAGS = 'tags/SET_TAGS',
	SET_STATUS = 'tags/SET_STATUS',
	FETCH_TAGS = 'tags/FETCH_TAGS',
}

interface ISetTagActions extends Action<TagActionsTypes> {
	type: TagActionsTypes.SET_TAGS
	payload: ITags['items']
}
interface ISetTagStatus extends Action<TagActionsTypes> {
	type: TagActionsTypes.SET_STATUS
	payload: Status
}
interface IFetchTagActions extends Action<TagActionsTypes> {
	type: TagActionsTypes.FETCH_TAGS
}

export const setTags = (payload: ISetTagActions['payload']): ISetTagActions => ({
	type: TagActionsTypes.SET_TAGS,
	payload
})
export const setTagsStatus = (payload: Status): ISetTagStatus => ({
	type: TagActionsTypes.SET_STATUS,
	payload
})
export const fetchTags = (): IFetchTagActions => ({
	type: TagActionsTypes.FETCH_TAGS
})

export type TagActions = ISetTagActions | ISetTagStatus | IFetchTagActions
