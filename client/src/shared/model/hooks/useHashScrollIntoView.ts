import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useHashScrollIntoView(): void {
	const location = useLocation();

	// Плавно скролим до определенного блока на странице, если он прописан якорем в URL
	useEffect(() => {
		if (location.hash) {
			const element: HTMLElement = document.getElementById(
				location.hash.substring(1)
			) as HTMLElement;

			element.scrollIntoView(true);
		}
	}, [location]);
}
