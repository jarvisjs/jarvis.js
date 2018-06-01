const createElement = (node) => {
	if(node === 'string') { return document.createTextNode(node); }

	const $el = document.createElement(node.type);
	node.children
		.map(createElement)
		.forEach($el.appendChild.bind($el));
	return $el;
}