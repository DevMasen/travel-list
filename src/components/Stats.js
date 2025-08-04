export default function Stats({ items }) {
	if (!items.length)
		return (
			<p className="stats">
				Start adding some items to your packing list! 🚀
			</p>
		);

	const totalCount = items.length;
	const packedCount = items.reduce(
		(acc, item) => (item.packed ? acc + 1 : acc),
		0
	);
	const packedPercent = Math.round((packedCount / totalCount) * 100);
	return (
		<footer className="stats">
			<em>
				{packedPercent === 100
					? 'You got everything! Ready to go ✈️'
					: `💼 You Have ${totalCount} items on your list and you have already
				packed ${packedCount} (${packedPercent}%)`}
			</em>
		</footer>
	);
}
