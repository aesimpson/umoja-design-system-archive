import {css} from 'lit';
import globalCSS from '../../styles/global-styles.js';

export default css`
  ${globalCSS}
  :host{
    height: 30px;
  }
  .umoja_btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 75px;
    height: 30px;
    margin: 0;
    border: none;
    border-radius: 2px;
    padding: 0 16px;
    outline: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    line-height: 1;
    text-decoration: none;
    position: relative;
    cursor: pointer;
    transition: all 0.15s linear;
  }
  .umoja_btn:active,
  .umoja_btn:focus {
    border: 1px solid var(--color-purple);
    box-shadow: 0px 0px 0px 3px rgba(73, 55, 120, 0.4);
  }
  .umoja_btn-primary {
    background-color: var(--color-charcoal3);
    color: var(--color-charcoal6);
  }
  .umoja_btn-primary:hover:enabled,
  .umoja_btn-primary:active,
  .umoja_btn-primary:focus {
    background-color: var(--color-charcoal4);
    color: #fff;
  }
  .umoja_btn-secondary {
    background-color: #fff;
    color: var(--color-charcoal2);
  }
  .umoja_btn-secondary:hover:enabled,
  .umoja_btn-secondary:active,
  .umoja_btn-secondary:focus {
    background-color: var(--color-charcoal7);
  }
  .umoja_btn-disabled,
  .umoja_btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
