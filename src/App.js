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
	return (
		<section className="add-form">
			<h3>what do you need for your 😍 trip </h3>
		</section>
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
	return (
		<li>
			<input
				type="checkbox"
				id={`${item.id}`}
				name={item.description}
			></input>
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
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
