export enum Status {
	LOADING = 'LOADING',
	LOADED = 'LOADED',
	ERROR = 'ERROR',
	NEVER = 'NEVER'
}

export interface Tweet {
	_id: string;
	text: string;
	user: {
		name: string;
		login: string;
		avatar: string;
	}
}

export interface Tweets {
	items: Tweet[];
	status: Status;
}
