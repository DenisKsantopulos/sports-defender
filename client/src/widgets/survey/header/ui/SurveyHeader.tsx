import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import styles from './survey-header.module.scss';

function SurveyHeader(): React.ReactElement {
	return (
		<article className={styles['survey__header']}>
			<h2 className={styles['survey__question']}>С чем нужна помощь?</h2>
			<div className={styles['survey__warning']}>
				<h6 className={styles['warning__title']}>
					<FontAwesomeIcon
						icon={faCircleExclamation}
						className={styles['warning__icon']}
					/>
					Справка!
				</h6>
				<p className={styles['warning__message']}>
					Гарантийный срок - период, в течение которого покупатель
					имеет право потребовать от продавца устранения обнаруженных
					недостатков (н/п, замена некачественных деталей).
					<br />
					Обычно прописан в договоре купли-продажи или отдельном
					документе (гарантийном талоне). Утрата документов не лишает
					права требовать устранения недостатков в течение
					гарантийного срока.
				</p>
			</div>
		</article>
	);
}

export default SurveyHeader;
