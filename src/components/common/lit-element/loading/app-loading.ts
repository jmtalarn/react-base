import { LitElement, html, customElement, css } from 'lit-element';
import { PlainColorsArray as colors } from '../../../../utils/colors';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'app-loading': AppLoadingAttributes;
        }

        interface AppLoadingAttributes {}
    }
}

@customElement('app-loading')
export class AppLoading extends LitElement {
    static get styles() {
        return css`
            .spinner {
                margin: 100px auto 0;
                width: 70px;
                text-align: center;
            }

            .spinner > div {
                width: 18px;
                height: 18px;
                background-color: #333;

                border-radius: 100%;
                display: inline-block;
                -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
                animation: sk-bouncedelay 1.4s infinite ease-in-out both;
            }

            .spinner .bounce1 {
                background-color: var(--colors_1);
                -webkit-animation-delay: -0.32s;
                animation-delay: -0.32s;
            }

            .spinner .bounce2 {
                background-color: var(--colors_2);
                -webkit-animation-delay: -0.16s;
                animation-delay: -0.16s;
            }
            .spinner .bounce3 {
                background-color: var(--colors_2);
            }

            @-webkit-keyframes sk-bouncedelay {
                0%,
                80%,
                100% {
                    -webkit-transform: scale(0);
                }
                40% {
                    -webkit-transform: scale(1);
                }
            }

            @keyframes sk-bouncedelay {
                0%,
                80%,
                100% {
                    -webkit-transform: scale(0);
                    transform: scale(0);
                }
                40% {
                    -webkit-transform: scale(1);
                    transform: scale(1);
                }
            }
        `;
    }
    firstUpdated() {
        this.style.setProperty('--colors_1', colors[0]);
        this.style.setProperty('--colors_2', colors[1]);
        this.style.setProperty('--colors_3', colors[2]);
    }
    render() {
        return html`
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
        `;
    }
}
