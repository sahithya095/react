
// AddItem.js
import React, { useState, useContext } from 'react';
import ListContext from './listcontent';

const AddItem = () => {
    const [input, setInput] = useState('');
    const { dispatch } = useContext(ListContext);

    const addItem = () => {
        if (input.trim()) {
            dispatch({ type: 'ADD_ITEM', payload: input });
            setInput('');
        }
    };

    return (
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addItem}>Add Item</button>
        </div>
    );
};

export default AddItem;