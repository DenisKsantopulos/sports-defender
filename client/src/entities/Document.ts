interface Document {
	id: string;
	title: string; // Заголовок документа
	type: string; // Тип документа (статья, кейс или шаблон)
	category: string; // Категория документа (заявление, жалобы и пр)
	size: string; // Размер документа
	link: string; // Ссылка для просмотра в Google Docs
	download_link: string; // Ссылка на скачивание в Google Docs
	instruction_link: string | null; // Ссылка для просмотра инструкции по заполнению шаблона в Google Docs (только для документов с типом шаблон)
	instruction_link_download: string | null; // Ссылка на скачивание инструкции по заполнению шаблона в Google Docs (только для документов с типом шаблон)
}

export default Document;
