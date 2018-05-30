/**
 * Represent a function that build VDOM
 * @constructor
 * @param { string } type - Represent the element type that's been created.
 * @param { object } props - Represent the properties that an element can receive, for exemple, class or ID. 
 * @param { array } children - Represent the children's element that's been created, for exempla, an <li> is children of <ul> element
*/

const vDOM = (type, props, ...children) => {
	return {
		type: type,
		props: props,
		children: children
	}
}

module.exports = vDOM