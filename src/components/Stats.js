export default function Stats({items}) {
    if (!items.length) return <em className="stats">Start adding some items to your packing list 🚀</em>

    const numItems = items.length;
    const packedItems = items.filter(item => item.packed).length;
    const percentage = Math.round(packedItems / numItems * 100);

    return (
        <footer className="stats">
            <em>
                {percentage === 100 ? "You packed everything! Ready to go ✈" : `You have ${numItems} items on your list, and you already
                packed ${packedItems} (${percentage}%)`}
            </em>
        </footer>
    );
}