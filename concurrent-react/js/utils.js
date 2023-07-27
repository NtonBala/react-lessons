export function render(element, container) {
  // TODO: Finish if statement
  // if (typeof element.type === 'function') element = element...

  const dom = element.type === 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(element.type);
  const isProperty = (key) => key !== 'children';

  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name];
    });

  element.props.children?.forEach((child) => render(child, dom)); // TODO: Check if second argument is dom
  container.appendChild(dom);
}
