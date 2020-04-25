import React from 'react';
import {shallow} from 'enzyme';

import {findByTestAttr, storeFactory} from "../../test/TestUtils";
import GuessInput, {UnconnectedGuessInput} from "./GuessInput";


const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<GuessInput store={store}/>).dive().dive();
    return wrapper;
}

describe('render', () => {

    test('render component without error', () => {
        const component = findByTestAttr(setup({}), "component-guess-input");
        expect(component.length).toBe(1);
    });

    describe('word has not been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = {success: false};
            wrapper = setup(initialState);
        });


        test('renders input box', () => {
            const component = findByTestAttr(wrapper, "guess-input");
            expect(component.length).toBe(1);
        });
        test('renders submit button', () => {
            const component = findByTestAttr(wrapper, "guess-submit");
            expect(component.length).toBe(1);
        });
    });


    describe('word has  been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = {success: true};
            wrapper = setup(initialState);
        });
        test('render component without error', () => {
            const component = findByTestAttr(wrapper, "component-guess-input");
            expect(component.length).toBe(1);
        });

        test('DOES NOT render input box', () => {
            const component = findByTestAttr(wrapper, "guess-input");
            expect(component.length).toBe(0);
        });
        test('DOES NOT render submit button', () => {
            const component = findByTestAttr(wrapper, "guess-submit");
            expect(component.length).toBe(0);
        });
    });
});


describe('redux props', () => {
    test('has success piece of state as prop', () => {
        const success = true;
        const wrapper = setup({success});
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    });

    test('check guessWord action creator is a function prop', () => {
        const wrapper = setup();
        const guessWordProp = wrapper.instance().props.guessWord;
        expect(guessWordProp).toBeInstanceOf(Function);
    })
});

describe('`guessWord` action creator call', () => {

    let guessWordMock;
    let wrapper;
    const guessedWord = 'train';

    beforeEach(() => {
        guessWordMock = jest.fn();
        wrapper = shallow(<UnconnectedGuessInput guessWord={guessWordMock} />);
        wrapper.setState({currentGuess: guessedWord});
        const submitButton = findByTestAttr(wrapper, 'guess-submit');
        submitButton.simulate('click', {preventDefault(){}});
    });


    test('`guessWord` was called once', () => {
        const guessWordCallCount = guessWordMock.mock.calls.length;
        expect(guessWordCallCount).toBe(1);
    });

    test('calls `guessedWord` with input value as argument',() => {
        console.log(guessWordMock.mock.calls);
        const guessedWordArg = guessWordMock.mock.calls[0][0];
        expect(guessedWordArg).toBe(guessedWord);
    });

});