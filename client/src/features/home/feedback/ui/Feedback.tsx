import { SubmitHandler, useForm } from 'react-hook-form';
import { FeedbackEntity } from '@/features/home/feedback/model/FeedbackEntity';
import { FeedbackFormSchema } from '@/features/home/feedback/model/FeedbackFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './feedback.module.scss';

function Feedback(): React.ReactElement {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FeedbackEntity>({
		resolver: zodResolver(FeedbackFormSchema),
	});

	// При успешной валидации чистим поля и отправляем данные на сервер
	// TODO: Отправлять данные на сервер!
	const onSuccessFormSubmit: SubmitHandler<FeedbackEntity> = data => {
		reset();

		console.log('----------------------------------------------------');
		console.log(`React Hook Form | USERNAME: ${data.username}`);
		console.log(`React Hook Form | EMAil: ${data.email}`);
		console.log(`React Hook Form | MESSAGE: ${data.message}`);
		console.log('----------------------------------------------------');
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
				value='Отправить'
				className={styles['form__submit']}
			/>
		</form>
	);
}

export default Feedback;
