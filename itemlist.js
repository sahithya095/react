// ItemList.js
import React, { useContext, useMemo } from 'react';
import ListContext from './listcontent';

const ItemList = () => {
    const { list, dispatch } = useContext(ListContext);

    const memoizedList = useMemo(() => list, [list]);

    return (
        <div>
            <h2>Item List ({memoizedList.length})</h2>
            <ul>
                {memoizedList.map(item => (
                    <li key={item.id}>
                        {item.text} <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
