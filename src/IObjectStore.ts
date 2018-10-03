import { IModel, IModelClass } from 'that-simple-model'
import { IObjectStoreQueryOptions } from './IObjectStoreQueryOptions'
import { IObjectStoreQueryResult } from './IObjectStoreQueryResult'

/**
 * Interface for an ObjectStore
 */
export interface IObjectStore {
	/**
	 * Add/update an item to the store
	 */
	put<T extends IModel>(object: T): Promise<T>

	/**
	 * Retrieve an item from the store
	 */
	get<T extends IModel>(
		model: IModelClass<T>,
		primaryKey: string,
		secondaryKey?: string
	): Promise<T>

	/**
	 * Search the store for a collection of items
	 */
	query<T extends IModel>(
		model: IModelClass<T>,
		query: IObjectStoreQueryOptions
	): Promise<IObjectStoreQueryResult<T>>

	/**
	 * Remove an item from the store
	 */
	remove<T extends IModel>(object: T): Promise<void>
}