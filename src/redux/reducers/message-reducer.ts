import * as ACTION from '../actions/message/types';

const initialState = { message: '' };

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.SET_MESSAGE:
            return { message: action.message };
        default:
            return state;
    }
};

export default messageReducer;
