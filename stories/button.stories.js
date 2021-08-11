import {html} from 'lit-html';
import '../src/components/button/button.js';

export default {
  title: 'Components/Button',
  argTypes: {
    title: {
      name: 'Title',
      control: {
        type: 'text',
      },
    },
    kind: {
      name: 'Button Kind',
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean',
      },
    },
    href: {
      name: 'Link (href)',
      control: {
        type: 'text',
      },
    },
    target: {
      name: 'Link target',
      control: {
        type: 'select',
        options: ['_blank', '_parent', '_self', '_top'],
      },
    },
    download: {
      name: 'Download',
      control: {
        type: 'text',
      },
    },
    submit: {
      name: 'Submit',
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = ({ kind, title, disabled, href, target, download, submit }) =>
  html`
    <umoja-btn
      .title=${title} 
      .kind=${kind} 
      .disabled=${disabled} 
      .href=${href}
      .target=${target}
      .download=${download}
      .submit=${submit}
    >
    </umoja-btn>
  `;

export const Default = Template.bind({});

Default.args = {
  title: 'Button',
  kind: 'primary',
  disabled: false,
};
