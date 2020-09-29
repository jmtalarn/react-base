import React, { useContext } from 'react';
import { MessageContext } from './context';
import * as ACTION from './actions';

const Message = () => {
    const [message, dispatch] = useContext(MessageContext);

    const setMessageOk = () => {
        dispatch({ type: ACTION.SET_MESSAGE, message: 'Everything is ok 👍' });
    };

    const clearMessage = () => {
        dispatch({ type: ACTION.SET_MESSAGE, message: '' });
    };

    return (
        <div>
            <p>{message}</p>
            <button onClick={() => setMessageOk()}>Ok!</button>
            <button onClick={() => clearMessage()}>Clear</button>
        </div>
    );
};

export default Message;
