import { LitElement, html, customElement, property, css } from 'lit-element';
import { timestampToDateString } from '../../../../utils/date-utils';
import { ifDefined } from 'lit-html/directives/if-defined';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'app-input': AppInputAttributes;
        }

        interface AppInputAttributes {
            key?: String;
            type?: String;
            value?: String;
            label?: String;
            name?: String;
        }
    }
}

@customElement('app-input')
export class AppInput extends LitElement {
    @property({ type: String }) type: string = 'string';
    @property({
        type: String,
        reflect: true,
    })
    value: string = '';
    @property({ type: String }) label: string = '';
    @property({ type: String }) name: string = '';

    static get styles() {
        return css`
            *,
            *:before,
            *:after {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }
            .form-field {
                margin: 1rem;
                padding: 1rem;
                display: flex;
                flex-direction: column-reverse;
            }
            .label {
                display: block;

                text-transform: uppercase;
                font-size: 0.8rem;
                color: #cfcfcf;
                transition: all 150ms ease-in;
            }
            input {
                transition: all 150ms ease-in;
                border: none;
                outline: none;
                background: none;
                display: block;
                width: 100%;
                margin-top: 10px;
                padding-bottom: 5px;
                font-size: 16px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.4);
                text-align: left;
            }
            input:focus {
                border-bottom: 2px solid black;
            }
            input:focus ~ .label {
                color: black;
                font-weight: bold;
            }
        `;
    }
    handleChange() {
        const inputEl = this.shadowRoot!.querySelector('input')! as HTMLInputElement;
        this.value = inputEl.value;
    }

    render() {
        //string,int, boolean, date

        const attributesToMap: { type?: string; value?: string; checked?: boolean } = {};

        if (this.type === 'string') {
            attributesToMap['type'] = 'text';
        } else if (this.type === 'int') {
            attributesToMap['type'] = 'number';
        } else if (this.type === 'boolean') {
            attributesToMap['type'] = 'checkbox';
            if (this.value) {
                attributesToMap['checked'] = true;
            }
        } else if (this.type === 'date') {
            attributesToMap['type'] = 'date';
            attributesToMap['value'] = this.value ? timestampToDateString(parseInt(this.value)) : '';
        }

        return html`
            <label class="form-field">
                <input
                    class="input"
                    id="input"
                    type="${attributesToMap['type']}"
                    ?checked=${attributesToMap['checked']}
                    .value="${this.value}"
                    name="${ifDefined(this.name)}"
                    @input="${this.handleChange}"
                />
                <span class="label" for="input">${this.label}</span>
            </label>
        `;
    }
}
