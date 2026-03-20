import styles from './bible.module.scss'

export const Bible = () => {
    return <section className={styles.bible}>
		<div className={styles.bible__book}>book</div>
		<div className={styles.bible__chapter}>chapter</div>
		<div className={styles.bible__verse}>verse</div>
	</section>
}
