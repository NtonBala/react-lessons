import { createTextElement, render } from './utils.js';

const textEl = createTextElement('Hello world');

const container = document.getElementById('root');

render(textEl, container);
