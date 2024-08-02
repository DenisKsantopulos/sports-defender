import axios, { AxiosInstance } from 'axios';

const BACKEND_URL: string = '/api';

export const axiosInstance: AxiosInstance = axios.create({
	baseURL: BACKEND_URL,
});

const fetcher = (endpoint: string) =>
	axiosInstance.get(endpoint).then(response => response.data);

export default fetcher;
