/**
 * Representa uma função que monta o DOM
 * @constructor
 * @param { string } type - Representa o tipo de elemento que está sendo criado. 
 * @param { object } props - Representa as propriedades que o elemento pode receber, por exemplo class ou ID. 
 * @param { array } children - Representa a criação dos elementos-filho, um exemplo é a <li> que é filho do elemento <ul>
*/
const vDOM = (type, props, ...children) => {
	return {
		type: type,
		props: props,
		children: children
	}
}

module.exports = vDOM