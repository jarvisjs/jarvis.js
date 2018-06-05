const createElement = (node) => {
	if(typeof node === 'string') { return document.createTextNode(node); }

	const $el = document.createElement(node.type);
	if(node.children){
  node.children
		.forEach((children) => {
      $el.appendChild(createElement(children))
    });
  }
  return $el;
}

module.exports = createElement