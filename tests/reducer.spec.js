import { expect, assert } from 'chai';
import rootReducer from '../src/reducers/index';
import * as types from '../src/constants/actionTypes';

describe('reducers', () => {
    it('should return empty array if initial state is NOT defined', () => {
        const expected = [];
        const actual = rootReducer();

        assert.deepEqual(actual, expected);
    });

    it('should return initial state if action is NOT defined', () => {
        const mockInitialState = ['thing'];

        const actual = rootReducer(mockInitialState);
        assert.deepEqual(actual, mockInitialState);
    });

    it('should return the initial state if provided action is NOT valid', () => {
        const mockAction = 'foo';
        const mockInitialState = ['thing'];

        const actual = rootReducer(mockInitialState, mockAction);
        assert.deepEqual(actual, mockInitialState);
    });

    it('should return the correct state for the ADD_USER action', () => {
        const mockAction = {
            type: types.ADD_USER,
            newUser: {user: 'new mock user'}
        };
        const mockInitialState = ['thing'];

        const expected = [
            'thing',
            {user: 'new mock user'}
        ];

        const actual = rootReducer(mockInitialState, mockAction);
        assert.deepEqual(actual, expected);
    });
});
