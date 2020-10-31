import axios from 'axios'
import { ITweets } from '../store/ducks/tweets/state'


export const TweetsApi = {
	async fetchTweets(): Promise<ITweets['items']> {
		const { data } = await axios.get('https://trycode.pw/c/2OBQ1.json')
		return data
	}
}
