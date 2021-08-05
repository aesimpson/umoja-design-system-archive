import { html } from 'lit-html';
import '../src/sama-umoja.js';

export default {
  title: 'Components/Button',
  argTypes: {
    label: {
      name: "Label",
      control: {
        type: 'text'
      }
    },
    kind: { 
      name: "Button Kind",
      control: {
        type: 'select',
        options: ['Primary', 'Secondary']
      }
     },
     disabled: {
       name: "Disabled",
       control: {
         type: 'boolean',
       }
     },
     href: {
      name: "Link (href)",
      control: {
        type: 'text'
      }
     },
     icon:{
      name:"Icon",
      control: {
        type: 'boolean',
      }
    }
  },
};

const Template = ({ kind, label, disabled, href, icon }) =>
html`
  <umoja-btn 
    .label=${label} 
    .kind=${kind} 
    .disabled=${disabled} 
    .href=${href}
    .icon=${icon}
  ></umoja-btn>
`;

export const Default = Template.bind({});
  
Default.args = {
  label: "Button",
  kind: "Primary",
  disabled: false
};

export const Icon = Template.bind({});

Icon.args = {
  kind: "Primary",
  disabled: false,
  icon: true
};

Icon.parameters = {
  controls: { 
    exclude: /^label*/ 
  }, 
};
