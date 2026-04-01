'use client'

import { Verse } from '@/@types/Bible'
import { useEffect, useState } from 'react'
import styles from './bible.module.scss'
import { formatDate } from './formatDate'
import { generateVerse } from './generateVerse'

export const Bible = () => {
    const [state, setState] = useState<Verse>()

    useEffect(() => {
        const today = formatDate(new Date())
        const stored = localStorage.getItem('last_verse')

        if (stored) {
            const parsed = JSON.parse(stored) as Verse

            if (parsed.createdAt === today) {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setState(JSON.parse(stored))
				return
            }
        }

        localStorage.setItem('last_verse', JSON.stringify(generateVerse()))
        setState(generateVerse())
    }, [])

    return (
        <section className={styles.bible}>
            <div className={styles.bible__book}>{state?.book}</div>
            <div className={styles.bible__chapter}>
                {state?.chapter}:{state?.verse}
            </div>
        </section>
    )
}
