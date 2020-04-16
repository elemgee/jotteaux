import checkPropTypes from 'check-prop-types';
import {createStore, applyMiddleware} from "redux";
import rootReducer from '../src/reducers';

import {middlewares} from "../src/configureStore";


/**
 * @function findByTestAttr
 * @param wrapper
 * @param val
 */
export const findByTestAttr = (wrapper, val) => {
   return wrapper.find(`[data-test="${val}"]`);
}


/**
 * @function checkProps
 * @param component
 * @param conformingProps
 */
export const checkProps = (component, conformingProps) => {
   const propError = checkPropTypes(component.propTypes,
       conformingProps,
       'prop',
       component.name);
   expect(propError).toBeUndefined();
}

/**
 * @function storeFactor
 * @param initialState
 * @returns {Store<CombinedState<unknown>, AnyAction>}
 */
export const storeFactory = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
}


