import * as ACTION from '../actions/items/types';

const initialState = [];

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.ADD_ITEM:
            return [...state, action.item];
        case ACTION.REMOVE_ITEM:
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        case ACTION.UPDATE_ITEM:
            return [...state.slice(0, action.index), action.item, ...state.slice(action.index + 1)];
        default:
            return state;
    }
};

export default itemReducer;
