import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
// include global styles
import globalCSS from '../../styles/global-styles.js';

/**
 * Button.
 * @element umoja-btn
 */

export class UmojaButton extends LitElement {
  static get properties() {
    return {
      kind: { type: String, reflect: true },
      title: { type: String, reflect: true },
      disabled: { type: Boolean, reflect: true },
      href: { type: String, reflect: true },
    };
  }

  static get styles() {
    return [
      globalCSS,
      css`
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
      `,
    ];
  }

  constructor() {
    super();
    this.title = 'Button';
    this.kind = 'primary';
    this.disabled = false;
    this.href = '';
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    const { title, kind, disabled, href } = this;
    const classes = classMap({
      [`umoja_btn`]: true,
      [`umoja_btn-${kind}`]: kind,
      [`umoja_btn-disabled`]: disabled,
    });

    if (href) {
      return disabled
        ? html` <p class="${classes}">${title}</p> `
        : html`
        <a 
          class="${classes}" 
          role="button"
          href="${href}"
          ?disabled="${disabled}"
        >
          ${title}
        </button>
      `;
    }
    return html`
      <button type="button" class="${classes}" ?disabled="${disabled}">
        ${title}
      </button>
    `;
  }
}

customElements.define('umoja-btn', UmojaButton);
