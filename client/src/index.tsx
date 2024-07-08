import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from '@/app/model/routes';
import Loader from '@/widgets/common/ui/loader/Loader';
import Sidebar from '@/widgets/common/ui/sidebar/Sidebar';
import '@/app/ui/styles/index.scss';

interface RouteType {
	path: string;
	element: () => React.ReactElement;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<div className='main-container'>
				<Sidebar />
				<Routes>
					{routes.map((route: RouteType) => (
						<Route
							key={route.path}
							path={route.path}
							element={
								<Suspense fallback={<Loader />}>
									{route.element()}
								</Suspense>
							}
						/>
					))}
				</Routes>
			</div>
		</BrowserRouter>
	</React.StrictMode>
);
