import {storeFactory} from "../test/TestUtils";
import {guessWord} from './actions';
import {getLetterMatchCount} from "./helpers";


describe('guessWord action dispatcher', () => {
    const secretWord = 'party';
    const unsuccessfulGuess = 'train';


    describe('no guessed words', () => {
        let store;
        const initialState = {secretWord};
        beforeEach(() => {
            store = storeFactory(initialState);
        });
        test('successful guess updates correctly', () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [{guessedWord: 'party', letterMatchCount: 5}],
                secretWord: 'party'
            };

            expect(newState).toEqual(expectedState);
        });
        test('unsuccessful guess updates correctly', () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [{
                    guessedWord: unsuccessfulGuess,
                    letterMatchCount: 3
                }]
            };
            expect(newState).toEqual(expectedState);
        });
    });

    describe('some guessed words', () => {
        const guessedWords = [{guessedWord: 'agile', letterMatchCount: 1}];
        const initialState = {guessedWords, secretWord};
        let store;
        beforeEach(() => {
            store = storeFactory(initialState);
        });

        test('successful guess updates correctly', () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: true,
                guessedWords: [...guessedWords, {guessedWord: secretWord, letterMatchCount: 5}]
            }
            expect(newState).toEqual(expectedState);
        });
        test('unsuccessful guess updates correctly', () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: false,
                guessedWords: [...guessedWords, {guessedWord: unsuccessfulGuess, letterMatchCount: 3}]
            };
            expect(newState).toEqual(expectedState);
        });
    });


});

