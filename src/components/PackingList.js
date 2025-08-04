import { useState } from 'react';
import Item from './Item';

export default function PackingList({
	items,
	onRemoveItem,
	onPackItem,
	onClearList,
}) {
	const [sortBy, setSortBy] = useState('input');

	let sortedItems;

	if (sortBy === 'input') sortedItems = items;
	else if (sortBy === 'alphabet')
		sortedItems = items
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));
	else if (sortBy === 'packed')
		sortedItems = items
			.slice()
			.sort((a, b) => Number(b.packed) - Number(a.packed));

	return (
		<div className="list">
			<ul>
				{sortedItems.map(item => (
					<Item
						item={item}
						onRemoveItem={onRemoveItem}
						onPackItem={onPackItem}
						key={item.id}
					/>
				))}
			</ul>

			<div className="actions">
				<select
					value={sortBy}
					onChange={e => setSortBy(e.target.value)}
				>
					<option value="input">Sort by user input</option>
					<option value="alphabet">Sort by alphabet</option>
					<option value="packed">Sort by packed</option>
				</select>

				<button onClick={onClearList}>clear list</button>
			</div>
		</div>
	);
}
