interface FaqDataType {
	id: number;
	question: string;
	answer: string;
}

// Часто задаваемые вопросы (выпадающий список: вопрос - ответ)
const faqData: FaqDataType[] = [
	{
		id: 1,
		question:
			'Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, necessitatibus.',
		answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quae consequuntur, molestias similique necessitatibus fugiat voluptatibus odit libero quam consequatur!',
	},
	{
		id: 2,
		question: 'Lorem ipsum amet.',
		answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quae consequuntur, molestias similique necessitatibus fugiat voluptatibus odit libero quam consequatur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero omnis, aliquid officiis at quasi doloribus. Cum natus laborum vel fugit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam exercitationem quibusdam sapiente dolore. Ad quasi, odit ducimus temporibus doloribus recusandae modi nisi officiis fuga laborum quidem voluptate? Laudantium, architecto aliquid?',
	},
	{
		id: 3,
		question:
			'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio aut explicabo veniam harum eum pariatur natus illum neque itaque?',
		answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quae consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga neque inventore delectus illo nostrum reprehenderit.',
	},
	{
		id: 4,
		question:
			'Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing.',
		answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quae consequuntur, molestias similique necessitatibus fugiat voluptatibus odit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem labore velit aut amet sapiente. Sapiente, ea sit. Eos, iure cum rerum, quisquam, inventore natus ducimus minima quod eaque veniam corporis.',
	},
	{
		id: 5,
		question:
			'Lorem ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.',
		answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quae consequuntur, molestias similique necessitatibus fugiat voluptatibus odit libero quam consequatur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis dignissimos temporibus error!',
	},
	{
		id: 6,
		question: 'Lorem ipsum dolor sit amet. Lorem, ipsum dolor.',
		answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quae consequuntur, molestias similique necessitatibus fugiat voluptatibus odit libero quam consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt illo blanditiis architecto?',
	},
];

export default faqData;
