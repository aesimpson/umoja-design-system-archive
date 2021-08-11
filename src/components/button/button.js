import {LitElement, html} from 'lit';
import {classMap} from 'lit/directives/class-map.js';
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

  render() {
    const {title, kind, disabled, href} = this;

    if (href) {
      return disabled
        ? html` <p 
                  class=${classMap({
                    umoja_btn: true,
                    [`umoja_btn-${kind}`]: kind,
                    [`umoja_btn-disabled`]: disabled
                  })}
                >
                  ${title}
                </p> `
        : html`
            <a
              class=${classMap({
                umoja_btn: true,
                [`umoja_btn-${kind}`]: kind,
                [`umoja_btn-disabled`]: disabled
              })}
              role="button"
              href="${href}"
              ?disabled="${disabled}"
            >
              ${title}
            </a>
          `;
    }
    return html`
      <button 
        type="button" 
        class=${classMap({
          umoja_btn: true,
          [`umoja_btn-${kind}`]: kind,
          [`umoja_btn-disabled`]: disabled
        })}
        ?disabled="${disabled}">
        ${title}
      </button>
    `;
  }
}

window.customElements.define('umoja-btn', UmojaButton);
