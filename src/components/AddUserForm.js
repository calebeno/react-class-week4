'use strict';

import React from 'react';
import {connect} from 'react-redux';

class AddUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {message: ''};
        this.submitForm = this.submitForm.bind(this);
    }

    render() {
        return (
            <div>
                <h3>Add User</h3>
                <form onSubmit={this.onSubmit}>
                    <input placeholder="Name" ref="userName" type="text"/>
                    <input placeholder="Email" ref="userEmail" type="text"/>
                </form>
                <button onClick={this.submitForm}>Add User</button>
            </div>
        );
    }

    submitForm() {
        var userName = this.refs.userName;
        var userEmail = this.refs.userEmail;
        var input = {
            name: userName.value,
            email: userEmail.value
        };
        this.props.submitEvent(input);
        userName.value = '';
        userEmail.value = '';
    }
}

AddUserForm = connect()(AddUserForm);

export default AddUserForm;
