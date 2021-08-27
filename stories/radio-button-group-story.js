import {html} from 'lit-html';
import ifExists from '../src/utils/if-exists';
import {Default, Image} from './radio-button-story.js'

import '../src/components/radio-button/radio-button.js';
import '../src/components/radio-button-group/radio-button-group.js';

export default {
    title: 'Components/Radio Button Group',
    component: 'umoja-radio-btn-group',
    parameters: {
        docs: {
            description: {
                component: '**<umoja-radio-btn-group>**',
            },
            source: {
                type: 'code',
            }
        }
    },
    argTypes: {
        name: {
            description: "Name of the radio button group. The set value will be applied to all child buttons within the button group.",
            control: {
              type: 'text',
            },
        },
        theme: {
            description: "The theme color of the child buttons. Default theme is dark mode.",
            table: {
                defaultValue: { 
                  summary: 'dark', 
                },
            },
            options: ['dark','light'],
            control: {
                type: 'select',
            },
        },
    }
};

export const DefaultGroup = (args) => {
    const{name, theme} = args;

    return html`
    <umoja-radio-btn-group
        name="${ifExists(name)}"
        theme="${ifExists(theme)}"
    >
        ${Default({...Default.args })}
        ${Default({...Default.args })}
        ${Default({...Default.args })}
    </umoja-radio-btn-group>
    `;
}

DefaultGroup.args ={
    name: 'group_1'
}

DefaultGroup.parameters = { 
    docs: {
      source: {
        code: ` <umoja-radio-btn-group name="group_1">
                    <umoja-radio-btn label="Radio Button" value="value1"></umoja-radio-btn>
                    <umoja-radio-btn label="Radio Button" value="value2"></umoja-radio-btn>
                    <umoja-radio-btn label="Radio Button" value="value3"></umoja-radio-btn>
                </umoja-radio-btn-group>`
      },
    },
};

export const ImageGroup = (args) => {
    const{name, theme} = args;

    return html`
    <umoja-radio-btn-group
        name="${ifExists(name)}"
        theme="${ifExists(theme)}"
    >
        ${Image({...Image.args })}
        ${Image({...Image.args })}
        ${Image({...Image.args })}
    </umoja-radio-btn-group>
    `;
}

ImageGroup.args ={
    name: 'group_1',
    theme: 'light'
}

ImageGroup.parameters = { 
    docs: {
      source: {
        code: ` <umoja-radio-btn-group name="group_1" theme="light">
                    <umoja-radio-btn label="Radio Button" value="value1" style="--backgroundImg:url(edgecases_rain1.png);"></umoja-radio-btn>
                    <umoja-radio-btn label="Radio Button" value="value2" style="--backgroundImg:url(edgecases_rain1.png);"></umoja-radio-btn>
                    <umoja-radio-btn label="Radio Button" value="value3" style="--backgroundImg:url(edgecases_rain1.png);"></umoja-radio-btn>
                </umoja-radio-btn-group>`
      },
    },
};