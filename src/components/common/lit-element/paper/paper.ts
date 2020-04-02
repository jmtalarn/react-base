import { LitElement, html, customElement, property, css } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'app-paper': AppPaperAttributes;
        }

        interface AppPaperAttributes {
            color: String;
        }
    }
}

@customElement('app-paper')
export class AppPaper extends LitElement {
    @property({ type: String }) color: string = '#fca103';

    static get styles() {
        return css`
            div {
                box-shadow: 10px 10px 20px 1px rgba(0, 0, 0, 0.75);
                max-width: 800px;
                width: 85%;
                padding: 1rem;
                margin: 1rem auto;
            }
        `;
    }

    render() {
        const styles = { backgroundColor: this.color };

        return html`
            <div style=${styleMap(styles)}"><slot></slot></div>
        `;
    }
}
