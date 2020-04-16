import {actionTypes} from "../actions";

/**
 *
 * reducer for the secret word state
 * @param state
 * @param action
 * @returns {*}
 */
export default (state = null, action) => {
    switch (action.type) {
        case  actionTypes.SET_SECRET_WORD:
            return action.payload;
        default:
            return state;
    }
}