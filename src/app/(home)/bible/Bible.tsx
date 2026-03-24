import styles from './bible.module.scss'
import { generateVerse } from './getRandomVerse'

export const Bible = () => {
	const { book, chapter, verse } = generateVerse()

    return (
        <section className={styles.bible}>
            <div className={styles.bible__book}>{book}</div>
            <div className={styles.bible__chapter}>Cap. {chapter}</div>
            <div className={styles.bible__verse}>Ver. {verse}</div>
        </section>
    )
}
