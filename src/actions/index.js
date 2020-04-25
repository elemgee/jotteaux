import axios from 'axios';

import {getLetterMatchCount} from "../helpers";


export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD',
    SET_SECRET_WORD: 'SET_SECRET_WORD',
    SET_SECRET_WORD_ERROR: 'SET_SECRET_WORD_ERROR',
}



export const guessWord = (guessedWord) => {
    return function (dispatch, getState) {
        const secretWord = getState().secretWord;
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

        dispatch({
            type: actionTypes.GUESS_WORD,
            payload: {guessedWord, letterMatchCount}
        });

        if ( guessedWord === secretWord) {
            dispatch({type: actionTypes.CORRECT_GUESS});
        }
    };
}



export const getSecretWord = () => {
    return (dispatch) => {
      return  axios.get('http://127.0.0.1:3030')
          .then(response => {
              console.log("response from getSecretWord", response);
              dispatch({
                  type: actionTypes.SET_SECRET_WORD,
                  payload: response.data
              });
          }).catch( error => {
              console.log("caught an error from axios", error);
              dispatch({
                  type: actionTypes.SET_SECRET_WORD_ERROR,
                  payload: error.toString()
              });
          });
    }
}