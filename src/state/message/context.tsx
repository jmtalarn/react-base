import React, { useReducer, createContext } from 'react';
import messageReducer from './reducer';

const initialMessage = '';
const [message, dispatchMessage] = useReducer(messageReducer, initialMessage);

const MessageContext = createContext(null);

const MessageProvider = (props: any) => {
    return <MessageContext.Provider value={[message, dispatchMessage]}>{props.children}</MessageContext.Provider>;
};

export { MessageContext, MessageProvider };
