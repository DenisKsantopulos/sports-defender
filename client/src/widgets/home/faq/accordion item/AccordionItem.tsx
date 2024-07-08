import { memo } from 'react';
import ToggleAccordion from '@/features/home/accordion/ToggleAccordion';
import styles from './accordion-item.module.scss';

interface AccordionItemArgumentsType {
	question: string;
	answer: string;
}

function AccordionItem({
	question,
	answer,
}: AccordionItemArgumentsType): React.ReactElement {
	return (
		<div className={styles.accordion}>
			<ToggleAccordion question={question} answer={answer} />
		</div>
	);
}

export default memo(AccordionItem);
