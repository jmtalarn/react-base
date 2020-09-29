import * as ACTION from './types';

export function setMessage(message) {
    return {
        type: ACTION.SET_MESSAGE,
        message: message,
    };
}
