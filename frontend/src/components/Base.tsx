import { Outlet } from 'react-router-dom';
import '../assets/App.css';

const Base: React.FC = () => {
	return (
		<div className="container">
			<div className="header">Header</div>
			<div className="content">
				<Outlet></Outlet>
			</div>
			<div className="footer">Footer</div>
		</div>
	);
};

export default Base;
