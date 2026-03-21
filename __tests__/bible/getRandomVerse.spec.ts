import { getRandomVerse } from '@/app/(home)/bible/getRandomVerse';
import bible from '@/db/bible';

let verseOfTheDay: { book: string; chapter: number; verse: number }

describe('Get Random Verse', () => {
    beforeAll(() => {
        verseOfTheDay = getRandomVerse()
    })

    it('should return a book', () => {
        expect(verseOfTheDay.book).toBeTruthy()
    })

    it('should return a chapter', () => {
        expect(verseOfTheDay.chapter).toBeTruthy()
    })

    it('should return a verse', () => {
        expect(verseOfTheDay.verse).toBeTruthy()
    })

    it('should be a book that exists', () => {
        const result = bible.find((b) => b.book === verseOfTheDay.book)
        expect(result).toBeTruthy()
    })

    it('should be a chapter that exists', () => {
        const result = bible.find((b) => b.book == verseOfTheDay.book)

        expect(result?.chapters[verseOfTheDay.chapter - 1]).toBeTruthy()
    })

    it('should be a verse that exists', () => {
        const result = bible.find((b) => b.book == verseOfTheDay.book)

        expect(
            result?.chapters[verseOfTheDay.chapter - 1][
                verseOfTheDay.verse - 1
            ],
        ).toBeTruthy()
    })
})
