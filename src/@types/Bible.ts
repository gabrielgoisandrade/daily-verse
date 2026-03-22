export interface BibleMetadata {
    book: string
    totalChapters: number
    versesPerChapter: number[]
}

export type Bible = {
    [book: string]: Chapter
}

export type Chapter = {
    [x: string]: number[]
}

export interface Verse {
    book: string
    chapter: string
    verse: number
}
