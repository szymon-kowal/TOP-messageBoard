import axios from 'axios';
import { useEffect, useState } from 'react';

export type DataProps = {
	text: string;
	name: string;
	added: Date;
};

const formatDate = (dateString: string): string => {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	});
};

const IndexPage: React.FC = () => {
	const [isPageLoading, setIsPageLoading] = useState<boolean>(true);
	const [fetchedData, setFetchedData] = useState<DataProps[]>([]);

	useEffect(() => {
		axios
			.get(`${import.meta.env.VITE_API_BASE_URL}/api`)
			.then(res => {
				setIsPageLoading(false);
				setFetchedData(res.data as DataProps[]);
			})
			.catch(e => console.log(e));
	}, []);

	return (
		<>
			<div className="loading text-center my-4">
				{isPageLoading ? 'Loading...' : ''}
			</div>
			<div className="data-list space-y-2 mx-auto w-full md:w-2/3 px-4">
				{fetchedData.map(item => (
					<div
						key={item.name}
						className="p-4 border border-gray-300 rounded-md"
					>
						<div>{item.text}</div>
						<div>{item.name}</div>
						<div>{formatDate(`${item.added}`)}</div>
					</div>
				))}
			</div>
		</>
	);
};

export default IndexPage;
