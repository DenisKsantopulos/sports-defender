import { memo } from 'react';
import styles from './survey-header.module.scss';

interface SurveyHeaderArgumentsType {
	title: string;
	description?: string; // Описание для справки, справки может и не быть для вопроса.
}

const SurveyHeader = memo(
	({ title, description }: SurveyHeaderArgumentsType): React.ReactElement => {
		return (
			<article className={styles['survey__header']}>
				<h2
					className={styles['survey__question']}
					dangerouslySetInnerHTML={{ __html: title }}
				/>
				{description !== undefined && (
					<div className={styles['survey__warning']}>
						<h6 className={styles['warning__title']}>Справка</h6>
						<p
							className={styles['warning__message']}
							dangerouslySetInnerHTML={{ __html: description }}
						/>
					</div>
				)}
			</article>
		);
	}
);

export default SurveyHeader;
