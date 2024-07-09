import { ZodType, z } from 'zod';
import { FeedbackEntity } from '@/features/home/feedback/model/FeedbackEntity';

// Валидация формы обратной связи через Zod Schema Validation Library
export const FeedbackFormSchema: ZodType<FeedbackEntity> = z.object({
	username: z
		.string()
		.min(2, {
			message: 'Минимум 2 символа!',
		})
		.trim(),
	email: z
		.string()
		.min(1, {
			message: 'Заполните поле!',
		})
		.trim()
		.toLowerCase(),
	message: z
		.string()
		.min(10, {
			message: 'Минимум 10 символов!',
		})
		.trim(),
});
