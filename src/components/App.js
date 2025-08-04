import { useState } from 'react';
import '../index.css';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

export default function App() {
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
	function handleClearList() {
		if (window.confirm('Are you sure about that? 🤔')) setItems([]);
	}
	return (
		<div className="app">
			<Logo />
			<Form onAddItem={handleAddItem} />
			<PackingList
				items={items}
				onRemoveItem={handleRemoveItem}
				onPackItem={handlePackItem}
				onClearList={handleClearList}
			/>
			<Stats items={items} />
		</div>
	);
}
