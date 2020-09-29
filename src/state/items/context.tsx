import React, { useReducer, createContext } from 'react';
import itemReducer from './reducer';

const initialItems = [];
const [items, dispatchItems] = useReducer(itemReducer, initialItems);

const ItemsContext = createContext(null);

const ItemsProvider = (props: any) => {
    return <ItemsContext.Provider value={[items, dispatchItems]}>{props.children}</ItemsContext.Provider>;
};

export { ItemsContext, ItemsProvider };
