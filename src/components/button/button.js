import {LitElement, html} from 'lit';
import {classMap} from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined';
import styles from './button.styles.js';

/**
 * Button.
 * @element umoja-btn
 */

export default class UmojaButton extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      kind: {type: String, reflect: true},
      title: {type: String, reflect: true},
      disabled: {type: Boolean, reflect: true},
      href: {type: String, reflect: true},
      target: {type: String, reflect: true},
      submit: {type: Boolean, reflect: true},
      download: {type: String}
    };
  }

  constructor() {
    super();
    this.title = 'Button';
    this.kind = 'primary';
    this.disabled = false;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  handleClick(e) {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  render() {
    const {title, kind, disabled, href, target, submit, download, handleClick} = this;

    if (href) {
      return html`
        <a
          class=${classMap({
            umoja_btn: true,
            [`umoja_btn-${kind}`]: kind,
            [`umoja_btn-disabled`]: disabled
          })}
          href=${ifDefined(href)}
          target=${ifDefined(target)}
          download=${ifDefined(download)}
          rel=${ifDefined(target ? 'noreferrer noopener' : undefined)}
          role="button"
          aria-disabled=${disabled ? 'true' : 'false'}
          tabindex=${disabled ? '-1' : '0'}
          @click=${handleClick}
        >
          ${title}
        </a>
      `;
    }
    return html`
      <button 
        type=${submit ? 'submit' : 'button'}
        class=${classMap({
          umoja_btn: true,
          [`umoja_btn-${kind}`]: kind,
          [`umoja_btn-disabled`]: disabled
        })}
        ?disabled="${disabled}"
        @click=${handleClick}
      >
        ${title}
      </button>
    `;
  }
}

window.customElements.define('umoja-btn', UmojaButton);
