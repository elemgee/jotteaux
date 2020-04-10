import React from 'react';

/**
 * functional component to return the congratulations message
 * @function
 * @param {object} props - React props.
 * @returns {*}
 */
export default (props) => {

    if (props.success) {
        return (<div data-test="component-congrats">
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