import { call, put, takeEvery } from 'redux-saga/effects'
import { TagsApi } from '../../../api/tags'
import { setTags, setTagsStatus, TagActionsTypes } from './actionCreators'
import { Status } from './state'

export function* fetchTags() {
   try {
		 const payload = yield call(TagsApi.fetchTags)
		 yield put(setTags(payload))
   } catch (e) {
		 yield put(setTagsStatus(Status.ERROR))
   }
}

export function* tagsSaga() {
	yield takeEvery(TagActionsTypes.FETCH_TAGS, fetchTags)
}
