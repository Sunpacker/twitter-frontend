export enum Status {
	LOADING = 'LOADING',
	LOADED = 'LOADED',
	ERROR = 'ERROR',
	NEVER = 'NEVER'
}

export interface ITweet {
	_id?: string;
	text: string;
	user: {
		fullname: string;
		username: string;
		avatarUrl: string;
	}
}

export interface ITweets {
	items: ITweet[];
	status: Status;
}
