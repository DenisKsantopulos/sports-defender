import { memo } from 'react';
import styles from './title.module.scss';

interface TitleArgumentsType {
	title: string;
}

const Title = memo(({ title }: TitleArgumentsType): React.ReactElement => {
	return (
		<div data-aos='fade-right'>
			<h2 className={styles['title__main-text']}>{title}</h2>
		</div>
	);
});

export default Title;
