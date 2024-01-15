import { createBrowserRouter } from 'react-router-dom';
import Base from './components/Base';
import IndexPage from './components/IndexPage';
import NewPosts from './components/NewPosts';

// Index page - Retrive the data from server
// new page - add form to send data to server

const MyRouter = createBrowserRouter([
	{
		path: '/',
		element: <Base />,
		children: [
			{ index: true, element: <IndexPage /> },
			{
				path: '/new',
				element: <NewPosts />,
			},
		],
	},
]);

export default MyRouter;
