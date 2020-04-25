import React, {Component} from 'react';
import {connect} from 'react-redux';
import {guessWord} from "../actions";

export class UnconnectedGuessInput extends Component {

    constructor(props) {
        super(props);
        this.state = {currentGuess: null}
        this.submitGuessedWord = this.submitGuessedWord.bind(this);
    }

    submitGuessedWord(evt) {
        evt.preventDefault();
        const guessedWord = this.state.currentGuess;

        if (guessedWord && guessedWord.length > 0) {
            this.props.guessWord(guessedWord);
            this.setState({currentGuess: ''})
        }
    }


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
                        placeholder="enter guess"
                        value={this.state.currentGuess}
                        onChange = {(evt) => this.setState({currentGuess: evt.target.value})}
                    />
                    <button
                        data-test="guess-submit"
                        type="submit"
                        className="btn btn-primary "
                        onClick={(evt) => this.submitGuessedWord(evt)}>
                        guess
                    </button>
                </form>
            );
        return (
            <div data-test="component-guess-input">
                {contents}
            </div>
        );
    }

}

const mapStateToProps = ({success}) => {
    return {success};
}

export default connect(mapStateToProps, {guessWord})(UnconnectedGuessInput);