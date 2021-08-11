import {html} from 'lit-html';

const canvasStyles =
  `
  html{
    font-size: 100%;
    position: relative;
    box-sizing: border-box;
    --color-charcoal0: #0d0d11;
    --color-charcoal1: #17171c;
    --color-charcoal2: #22222a;
    --color-charcoal3: #30303b;
    --color-charcoal4: #40404f;
    --color-charcoal5: #b3b3b9;
    --color-charcoal6: #b4b4c1;
    --color-charcoal7: #dcdce9;
    --color-purple: #7761b0;
    --font-manrope: "Manrope", sans-serif;
  }

  body{
    background-color:  var(--color-charcoal1);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }

  .main-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
  }`;

export const parameters = {
  backgrounds: {
    values: [
      {name: 'charcoal0', value: '#0D0D11'},
      {name: 'charcoal1', value: '#17171C'},
      {name: 'charcoal2', value: '#22222A'},
      {name: 'charcoal3', value: '#30303B'},
      {name: 'charcoal4', value: '#40404F'},
      {name: 'charcoal5', value: '#B3B3B9'},
      {name: 'sunshine', value: '#FFFA0C'},
      {name: 'white', value: '#FFFFFF'},
    ],
  },
};

export const decorators = [
  (story) => html`<style>${canvasStyles}</style><div class="main-content">${story()}</div>`,
];
