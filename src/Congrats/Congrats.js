import React from 'react';
import PropTypes from 'prop-types';

/**
 * functional component to return the congratulations message
 * @function
 * @param {object} props - React props.
 * @returns {*}
 */
const Congrats = (props) => {

    if (props.success) {
        return (<div data-test="component-congrats" className="alert alert-success">
                <span data-test="congrats-message">Congratulations, you guessed the word</span>
            </div>
        );
    } else {
        return (
            <div data-test="component-congrats">
            </div>
        );
    }

}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congrats;