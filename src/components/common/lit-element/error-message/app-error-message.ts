import { LitElement, html, customElement, property, css } from 'lit-element';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'app-error-message': AppErrorMessageAttributes;
        }

        interface AppErrorMessageAttributes {
            dismissable?: Boolean;
            children?: any;
        }
    }
}

@customElement('app-error-message')
export class AppErrorMessage extends LitElement {
    @property({ type: Boolean }) dismissable: boolean = false;

    static get styles() {
        return css`
            :host > div {
                color: red;
                border: 1px solid red;
                border-radius: 2px;
                padding: 1rem;
                margin: 5px;
                display: flex;
                justify-content: space-between;
            }
            .dismiss-button {
                color: red;
                backround: none;
                font-size: 100%;
                font-family: inherit;
                border: 0;
                padding: 0;
                color: transparent;
                text-shadow: 0 0 0 red;
                cursor: pointer;
                height: 1rem;
                margin-top: 0.8rem;
            }
            :host > div.dismissed {
                display: none;
            }
        `;
    }

    dismiss(event: Event) {
        event.preventDefault();
        this.style.display = 'none';
    }
    render() {
        console.log(this.dismissable);
        const dismissableButton = this.dismissable
            ? html`
                  <button class="dismiss-button" @click="${this.dismiss}">✖️</button>
              `
            : html``;
        return html`
            <div><slot></slot>${dismissableButton}</div>
        `;
    }
}
