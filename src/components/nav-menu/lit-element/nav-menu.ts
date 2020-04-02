import { LitElement, html, customElement, property, css } from 'lit-element';
import { isObjectEmpty } from '../../../utils/object-utils';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'nav-menu': NavMenuAttributes;
        }

        interface NavMenuAttributes {
            user: any;
        }
    }
}

@customElement('nav-menu')
export class NavMenu extends LitElement {
    @property({ type: Object }) user: any;

    attributeChangedCallback(name: any, oldVal: any, newVal: any) {
        super.attributeChangedCallback(name, oldVal, newVal);
        this.requestUpdate();
    }
    static get styles() {
        return css`
            nav {
                box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.75);
                padding: 1rem;
            }
            ul {
                display: flex;
                list-style: none;
                padding: 0;
                margin: 0;
                justify-content: flex-start;
                flex-wrap: wrap;
            }
            ul li {
                margin-right: 1rem;
            }
        `;
    }

    render() {
        const menuContent = !isObjectEmpty(this.user)
            ? html`
                  <ul>
                      <li>
                          <a href="#/home">
                              Home
                          </a>
                      </li>
                  </ul>
              `
            : null;

        return html`
            <nav>
                ${menuContent}
            </nav>
        `;
    }
}
