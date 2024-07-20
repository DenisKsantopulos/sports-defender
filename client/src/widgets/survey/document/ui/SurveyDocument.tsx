import Paths from '@/shared/model/data/Paths';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './survey-document.module.scss';
import { useDocumentById } from '@/shared/api/queries';
import Info from '@/widgets/common/fetch-status/info/ui/Info';
import Error from '@/widgets/common/fetch-status/error/ui/Error';

interface SurveyDocumentArgumentsType {
	documentId: string;
}

const SurveyDocument = memo(
	({ documentId }: SurveyDocumentArgumentsType): React.ReactElement => {
		const navigate = useNavigate();

		const { data, isLoading, error } = useDocumentById(documentId); // Необходимо для вывода названия шаблона документа на экран

		if (isLoading) return <Info text='Загрузка шаблона документа...' />;

		if (error)
			return (
				<Error text='При загрузке необходимого шаблона документа возникла ошибка!' />
			);

		return (
			<>
				{data && (
					<p className={styles.text}>
						По результатам анкеты вам необходим следующий шаблон
						документа:{' '}
						<a
							className={styles.link}
							onClick={() =>
								navigate(`${Paths.VIEW_DOCUMENT}/${data.id}`)
							}
						>
							{data.title}
						</a>
						.
					</p>
				)}
			</>
		);
	}
);

export default SurveyDocument;
