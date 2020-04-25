/**
 * @method getLetterMatchCount
 *
 * @param guessedWord - word to test
 * @param secretWord - word to be matched against
 * @returns {number} - number of letters common between the guessed word and secret word
 */

export function getLetterMatchCount(guessedWord, secretWord) {
    if ( guessedWord.length === 0) {
        return 0;
    }
    const secretLetterSet = new Set(secretWord.split(''));
    const guessedLetterSet = new Set(guessedWord.split(''));
    return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length;
};