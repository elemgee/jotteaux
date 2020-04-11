/**
 * @function successReducer
 * @param state
 * @param action
 * @returns {null}
 */
import {actionTypes} from "../actions";

export default (state=false, action) => {
    switch(action.type){
        case(actionTypes.CORRECT_GUESS) :
            return true;
        default:
            return state;
    }
}