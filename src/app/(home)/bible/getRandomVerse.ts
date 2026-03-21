import bible from "@/db/bible"

const random = (value: number) => Math.floor(Math.random() * value)
export const getRandomVerse = () => {
	const book = bible[random(bible.length)]
	const chapter = random(book.totalChapters)
	const verse =  random(book.versesPerChapter[chapter])

	return {
		book: book.book,
		chapter: book.versesPerChapter[chapter],
		verse: verse + 1
	}
}
/*
[
	{
		'Genesis': {
			chapters: [
				1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
				2: [1]
			]

		}
	}
]





*/
