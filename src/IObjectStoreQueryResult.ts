import { IModel } from 'that-simple-model'

/**
 * An object type describing Query Results
 */
export interface IObjectStoreQueryResult<T extends IModel> {
	items: Array<T>
}
