import { memo, useState } from 'react';
import styles from './toggle-accordion.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

interface ToggleAccordionArgumentsType {
	question: string;
	answer: string;
}

const ToggleAccordion = memo(
	({
		question,
		answer,
	}: ToggleAccordionArgumentsType): React.ReactElement => {
		const [isOpen, setIsOpen] = useState<boolean>(false); // Изначально выпадающий список закрыт

		function handleToggleClick(): void {
			setIsOpen(!isOpen);
		}

		return (
			<>
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
			</>
		);
	}
);

export default ToggleAccordion;
