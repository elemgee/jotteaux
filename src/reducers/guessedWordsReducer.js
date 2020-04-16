import {actionTypes} from "../actions";

/**
 * guessedWordsReducer
 *
 * @param state
 * @param action
 * @returns {null}
 */
export default (state=[], action) => {
    switch (action.type) {
        case (actionTypes.GUESS_WORD):
            return [...state, action.payload];
        default:
            return state;
    }
}