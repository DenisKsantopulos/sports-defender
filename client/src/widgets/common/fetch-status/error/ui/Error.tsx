import { memo } from 'react';
import styles from './error.module.scss';

interface ErrorArgumentsType {
	text: string;
}

const Error = memo(({ text }: ErrorArgumentsType): React.ReactElement => {
	return <p className={styles.text}>{text}</p>;
});

export default Error;
