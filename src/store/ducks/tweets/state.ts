export enum LoadingState {
	LOADED = 'LOADED',
	ERROR = 'ERROR',
	NEVER = 'NEVER'
}

export interface Tweet {
	text: string;
	user: {
		name: string;
		login: string;
		avatar: string;
	}
}

export interface Tweets {
	items: Tweet[];
	status: LoadingState;
}
