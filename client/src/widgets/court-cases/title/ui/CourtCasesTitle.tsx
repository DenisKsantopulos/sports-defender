import useAos from '@/shared/model/hooks/useAos';
import styles from './court-cases-title.module.scss';

function CourtCasesTitle(): React.ReactElement {
	useAos();

	return (
		<div data-aos='fade-right'>
			<h2 className={styles['court-cases__title']}>Судебные кейсы</h2>
			<p className={styles['court-cases__description']}>
				Данный раздел предназначен для чтения нужного вами судебного
				кейса, который поможет защитить ваши права в сфере защиты прав
				потребителей.
			</p>
		</div>
	);
}

export default CourtCasesTitle;
