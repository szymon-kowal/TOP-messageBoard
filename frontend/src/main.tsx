import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import './assets/index.css';
import MyRouter from './MyRouter';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={MyRouter} />
	</React.StrictMode>
);
