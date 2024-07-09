import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './top-button.module.scss';
import { useState, useEffect } from 'react';

function TopButton(): React.ReactElement {
	const [isVisible, setIsVisible] = useState<boolean>(false); // Видна ли кнопка "Перейти наверх страницы"

	// Показать/скрыть кнопку
	useEffect(() => {
		function handleScroll(): void {
			if (window.scrollY >= 200) setIsVisible(true);
			else setIsVisible(false);
		}

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Скролим страницу на самый верх
	function handleScrollToTopClick(): void {
		window.scrollTo(0, 0);
	}

	return (
		<button
			className={`${styles.button} ${
				isVisible && styles['button--active']
			}`}
			onClick={handleScrollToTopClick}
		>
			<FontAwesomeIcon icon={faAngleUp} />
		</button>
	);
}

export default TopButton;
