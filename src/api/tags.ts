// import axios from 'axios'
import { ITags } from '../store/ducks/tags/state'


export const TagsApi = {
	async fetchTags(): Promise<ITags['items']> {
		return [
			{
				_id: '5f625ff6bd97609c6925e2b4',
				name: 'Беларусь',
				count: 532
			},
			{
				_id: '3f625ff6bd97609c6925e2b4',
				name: 'коронавирус',
				count: 152
			},
			{
				_id: '8f625ff6bd97609c6925e2b4',
				name: 'Навальный',
				count: 178
			},
		]
	}
}
