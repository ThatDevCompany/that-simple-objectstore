import { ExampleObjectStore } from './IObjectStore'

describe('IObjectstore', () => {
	it('should be tested', async () => {
		const x = new ExampleObjectStore()
		x.get(null, null)
		x.put(null)
		x.query(null)
		x.remove(null)
		expect(x).toBeDefined()
	})
})
