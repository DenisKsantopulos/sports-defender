import { memo } from 'react';
import styles from './info.module.scss';

interface InfoArgumentsType {
	text: string;
}

const Info = memo(({ text }: InfoArgumentsType): React.ReactElement => {
	return <p className={styles.text}>{text}</p>;
});

export default Info;
