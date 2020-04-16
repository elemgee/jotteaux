import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';

import GuessedWords from "./GuessedWords/GuessedWords";
import Congrats from "./Congrats/Congrats";
import GuessInput from "./GuessInput/GuessInput";
import {getSecretWord} from "./actions";

export class UnconnectedApp extends Component {
    componentDidMount() {
        this.props.getSecretWord();
    }

    render() {
        return (
            <div className="container" data-test="component-app">
                <h1 className="jumbotron text-center">Jotteaux</h1>
                <Congrats success={this.props.success}/>
                <GuessInput/>
                <GuessedWords guessedWords={this.props.guessedWords}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {success, guessedWords, secretWord} = state;
    return {success, guessedWords, secretWord};
}

export default connect(mapStateToProps, {getSecretWord})(UnconnectedApp);
