/* eslint-disable react-refresh/only-export-components */
import Paths from '@/shared/model/data/Paths';
import { lazy } from 'react';

const NotFound = lazy(() => import('@/pages/not-found/ui/NotFound'));
const Home = lazy(() => import('@/pages/home/ui/Home'));
const Search = lazy(() => import('@/pages/search/ui/Search'));
const Survey = lazy(() => import('@/pages/survey/ui/Survey'));
const DocumentTemplates = lazy(
	() => import('@/pages/document-templates/ui/DocumentTemplates')
);

interface RouteType {
	path: string;
	element: () => React.ReactElement;
}

// Список всех React Routes
const routes: RouteType[] = [
	{
		path: Paths.NOT_FOUND,
		element: () => <NotFound />,
	},
	{
		path: Paths.HOME,
		element: () => <Home />,
	},
	{
		path: Paths.SEARCH,
		element: () => <Search />,
	},
	{
		path: Paths.SURVEY,
		element: () => <Survey />,
	},
	{
		path: Paths.DOCUMENT_TEMPLATES,
		element: () => <DocumentTemplates />,
	},
];

export default routes;
