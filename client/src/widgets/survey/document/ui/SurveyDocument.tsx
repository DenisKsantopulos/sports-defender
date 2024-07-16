import { memo } from 'react';
import styles from './survey-document.module.scss';

interface SurveyDocumentArgumentsType {
	link: string;
}

const SurveyDocument = memo(
	({ link }: SurveyDocumentArgumentsType): React.ReactElement => {
		return (
			<p className={styles.text}>
				По результатам анкеты вам необходим следующий{' '}
				<a href={link} target='_blank' className={styles.link}>
					шаблон документа
				</a>
				.
			</p>
		);
	}
);

export default SurveyDocument;
