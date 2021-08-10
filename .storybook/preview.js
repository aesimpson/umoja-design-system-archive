import { html } from 'lit-html';

export const parameters = {
  backgrounds: {
    values: [
      { name: 'charcoal0', value: '#0D0D11' },
      { name: 'charcoal1', value: '#17171C' },
      { name: 'charcoal2', value: '#22222A' },
      { name: 'charcoal3', value: '#30303B' },
      { name: 'charcoal4', value: '#40404F' },
      { name: 'charcoal5', value: '#B3B3B9' },
      { name: 'sunshine', value: '#FFFA0C' },
      { name: 'white', value: '#FFFFFF' },
    ],
  },
};

export const decorators = [
  story => html`<div class="main-content">${story()}</div>`,
];
