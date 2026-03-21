import { getRandomVerse } from '@/app/(home)/bible/getRandomVerse';
import bible from '@/db/bible';

let result: { book: string; chapter: number; verse: number }

describe('Get Random Verse', () => {
    beforeAll(() => {
        result = getRandomVerse()
    })

    it('should return a book', () => {
        expect(result.book).toBeTruthy()
    })

    it('should return a chapter', () => {
        expect(result.chapter).toBeTruthy()
    })

    it('should return a verse', () => {
        expect(result.verse).toBeTruthy()
    })

    it('should be a book that exists', () => {
        const books = bible.map((b) => b.book)
		expect(books).toContain(result.book)
    })

	it('should be a chapter that matches with total of verses', () => {
    })
})
