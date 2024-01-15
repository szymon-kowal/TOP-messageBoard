import { useState } from 'react';
import { DataProps } from './IndexPage';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewPosts: React.FC = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState<DataProps>({
		text: '',
		name: '',
		added: new Date(),
	});

	const handleSetFormData = (
		e: React.ChangeEvent<HTMLInputElement>
	): void => {
		setFormData(prevData => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	): Promise<void> => {
		e.preventDefault();
		axios
			.post(`${import.meta.env.VITE_API_BASE_URL}/api`, formData)
			.then(res => {
				console.log(res);
				navigate('/');
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="formPosts mx-auto my-auto w-full md:w-1/2 lg:w-1/3 p-8">
			<h1 className="text-2xl font-bold mb-6">Post Form</h1>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label
						htmlFor="textInput"
						className="block text-sm font-medium text-gray-700"
					>
						Text
					</label>
					<input
						autoComplete="off"
						required
						id="textInput"
						type="text"
						name="text"
						value={formData.text}
						onInput={handleSetFormData}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
					/>
				</div>
				<div>
					<label
						htmlFor="nameInput"
						className="block text-sm font-medium text-gray-700"
					>
						Name
					</label>
					<input
						autoComplete="off"
						required
						id="nameInput"
						type="text"
						name="name"
						value={formData.name}
						onInput={handleSetFormData}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
					/>
				</div>
				<button
					type="submit"
					className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default NewPosts;
