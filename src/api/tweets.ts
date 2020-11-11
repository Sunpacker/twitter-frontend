import { axios } from '../plugins'
import { ITweet } from '../store/ducks/tweets/state'
import { API_URL } from './vars'


interface IResponse<T> {
	status: string;
	data: T;
}

export const TweetsApi = {
	async fetchTweets(): Promise<ITweet[]> {
		const response = await axios.get<IResponse<ITweet[]>>(`${API_URL}/tweets`)
		return response.data.data
	},
	async addTweet( payload: string ): Promise<ITweet> {
		const response = await axios.post<IResponse<ITweet>>(`${API_URL}/tweets`, { text: payload })
		return response.data.data
	},
}
