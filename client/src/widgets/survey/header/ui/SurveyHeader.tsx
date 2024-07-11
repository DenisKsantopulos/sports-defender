import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import styles from './survey-header.module.scss';
import { memo } from 'react';

interface SurveyHeaderArgumentsType {
	title: string;
	children?: React.ReactNode; // Описание для справки, справки может и не быть для вопроса.
}

const SurveyHeader = memo(
	({ title, children }: SurveyHeaderArgumentsType): React.ReactElement => {
		return (
			<article className={styles['survey__header']}>
				<h2 className={styles['survey__question']}>{title}</h2>
				{children !== undefined && (
					<div className={styles['survey__warning']}>
						<h6 className={styles['warning__title']}>
							<FontAwesomeIcon
								icon={faCircleExclamation}
								className={styles['warning__icon']}
							/>
							Справка!
						</h6>
						<p className={styles['warning__message']}>{children}</p>
					</div>
				)}
			</article>
		);
	}
);

export default SurveyHeader;
