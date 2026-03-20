import { Bible } from '@/app/(home)/bible/Bible'
import { render } from '@testing-library/react'

let container: HTMLElement

describe('Bible', () => {
    beforeEach(() => {
        container = render(<Bible />).container
    })

    it('should render a book', () => {
        const book = container.querySelector('.bible__book')

        expect(book).toBeInTheDocument()
    })

    it('should render a chapter', () => {
        const chapter = container.querySelector('.bible__chapter')

        expect(chapter).toBeInTheDocument()
    })

    it('should render a verse', () => {
        const verse = container.querySelector('.bible__verse')

        expect(verse).toBeInTheDocument()
    })
})
