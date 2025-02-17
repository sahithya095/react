// ListContext.js
import React, { createContext, useReducer } from 'react';

const ListContext = createContext();

const listReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, { id: Date.now(), text: action.payload }];
        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
};

export const ListProvider = ({ children }) => {
    const [list, dispatch] = useReducer(listReducer, []);

    return (
        <ListContext.Provider value={{ list, dispatch }}>
            {children}
        </ListContext.Provider>
    );
};

export default ListContext;

// App.js
// import React from 'react';
// import { ListProvider } from './components/listcontent';
// import AddItem from './components/additem';
// import ItemList from './components/itemlist';
// import './App.css';

// const App = () => {
//     return (
//         <ListProvider>
//             <div>
//                 <h1 className='heading'>Item Management App</h1>
//                 <AddItem />
//                 <ItemList />
//             </div>
//         </ListProvider>
//     );
// };

// export default App;
