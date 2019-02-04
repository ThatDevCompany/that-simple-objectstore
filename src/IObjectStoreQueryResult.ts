import { IModel } from 'that-simple-model'

export enum ObjectStoreQueryStatus {
	OK = 'OK',
	ERROR = 'ERROR'
}

/**
 * An object type describing Query Results
 */
export interface IObjectStoreQueryResult<T extends IModel> {
	status: ObjectStoreQueryStatus
	items: Array<T>
	continuationToken?: any
}

export class ExampleObjectStoreQueryResult {
	status = ObjectStoreQueryStatus.OK
	items = []
}
