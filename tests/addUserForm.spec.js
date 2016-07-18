import chai from 'chai';
import spies from 'chai-spies';
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { AddUserForm } from '../src/components/AddUserForm';

chai.use(spies);
const expect = chai.expect;
const assert = chai.assert;

const submitEventSpy = chai.spy();

function setup() {
    let props = {
        submitEvent: submitEventSpy
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<AddUserForm {...props} />);
    let output = renderer.getRenderOutput();

    return {
        props,
        output,
        renderer
    }
}

describe('Add User Form Component', () => {
    it('should render correctly', () => {
        // TODO:  Actually validate stuff on html
        const {output} = setup();

        expect(output.type).to.equal('div');

        let [h3, form, button] = output.props.children;

        expect(h3.type).to.equal('h3');
        expect(h3.props.children).to.equal('Add User');

        expect(form.type).to.equal('form');

        let [input1, input2] = form.props.children;

        expect(input1.type).to.equal('input');
        expect(input2.type).to.equal('input');

        expect(button.type).to.equal('button');
    });

    // it('should ')
});
