import { memo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styles from './accordion-item.module.scss';

interface AccordionItemArgumentsType {
	question: string;
	answer: string;
}

const AccordionItem = memo(
	({ question, answer }: AccordionItemArgumentsType): React.ReactElement => {
		const [isOpen, setIsOpen] = useState<boolean>(false); // Изначально выпадающий список закрыт

		function handleToggleClick(): void {
			setIsOpen(!isOpen);
		}

		return (
			<div className={styles.accordion}>
				<div
					className={`${styles['accordion__item']} ${
						isOpen && styles['accordion__item--active']
					}`}
					onClick={handleToggleClick}
				>
					<p className={styles['accordion__question']}>{question}</p>
					{isOpen ? (
						<FontAwesomeIcon icon={faChevronUp} />
					) : (
						<FontAwesomeIcon icon={faChevronDown} />
					)}
				</div>
				<div
					className={`${styles['accordion__content']} ${
						isOpen && styles['accordion__content--active']
					}`}
				>
					<p className={styles['accordion__answer']}>{answer}</p>
				</div>
			</div>
		);
	}
);

export default AccordionItem;
