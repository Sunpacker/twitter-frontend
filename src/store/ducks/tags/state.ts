export enum Status {
	LOADING = 'LOADING',
	LOADED = 'LOADED',
	ERROR = 'ERROR',
	NEVER = 'NEVER'
}

export interface ITag {
	_id: string;
	name: string;
	count: number;
}

export interface ITags {
	items: ITag[];
	status: Status;
}
