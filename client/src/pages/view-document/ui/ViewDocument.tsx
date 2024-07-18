import { useParams } from 'react-router-dom';
import TopButton from '@/features/common/top-button/ui/TopButton';
import styles from './view-document.module.scss';

function ViewDocument(): React.ReactElement {
	const { id } = useParams();

	return (
		<>
			<TopButton />
			<div>
				<section className={styles.container}>{id}</section>
			</div>
		</>
	);
}

export default ViewDocument;
