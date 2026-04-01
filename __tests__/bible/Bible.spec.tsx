import { Bible } from '@/app/(home)/bible/Bible'
import { formatDate } from '@/app/(home)/bible/formatDate'
import { render } from '@testing-library/react'

describe('Bible', () => {
    beforeEach(() => {
        localStorage.clear()
    })

    afterAll(() => {
        jest.clearAllMocks()
    })

    it('should render the component', () => {
        const container = render(<Bible />)
        expect(container).not.toBeNull()
    })

    it('should set a new item if no previous value exists', () => {
        const spy = jest.spyOn(Storage.prototype, 'setItem')

        render(<Bible />)

        const result = localStorage.getItem('last_verse')

        expect(spy).toHaveBeenCalled()
        expect(result).not.toBeNull()
    })

    it('should return the stored value if a previous value exists and the date is the same', () => {
        const value = JSON.stringify({
            book: 'book',
            chapter: '0',
            verse: '0',
            createdAt: formatDate(new Date(Date.now())),
        })

        localStorage.setItem('last_verse', value)

        const spySet = jest.spyOn(Storage.prototype, 'setItem')

        render(<Bible />)

        const result = localStorage.getItem('last_verse')

        expect(spySet).not.toHaveBeenCalledWith('last_verse')
        expect(result).toEqual(value)
    })

    it('should update the stored value if a previous value exists and the date is different', () => {
        const currentValue = JSON.stringify({
            book: 'book',
            chapter: '0',
            verse: '0',
            createdAt: formatDate(new Date(2026, 3, 30)),
        })

        const newValue = JSON.stringify({
            book: 'new book',
            chapter: '1',
            verse: '1',
            createdAt: formatDate(new Date(Date.now())),
        })

        localStorage.setItem('last_verse', currentValue)

        const spySet = jest.spyOn(Storage.prototype, 'setItem')
        jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(newValue)

        render(<Bible />)

        const result = localStorage.getItem('last_verse')

        expect(spySet).toHaveBeenCalledWith('last_verse', newValue)
        expect(result).toEqual(newValue)
    })

    it('should render a book', () => {
        const container = render(<Bible />)
        const book = container.querySelector('.bible__book')

        expect(book).toBeInTheDocument()
    })

    it('should render a chapter', () => {
        const container = render(<Bible />)
        const chapter = container.querySelector('.bible__chapter')

        expect(chapter).toBeInTheDocument()
    })
})
