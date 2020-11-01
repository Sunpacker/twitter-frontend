import axios from 'axios'
import { ITweet, ITweets } from '../store/ducks/tweets/state'


export const TweetsApi = {
	async fetchTweets(): Promise<ITweets['items']> {
		const { data } = await axios.get('https://trycode.pw/c/2OBQ1.json')
		return data
	},
	async addTweet(payload: ITweet): Promise<ITweet> {
		const { data } = await axios.post('https://trycode.pw/c/2OBQ1.json', payload)
		return data
	},
}
