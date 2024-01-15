import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Base: React.FC = () => {
	return (
		<div className="webapp flex flex-col min-h-screen">
			<div className="header py-4 bg-blue-200 flex justify-between items-center">
				<h1 className="pl-2 text-lg font-bold flex-1">
					{' '}
					React + TS + Express App
				</h1>
				<div>
					<Link
						to="/new"
						className="text-blue-500 hover:text-blue-700 mx-2"
					>
						Link to new post
					</Link>
					<Link
						to="/"
						className="text-blue-500 hover:text-blue-700 mx-2"
					>
						Index page
					</Link>
				</div>
			</div>
			<div className="content my-8 flex-1">
				<Outlet></Outlet>
			</div>
			<div className="footer py-4 bg-gray-200 text-center">Footer</div>
		</div>
	);
};

export default Base;
