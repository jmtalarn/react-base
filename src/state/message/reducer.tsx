import * as ACTION from './actions';

const messageReducer = (state, action) => {
    switch (action.type) {
        case ACTION.SET_MESSAGE:
            return action.message;
        default:
            throw new Error();
    }
};
export default messageReducer;
