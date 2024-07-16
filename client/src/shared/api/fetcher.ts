import axios, { AxiosInstance } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
	baseURL: 'http://localhost:3001',
});

const fetcher = (endpoint: string) =>
	axiosInstance.get(endpoint).then(response => response.data);

export default fetcher;
