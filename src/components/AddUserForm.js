'use strict';

import React from 'react';

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
                    <button onClick={this.submitForm()}>Add User</button>
                </form>
            </div>
        );
    }

    componentDidMount() {
        React.findDOMNode(this.refs.userName);
    }

    submitForm() {
        var userName = React.findDOMNode(this.refs.userName);
        var userEmail = React.findDOMNode(this.refs.userEmail);
        var input = {
            userName: userName.value,
            userEmail: userEmail.value
        };
        this.props.submitEvent(input);
        userName.value = '';
        userEmail.value = '';
    }
}

export default AddUserForm;
