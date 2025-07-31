import { useState } from 'react';
import './index.css';

const initialItems = [
	{ id: 1, description: 'Passports', quantity: 2, packed: false },
	{ id: 2, description: 'Socks', quantity: 12, packed: false },
];

function App() {
	return (
		<div className="app">
			<Logo />
			<Form />
			<PackingList />
			<Stats />
		</div>
	);
}

function Logo() {
	return <h1>🌴Far Away💼</h1>;
}

function Form() {
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
		console.log(newItem);

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

function PackingList() {
	return (
		<div className="list">
			<ul>
				{initialItems.map(item => (
					<Item item={item} key={item.id} />
				))}
			</ul>
		</div>
	);
}
function Item({ item }) {
	const [packed, setPacked] = useState(false);
	return (
		<li>
			<input
				type="checkbox"
				id={`${item.id}`}
				name={item.description}
				value={packed}
				onChange={() => {
					setPacked(!packed);
					item.packed = !packed;
				}}
			></input>
			<span style={packed ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.description}
			</span>
			<button style={{ color: 'red', fontSize: '40px' }}>&times;</button>
		</li>
	);
}
function Stats() {
	return (
		<footer className="stats">
			<em>
				You Have X items on your list and you have already packed X (X%)
			</em>
		</footer>
	);
}
export default App;
