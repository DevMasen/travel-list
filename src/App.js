import { useState } from 'react';
import './index.css';

function App() {
	const [items, setItems] = useState([]);

	function handleAddItem(item) {
		setItems(curItems => [...curItems, item]);
	}
	function handleRemoveItem(id) {
		setItems(curItems => curItems.filter(item => item.id !== id));
	}
	function handlePacked(id) {
		return;
	}
	return (
		<div className="app">
			<Logo />
			<Form onHandleAddItem={handleAddItem} />
			<PackingList
				items={items}
				onHandleRemoveItem={handleRemoveItem}
				onHandlePacked={handlePacked}
			/>
			<Stats />
		</div>
	);
}

function Logo() {
	return <h1>🌴Far Away💼</h1>;
}

function Form({ onHandleAddItem }) {
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

		onHandleAddItem(newItem);

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

function PackingList({ items, onHandleRemoveItem, onHandlePacked }) {
	return (
		<div className="list">
			<ul>
				{items.map(item => (
					<Item
						item={item}
						onHandleRemoveItem={onHandleRemoveItem}
						onHandlePacked={onHandlePacked}
						key={item.id}
					/>
				))}
			</ul>
		</div>
	);
}
function Item({ item, onHandleRemoveItem, onHandlePacked }) {
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
					onHandlePacked(item.id);
				}}
			></input>
			<span style={packed ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.description}
			</span>
			<button
				onClick={() => onHandleRemoveItem(item.id)}
				style={{ color: 'red', fontSize: '40px' }}
			>
				&times;
			</button>
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
