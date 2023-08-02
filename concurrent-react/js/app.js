import { createElement, createTextElement, render } from './utils.js';

const textEl = createTextElement('Hello world!');
const element = createElement('h1', undefined, textEl);
const container = document.getElementById('root');

render(element, container);
