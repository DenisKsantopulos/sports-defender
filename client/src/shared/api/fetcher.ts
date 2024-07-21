import axios, { AxiosInstance } from 'axios';

// const BACKEND_URL: string = 'http://localhost:3001'; // Локальный
const BACKEND_URL: string = 'https://sports-defender-server.na4u.ru'; // Для хостинга

export const axiosInstance: AxiosInstance = axios.create({
	baseURL: BACKEND_URL,
});

const fetcher = (endpoint: string) =>
	axiosInstance.get(endpoint).then(response => response.data);

export default fetcher;
