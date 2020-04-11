import checkPropTypes from 'check-prop-types';
import {createStore} from "redux";
import rootReducer from '../src/reducers';


/**
 *
 * @param initialState
 * @returns {Store<CombinedState<unknown>, AnyAction>}
 */
export const storeFactory = (initialState) => {
 return createStore(rootReducer, initialState);
}

/**
 *
 * @param wrapper
 * @param val
 */
export const findByTestAttr = (wrapper, val) => {
   return wrapper.find(`[data-test="${val}"]`);
}


export const checkProps = (component, conformingProps) => {
   const propError = checkPropTypes(component.propTypes,
       conformingProps,
       'prop',
       component.name);
   expect(propError).toBeUndefined();
}