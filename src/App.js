import "./index.css"
import {useState} from "react";

const initialItems = [
    {id: 1, description: "Passports", quantity: 2, packed: false},
    {id: 2, description: "Socks", quantity: 12, packed: true},
    {id: 3, description: "Charger", quantity: 1, packed: false}
];

/*
🏝️ Far Away 🧳
What do you need for your 😍 trip?
You have X items on your list, and you already packed X (X%)
*/

export default function App() {
    return (
        <div className="app">
            <Logo/>
            <Form/>
            <PackingList/>
            <Stats/>
        </div>
    );
}

function Logo() {
    return <h1>🏝️ Far Away 🧳</h1>
}

function Form() {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(event) {
        event.preventDefault();
        // guard clause
        // "" 0 false null undefined Nan
        if (!description) return;
        const newItem = {description, quantity, packed: false, id: Date.now()}
        console.log(newItem);

        setDescription("");
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>

            {/* controlled element*/}
            <select value={quantity} onChange={(event) => {
                console.log(event.target.value)
                setQuantity(parseInt(event.target.value))
            }
            }>
                {
                    Array.from({length: 20}, (_, i) => i + 1)
                        .map(num => <option value={num} key={num}>{num}</option>)
                }
            </select>

            {/* controlled element: where the element that is in charge of its state not the dom*/}
            <input type="text" placeholder="Item..." value={description}
                   onChange={(event) => {
                       console.log(event.target.value);
                       setDescription(event.target.value);
                   }}/>
            <button>Add</button>
        </form>
    );
}

function PackingList() {
    return (
        <div className="list">
            <ul>{
                initialItems.map(item => <Item item={item} key={item.id}/>)
            }</ul>
        </div>
    );
}

function Item({item}) {
    return (
        <li>
            <span style={item.packed ? {textDecoration: "line-through"} : {}}>{item.quantity} {item.description}</span>
            <button>❌</button>
        </li>
    );
}

function Stats() {
    return (
        <footer className="stats">
            <em>You have X items on your list, and you already packed X (X%)</em>
        </footer>
    );
}