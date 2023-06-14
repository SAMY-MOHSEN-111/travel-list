import {useState} from "react";

export default function Form({onAddItems}) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(event) {
        event.preventDefault();
        // guard clause
        // "" 0 false null undefined Nan
        if (!description) return;
        const newItem = {description, quantity, packed: false, id: Date.now()};
        console.log(newItem);
        onAddItems(newItem);

        setDescription("");
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>

            {/* controlled element*/}
            <select
                value={quantity}
                onChange={(event) => {
                    console.log(event.target.value);
                    setQuantity(parseInt(event.target.value));
                }}
            >
                {Array.from({length: 20}, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>

            {/* controlled element: where the element that is in charge of its state not the dom*/}
            <input
                type="text"
                placeholder="Item..."
                value={description}
                onChange={(event) => {
                    console.log(event.target.value);
                    setDescription(event.target.value);
                }}
            />
            <button>Add</button>
        </form>
    );
}