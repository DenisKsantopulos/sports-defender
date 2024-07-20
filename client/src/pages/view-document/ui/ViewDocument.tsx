import TopButton from '@/features/common/top-button/ui/TopButton';
import DocumentInstruction from '@/features/document-view/document-instruction/ui/DocumentInstruction';
import { useDocumentById } from '@/shared/api/queries';
import useAos from '@/shared/model/hooks/useAos';
import Error from '@/widgets/common/fetch-status/error/ui/Error';
import Info from '@/widgets/common/fetch-status/info/ui/Info';
import { useParams } from 'react-router-dom';
import DocumentDownload from '@/features/document-view/document-download/ui/DocumentDownload';
import Footer from '@/widgets/common/footer/ui/Footer';
import styles from './view-document.module.scss';

function ViewDocument(): React.ReactElement {
	useAos();

	const { id } = useParams(); // ID документа

	const { data, isLoading, error } = useDocumentById(id); // Достаем документ по ID

	return (
		<>
			<TopButton />
			<div className={styles.wrapper}>
				<section className={styles.container} data-aos='fade-up'>
					{isLoading && <Info text='Загрузка документа...' />}
					{error && (
						<Error text='Во время загрузки документа произошла ошибка!' />
					)}
					{data && (
						<>
							<h2 className={styles['view-document__title']}>
								{data.title}
							</h2>
							<p className={styles['view-document__meta']}>
								Тип: {data.type}
							</p>
							<p className={styles['view-document__meta']}>
								Категория: {data.category}
							</p>
							<p className={styles['view-document__meta']}>
								Размер: {data.size}
							</p>
							<DocumentDownload
								downloadLink={data.download_link}
								text='Скачать документ'
							/>
							<iframe
								src={`${data.link}?&rm=minimal&embedded=true`}
								className={styles['view-document__frame']}
							></iframe>
							{data.instruction_link &&
								data.instruction_link.length !== 0 && (
									<DocumentInstruction
										link={data.instruction_link}
										downloadLink={
											data.instruction_link_download!
										}
									/>
								)}
						</>
					)}
				</section>
				<Footer />
			</div>
		</>
	);
}

export default ViewDocument;
