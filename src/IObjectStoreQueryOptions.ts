import { IModel } from 'that-simple-model'

/**
 * An object type describing Query Options
 */
export interface IObjectStoreQueryOptions<T extends IModel> {
	where?: {}
	filter?: (item: T) => boolean
}
