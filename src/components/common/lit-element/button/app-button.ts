import { LitElement, html, customElement, property, css } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import chroma from 'chroma-js';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'app-button': AppButtonAttributes;
        }

        interface AppButtonAttributes {
            key?: String;
            onClick?: Function;
            children: Array<Object> | Object;
            primary?: Boolean;
            secondary?: Boolean;
            submit?: Boolean;
            color?: String;
        }
    }
}

@customElement('app-button')
export class AppButton extends LitElement {
    @property({ type: Boolean }) primary: boolean = false;
    @property({ type: Boolean }) secondary: boolean = false;
    @property({ type: Boolean }) submit: boolean = false;
    @property({ type: String }) color: string = '#fca103';

    static get styles() {
        return css`
            button {
                border-radius: 2px;
                margin: 5px;
                padding: 5px;
                box-shadow: 2px 2px 2px grey;
                transition: background-color 300ms ease-in;
                cursor: pointer;
                font-size: 14px;
                min-width: 10rem;
                font-weight: 500;
            }
            :host([primary]) button {
                color: white;
                background-color: var(--mainColor);
                border-color: var(--mainColor);
            }
            :host([primary]) button:hover {
                background-color: var(--highlightColor);
            }
            :host([secondary]) button {
                color: var(--mainColor);
                background-color: transparent;
                border-color: var(--mainColor);
            }
            :host([primary]) button:hover {
                background-color: var(--highlightColor);
            }
            :host([secondary]) button:hover {
                background-color: var(--highlightColor);
            }
        `;
    }
    firstUpdated() {
        this.style.setProperty('--mainColor', this.color);
        this.style.setProperty(
            '--highlightColor',
            chroma(this.color)
                .brighten(2)
                .hex(),
        );
    }

    render() {
        const type = this.submit ? 'submit' : undefined;
        return html`
            <button>
                <slot></slot>
            </button>
        `;
    }
}
