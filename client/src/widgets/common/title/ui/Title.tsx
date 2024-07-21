import { memo } from 'react';
import styles from './title.module.scss';

interface TitleArgumentsType {
	title: string;
	children: React.ReactNode;
}

const Title = memo(
	({ title, children }: TitleArgumentsType): React.ReactElement => {
		return (
			<div data-aos='fade-right'>
				<h2 className={styles['title__main-text']}>{title}</h2>
				<p className={styles['title__description']}>{children}</p>
			</div>
		);
	}
);

export default Title;
