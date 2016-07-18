import React from 'react'
import {Hello} from '../src/components/Hello.js';
import {expect, assert} from 'chai'

//var Hello = require('../src/Hello.es6');

describe('Hello', () => {

    xit('should work', () => {
        var hello = <Hello />;
        //TestUtils.renderIntoDocument(hello);
        expect(hello).to.not.be.false;
        // assert.isOk(hello);
    });

});
