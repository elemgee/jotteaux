import React from 'react';
import  {shallow} from 'enzyme';

import App from './App';
import {findByTestAttr, storeFactory} from "../test/TestUtils";



const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<App store={store} />).dive().dive();
    return wrapper;
}



describe('redux props',() => {
    test ('App has `success` prop to pass to Congrats component', () => {
        const success = true;
        const wrapper = setup({success});
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);

    });

    test ('App has `guessedWords` prop to pass to GuessedWords',() => {
        const guessedWords = [{guessedWord: 'train', letterMatchCount: 3}];
        const wrapper = setup({guessedWords});
        const guessedWordsProp = wrapper.instance().props.guessedWords;
        expect (guessedWordsProp).toEqual(guessedWords);
    });

    test('App has access to `secretWord` prop', () => {
       const secretWord = 'party';
       const wrapper = setup({secretWord});
       const secretWordProp = wrapper.instance().props.secretWord;
       expect(secretWordProp).toEqual(secretWord);
    });
});

