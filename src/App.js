import './index.css';

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
		<main className="list">
			List
			<Item />
		</main>
	);
}
function Item() {
	return <div></div>;
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
