import {actionTypes} from "../actions";
import successReducer from './successReducer';


test('returns default state of `false` when no action is found', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);

});

test('returns default state of `true` on `CORRECT_GUESS` action', () => {
    const newState = successReducer(undefined, {type: actionTypes.CORRECT_GUESS});
    expect(newState).toBe(true);
});