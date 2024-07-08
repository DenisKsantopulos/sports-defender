/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';

const NotFound = lazy(() => import('@/pages/not-found/ui/NotFound'));
const Home = lazy(() => import('@/pages/home/ui/Home'));
const Search = lazy(() => import('@/pages/search/ui/Search'));
const Survey = lazy(() => import('@/pages/survey/ui/Survey'));

interface RouteType {
	path: string;
	element: () => React.ReactElement;
}

const routes: RouteType[] = [
	{
		path: '*',
		element: () => <NotFound />,
	},
	{
		path: '/',
		element: () => <Home />,
	},
	{
		path: '/search',
		element: () => <Search />,
	},
	{
		path: '/survey',
		element: () => <Survey />,
	},
];

export default routes;
