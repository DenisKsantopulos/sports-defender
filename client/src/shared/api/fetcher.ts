import axios, { AxiosInstance } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com', // TODO: change to our backend URL
});

const fetcher = (endpoint: string) =>
	axiosInstance.get(endpoint).then(response => response.data);

export default fetcher;
