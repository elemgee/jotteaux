import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
    let contents;
    if (props.guessedWords.length === 0) {
        contents = (<div className=" alert alert-warning  h3 " role="alert"  data-test="guess-instructions">Try to guess the secret word!</div>)
    } else {
        const rowclass = (word,score) => {
            if ( score === 5) {
                return "alert-success";
            } else {
                return "";
            }
        }
        const guessedWordsRows = props.guessedWords.reverse().map((guess, index) => (
            <tr data-test="guessed-word" key={index} className={rowclass(guess.guessedWord, guess.letterMatchCount)}>
                <td>{guess.guessedWord}</td>
                <td className="text-center">{guess.letterMatchCount}</td>
            </tr>
        ));
        contents = (
            <div data-test="guessed-words" >
                <h3>Guessed Words</h3>
                <table className="table table-striped ">
                    <thead>
                    <tr>
                        <th>guess</th>
                        <th className="text-center">matching letters</th>
                    </tr>
                    </thead>
                    <tbody>
                    {guessedWordsRows}
                    </tbody>
                </table>
            </div>
        );
    }
    return (
        <div data-test="component-guessed-words">
            {contents}
        </div>
    )
}


GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(PropTypes.shape({
        guessedWord: PropTypes.string.isRequired,
        letterMatchCount: PropTypes.number.isRequired,
    })).isRequired
};

export default GuessedWords;