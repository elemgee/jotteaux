import React, {Component} from 'react';
import {connect} from 'react-redux';

class GuessInput extends Component {

    render() {

        const contents = this.props.success
            ? null
            : (
                <form className="form-inline ">
                    <input
                        data-test="guess-input"
                        className="form-control col-10"
                        id="word-guess"
                        type="text"
                        placeholder="enter guess" />
                        <button
                            data-test="guess-submit"
                            type="submit"
                            className="btn btn-primary ">guess
                        </button>

                </form>
            );
        return (
            <div data-test="component-guess-input" >
                {contents}
            </div>
        );
    }

}

const mapStateToProps = ({success}) => {
    return {success};
}

export default connect(mapStateToProps)(GuessInput);