import { Bible } from './bible/Bible'
import styles from './page.module.scss'

export default function Home() {
    return (
        <main className={styles.page}>
            <Bible />
        </main>
    )
}
