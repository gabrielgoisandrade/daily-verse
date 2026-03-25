import { formatDate } from "@/app/(home)/bible/formatDate"

describe('Format Date', () => {
	it('should format date as dd/mm/yyyy', () => {
		const date = new Date(2026, 2, 25)
		const result = formatDate(date)

		expect(result).toEqual('25/02/2026')
	})
})
