import { LitElement, html, customElement } from 'lit-element';
import '../../common/lit-element/paper/paper';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'home-content': HomeContentAttributes;
        }

        interface HomeContentAttributes {}
    }
}

@customElement('home-content')
export class HomeContent extends LitElement {
    render() {
        return html`
            <h3>HOME</h3>
            <app-paper>
                <p>
                    Mollit ipsum sint officia ullamco dolor mollit occaecat non proident excepteur dolore. Id enim
                    commodo duis do aliquip nostrud. Occaecat commodo aliqua deserunt ad ad laboris labore qui tempor
                    aliquip laboris labore. Do quis laboris qui adipisicing est. Quis consequat tempor duis mollit enim
                    aute ex deserunt cupidatat magna. Reprehenderit commodo duis pariatur irure nulla pariatur culpa
                    excepteur et laboris pariatur ullamco do. Consectetur eiusmod labore pariatur aliqua tempor irure
                    aliqua sit aliqua consectetur Lorem cupidatat. Laboris adipisicing consectetur proident sit. Non ut
                    officia sit quis consectetur nostrud. Eiusmod excepteur est voluptate et cupidatat enim ut ea et
                    occaecat.
                </p>
            </app-paper>
        `;
    }
}
