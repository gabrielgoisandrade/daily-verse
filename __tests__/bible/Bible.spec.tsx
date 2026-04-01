import { Bible } from '@/app/(home)/bible/Bible'
import { formatDate } from '@/app/(home)/bible/formatDate'
import { render } from '@testing-library/react'

describe('Bible', () => {
    beforeEach(() => {
        localStorage.clear()
		jest.restoreAllMocks()
    })

    it('should render the component', () => {
        const container = render(<Bible />)
        expect(container).not.toBeNull()
    })

    it('should set a new item if no previous value exists', () => {
        const spySet = jest.spyOn(Storage.prototype, 'setItem')

        render(<Bible />)

        const result = localStorage.getItem('last_verse')

        expect(spySet).toHaveBeenCalled()
        expect(result).not.toBeNull()
    })

    it('should return the stored value if a previous value exists and the date is the same', () => {
        const initialValue = JSON.stringify({
            book: 'book',
            chapter: '0',
            verse: '0',
            createdAt: formatDate(new Date()),
        })

        localStorage.setItem('last_verse', initialValue)

        const spySet = jest.spyOn(Storage.prototype, 'setItem')

        render(<Bible />)

        const result = localStorage.getItem('last_verse')

        expect(spySet).not.toHaveBeenCalled()
        expect(result).toEqual(initialValue)
    })

    it('should update the stored value if a previous value exists and the date is different', () => {
        const initialValue = JSON.stringify({
            book: 'book',
            chapter: '0',
            verse: '0',
            createdAt: formatDate(new Date(2026, 3, 30)),
        })

        localStorage.setItem('last_verse', initialValue)

        const spySet = jest.spyOn(Storage.prototype, 'setItem')

        render(<Bible />)

        const result = localStorage.getItem('last_verse')

        expect(spySet).toHaveBeenCalled()
        expect(result).not.toEqual(initialValue)
    })

    it('should render a book', () => {
        const { container } = render(<Bible />)
        const book = container.querySelector('.bible__book')

        expect(book).toBeInTheDocument()
    })

    it('should render a chapter', () => {
        const { container } = render(<Bible />)
        const chapter = container.querySelector('.bible__chapter')

        expect(chapter).toBeInTheDocument()
    })
})
