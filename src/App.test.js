import React from 'react';
import  {shallow} from 'enzyme';

import App, {UnconnectedApp} from './App';
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

test('`getSecretWord` runs on App mount',() => {

    const getSecretWordMock = jest.fn();
    // setup app with getSecretWordMock as prop
    // the real component gets this from redux through connect
    const props = {
        getSecretWord: getSecretWordMock,
        success : false,
        guessedWords: [],
    }
    const wrapper = shallow(<UnconnectedApp {...props} />);

    // run the lifecycle method
    wrapper.instance().componentDidMount();
    // did the mock run?
    const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
    expect(getSecretWordCallCount).toBe(1);
})

