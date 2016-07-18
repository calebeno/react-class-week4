import * as types from '../constants/actionTypes';

export const addUser = newUser => {
    return {
        type: types.ADD_USER,
        newUser
    };
};

// TODO:  For later
// export const createUser = user => {
//     return {
//         type: types.CREATE_USER,
//         user
//     };
// };
