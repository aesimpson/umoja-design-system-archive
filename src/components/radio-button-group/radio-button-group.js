import {LitElement, html} from 'lit';
import styles from './radio-button-group.styles.js';

/**
 * Radio Button Group.
 * @element umoja-radio-btn-group
 */

export default class UmojaRadioButtonGroup extends LitElement {
    static get styles() {
        return [styles];
    }

    static get properties() {
        return {
            name: {type: String, reflect: true},
            orientation: {type: String, reflect: true},
            labelPosition: {type: String, reflect: true},
            value: {type: String},
            radios: {type: Array},
            theme: {type: String, reflect: true}
        };
    }
      
    constructor() {
        super();
        this.name = this.getAttribute('name');
        this.value = "";
        this.radios = [];
        this.initialized = false;

        this.addEventListener('umoja-radio-btn-checked', this.handleRadioButtonChange.bind(this));
        this.addEventListener('umoja-radio-btn-keyevent', this.handleRadioButtonKeyEvent.bind(this));
    }
    
    connectedCallback() {
        super.connectedCallback();

        //TODO: future switch over to HTMLELement.attachInternals() method. Method only compatibile in Chrome as of 8/21
        this.insertAdjacentHTML('beforeend', `<input class="umoja-u-form-association" type="hidden" name="${this.name}" value="${this.value}"/>`);
    }

    shouldUpdate(changedProperties){
        if(!this.initialized) {
            this.radios = Array.from(this.children);
            this.radios.map((radio) => {
                console.log(radio)
                radio.setAttribute('name', this.name);
                
                if(this.theme && radio.localName === 'umoja-radio-btn'){
                    radio.setAttribute('theme', this.theme)
                }
            });
            this.initialized = true;
        }
        return changedProperties;
    }

    handleRadioButtonChange = (e) => {
        const newRadio = e.detail.radio;
        const oldRadio = this.radios.find(radio => radio.checked);
        this.manageRadios(oldRadio, newRadio);
    }

    handleRadioButtonKeyEvent = (e) => {
        let direction;
        const oldRadio = this.radios.find(radio => radio.checked);
        const oldRadioIndex = this.radios.findIndex(radio => radio.checked);

        switch (e.detail.key) {
            case 37 || 38: //up or left
                direction = -1;
                break;
            case 39 || 40: //down or right
                direction = 1;
                break;
        }

        const newRadio =  this.radios[oldRadioIndex + direction];
        this.manageRadios(oldRadio, newRadio);
    }

    manageRadios(oldRadio, newRadio) {
        const newValue = newRadio.value;
        const oldValue = this.value;
        const formAssociation = this.querySelector('.umoja-u-form-association');

        if (oldValue !== newValue) {
            if( oldRadio ) oldRadio.checked = false;
            newRadio.checked = true;
            formAssociation.value = newValue;
        }
    }

    render() {
        return html `
            <slot></slot>
        `;
    }
}

window.customElements.define('umoja-radio-btn-group', UmojaRadioButtonGroup);