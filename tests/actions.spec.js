import {expect, assert} from 'chai'
import * as actions from '../src/actions/index';
import * as types from '../src/constants/actionTypes';

describe('actions', () => {
    it('should create an action to add a user', () => {
        const mockUser = {
            name: 'foo',
            email: 'bar'
        };
        const expectedAction = {
            type: types.ADD_USER,
            newUser: mockUser
        };
        assert.deepEqual(actions.addUser(mockUser), expectedAction);
    });
});
