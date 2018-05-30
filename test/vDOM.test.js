const vDOM = require('../src/vDOM')
const chai = require('chai')


describe('Testes referentes a função de criação do DOM virtual', () => {
	it('Deve retornar um objeto que representa o DOM Virtual', () => {
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