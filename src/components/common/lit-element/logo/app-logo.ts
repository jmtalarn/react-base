import { LitElement, html, customElement, property, css } from 'lit-element';
import logo from './logo-random.svg';
import logoWithoutTagLine from './logo-without-tagline.png';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'app-logo': AppLogoAttributes;
        }

        interface AppLogoAttributes {
            tagline: Boolean;
        }
    }
}

@customElement('app-logo')
export class AppLogo extends LitElement {
    @property({ type: Boolean }) tagline: boolean = false;

    static get styles() {
        return css`
            img {
                height: 4rem;
                width: auto;
            }
        `;
    }
    render() {
        const imageSrc = this.tagline ? logo : logoWithoutTagLine;

        return html`
            <img src="${imageSrc}" alt="S|ngular logo" />
        `;
    }
}
