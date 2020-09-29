import * as ACTION from './types';

export function addItem(data) {
    return {
        type: ACTION.ADD_ITEM,
        item: data,
    };

    //OR SOMETHING ASYNCHRONOUS LIKE
    // return (dispatch) => {
    //     fetch(URL)
    //         .then((response) => response.json)
    //         .then((json) =>
    //             dispatch({
    //                 type: ACTION.ADD_ITEM,
    //                 item: json,
    //             }),
    //         );
    // };
}

export function removeItem(index) {
    return {
        type: ACTION.REMOVE_ITEM,
        index,
    };
}

export function updateItem(index, data) {
    return {
        type: ACTION.UPDATE_ITEM,
        item: data,
    };
}
