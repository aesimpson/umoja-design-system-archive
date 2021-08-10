import { css } from 'lit-element';

export default css`
  :host {
    --color-charcoal0: #0d0d11;
    --color-charcoal1: #17171c;
    --color-charcoal2: #22222a;
    --color-charcoal3: #30303b;
    --color-charcoal4: #40404f;
    --color-charcoal5: #b3b3b9;
    --color-charcoal6: #b4b4c1;
    --color-charcoal7: #dcdce9;
    --color-purple: #7761b0;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
  }
  a {
    background-color: transparent;
  }
  button {
    font-family: inherit;
    font-size: 100%;
    margin: 0;
  }
  /**
     * Show the overflow in IE.
     * 1. Show the overflow in Edge.
     */
  button,
  input {
    overflow: visible;
  }
  /**
     * Remove the inheritance of text transform in Edge, Firefox, and IE.
     * 1. Remove the inheritance of text transform in Firefox.
     */
  button,
  select {
    /* 1 */
    text-transform: none;
  }
  /**
     * Correct the inability to style clickable types in iOS and Safari.
     */
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }
  /**
     * Remove the inner border and padding in Firefox.
     */

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  /**
     * Restore the focus styles unset by the previous rule.
     */

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  /**
     * Add the correct display in IE 10.
     */
  [hidden] {
    display: none;
  }
`;
