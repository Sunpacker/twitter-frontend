import axios from 'axios'
import { ITweet } from '../store/ducks/tweets/state'
import { API_URL } from './vars'


interface IResponse<T> {
	status: string;
	data: T
}

export const TweetsApi = {
	async fetchTweets(): Promise<IResponse<ITweet[]>> {
		const response = await axios.get(`${API_URL}/tweets`)
		return response.data.data
	},
	async addTweet(payload: ITweet): Promise<IResponse<ITweet>> {
		const response = await axios.post(`${API_URL}/tweets`, payload)
		return response.data.data
	},
}
