const vDOM = require('../src/vDOM')
const chai = require('chai')


describe('The test will build a DOM representation', () => {
	it('should return an object that represents the Virtual DOM', () => {
		const result = vDOM(
			'ul', 
			{class: 'lista'}, 
			vDOM(
				'li',
				{ class: 'item'},
				'Item 1'	
			)
		)
		
		const expect = {
			type: 'ul',
			props: {
				class: 'lista'
			},
			children: [
				{
					type: 'li',
					props: {
						class: 'item'
					},
					children: [ 'Item 1' ]
				}
			]
		}
		chai.expect(expect).to.deep.equal(result)
	})
})