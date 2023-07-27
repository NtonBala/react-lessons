import { render } from './utils.js';

// textEl as plain JSX object
const textEl = {
  type: 'TEXT_ELEMENT',
  props: { nodeValue: 'Hello, World!' },
};

const container = document.getElementById('root');

render(textEl, container);
