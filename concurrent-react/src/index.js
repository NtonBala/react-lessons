import { createElement, render } from './utils.js';

const React = { createElement };

// Using React.createElement utility function, Babel will transform JSX below, to
// createElement('h1', undefined, createTextElement('Hello, World!'));
// So we can pretend writing JSX:
const element = <h1>Hello, World!</h1>;
const container = document.getElementById('root');

render(element, container);
