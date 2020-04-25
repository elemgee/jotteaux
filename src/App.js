import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';

import GuessedWords from "./GuessedWords/GuessedWords";
import Congrats from "./Congrats/Congrats";
import GuessInput from "./GuessInput/GuessInput";
import {getSecretWord} from "./actions";

export class UnconnectedApp extends Component {

    constructor(props) {
        super(props);

        this.state = { cheat: false, }
    }

    componentDidMount() {
        this.props.getSecretWord();
        console.log("props in UnconnectedApp", this.props);
    }

    render() {
        const secwrddiv = this.state.cheat
            ? (<div className="alert alert-info"
                    onClick={(evt) => this.setState({cheat: false})}
            >Hint: The secret word is {this.props.secretWord}</div>)
        : (                    <button
                data-test="cheat-submit"
                type="submit"
                className="btn btn-secondary "
                onClick={(evt) => this.setState({cheat: true})}>
                cheat
            </button>);


        return (
            <div className="container" data-test="component-app">
                <h1 className="jumbotron text-center">Jotteaux</h1>
                <Congrats success={this.props.success}/>
                <GuessInput/>

                <GuessedWords guessedWords={this.props.guessedWords}/>
                {secwrddiv}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {success, guessedWords, secretWord} = state;
    return {success, guessedWords, secretWord};
}

export default connect(mapStateToProps, {getSecretWord})(UnconnectedApp);
