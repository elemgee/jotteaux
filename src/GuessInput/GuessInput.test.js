import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr, storeFactory} from "../../test/TestUtils";
import GuessInput from "./GuessInput";


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


describe('update state', () => {
})