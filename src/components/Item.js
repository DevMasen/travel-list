export default function Item({ item, onRemoveItem, onPackItem }) {
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
