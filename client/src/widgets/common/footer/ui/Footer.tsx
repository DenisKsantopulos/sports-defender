import styles from './footer.module.scss';

function Footer(): React.ReactElement {
	return (
		<footer className={styles.footer}>
			<p className={styles['footer__message']}>
				Размещенные материалы носят справочный характер.
			</p>
			<p className={styles['footer__commercial']}>
				&copy; 2024 Спортивный Защитник
			</p>
		</footer>
	);
}

export default Footer;
