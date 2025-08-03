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
	function handlePackItem(id) {
		setItems(curItems =>
			curItems.map(item =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}
	return (
		<div className="app">
			<Logo />
			<Form onAddItem={handleAddItem} />
			<PackingList
				items={items}
				onRemoveItem={handleRemoveItem}
				onPackItem={handlePackItem}
			/>
			<Stats items={items} />
		</div>
	);
}

function Logo() {
	return <h1>🌴Far Away💼</h1>;
}

function Form({ onAddItem }) {
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

function PackingList({ items, onRemoveItem, onPackItem }) {
	return (
		<div className="list">
			<ul>
				{items.map(item => (
					<Item
						item={item}
						onRemoveItem={onRemoveItem}
						onPackItem={onPackItem}
						key={item.id}
					/>
				))}
			</ul>
		</div>
	);
}
function Item({ item, onRemoveItem, onPackItem }) {
	return (
		<li>
			<input
				type="checkbox"
				id={`${item.id}`}
				name={item.description}
				value={item.packed}
				onChange={() => onPackItem(item.id)}
			></input>
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.description}
			</span>
			<button
				onClick={() => onRemoveItem(item.id)}
				style={{ color: 'red', fontSize: '40px' }}
			>
				&times;
			</button>
		</li>
	);
}
function Stats({ items }) {
	const totalCount = items.length;
	const packedCount = items.reduce(
		(acc, item) => (item.packed ? acc + 1 : acc),
		0
	);
	const packedPercent = Math.floor((packedCount / totalCount) * 100);
	return (
		<footer className="stats">
			<em>
				You Have {totalCount} items on your list and you have already
				packed {packedCount} ({isNaN(packedPercent) ? 0 : packedPercent}
				%)
			</em>
		</footer>
	);
}
export default App;
