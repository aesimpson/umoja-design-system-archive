import { LitElement, html, css } from 'lit-element';
// include your global styles
import globalCSS from './global-styles';

/**
 * Button.
 * @element umoja-btn
*/

export class UmojaButton extends LitElement {

  static get properties() {
    return {
      kind: { type: String },
      text: { type: String },
      disabled: {type: Boolean},
      href: { type: String },
      icon: {type: Boolean}
    };
  }

  static get styles() {
    return [
      globalCSS,
    css`
      .umoja_btn{
        display: inline-block;
        margin: 0;
        border: 2px solid var(--color-charcoal1);
        border-radius: 4px;
        padding: 0.4rem 1.2rem;
        box-sizing: border-box;
        outline: none;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.29;
        text-decoration: none;
        position: relative;
        cursor: pointer;
        transition: all 0.15s linear;
      }
      .umoja_btn:before{
        content: '';
        margin: -4px; 
        border-radius: inherit; 
        position: absolute;
        top: 0; 
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        background: var(--color-purple-gradient);
        opacity: 0;
        transition: opacity 0.15s linear;
      }
      .umoja_btn:hover:not(:active):before,
      .umoja_btn:focus:not(:active):before{
        opacity: 1;
      }
      .umoja_btn:active{
        border: 1px solid var(--color-purple);
        box-shadow: 0px 0px 0px 4px rgba(255, 255, 255, 0.1);
      }
    
      .umoja_btn:hover,
      .umoja_btn:focus{
        background-color: var(--color-charcoal4);
        color: var(--color-white);
      }
      .umoja_btn:active{
        background-color: var(--color-charcoal0);
        color: var(--color-white);
      }
      .umoja_btn{
        background-color: var(--color-charcoal3);
        color: var(--color-charcoal5);
      }
      .umoja_btn-secondary{
        background-color: var(--color-white);
      }
      .umoja_btn-secondary span{
        background: var(--color-purple-gradient);
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
      }
      .umoja_btn-icon{
        width: 36px;
        height: 36px;
        padding: 0;
        background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M0.28125 3.375H3.375V0.28125C3.375 0.125859 3.50086 0 3.65625 0H4.21875C4.37414 0 4.5 0.125859 4.5 0.28125V3.375H7.59375C7.74914 3.375 7.875 3.50086 7.875 3.65625V4.21875C7.875 4.37414 7.74914 4.5 7.59375 4.5H4.5V7.59375C4.5 7.74914 4.37414 7.875 4.21875 7.875H3.65625C3.50086 7.875 3.375 7.74914 3.375 7.59375V4.5H0.28125C0.12586 4.5 0 4.37414 0 4.21875V3.65625C0 3.50086 0.12586 3.375 0.28125 3.375ZM0.519257 12.8921L4.02504 11.385L0.519257 9.87785C0.225702 9.75129 0.090704 9.41273 0.217617 9.12129C0.345938 8.82984 0.685898 8.69484 0.981915 8.82316L8.90332 12.2284C8.96695 12.2555 9.0348 12.2555 9.09598 12.2284L16.4099 9.08437L9.60891 6.16078C9.31535 6.03457 9.18035 5.69566 9.30727 5.40422C9.43559 5.11312 9.77344 4.97777 10.0716 5.10609L17.4793 8.2902C17.7957 8.42555 18 8.73703 18 9.08437C18 9.43137 17.7957 9.7432 17.4807 9.8782L13.9746 11.3854L17.4797 12.8918C17.7957 13.0271 18 13.339 18 13.6867C18 14.0337 17.7957 14.3455 17.4807 14.4805L9.55934 17.885C9.38145 17.9613 9.1909 18.0004 9.00035 18.0004C8.8098 18.0004 8.61926 17.962 8.44137 17.885L0.521015 14.4809C0.204609 14.3455 0.000350952 14.0337 0.000350952 13.6867C0 13.339 0.204258 13.0271 0.519257 12.8921ZM8.90367 16.83C8.96731 16.8571 9.03516 16.8571 9.09633 16.83L16.4099 13.686L12.5156 12.0122L9.55898 13.2831C9.38109 13.3594 9.19055 13.3984 9 13.3984C8.80945 13.3984 8.61891 13.3601 8.44102 13.2831L5.48367 12.0118L1.58906 13.686L8.90367 16.83Z' fill='%23787887'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='18' height='18' fill='white' transform='matrix(-1 0 0 1 18 0)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: center;
      }
      .umoja_btn-icon:hover{
        background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M0.28125 3.375H3.375V0.28125C3.375 0.125859 3.50086 0 3.65625 0H4.21875C4.37414 0 4.5 0.125859 4.5 0.28125V3.375H7.59375C7.74914 3.375 7.875 3.50086 7.875 3.65625V4.21875C7.875 4.37414 7.74914 4.5 7.59375 4.5H4.5V7.59375C4.5 7.74914 4.37414 7.875 4.21875 7.875H3.65625C3.50086 7.875 3.375 7.74914 3.375 7.59375V4.5H0.28125C0.12586 4.5 0 4.37414 0 4.21875V3.65625C0 3.50086 0.12586 3.375 0.28125 3.375ZM0.519257 12.8921L4.02504 11.385L0.519257 9.87785C0.225702 9.75129 0.090704 9.41273 0.217617 9.12129C0.345938 8.82984 0.685898 8.69484 0.981915 8.82316L8.90332 12.2284C8.96695 12.2555 9.0348 12.2555 9.09598 12.2284L16.4099 9.08437L9.60891 6.16078C9.31535 6.03457 9.18035 5.69566 9.30727 5.40422C9.43559 5.11312 9.77344 4.97777 10.0716 5.10609L17.4793 8.2902C17.7957 8.42555 18 8.73703 18 9.08437C18 9.43137 17.7957 9.7432 17.4807 9.8782L13.9746 11.3854L17.4797 12.8918C17.7957 13.0271 18 13.339 18 13.6867C18 14.0337 17.7957 14.3455 17.4807 14.4805L9.55934 17.885C9.38145 17.9613 9.1909 18.0004 9.00035 18.0004C8.8098 18.0004 8.61926 17.962 8.44137 17.885L0.521015 14.4809C0.204609 14.3455 0.000350952 14.0337 0.000350952 13.6867C0 13.339 0.204258 13.0271 0.519257 12.8921ZM8.90367 16.83C8.96731 16.8571 9.03516 16.8571 9.09633 16.83L16.4099 13.686L12.5156 12.0122L9.55898 13.2831C9.38109 13.3594 9.19055 13.3984 9 13.3984C8.80945 13.3984 8.61891 13.3601 8.44102 13.2831L5.48367 12.0118L1.58906 13.686L8.90367 16.83Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='18' height='18' fill='white' transform='matrix(-1 0 0 1 18 0)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
      }
      .umoja_btn-disabled,
      .umoja_btn:disabled{
        opacity: 0.6;
        cursor: not-allowed;
      }
      `
    ];
  }

  constructor() {
    super();
    this.title = (this.getAttribute("title") ? this.getAttribute("title") : "Button");
    this.kind = this.getAttribute("kind");
    this.disabled = this.getAttribute("disabled");
    this.href = this.getAttribute("href");
    this.icon = this.getAttribute("icon");
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('lit element connected');
  }

  render() {
    const {title} = this;
    return html`
    <button 
        type="button" 
        class="umoja_btn"
      >
        <span>${title}</span>
      </button>
    `;
  }
}
