export default function Item({item, onDeleteItem, onToggleItem}) {
    return (
        // child to parent communication
        <li>
            <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)}/>
            <span style={item.packed ? {textDecoration: "line-through"} : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    );
}