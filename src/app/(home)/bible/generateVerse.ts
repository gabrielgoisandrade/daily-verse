import { Verse } from '@/@types/Bible'
import bible from '@/db/bible'
import { formatDate } from './formatDate'

const random = (value: number) => Math.floor(Math.random() * value)

const getRandomBook = () => {
    const books = Object.keys(bible)
    const randomBook = random(books.length)

    return books[randomBook]
}

const getRandomChapter = (book: string) => {
    const chapters = Object.keys(bible[book])
    const randomChapter = random(chapters.length)

    return chapters[randomChapter]
}

const getRandomVerse = (book: string, chapter: string) => {
    const verses = bible[book][chapter]
    const randomVerse = random(verses.length)

    return verses[randomVerse]
}

export const generateVerse = (): Verse => {
    const book = getRandomBook()
    const chapter = getRandomChapter(book)
    const verse = getRandomVerse(book, chapter)
    const today = new Date(Date.now())
    const createdAt = formatDate(today)

    return { book, chapter, verse, createdAt }
}
