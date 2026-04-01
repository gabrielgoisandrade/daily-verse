import { Verse } from '@/@types/Bible'
import { generateVerse } from '@/app/(home)/bible/generateVerse'
import bible from '@/db/bible'

let verseOfTheDay: Verse

describe('Get Random Verse', () => {
    beforeAll(() => {
        verseOfTheDay = generateVerse()
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
        const result = Object.keys(bible)
        expect(result).toContain(verseOfTheDay.book)
    })

    it('should be a chapter number that exists', () => {
        const result = Object.keys(bible[verseOfTheDay.book])
        expect(result).toContain(verseOfTheDay.chapter)
    })

    it('should be a verse number that exists', () => {
        const result = bible[verseOfTheDay.book][verseOfTheDay.chapter]
        expect(result).toContain(verseOfTheDay.verse)
    })
})
