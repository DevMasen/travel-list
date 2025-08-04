import { useState } from 'react';

export default function Form({ onAddItem }) {
	const [quantity, setQuantity] = useState(1);
	const [description, setDescription] = useState('');

	function handleSubmit(e) {
		e.preventDefault();

		if (!description) return;

		const newItem = {
			id: Date.now(),
			description: description,
			quantity: quantity,
			packed: false,
		};

		onAddItem(newItem);

		setDescription('');
		setQuantity(1);
	}
	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>what do you need for your 😍 trip? </h3>
			<select
				id="quantity"
				value={quantity}
				onChange={e => setQuantity(Number(e.target.value))}
			>
				{Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
					<option value={num} key={num}>
						{num}
					</option>
				))}
			</select>
			<input
				id="description"
				type="text"
				placeholder="item..."
				value={description}
				onChange={e => {
					setDescription(e.target.value);
				}}
			></input>
			<button>Add</button>
		</form>
	);
}
