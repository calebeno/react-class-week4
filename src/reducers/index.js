import { ADD_USER, CREATE_USER } from '../constants/actionTypes';

const rootReducer = (initialState = [], action) => {
    var reducer = {};
    reducer[ADD_USER] = function() {
        return [
            ...initialState,
            action.newUser
        ];
    };

    // TODO: Add Create User
    // reducer[CREATE_USER] = function () {
    //     return action.user;
    // };

    if (action && reducer[action.type]) {
        return reducer[action.type]();
    } else {
        return initialState;
    }
};

export default rootReducer;
