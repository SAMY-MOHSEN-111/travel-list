import {useState} from "react";
import Item from "./Item";

export default function PackingList({items, onDeleteItem, onToggleItem, onClearList}) {
    const [sortBy, setSortBy] = useState("input");
    // derived state
    let sortedItems;
    if (sortBy === 'input') sortedItems = items;
    if (sortBy === 'description') sortedItems = items.slice().sort((e1, e2) => e1.description.localeCompare(e2.description));
    if (sortBy === 'packed') sortedItems = items.slice().sort((e1, e2) => Number(e1.packed) - Number(e2.packed));
    return (
        <div className="list">
            <ul>
                {/* child to parent communication*/}
                {sortedItems.map((item) => (
                    <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>
                ))}
            </ul>
            <div className="actions">
                <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={onClearList}>Clear List</button>
            </div>
        </div>
    );
}