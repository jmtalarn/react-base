import { LitElement, html, customElement, css } from 'lit-element';

import '../../common/lit-element/logo/app-logo';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'app-header': AppHeaderAttributes;
        }

        interface AppHeaderAttributes {}
    }
}

@customElement('app-header')
export class AppHeader extends LitElement {
    static get styles() {
        return css`
            header {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-wrap: wrap;
            }
            header h1 {
                white-space: nowrap;
            }
            header h1,
            header p {
                margin: 0;
            }
            header .right-side {
                margin-left: auto;
            }
            header .username {
                margin-left: 1rem;
            }
            @media screen and (max-width: 660px) {
                header .right-side {
                    margin: 0 auto;
                    width: calc(100% - 1rem);
                }
            }
        `;
    }

    render() {
        return html`
            <header>
                <app-logo tagline></app-logo>
                <slot name="title"></slot>

                <div class="right-side">
                    <slot name="right-side"> </slot>
                </div>
            </header>
        `;
    }
}
