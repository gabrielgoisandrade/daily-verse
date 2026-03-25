const insertZero = (value: number) => String(value).padStart(2, '0')

type FormattedDate = `${string}/${string}/${string}`

export const formatDate = (rawDate: Date): FormattedDate => {
    const { day, month, year } = {
        day: insertZero(rawDate.getDate()),
        month: insertZero(rawDate.getMonth()),
        year: rawDate.getFullYear(),
    }

	console.log(day, month, year)


    return `${day}/${month}/${year}`
}
