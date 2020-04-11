import checkPropTypes from 'check-prop-types';




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