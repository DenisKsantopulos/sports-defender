import Paths from '@/shared/model/data/Paths';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './survey-document.module.scss';

interface SurveyDocumentArgumentsType {
	documentId: string;
}

const SurveyDocument = memo(
	({ documentId }: SurveyDocumentArgumentsType): React.ReactElement => {
		const navigate = useNavigate();

		return (
			<p className={styles.text}>
				По результатам анкеты вам необходим следующий{' '}
				<a
					className={styles.link}
					onClick={() =>
						navigate(`${Paths.VIEW_DOCUMENT}/${documentId}`)
					}
				>
					шаблон документа
				</a>
				.
			</p>
		);
	}
);

export default SurveyDocument;
