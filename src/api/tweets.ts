import axios from 'axios'
import { Tweets } from '../store/ducks/tweets/state'


export const TweetsApi = {
	async fetchTweets(): Promise<Tweets['items']> {
		const { data } = await axios.get('https://trycode.pw/c/2OBQ1.json')
		return data
	}
}
