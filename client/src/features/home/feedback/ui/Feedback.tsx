import { FeedbackEntity } from '@/features/home/feedback/model/FeedbackEntity';
import { FeedbackFormSchema } from '@/features/home/feedback/model/FeedbackFormSchema';
import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './feedback.module.scss';

function Feedback(): React.ReactElement {
	// EmailJS API ключи доступа
	const PUBLIC_KEY: string = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;
	const SERVICE_ID: string = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
	const TEMPLATE_ID: string = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;

	const [isEmailSending, setIsEmailSending] = useState<boolean>(false); // Если email отправляется, то покажем индикатор загрузки вместо кнопки

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FeedbackEntity>({
		resolver: zodResolver(FeedbackFormSchema),
	});

	// Инициализация EmailJS библиотеки
	useEffect(() => {
		emailjs.init(PUBLIC_KEY);
	}, [PUBLIC_KEY]);

	// Отправляем письмо пользователя через EmailJS к нам на почту
	const onSuccessFormSubmit: SubmitHandler<FeedbackEntity> = data => {
		setIsEmailSending(true);

		// Отправляем сообщение на почту
		emailjs
			.send(SERVICE_ID, TEMPLATE_ID, {
				username: data.username.trim(),
				email: data.email.trim(),
				message: data.message.trim(),
			})
			.then(() => {
				// Успешно
				alert('Ваша заявка была успешно отправлена!');

				reset(); // Чистим форму обратной связи
			})
			.catch((error: Error) => {
				// Неуспешно
				alert('Что-то пошло не так :(');
				console.log(error);
			})
			.finally(() => {
				setIsEmailSending(false);
			});
	};

	return (
		<form
			className={styles['form']}
			onSubmit={handleSubmit(onSuccessFormSubmit)}
		>
			<div className={styles['form__container']}>
				<div>
					{errors.username && (
						<span className={styles['form__error']}>
							{errors.username.message}
						</span>
					)}
					<input
						type='text'
						placeholder='Как Вас зовут?'
						className={styles['form__username']}
						{...register('username')}
					/>
				</div>
				<div>
					{errors.email && (
						<span className={styles['form__error']}>
							{errors.email.message}
						</span>
					)}
					<input
						type='email'
						placeholder='Введите адрес электронной почты'
						className={styles['form__email']}
						{...register('email')}
					/>
				</div>
			</div>
			<div>
				{errors.message && (
					<span className={styles['form__error']}>
						{errors.message.message}
					</span>
				)}
				<div className={styles['form__container-message']}>
					<textarea
						placeholder='Опишите суть проблемы...'
						className={styles['form__message']}
						{...register('message')}
					></textarea>
				</div>
			</div>
			<input
				type='submit'
				value={isEmailSending ? 'Отправка...' : 'Отправить'}
				disabled={isEmailSending}
				className={styles['form__submit']}
			/>
		</form>
	);
}

export default Feedback;
