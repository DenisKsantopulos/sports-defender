import styles from './footer.module.scss';

function Footer(): React.ReactElement {
	return (
		<footer className={styles.footer}>
			<p className={styles['footer__message']}>
				<span className={styles['footer__warning']}>ВНИМАНИЕ! </span>
				Сайт не предоставляет юридических консультаций, это просто
				справочный материал.
			</p>
			<p className={styles['footer__commercial']}>
				&copy; 2024 Спортивный Защитник
			</p>
		</footer>
	);
}

export default Footer;
