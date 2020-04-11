import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr, storeFactory} from "../../test/TestUtils";
import GuessInput from "./GuessInput";


const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<GuessInput store={store} />);
    return wrapper;
}


describe('render', () => {
    describe('word has not been guessed', () => {
        test('renders component without error', () => {});
        test('renders input box', () => {});
        test('renders submit button', () => {});
    });


    describe('word has  been guessed', () => {
        test('DOES NOT render input box', () => {});
        test('DOES NOT render submit button', () => {});
    });
});


describe('update state', () => {})