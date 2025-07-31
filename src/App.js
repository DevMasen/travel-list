import 'index.css';

function App() {
	return (
		<div className="App">
			<Logo />
			<Form />
			<PackingList />
			<Stats />
		</div>
	);
}

function Logo() {
	return <header></header>;
}

function Form() {
	return <section></section>;
}

function PackingList() {
	return (
		<main>
			<Item />
		</main>
	);
}
function Item() {
	return <div></div>;
}
function Stats() {
	return <footer></footer>;
}
export default App;
