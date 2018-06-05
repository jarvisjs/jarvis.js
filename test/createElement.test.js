const jsdom = require('mocha-jsdom');
const chai = require('chai');
const createElement = require('../src/createElement');

describe('The function will build a real DOM', () => {
	jsdom()

	it('should return a real DOM from a object', () => {
		const vDOM = {
			type: 'ul'
		}

		const result = createElement(vDOM) 

		chai.expect(result).eql('ul');
	})
})