import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// Настройка анимации AOS для блоков страницы
export default function useAos(): void {
	return useEffect(() => {
		Aos.init({
			once: true,
			duration: 600,
			delay: 200,
		});

		Aos.refresh();
	}, []);
}
