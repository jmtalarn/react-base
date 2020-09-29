import React from 'react';
import { connect } from 'react-redux';
import { setMessage } from '../redux/actions/message';

const MessageState = (state) => {
    const {
        message: { message },
    } = state;
    return { message };
};

const MessageDispatch = (dispatch) => {
    return {
        setMessageOk: () => {
            dispatch(setMessage('Everything is ok'));
        },
        clearMessage: () => {
            dispatch(setMessage(''));
        },
    };
};

const component = (message, setMessageOk, clearMessage) => {
    return (
        <div>
            <p>{message}</p>
            <button onClick={setMessageOk()}>Ok!</button>
            <button onClick={clearMessage()}>Clear</button>
        </div>
    );
};
const MessageContainer = connect(MessageState, MessageDispatch)(component);

export default MessageContainer;
