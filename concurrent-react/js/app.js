import { createTextElement, render } from './utils.js';

const textEl = createTextElement('Hello world');
const element = {
  type: 'h1',
  props: {
    children: [textEl],
  },
};
const container = document.getElementById('root');

render(element, container);
